#!/usr/bin/env node
// CustomerSimulator: visits public web pages as seven different customers and writes a plain-language report.
// Run:  node simulate.mjs https://example.com                          (one page, Dutch report)
//       node simulate.mjs https://example.com https://example.com/shop  (several pages of one site, one report)
//       add --lang en for an English report
// Output in reports/: <host>-<date>-<lang>.html and .pdf (send to the customer), -mail.txt (first email),
// .json (raw data) and klanten.csv (one row per test, to keep track of customers).
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T, RULES } from './texts.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const AXE = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');

const args = process.argv.slice(2);
const targets = [...new Set(args.filter(a => /^https?:\/\//.test(a)))];
const li = args.indexOf('--lang');
const lang = li >= 0 && args[li + 1] === 'en' ? 'en' : 'nl';
if (!targets.length) { console.error('Gebruik: node simulate.mjs https://website.nl [https://website.nl/andere-pagina] [--crawl] [--lang en]'); process.exit(1); }
const t = T[lang];
const host = new URL(targets[0]).hostname;
let target, site, findings, goods, shots, facts; // set per page by testPage()
const bad = (sev, who, key, ex = [], vars = {}) => {
  const k = t.f[key]; const fill = s => s.replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? '');
  findings.push({ sev, who, title: fill(k[0]), why: fill(k[1]), fix: fill(k[2]), ex: ex.slice(0, 5).map(String) });
};
const good = (who, key, vars = {}) => goods.push({ who, text: t.g[key].replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? '') });

// Finds the outermost elements that stick out past the right edge of the screen.
const WIDE = (w) => [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); const pr = e.parentElement.getBoundingClientRect();
  return r.width > 0 && r.right > w + 2 && !(pr.right > w + 2) && getComputedStyle(e.parentElement).overflowX === 'visible'; })
  .slice(0, 4).map(e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (typeof e.className === 'string' && e.className.trim() ? '.' + e.className.trim().split(/\s+/).join('.') : ''));

const browser = await chromium.launch();
// --crawl: start from the first address and pick up to 5 important pages of the same site by themselves.
const KINDS = [
  ['product', /\/(product|products|produkt|artikel|item|p)\/|[?&](product|sku)=/i, /product|artikel|bekijk|view/i],
  ['shop', /\/(shop|winkel|webshop|collectie|collections?|categorie|category|aanbod|assortiment)(\/|$)/i, /shop|winkel|collectie|assortiment|aanbod|producten|products/i],
  ['cart', /(cart|winkelwagen|winkelmand|mandje|basket|checkout|afrekenen)/i, /winkelwagen|winkelmand|mandje|cart|basket|afrekenen|checkout/i],
  ['contact', /contact|kontakt/i, /contact|kontakt/i],
  ['about', /(over-ons|overons|about|wie-zijn|ons-verhaal|about-us)/i, /over ons|about|wie zijn|ons verhaal/i],
];
if (args.includes('--crawl')) {
  const start = new URL(targets[0]);
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  try {
    await page.goto(start.href, { waitUntil: 'load', timeout: 60000 });
    const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => ({ href: a.href.split('#')[0], text: (a.innerText || a.getAttribute('aria-label') || '').trim(), nav: !!a.closest('header,nav') })));
    const same = links.filter(l => { try { const u = new URL(l.href); return u.hostname === start.hostname && /^https?:$/.test(u.protocol) && !/\.(pdf|jpe?g|png|zip|webp|svg)$/i.test(u.pathname) && !/^(mailto|tel):/.test(l.href); } catch { return false; } });
    for (const [, hrefRe, textRe] of KINDS) {
      if (targets.length >= 5) break;
      const hit = same.find(l => !targets.includes(l.href) && (hrefRe.test(new URL(l.href).pathname + new URL(l.href).search) || textRe.test(l.text)));
      if (hit) targets.push(hit.href);
    }
    // Still fewer than 5? Take the main menu links in order.
    for (const l of same.filter(l => l.nav)) { if (targets.length >= 5) break; if (!targets.includes(l.href) && l.href !== start.href) targets.push(l.href); }
  } catch (e) { console.error('crawl:', String(e.message).slice(0, 120)); }
  await ctx.close();
}

const pages = [];
for (const url of targets) {
  target = url; site = new URL(url); findings = []; goods = []; shots = {}; facts = {};
  console.log('…', url);
  if (await testPage()) { findings.sort((a, b) => a.sev - b.sev); pages.push({ url, findings, goods, shots, facts }); }
}
await browser.close();
if (!pages.length) process.exit(2);

async function open(viewport, opts = {}) {
  const ctx = await browser.newContext({ viewport, locale: lang === 'nl' ? 'nl-NL' : 'en-GB', ...opts });
  const page = await ctx.newPage();
  const net = { bytes: 0, hosts: new Set(), errors: [] };
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  if (opts.slow) await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6e6 / 8, uploadThroughput: 750e3 / 8 });
  cdp.on('Network.loadingFinished', e => { net.bytes += e.encodedDataLength || 0; });
  page.on('request', r => { try { net.hosts.add(new URL(r.url()).hostname); } catch {} });
  page.on('console', m => { if (m.type() === 'error') net.errors.push(m.text().slice(0, 160)); });
  page.on('pageerror', e => net.errors.push(String(e.message).slice(0, 160)));
  const t0 = Date.now();
  let status = 0;
  try {
    const res = await page.goto(target, { waitUntil: 'load', timeout: 60000 });
    status = res ? res.status() : 0;
  } catch (e) { status = -1; net.errors.push(String(e.message).slice(0, 160)); }
  const loadMs = Date.now() - t0;
  await page.waitForTimeout(1500);
  return { ctx, page, net, loadMs, status };
}
async function shot(page, key) { shots[key] = (await page.screenshot({ type: 'jpeg', quality: 55 })).toString('base64'); }

async function testPage() {
// ---------- 1. Desktop customer: first impression, trust, broken things ----------
{
  const who = 'desktop';
  const { ctx, page, net, loadMs, status } = await open({ width: 1366, height: 800 });
  if (status < 200 || status >= 400) {
    console.error(t.unreachable, status, target); await ctx.close(); return false;
  }
  await shot(page, who);
  const info = await page.evaluate(() => {
    const txt = document.body.innerText || '';
    const links = [...document.querySelectorAll('a[href]')].map(a => ({ href: a.href, text: (a.innerText || a.getAttribute('aria-label') || '').trim().toLowerCase() }));
    const brokenImgs = [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.src).map(i => i.src);
    return {
      title: document.title.trim(),
      desc: (document.querySelector('meta[name="description"]')?.content || '').trim(),
      lang: document.documentElement.lang,
      h1: [...document.querySelectorAll('h1')].map(h => h.innerText.trim()).filter(Boolean),
      links, brokenImgs,
      email: /[\w.+-]+@[\w-]+\.[\w.]{2,}/.test(txt) || links.some(l => l.href.startsWith('mailto:')),
      phone: /(\+|00)?\d[\d\s\-().]{8,}\d/.test(txt) || links.some(l => l.href.startsWith('tel:')),
    };
  });
  facts.title = info.title; facts.loadMs = loadMs;
  if (site.protocol === 'https:') good(who, 'https'); else bad(1, who, 'nohttps');
  if (!info.title) bad(2, who, 'notitle'); else if (info.title.length > 60) bad(3, who, 'longtitle', [info.title], { n: info.title.length }); else good(who, 'title', { v: info.title });
  if (!info.desc) bad(3, who, 'nodesc'); else if (info.desc.length < 70 || info.desc.length > 160) bad(3, who, 'desclen', [info.desc], { n: info.desc.length });
  if (info.h1.length === 0) bad(2, who, 'noh1'); else if (info.h1.length > 1) bad(3, who, 'manyh1', info.h1);
  const has = re => info.links.some(l => re.test(l.text) || re.test(l.href));
  if (!has(/privacy|privacidad|datenschutz|confidentialit/)) bad(2, who, 'noprivacy'); else good(who, 'privacy');
  if (!has(/contact|kontakt|klantenservice|customer.?service|support|help/) && !info.email && !info.phone) bad(2, who, 'nocontact');
  else good(who, 'contact');
  if (!has(/voorwaarden|terms|conditions|agb|cgv|condiciones/)) bad(3, who, 'noterms');
  if (info.brokenImgs.length) bad(2, who, 'brokenimg', info.brokenImgs, { n: info.brokenImgs.length });
  if (net.errors.length) bad(3, who, 'jserrors', net.errors, { n: net.errors.length }); else good(who, 'nojserr');

  // Links on the same website that do not work (max 40 checked).
  const internal = [...new Set(info.links.map(l => l.href.split('#')[0]).filter(h => { try { const u = new URL(h); return u.hostname === site.hostname && /^https?:$/.test(u.protocol); } catch { return false; } }))].slice(0, 40);
  const dead = [];
  await Promise.all(internal.map(async h => {
    try { const r = await ctx.request.get(h, { timeout: 15000, maxRedirects: 5 }); if (r.status() >= 400) dead.push(`${h} (${r.status()})`); } catch { dead.push(`${h} (${t.noanswer})`); }
  }));
  if (dead.length) bad(1, who, 'deadlinks', dead, { n: dead.length, m: internal.length }); else if (internal.length) good(who, 'links', { n: internal.length });

  // Privacy: what happens before the visitor clicks anything.
  const cookies = await ctx.cookies();
  const third = [...net.hosts].filter(h => h !== site.hostname && !h.endsWith('.' + site.hostname.replace(/^www\./, '')) && h !== site.hostname.replace(/^www\./, ''));
  facts.thirdParty = third; facts.cookies = cookies.length;
  if (cookies.length) bad(2, 'privacy', 'cookies', cookies.map(c => `${c.name} (${c.domain})`), { n: cookies.length });
  else good('privacy', 'nocookies');
  if (third.length) bad(third.length > 5 ? 2 : 3, 'privacy', 'thirdparty', third, { n: third.length });
  else good('privacy', 'nothird');

  // ---------- 2. Customer with a visual or motor limitation: automatic WCAG scan ----------
  await page.addScriptTag({ content: AXE });
  const axe = await page.evaluate(async () => {
    const r = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] }, resultTypes: ['violations'] });
    return { v: r.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length, ex: v.nodes.slice(0, 4).map(n => n.target.join(' ')) })), passes: r.passes.length };
  });
  facts.axe = axe.v.length;
  for (const v of axe.v) {
    const r = RULES[v.id]?.[lang];
    const sev = v.impact === 'critical' || v.impact === 'serious' ? 1 : v.impact === 'moderate' ? 2 : 3;
    findings.push({ sev, who: 'access', title: (r ? r[0] : v.help) + ` (${v.nodes}×)`, why: r ? r[1] : t.axeWhy, fix: r ? r[2] : t.axeFix, ex: v.ex, rule: v.id });
  }
  if (!axe.v.length) good('access', 'axe', { n: axe.passes });
  await ctx.close();
}

// ---------- 3. Mobile customer (390 px wide phone) ----------
{
  const who = 'mobile';
  const { ctx, page } = await open({ width: 390, height: 844 }, { isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await shot(page, who);
  const m = await page.evaluate(() => {
    const vis = e => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
    const name = e => (e.innerText || e.getAttribute('aria-label') || e.getAttribute('title') || e.tagName).trim().slice(0, 40);
    const small = [...document.querySelectorAll('a[href],button,input:not([type=hidden]),select,textarea,[role=button]')]
      .filter(vis).filter(e => !(e.tagName === 'A' && e.closest('p,li,td'))) // links inside a sentence are allowed to be small
      .filter(e => { const r = e.getBoundingClientRect(); return r.width < 24 || r.height < 24; }).map(name);
    const tiny = new Set();
    for (const e of document.querySelectorAll('body *')) {
      if (![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 2) || !vis(e)) continue;
      if (parseFloat(getComputedStyle(e).fontSize) < 12) tiny.add(e.innerText.trim().slice(0, 40));
    }
    const vp = document.querySelector('meta[name=viewport]')?.content || '';
    return { overflow: Math.max(document.documentElement.scrollWidth, window.innerWidth) - 390, small, tiny: [...tiny], vp };
  });
  m.wide = await page.evaluate(`(${WIDE})(390)`);
  if (!m.vp.includes('width=device-width')) bad(1, who, 'noviewport');
  if (m.overflow > 2) bad(1, who, 'hscroll', m.wide, { n: m.overflow }); else good(who, 'nohscroll');
  if (m.small.length) bad(2, who, 'taps', m.small, { n: m.small.length }); else good(who, 'taps');
  if (m.tiny.length) bad(3, who, 'tinytext', m.tiny, { n: m.tiny.length }); else good(who, 'text');
  await ctx.close();
}

// ---------- 4. Customer who zooms in to 400 % (same as a 320 px wide screen) ----------
{
  const who = 'zoom';
  const { ctx, page } = await open({ width: 320, height: 640 });
  const o = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (o > 2) bad(2, who, 'reflow', await page.evaluate(`(${WIDE})(320)`), { n: o }); else good(who, 'reflow');
  await ctx.close();
}

// ---------- 5. Customer who only uses the keyboard ----------
{
  const who = 'keyboard';
  const { ctx, page } = await open({ width: 1366, height: 800 });
  const seen = []; let invisible = []; let stuck = 0; let first = '';
  for (let i = 0; i < 40; i++) {
    await page.keyboard.press('Tab');
    const f = await page.evaluate(() => {
      const e = document.activeElement; if (!e || e === document.body) return null;
      const s = getComputedStyle(e); const r = e.getBoundingClientRect();
      const ring = (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) || s.boxShadow !== 'none';
      const label = (e.innerText || e.getAttribute('aria-label') || e.getAttribute('placeholder') || e.tagName).trim().replace(/\s+/g, ' ').slice(0, 40);
      const id = e.tagName + '|' + label + '|' + Math.round(r.x) + ',' + Math.round(r.y);
      // Inside <video>, <audio> and <iframe> the focus moves to the browser's or embed's own controls, which draw their own ring.
      const inner = /^(VIDEO|AUDIO|IFRAME)$/.test(e.tagName) && !e.matches(':focus-visible');
      return { id, label, ring: ring || inner, onscreen: r.width > 0 && r.height > 0 };
    });
    if (!f) continue;
    if (!first) first = f.label;
    if (seen.at(-1) === f.id) stuck++;
    seen.push(f.id);
    if (!f.ring && f.onscreen) invisible.push(f.label);
  }
  invisible = [...new Set(invisible)];
  const uniq = new Set(seen).size;
  if (uniq === 0) bad(1, who, 'notab');
  else {
    if (stuck >= 3) bad(1, who, 'trap');
    if (invisible.length) bad(invisible.length > 5 ? 1 : 2, who, 'nofocus', invisible, { n: invisible.length });
    else good(who, 'focus', { n: uniq });
    if (/skip|overslaan|naar (de )?inhoud|main content|zum inhalt|aller au contenu/i.test(first)) good(who, 'skip');
    else bad(3, who, 'noskip', [first]);
  }
  await ctx.close();
}

// ---------- 6. Customer on a slow mobile connection ----------
{
  const who = 'slow';
  const { ctx, page, net, loadMs } = await open({ width: 390, height: 844 }, { isMobile: true, slow: true });
  const lcp = await page.evaluate(() => new Promise(res => {
    let v = 0; new PerformanceObserver(l => { for (const e of l.getEntries()) v = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    setTimeout(() => res(Math.round(v)), 300);
  }));
  const mb = net.bytes < 1048576 ? Math.max(1, Math.round(net.bytes / 1024)) + ' KB' : (net.bytes / 1048576).toFixed(1) + ' MB'; const s = (loadMs / 1000).toFixed(1); const ls = (lcp / 1000).toFixed(1);
  facts.mb = mb; facts.slowLoad = s; facts.lcp = ls;
  if (lcp > 4000) bad(1, who, 'slowlcp', [], { s: ls }); else if (lcp > 2500) bad(2, who, 'midlcp', [], { s: ls }); else good(who, 'fast', { s: ls });
  if (net.bytes > 3 * 1048576) bad(2, who, 'heavy', [], { mb }); else good(who, 'light', { mb });
  await ctx.close();
}
return true;
}

// ---------- Report ----------
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const all = pages.flatMap(p => p.findings);
const count = (n, list = all) => list.filter(f => f.sev === n).length;
const nGood = pages.reduce((a, p) => a + p.goods.length, 0);
const date = new Date().toISOString().slice(0, 10);
const many = pages.length > 1;
const fill = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
const limits = t.limits.map(l => l === '{pages}' ? (many ? fill(t.limitMany, { n: pages.length }) : t.limitOne) : l);
const pathOf = u => { const x = new URL(u); return x.pathname + x.search; };
let font = '';
try { font = fs.readFileSync(path.join(HERE, 'fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2')).toString('base64'); } catch {}
const kpis = list => `<div class="kpis">
<div class="kpi"><b>${count(1, list)}</b>${esc(t.sev[1])}</div>
<div class="kpi"><b>${count(2, list)}</b>${esc(t.sev[2])}</div>
<div class="kpi"><b>${count(3, list)}</b>${esc(t.sev[3])}</div>
<div class="kpi"><b>${list === all ? nGood : pages.find(p => p.findings === list).goods.length}</b>${esc(t.okCount)}</div></div>`;
const pageBlock = (p, H) => `<div class="shots"><figure><img src="data:image/jpeg;base64,${p.shots.desktop}" alt="${esc(t.shotD)}"><figcaption>${esc(t.shotD)}</figcaption></figure>
<figure class="m"><img src="data:image/jpeg;base64,${p.shots.mobile}" alt="${esc(t.shotM)}"><figcaption>${esc(t.shotM)}</figcaption></figure></div>
<${H}>${esc(t.hBad)}</${H}>
${p.findings.length ? p.findings.map(f => `<div class="card s${f.sev}"><span class="tag">${esc(t.sev[f.sev])} · ${esc(t.who[f.who])}</span>
<h4>${esc(f.title)}</h4><p>${esc(f.why)}</p><p><b>${esc(t.fixL)}</b> ${esc(f.fix)}</p>
${f.ex.length ? `<p class="mute">${esc(t.exL)} ${f.ex.map(e => `<code>${esc(e)}</code>`).join(' ')}</p>` : ''}</div>`).join('') : `<p>${esc(t.none)}</p>`}
<${H}>${esc(t.hGood)}</${H}><ul class="ok">${p.goods.map(g => `<li>${esc(g.text)}</li>`).join('')}</ul>`;
const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(t.title)} – ${esc(host)}</title>
<style>
${font ? `@font-face{font-family:'Atkinson Next';src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}` : ''}
:root{--chalk:#e6eae4;--paper:#f6f7f3;--ink:#18241f;--mute:#4a5753;--moss:#2f5e4f;--rule:#c4ccc6;--red:#9b2c1f;--amber:#7a5200}
*{box-sizing:border-box}body{margin:0;background:var(--chalk);color:var(--ink);font:400 1.0625rem/1.6 'Atkinson Next',system-ui,sans-serif}
main{max-width:52rem;margin:0 auto;padding:2rem 1rem 4rem}h1{font-weight:600;font-size:2rem;line-height:1.2;margin:.25rem 0 .5rem;overflow-wrap:anywhere}
h2{font-weight:600;font-size:1.35rem;margin:2.5rem 0 .75rem;padding-top:1rem;border-top:1px solid var(--rule);overflow-wrap:anywhere}h3{font-weight:600;font-size:1.15rem;margin:1.75rem 0 .5rem}h4{font-weight:600;font-size:1.05rem;margin:0 0 .25rem}
.mute{color:var(--mute)}.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(9rem,1fr));gap:.75rem;margin:1.5rem 0}
.kpi{background:var(--paper);border:1px solid var(--rule);padding:.75rem 1rem}.kpi b{display:block;font-size:1.75rem;font-weight:600}
.card{background:var(--paper);border:1px solid var(--rule);border-left:4px solid var(--rule);padding:1rem;margin:.75rem 0}
.s1{border-left-color:var(--red)}.s2{border-left-color:var(--amber)}.s3{border-left-color:var(--mute)}
.tag{font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.s1 .tag{color:var(--red)}.s2 .tag{color:var(--amber)}.s3 .tag{color:var(--mute)}
.card p{margin:.35rem 0}code{font-size:.85rem;word-break:break-all;background:var(--chalk);padding:0 .25rem}
ul.ok{padding-left:1.25rem}ul.ok li{margin:.3rem 0}ul.ok li::marker{content:'✓  ';color:var(--moss)}
table{width:100%;border-collapse:collapse;background:var(--paper)}th,td{text-align:left;padding:.4rem .6rem;border-bottom:1px solid var(--rule)}td:not(:first-child),th:not(:first-child){text-align:right}td:first-child{overflow-wrap:anywhere}
.shots{display:flex;gap:1rem;align-items:flex-start;flex-wrap:wrap}.shots figure{margin:0;flex:1 1 14rem}.shots figure.m{flex:0 1 11rem}
.shots img{width:100%;border:1px solid var(--rule);display:block}figcaption{font-size:.85rem;color:var(--mute);margin-top:.25rem}
@media print{body{background:#fff}.card,.kpi,figure{break-inside:avoid}h2,h3{break-after:avoid}}
</style></head><body><main>
<p class="mute">${esc(t.title)} · ${date}</p>
<h1>${esc(host)}</h1>
<p>${esc(many ? fill(t.introMany, { n: pages.length, host }) : t.intro.replace('{url}', pages[0].url))}</p>
${kpis(all)}
<p>${esc(t.profilesIntro)}</p><ul>${Object.values(t.who).map(v => `<li>${esc(v)}</li>`).join('')}</ul>
${many ? `<h2>${esc(t.pagesH)}</h2><table><thead><tr><th scope="col">${esc(t.pageL)}</th><th scope="col">${esc(t.sev[1])}</th><th scope="col">${esc(t.sev[2])}</th><th scope="col">${esc(t.sev[3])}</th></tr></thead><tbody>
${pages.map(p => `<tr><td>${esc(pathOf(p.url))}</td><td>${count(1, p.findings)}</td><td>${count(2, p.findings)}</td><td>${count(3, p.findings)}</td></tr>`).join('')}</tbody></table>
${pages.map(p => `<h2>${esc(t.pageL)}: ${esc(pathOf(p.url))}</h2>${kpis(p.findings)}${pageBlock(p, 'h3')}`).join('')}`
  : pageBlock(pages[0], 'h2')}
<h2>${esc(t.hLimits)}</h2><p>${esc(t.limitsIntro)}</p><ul>${limits.map(l => `<li>${esc(l)}</li>`).join('')}</ul>
<p class="mute">${esc(t.footer)}</p>
</main></body></html>`;
const outDir = path.join(HERE, 'reports'); fs.mkdirSync(outDir, { recursive: true });
const base = path.join(outDir, `${host}-${date}-${lang}`);
fs.writeFileSync(base + '.html', html);
fs.writeFileSync(base + '.json', JSON.stringify({ host, date, lang, pages: pages.map(({ shots, ...p }) => p) }, null, 2));

// PDF version of the same report.
const pdfBrowser = await chromium.launch();
const pdfPage = await pdfBrowser.newPage();
await pdfPage.setContent(html, { waitUntil: 'load' });
await pdfPage.pdf({ path: base + '.pdf', format: 'A4', printBackground: true, margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' } });
await pdfBrowser.close();

// First email: the 3 most serious problems, each named once, in plain language.
const top = []; for (const f of [...all].sort((a, b) => a.sev - b.sev)) { const k = f.title.replace(/\s*\(.*$/, ''); if (!top.some(x => x.k === k)) top.push({ k, f }); if (top.length === 3) break; }
const m = t.mail;
const mail = top.length ? [`${lang === 'nl' ? 'Onderwerp' : 'Subject'}: ${fill(m.subject, { n: top.length, host })}`, '', m.hello, '', fill(m.body, { url: pages[0].url }), '', m.found,
  ...top.map(({ f }, i) => `${i + 1}. ${f.title.replace(/\s*\(\d+×\)$/, '')}. ${f.why}`), '', m.offer, m.optout, '', m.bye, '[naam]'].join('\n') : '';
if (mail) fs.writeFileSync(base + '-mail.txt', mail + '\n');

// Customer list: one row per test. Open it in Excel and fill in the last columns yourself.
const csv = path.join(outDir, 'klanten.csv');
if (!fs.existsSync(csv)) fs.writeFileSync(csv, '﻿datum;website;paginas;ernstig;belangrijk;klein;rapport;gemaild_op;antwoord;betaald\n');
fs.appendFileSync(csv, [date, host, pages.length, count(1), count(2), count(3), path.basename(base) + '.pdf', '', '', ''].join(';') + '\n');

console.log(`${t.done} ${base}.html (+ .pdf${mail ? ', -mail.txt' : ''})\n${t.sev[1]}: ${count(1)} · ${t.sev[2]}: ${count(2)} · ${t.sev[3]}: ${count(3)} · ${t.okCount}: ${nGood}`);

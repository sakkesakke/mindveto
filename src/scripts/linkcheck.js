// "Is this link safe?" — runs in the visitor's browser only. No network calls: the page CSP has connect-src 'none'.
// mvAnalyze(text) returns { verdict: 'ok'|'warn'|'bad'|'notweb', site, uni, reasons: [{ w, c, x }] }.
// w = weight (0 good, 1 note, 2 warning, 3 danger), c = reason code (text lives in the page strings), x = value for {x}.
var mvAnalyze = (function () {
  var SHORT = 'bit.ly tinyurl.com t.co goo.gl ow.ly is.gd v.gd buff.ly cutt.ly rebrand.ly shorturl.at tiny.cc rb.gy t.ly s.id bl.ink lnkd.in qrco.de shorte.st adf.ly x.co u.to clck.ru surl.li tiny.one short.gy bitly.ws urlz.fr shorturl.com 2u.pm y2u.be'.split(' ');
  var ODD = 'top xyz click link loan work gq tk ml cf ga cyou icu rest sbs cfd bond buzz monster quest lol country kim men date faith review stream download racing win bid party science accountant cricket online site website space fun live support help sbs vip mom bar beauty hair skin makeup autos boats yachts lat today world asia pw cc su'.split(' ');
  var FILE_TLD = ['zip', 'mov'];
  var SUFFIX2 = 'co.uk org.uk ac.uk gov.uk com.au net.au co.nz co.jp co.za com.br com.mx com.ar com.tr co.in com.cn com.sg com.hk co.il com.sa com.eg com.be com.pt com.es com.my co.kr'.split(' ');
  var FREEHOST = 'web.app firebaseapp.com github.io pages.dev netlify.app vercel.app blogspot.com weebly.com wixsite.com glitch.me herokuapp.com 000webhostapp.com workers.dev ngrok.io ngrok-free.app r2.dev repl.co godaddysites.com webflow.io framer.app square.site'.split(' ');
  var COMMON = 'com net org nl be fr de es it pt at ch lu ie eu ca us uk pl se dk no fi cz gr ro hu co.uk com.au com.br com.mx com.be com.pt com.es co.nz co.jp ma tn dz ae sa eg qa me tv app ai io'.split(' ');
  // [token, name, substring match allowed, other official names]
  var BRANDS = [
    ['paypal', 'PayPal', 1, 'paypalobjects'], ['apple', 'Apple', 0, 'appleid'], ['icloud', 'iCloud', 1], ['google', 'Google', 1, 'googleusercontent googleapis gstatic googlemail'],
    ['gmail', 'Gmail', 1], ['youtube', 'YouTube', 1, 'youtu ytimg'], ['microsoft', 'Microsoft', 1, 'microsoftonline office365 office sharepoint onmicrosoft live msn bing'], ['outlook', 'Outlook', 1],
    ['hotmail', 'Hotmail', 1], ['amazon', 'Amazon', 1, 'amazonaws'], ['netflix', 'Netflix', 1, 'nflxext'], ['facebook', 'Facebook', 1, 'fbcdn fb'], ['instagram', 'Instagram', 1],
    ['whatsapp', 'WhatsApp', 1], ['tiktok', 'TikTok', 1], ['snapchat', 'Snapchat', 1], ['linkedin', 'LinkedIn', 1, 'licdn'], ['ebay', 'eBay', 0], ['bol', 'bol', 0],
    ['coolblue', 'Coolblue', 1], ['zalando', 'Zalando', 1], ['vinted', 'Vinted', 1], ['marktplaats', 'Marktplaats', 1], ['mediamarkt', 'MediaMarkt', 1], ['aliexpress', 'AliExpress', 1],
    ['temu', 'Temu', 0], ['shein', 'Shein', 0], ['booking', 'Booking.com', 0], ['airbnb', 'Airbnb', 1], ['spotify', 'Spotify', 1], ['dropbox', 'Dropbox', 1], ['docusign', 'DocuSign', 1],
    ['adobe', 'Adobe', 0], ['steampowered', 'Steam', 1, 'steamcommunity'], ['roblox', 'Roblox', 1], ['epicgames', 'Epic Games', 1], ['dhl', 'DHL', 0], ['postnl', 'PostNL', 1], ['bpost', 'bpost', 1],
    ['ups', 'UPS', 0], ['fedex', 'FedEx', 1], ['gls', 'GLS', 0], ['dpd', 'DPD', 0], ['laposte', 'La Poste', 1], ['colissimo', 'Colissimo', 1], ['chronopost', 'Chronopost', 1], ['correos', 'Correos', 1],
    ['ctt', 'CTT', 0], ['poste', 'Poste Italiane', 0, 'posteitaliane'], ['deutschepost', 'Deutsche Post', 1], ['ing', 'ING', 0], ['rabobank', 'Rabobank', 1], ['abnamro', 'ABN AMRO', 1], ['bunq', 'bunq', 0],
    ['kbc', 'KBC', 0], ['belfius', 'Belfius', 1], ['bnpparibas', 'BNP Paribas', 1, 'bnpparibasfortis'], ['argenta', 'Argenta', 1], ['revolut', 'Revolut', 1], ['wise', 'Wise', 0], ['itsme', 'itsme', 1],
    ['digid', 'DigiD', 1], ['santander', 'Santander', 1], ['bbva', 'BBVA', 0], ['caixabank', 'CaixaBank', 1], ['sparkasse', 'Sparkasse', 1], ['commerzbank', 'Commerzbank', 1], ['unicredit', 'UniCredit', 1],
    ['intesasanpaolo', 'Intesa Sanpaolo', 1], ['creditagricole', 'Crédit Agricole', 1], ['openai', 'OpenAI', 1], ['chatgpt', 'ChatGPT', 1], ['anthropic', 'Anthropic', 1, 'claude'],
    ['belastingdienst', 'Belastingdienst', 1], ['myminfin', 'MyMinfin', 1], ['impots', 'impots.gouv.fr', 0, 'gouv'], ['ameli', 'Ameli', 0], ['mindveto', 'Mindveto', 1]
  ];
  var WORDS = ['login', 'log-in', 'signin', 'sign-in', 'verify', 'verification', 'account', 'update', 'secure', 'password', 'confirm', 'unlock', 'suspended', 'wallet', 'billing', 'payment', 'refund', 'invoice'];
  var GLYPH = { 'а': 'a', 'е': 'e', 'о': 'o', 'р': 'p', 'с': 'c', 'у': 'y', 'х': 'x', 'і': 'i', 'ј': 'j', 'ѕ': 's', 'ԁ': 'd', 'һ': 'h', 'ӏ': 'l', 'ԛ': 'q', 'ԝ': 'w', 'ɡ': 'g', 'к': 'k', 'м': 'm', 'н': 'h', 'т': 't', 'в': 'b', 'ո': 'n', 'ս': 'u', 'օ': 'o',
    'ο': 'o', 'α': 'a', 'ν': 'v', 'ρ': 'p', 'τ': 't', 'ι': 'i', 'κ': 'k', 'υ': 'u', 'ε': 'e', 'χ': 'x', 'β': 'b', 'η': 'n', 'μ': 'u', 'ı': 'i', 'ł': 'l', 'ß': 'ss' };
  var DIG = { '0': 'o', '1': 'l', '3': 'e', '4': 'a', '5': 's', '7': 't', '8': 'b', '9': 'g', 'i': 'l', '|': 'l', '!': 'l' };

  function canon(s) {
    s = s.normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase();
    var o = '';
    for (var ch of s) o += GLYPH[ch] || ch;
    o = o.replace(/rn/g, 'm').replace(/vv/g, 'w').replace(/cl/g, 'd');
    var r = '';
    for (var c of o) r += DIG[c] || c;
    return r.replace(/[-_.]/g, '');
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    var p = [], i, j;
    for (j = 0; j <= b.length; j++) p[j] = j;
    for (i = 1; i <= a.length; i++) {
      var q = [i];
      for (j = 1; j <= b.length; j++) q[j] = Math.min(p[j] + 1, q[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      p = q;
    }
    return p[b.length];
  }
  // RFC 3492 Punycode decoder, for showing what an xn-- name really looks like.
  function puny(s) {
    var b = 36, tmin = 1, tmax = 26, skew = 38, damp = 700, n = 128, bias = 72, i = 0, out = [], d = s.lastIndexOf('-');
    if (d > 0) for (var k = 0; k < d; k++) out.push(s.charCodeAt(k));
    for (var pos = d > 0 ? d + 1 : 0; pos < s.length;) {
      var oldi = i, w = 1;
      for (var t = b; ; t += b) {
        if (pos >= s.length) throw 0;
        var c = s.charCodeAt(pos++), dg = c - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : b;
        if (dg >= b) throw 0;
        i += dg * w;
        var th = t <= bias ? tmin : t >= bias + tmax ? tmax : t - bias;
        if (dg < th) break;
        w *= b - th;
      }
      var len = out.length + 1, delta = i - oldi;
      delta = oldi === 0 ? Math.floor(delta / damp) : delta >> 1;
      delta += Math.floor(delta / len);
      for (var kk = 0; delta > 455; kk += b) delta = Math.floor(delta / 35);
      bias = Math.floor(kk + 36 * delta / (delta + 38));
      n += Math.floor(i / len); i %= len;
      out.splice(i++, 0, n);
    }
    return String.fromCodePoint.apply(null, out);
  }
  function scripts(label) {
    var set = {};
    for (var ch of label) {
      if (!/\p{L}/u.test(ch)) continue;
      var sc = /\p{Script=Latin}/u.test(ch) ? 'Latin' : /\p{Script=Cyrillic}/u.test(ch) ? 'Cyrillic' : /\p{Script=Greek}/u.test(ch) ? 'Greek' : /\p{Script=Armenian}/u.test(ch) ? 'Armenian' : 'Other';
      set[sc] = 1;
    }
    return Object.keys(set);
  }
  function ends(host, d) { return host === d || host.slice(-d.length - 1) === '.' + d; }

  return function (input) {
    var R = [], add = function (w, c, x) { R.push({ w: w, c: c, x: x === undefined ? '' : String(x) }); };
    var raw = String(input || '').trim();
    var res = { verdict: 'ok', site: '', uni: '', reasons: R };
    if (!raw) { res.verdict = 'empty'; return res; }
    if (raw.length > 2000) raw = raw.slice(0, 2000);
    var flat = raw.replace(/[\u0000-\u0020\u007f-\u009f\u200b-\u200f\u2028-\u202e\u2060-\u2064\ufeff]/g, '').toLowerCase();
    var m = /^([a-z][a-z0-9+.\-]*):/.exec(flat);
    if (m && /^(javascript|vbscript|data|file|blob|about|chrome|intent|jar|view-source)$/.test(m[1])) { add(3, 'code', m[1] + ':'); res.verdict = 'bad'; return res; }
    if (m && !/^https?$/.test(m[1]) && !/^\d/.test(flat.slice(m[0].length)) && flat.slice(m[0].length, m[0].length + 2) !== '//' && m[1].indexOf('.') < 0) { add(1, 'scheme', m[1] + ':'); res.verdict = 'notweb'; return res; }
    if (m && !/^https?$/.test(m[1]) && flat.slice(m[0].length, m[0].length + 2) === '//') { add(2, 'scheme', m[1] + ':'); res.verdict = 'notweb'; return res; }
    if (/\s/.test(raw)) raw = raw.split(/\s+/)[0];
    var s = /^https?:/i.test(raw) ? raw : /^\/\//.test(raw) ? 'https:' + raw : 'https://' + raw;
    var http = /^http:/i.test(s);
    var auth = s.replace(/^https?:[\/\\]*/i, '').split(/[\/?#\\]/)[0];
    if (/\\/.test(s.replace(/^https?:[\/\\]*/i, '').split(/[?#]/)[0])) add(2, 'slash');
    var at = Math.max(auth.lastIndexOf('@'), auth.lastIndexOf('＠'), auth.lastIndexOf('﹫'));
    var fullAt = /[＠﹫]/.test(raw);
    var rawHost = at >= 0 ? auth.slice(at + 1) : auth;
    if (fullAt) add(3, 'fullat', rawHost);
    if (!/^\[/.test(rawHost)) rawHost = rawHost.replace(/:\d*$/, '');
    rawHost = rawHost.toLowerCase().replace(/\.$/, '');
    if (/[。．｡！-～]/.test(rawHost)) add(3, 'wide');
    var u;
    try { u = new URL(s.replace(/[＠﹫]/g, '@')); } catch (e) { u = null; }
    if (!u || !u.hostname) {
      add(2, 'invalid');
      res.verdict = R.some(function (r) { return r.w >= 3; }) ? 'bad' : 'notweb';
      return res;
    }
    var host = u.hostname.toLowerCase().replace(/\.$/, '');
    if ((u.username || u.password) && !fullAt) add(3, 'at', host);
    var isIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || /^\[/.test(host);
    var labels = host.split('.');
    var uniLabels = labels.map(function (l) { if (l.indexOf('xn--') === 0) { try { return puny(l.slice(4)).toLowerCase(); } catch (e) { return l; } } return l; });
    if (/[^\x00-\x7f]/.test(rawHost) && !/[＠﹫。．｡]/.test(rawHost) && rawHost.split('.').length === labels.length) uniLabels = rawHost.normalize('NFC').split('.');
    var uni = uniLabels.join('.');
    res.uni = uni !== host ? uni : '';
    if (isIP) {
      res.site = host;
      add(2, 'ip', host);
      if (rawHost !== host && !/^\[/.test(host)) add(3, 'ipcode', rawHost);
    } else {
      if (labels.length < 2 || labels.some(function (l) { return !l; })) add(1, 'nodot', host);
      var last2 = labels.slice(-2).join('.'), last3 = labels.slice(-3).join('.');
      var free = '', i;
      for (i = 0; i < FREEHOST.length; i++) if (ends(host, FREEHOST[i])) { free = FREEHOST[i]; break; }
      var sufN = free ? free.split('.').length : SUFFIX2.indexOf(last2) >= 0 ? 2 : 1;
      var suffix = labels.slice(-sufN).join('.');
      var name = labels.length > sufN ? labels[labels.length - sufN - 1] : '';
      var uniName = labels.length > sufN ? uniLabels[uniLabels.length - sufN - 1] : '';
      var subs = labels.slice(0, Math.max(0, labels.length - sufN - 1));
      res.site = name ? name + '.' + suffix : host;
      if (res.uni) res.uniSite = (uniName || name) + '.' + uniLabels.slice(-sufN).join('.');
      var tld = labels[labels.length - 1];
      // special letters
      var pun = false, mixed = false;
      uniLabels.forEach(function (l, k) {
        if (l === labels[k] && !/[^\x00-\x7f]/.test(l)) return;
        pun = true;
        var sc = scripts(l);
        if (sc.length > 1 && sc.indexOf('Latin') >= 0) mixed = true;
      });
      if (mixed) add(3, 'mixed', uni);
      else if (pun) add(uniLabels.every(function (l) { var sc = scripts(l); return !sc.length || (sc.length === 1 && sc[0] === 'Latin'); }) ? 1 : 2, 'puny', uni);
      // brands
      var official = null, hit = null;
      var nameC = canon(uniName || name);
      BRANDS.forEach(function (b) {
        var names = [b[0]].concat(b[3] ? b[3].split(' ') : []);
        if (names.indexOf(name) >= 0 && !pun && COMMON.indexOf(suffix) >= 0 && !free) official = b;
      });
      if (official) add(0, 'official', official[1]);
      else {
        var parts = [{ t: uniName || name, raw: name, inName: true }];
        (uniName || name).split(/[-_]/).forEach(function (t) { if (t && t !== (uniName || name)) parts.push({ t: t, raw: t, inName: true }); });
        subs.forEach(function (sl, k) { var ul = uniLabels[k]; parts.push({ t: ul, raw: sl, inName: false }); ul.split(/[-_]/).forEach(function (t) { if (t && t !== ul) parts.push({ t: t, raw: t, inName: false }); }); });
        BRANDS.forEach(function (b) {
          if (hit) return;
          var tok = b[0], names = [tok].concat(b[3] ? b[3].split(' ') : []);
          parts.some(function (p) {
            var t = p.t;
            if (!t) return false;
            if (names.indexOf(t) >= 0) {
              if (p.inName && t === (uniName || name)) hit = { w: COMMON.indexOf(suffix) >= 0 && !free ? 2 : 3, c: free ? 'brandfree' : 'brandtld', b: b };
              else hit = { w: !p.inName && subs.join('.').indexOf(tok + '.') >= 0 ? 3 : 2, c: 'brandsub', b: b };
              return true;
            }
            var ct = canon(t);
            if (ct === canon(tok) || names.some(function (nn) { return canon(nn) === ct; })) { hit = { w: 3, c: 'look', b: b }; return true; }
            if (b[2] && tok.length >= 5 && t.indexOf(tok) >= 0) { hit = { w: 2, c: 'brandsub', b: b }; return true; }
            if (b[2] && tok.length >= 5 && ct.indexOf(canon(tok)) >= 0) { hit = { w: 3, c: 'look', b: b }; return true; }
            if (tok.length >= 6 && t.length >= 5) {
              var d = lev(t, tok);
              if (d === 1 || (d === 2 && tok.length >= 9)) { hit = { w: 2, c: 'near', b: b }; return true; }
            }
            return false;
          });
        });
        if (hit) { add(hit.w, hit.c, hit.b[1]); }
      }
      if (free) add(1, 'free', free);
      for (i = 0; i < SHORT.length; i++) if (ends(host, SHORT[i])) { add(2, 'short', SHORT[i]); break; }
      if (FILE_TLD.indexOf(tld) >= 0) add(2, 'filetld', '.' + tld);
      else if (ODD.indexOf(tld) >= 0) add(1, 'tld', '.' + tld);
      if (subs.length >= 3) add(subs.length >= 5 ? 2 : 1, 'subs', subs.length);
      if (((uniName || name).match(/-/g) || []).length >= 3) add(1, 'hyph');
      if (!official) {
        var path = (u.pathname + u.search + ' ' + subs.join('.') + ' ' + name).toLowerCase(), word = '';
        WORDS.some(function (wd) { if (path.indexOf(wd) >= 0) { word = wd; return true; } return false; });
        var pre = 0; R.forEach(function (r) { pre += r.w; });
        if (word && pre >= 1) add(1, 'words', word);
      }
    }
    if (http) add(1, 'http');
    if (u.port && u.port !== '80' && u.port !== '443') add(1, 'port', u.port);
    if (/(https?:|https?%3a|www\.|%2f%2f)/i.test(decodeSafe(u.pathname + u.search).slice(1))) add(1, 'redirect');
    var sum = 0, max = 0;
    R.forEach(function (r) { sum += r.w; if (r.w > max) max = r.w; });
    res.verdict = max >= 3 || sum >= 4 ? 'bad' : sum >= 1 ? 'warn' : 'ok';
    return res;
  };
  function decodeSafe(x) { try { return decodeURIComponent(x); } catch (e) { return x; } }
})();

// Page wiring (strings in L, set by the page). Everything the visitor typed is shown with textContent only.
if (typeof document !== 'undefined') (function () {
  var f = document.getElementById('lcf'), inp = document.getElementById('lcu'), out = document.getElementById('lcout');
  if (!f || !inp || !out) return;
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function ltr(text) { var b = el('bdi', '', text); b.setAttribute('dir', 'ltr'); return b; }
  function show() {
    var r = mvAnalyze(inp.value);
    out.replaceChildren();
    if (r.verdict === 'empty') { out.appendChild(el('p', 'msg', L.empty)); out.hidden = false; inp.focus(); return; }
    var v = el('p', 'state lk-' + r.verdict, L['v_' + r.verdict]);
    out.appendChild(v);
    if (r.site) {
      var p = el('p', 'lk-site');
      p.appendChild(document.createTextNode(L.opens + ' '));
      p.appendChild(el('strong', '')).appendChild(ltr(r.site.length > 120 ? r.site.slice(0, 120) + '…' : r.site));
      out.appendChild(p);
      if (r.uniSite && r.uniSite !== r.site) {
        var q = el('p', 'small');
        q.appendChild(document.createTextNode(L.looks + ' '));
        q.appendChild(ltr(r.uniSite));
        out.appendChild(q);
      }
    }
    var list = r.reasons.filter(function (x) { return x.w > 0; });
    var good = r.reasons.filter(function (x) { return x.w === 0; });
    if (list.length || good.length) {
      var ul = el('ul', 'lk-list');
      list.sort(function (a, b) { return b.w - a.w; }).concat(good).forEach(function (x) {
        var li = el('li', 'lk-w' + x.w);
        li.appendChild(el('span', 'lk-tag', L['w' + x.w]));
        var t = (L['r_' + x.c] || x.c).split('{x}');
        li.appendChild(document.createTextNode(' ' + t[0]));
        if (t.length > 1) { li.appendChild(ltr(x.x)); li.appendChild(document.createTextNode(t[1])); }
        ul.appendChild(li);
      });
      out.appendChild(ul);
    }
    if (!list.length && r.verdict === 'ok') out.appendChild(el('p', '', L.none));
    out.appendChild(el('p', 'note human', L.honest));
    out.hidden = false;
  }
  f.addEventListener('submit', function (e) { e.preventDefault(); show(); });
  document.querySelectorAll('[data-ex]').forEach(function (b) { b.addEventListener('click', function () { inp.value = b.getAttribute('data-ex'); show(); }); });
})();

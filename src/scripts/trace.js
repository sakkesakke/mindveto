// Writing trace: runs in the browser only (the page CSP has connect-src 'none'). Strings in W, set by the page.
// Student view: records how the text grows (typed, pasted, deleted, time away) and downloads it as a JSON file.
// Teacher view: opens such a file and shows facts. It never says "AI": the conversation with the student decides.
// File format v1: { app, v, start, end, name, task, text, ev: [[ms, code, inserted, deleted, pasteSnippet?]], snaps: [[ms, text]], away: [[ms, duration]] }
// Codes: t typed, p pasted or dropped, x deleted, c cut, r replaced (autocorrect), u undo or redo.
(function () {
  var root = document.getElementById('trace');
  if (!root) return;
  var APP = 'mindveto-writing-trace', KEY = 'mv-writing-trace-v1', LANG = document.documentElement.lang || 'en';
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  // A scrollable text box must be reachable with the keyboard (WCAG 2.1.1), so it gets tabindex and a name.
  function box(label, text) { var e = el('div', 'tr-replay', text); e.tabIndex = 0; e.setAttribute('role', 'region'); e.setAttribute('aria-label', label); return e; }
  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k] !== undefined ? o[k] : ''; }); }
  function num(n) { return Math.round(n).toLocaleString(LANG); }
  function mins(ms) { return Math.max(0, Math.round(ms / 60000)); }
  function clock(ms) { var s = Math.max(0, Math.round(ms / 1000)); var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (x < 10 ? '0' : '') + x; }

  // ---------- Who are you? ----------
  var bS = $('tr-ms'), bT = $('tr-mt'), pS = $('tr-s'), pT = $('tr-t');
  function mode(student) {
    pS.hidden = !student; pT.hidden = student;
    bS.setAttribute('aria-pressed', String(student)); bT.setAttribute('aria-pressed', String(!student));
    bS.className = 'btn ' + (student ? 'solid' : 'line'); bT.className = 'btn ' + (student ? 'line' : 'solid');
  }
  bS.addEventListener('click', function () { mode(true); });
  bT.addEventListener('click', function () { mode(false); });

  // ---------- Student: write ----------
  var ta = $('tr-text'), nm = $('tr-name'), tk = $('tr-task'), info = $('tr-info');
  function fresh() { return { app: APP, v: 1, start: Date.now(), name: '', task: '', text: '', ev: [], snaps: [], away: [] }; }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY)); return s && s.app === APP ? s : null; } catch (e) { return null; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* storage full or blocked: the trace still works until the page closes */ } }
  var st = load() || fresh(), prev, lastSnap = 0, awayAt = 0;
  function setUp() { ta.value = st.text; nm.value = st.name; tk.value = st.task; prev = ta.value; lastSnap = st.snaps.length ? st.snaps[st.snaps.length - 1][0] : 0; showInfo(); }
  function now() { return Date.now() - st.start; }
  function showInfo() { info.textContent = fill(W.info, { n: num(ta.value.length), m: num(mins(active(st.ev))) }); }
  function snap() { var last = st.snaps[st.snaps.length - 1]; if (last && last[1] === st.text) return; lastSnap = now(); st.snaps.push([lastSnap, st.text]); }
  setUp();

  ta.addEventListener('input', function (e) {
    var v = ta.value, it = e.inputType || '';
    // What changed: compare the old and new text from both ends.
    var a = 0; while (a < prev.length && a < v.length && prev.charCodeAt(a) === v.charCodeAt(a)) a++;
    var b = 0; while (b < prev.length - a && b < v.length - a && prev.charCodeAt(prev.length - 1 - b) === v.charCodeAt(v.length - 1 - b)) b++;
    if (!st.ev.length && !st.snaps.length) st.start = Date.now(); // the clock starts at the first change, not when the page opens
    var ins = v.length - a - b, del = prev.length - a - b, t = now();
    var code = /Paste|Drop/.test(it) ? 'p' : it === 'deleteByCut' ? 'c' : /^delete/.test(it) ? 'x' : /^history/.test(it) ? 'u' : it === 'insertReplacementText' ? 'r' : 't';
    if (!it && ins > 40) code = 'p'; // browsers without inputType: a big jump at once is a paste
    var last = st.ev[st.ev.length - 1];
    if (code === 't' && last && last[1] === 't' && t - last[0] < 3000) { last[0] = t; last[2] += ins; last[3] += del; }
    else { var row = [t, code, ins, del]; if (code === 'p') row.push(v.substr(a, Math.min(ins, 160))); st.ev.push(row); }
    prev = v; st.text = v;
    if (code === 'p' || t - lastSnap > 15000) snap();
    save(); showInfo();
  });
  nm.addEventListener('input', function () { st.name = nm.value; save(); });
  tk.addEventListener('input', function () { st.task = tk.value; save(); });
  document.addEventListener('visibilitychange', function () {
    if (pS.hidden || !st.ev.length) return;
    if (document.hidden) awayAt = now();
    else if (awayAt) { st.away.push([awayAt, now() - awayAt]); awayAt = 0; save(); }
  });
  $('tr-done').addEventListener('click', function () {
    if (!ta.value.trim()) { info.textContent = W.empty; ta.focus(); return; }
    snap(); st.end = Date.now(); st.name = nm.value; st.task = tk.value; save();
    var slug = (st.name || '').toLowerCase().normalize('NFKD').replace(/[^\w]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
    var a = el('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(st)], { type: 'application/json' }));
    a.download = W.file + (slug ? '-' + slug : '') + '-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
  });
  $('tr-new').addEventListener('click', function () {
    if (!window.confirm(W.confirmNew)) return;
    try { localStorage.removeItem(KEY); } catch (e) { /* nothing to remove */ }
    st = fresh(); setUp(); ta.focus();
  });

  // ---------- Teacher: open a trace ----------
  var out = $('tr-out');
  // Active time: the gaps between changes, counting at most 2 minutes per gap (thinking pauses count, a break does not).
  function active(ev) { var s = 0; for (var i = 1; i < ev.length; i++) s += Math.min(120000, Math.max(0, ev[i][0] - ev[i - 1][0])); return s + (ev.length ? 5000 : 0); }
  function valid(d) {
    return d && d.app === APP && typeof d.start === 'number' && typeof d.text === 'string' && Array.isArray(d.ev) && Array.isArray(d.snaps) && Array.isArray(d.away) &&
      d.ev.every(function (r) { return Array.isArray(r) && typeof r[0] === 'number' && typeof r[1] === 'string' && typeof r[2] === 'number' && typeof r[3] === 'number'; }) &&
      d.snaps.every(function (r) { return Array.isArray(r) && typeof r[0] === 'number' && typeof r[1] === 'string'; });
  }
  $('tr-file').addEventListener('change', function () {
    var f = this.files && this.files[0];
    out.replaceChildren();
    if (!f) return;
    var r = new FileReader();
    r.onload = function () { var d; try { d = JSON.parse(r.result); } catch (e) { d = null; } if (valid(d)) show(d); else out.appendChild(el('p', 'state warn', W.bad)); };
    r.readAsText(f);
  });

  function show(d) {
    var ev = d.ev, end = ev.length ? ev[ev.length - 1][0] : 0;
    var total = d.end ? d.end - d.start : end, act = active(ev);
    var typed = 0, pasted = 0, deleted = 0, pastes = [];
    ev.forEach(function (r) { if (r[1] === 'p') { pasted += r[2]; pastes.push(r); } else if (r[1] !== 'u') typed += r[2]; deleted += r[3]; });
    var awayN = d.away.length, awayMs = d.away.reduce(function (s, r) { return s + (r[1] || 0); }, 0);
    var added = typed + pasted, share = added ? Math.round(pasted / added * 100) : 0, actMin = Math.max(1, act / 60000), pace = d.text.length / actMin;

    var head = el('div');
    var who = [d.name, d.task].filter(Boolean).join(' · ');
    if (who) head.appendChild(el('h2', '', who));
    head.appendChild(el('p', 'small', fill(W.started, { d: new Date(d.start).toLocaleString(LANG) })));
    out.appendChild(head);

    out.appendChild(el('h3', '', W.sumH));
    var dl = el('dl', 'tr-facts');
    [[W.kTime, fill(W.min, { n: num(mins(total)) })], [W.kActive, fill(W.min, { n: num(mins(act)) })], [W.kChars, num(d.text.length)],
     [W.kTyped, fill(W.chars, { n: num(typed) })], [W.kPasted, fill(W.chars, { n: num(pasted) }) + ' (' + share + '%)'], [W.kPastes, num(pastes.length)],
     [W.kDel, fill(W.chars, { n: num(deleted) })], [W.kAway, fill(W.away, { n: num(awayN), m: num(mins(awayMs)) })], [W.kSpeed, fill(W.pace, { n: num(pace) })]]
      .forEach(function (p) { dl.appendChild(el('dt', '', p[0])); dl.appendChild(el('dd', '', p[1])); });
    out.appendChild(dl);

    // Things worth a conversation. Facts only, careful thresholds, never the word "AI".
    var sig = [];
    pastes.filter(function (r) { return r[2] >= 200; }).slice(0, 3).forEach(function (r) { sig.push(fill(W.sBig, { n: num(r[2]), t: clock(r[0]) })); });
    if (added >= 300 && share >= 30) sig.push(fill(W.sShare, { p: share }));
    if (d.text.length >= 600 && pace > 120) sig.push(fill(W.sPace, { n: num(pace) }));
    if (awayN >= 5 || awayMs >= 10 * 60000) sig.push(fill(W.sAway, { n: num(awayN), m: num(mins(awayMs)) }));
    // A big paste right after most of the text was deleted, or right after coming back to the page.
    var big = pastes.filter(function (r) { return r[2] >= 200; });
    var wipe = 0, back = -1;
    big.forEach(function (r) {
      ev.forEach(function (x) { if ((x[1] === 'x' || x[1] === 'c') && x[3] >= 50 && x[0] <= r[0] && r[0] - x[0] <= 30000) wipe = Math.max(wipe, x[3]); });
      d.away.forEach(function (w) { var at = w[0] + (w[1] || 0); if (at <= r[0] && r[0] - at <= 60000 && (back < 0 || r[0] - at < back)) back = r[0] - at; });
    });
    if (wipe) sig.push(fill(W.sWipe, { n: num(wipe) }));
    if (back >= 0) sig.push(fill(W.sAwayP, { s: num(Math.max(1, back / 1000)) }));
    if (typed >= 800 && deleted < typed * 0.02) sig.push(fill(W.sNoDel, { n: num(deleted) }));
    out.appendChild(el('h3', '', W.sigH));
    if (sig.length) { var ul = el('ul', 'tr-sig'); sig.forEach(function (s) { ul.appendChild(el('li', '', s)); }); out.appendChild(ul); }
    else out.appendChild(el('p', '', W.sigNone));
    out.appendChild(el('p', 'small', W.sigNote));

    // Chart: text length over time, pastes marked with a dot.
    if (ev.length > 1) {
      out.appendChild(el('h3', '', W.chartH));
      var NS = 'http://www.w3.org/2000/svg', Wd = 600, Ht = 160, len = 0, pts = [], dots = [], maxLen = 1, span = Math.max(1, end);
      ev.forEach(function (r) { len = Math.max(0, len + r[2] - r[3]); maxLen = Math.max(maxLen, len); pts.push([r[0], len]); if (r[1] === 'p') dots.push([r[0], len]); });
      var X = function (t) { return (8 + t / span * (Wd - 16)).toFixed(1); }, Y = function (l) { return (Ht - 8 - l / maxLen * (Ht - 16)).toFixed(1); };
      var svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + Wd + ' ' + Ht); svg.setAttribute('class', 'tr-chart'); svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', fill(W.chartAlt, { m: num(mins(span)) }));
      var pl = document.createElementNS(NS, 'polyline');
      pl.setAttribute('points', ['8,' + (Ht - 8)].concat(pts.map(function (p) { return X(p[0]) + ',' + Y(p[1]); })).join(' '));
      pl.setAttribute('class', 'tr-line'); svg.appendChild(pl);
      dots.forEach(function (p) { var c = document.createElementNS(NS, 'circle'); c.setAttribute('cx', X(p[0])); c.setAttribute('cy', Y(p[1])); c.setAttribute('r', '5'); c.setAttribute('class', 'tr-dot'); svg.appendChild(c); });
      out.appendChild(svg);
    }

    if (pastes.length) {
      out.appendChild(el('h3', '', W.pasteH));
      var ol = el('ol', 'tr-pastes');
      pastes.forEach(function (r) {
        var li = el('li'); li.appendChild(el('strong', '', fill(W.pasteRow, { t: clock(r[0]), n: num(r[2]) })));
        if (typeof r[4] === 'string' && r[4]) { li.appendChild(document.createTextNode(' ')); li.appendChild(el('q', '', r[4] + (r[2] > r[4].length ? '…' : ''))); }
        ol.appendChild(li);
      });
      out.appendChild(ol);
    }

    if (d.snaps.length > 1) {
      out.appendChild(el('h3', '', W.replayH));
      var lab = el('label', '', W.replayL); lab.htmlFor = 'tr-range';
      var rg = el('input'); rg.type = 'range'; rg.id = 'tr-range'; rg.min = '0'; rg.max = String(d.snaps.length - 1); rg.value = rg.max;
      var when = el('p', 'small'), pre = box(W.replayH);
      var upd = function () { var s = d.snaps[+rg.value]; when.textContent = clock(s[0]); pre.textContent = s[1]; rg.setAttribute('aria-valuetext', clock(s[0])); };
      rg.addEventListener('input', upd); upd();
      [lab, rg, when, pre].forEach(function (x) { out.appendChild(x); });
    }

    out.appendChild(el('h3', '', W.textH));
    out.appendChild(box(W.textH, d.text));
  }
})();

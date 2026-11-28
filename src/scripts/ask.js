// Ask the student: sends the pasted text to Mindveto's own API (the page CSP allows only that host) and shows the questions.
// Strings in A, set by the page; A.api is the API address, A.max the maximum length. The code is kept in this browser only.
(function () {
  var root = document.getElementById('ask');
  if (!root) return;
  var KEY = 'mv-ask-code';
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function fill(s, o) { return s.replace(/\{(\w+)\}/g, function (_, k) { return o[k] !== undefined ? o[k] : ''; }); }
  var code = $('as-code'), text = $('as-text'), lang = $('as-lang'), cnt = $('as-count'), btn = $('as-go'), state = $('as-state'), out = $('as-out');
  var max = +A.max, LANG = document.documentElement.lang || 'en';

  try { code.value = localStorage.getItem(KEY) || ''; } catch (e) { /* storage blocked: the field just starts empty */ }
  code.addEventListener('change', function () { try { localStorage.setItem(KEY, code.value.trim()); } catch (e) { /* not saved */ } });
  function count() { cnt.textContent = fill(A.count, { n: text.value.length.toLocaleString(LANG), max: max.toLocaleString(LANG) }); }
  text.addEventListener('input', count); count();

  function say(msg, cls) { state.className = 'state ' + (cls || 'warn'); state.textContent = msg; state.hidden = !msg; }
  var ERR = { bad_code: 'eCode', too_short: 'eShort', too_long: 'eLong', limit: 'eLimit', busy: 'eBusy', timeout: 'eTime', too_many: 'eBusy', model_error: 'eModel' };

  btn.addEventListener('click', function () {
    var c = code.value.trim(), t = text.value.trim();
    if (!c) { say(A.eCode); code.focus(); return; }
    if (t.length < 300) { say(fill(A.eShort, { min: 300 })); text.focus(); return; }
    if (t.length > max) { say(fill(A.eLong, { max: max })); text.focus(); return; }
    try { localStorage.setItem(KEY, c); } catch (e) { /* not saved */ }
    btn.disabled = true; out.replaceChildren(); say(A.wait, 'off');
    var ctl = new AbortController(), timer = setTimeout(function () { ctl.abort(); }, 480000);
    fetch(A.api + '/v1/questions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: c, text: t, lang: lang.value }), signal: ctl.signal })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (r) {
        if (!r.ok) { say(fill(A[ERR[r.j.error] || 'eModel'], { min: r.j.min || 300, max: r.j.max || max, limit: r.j.limit || '' })); return; }
        say('', 'off'); show(r.j);
      })
      .catch(function (e) { say(e && e.name === 'AbortError' ? A.eTime : A.eNet); })
      .then(function () { clearTimeout(timer); btn.disabled = false; });
  });

  function show(j) {
    out.appendChild(el('h2', '', A.resH));
    var ol = el('ol', 'as-q'), lines = [];
    (j.questions || []).forEach(function (q, i) {
      var li = el('li'); li.appendChild(el('strong', '', q.q));
      if (q.about) { var p = el('p', 'small'); p.appendChild(document.createTextNode(A.about + ' ')); p.appendChild(el('q', '', q.about)); li.appendChild(p); }
      ol.appendChild(li); lines.push((i + 1) + '. ' + q.q);
    });
    out.appendChild(ol);
    out.appendChild(el('p', 'small', A.note));
    var cp = el('button', 'btn line', A.copy); cp.type = 'button';
    cp.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(lines.join('\n')).then(function () { cp.textContent = A.copied; setTimeout(function () { cp.textContent = A.copy; }, 2000); });
    });
    var row = el('div', 'actions'); row.appendChild(cp); out.appendChild(row);
    if (j.limit) out.appendChild(el('p', 'small', fill(A.used, { used: j.used, limit: j.limit })));
    out.querySelector('h2').tabIndex = -1; out.querySelector('h2').focus();
  }
})();

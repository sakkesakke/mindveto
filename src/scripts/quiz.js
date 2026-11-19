// AI phishing quiz: runs in the browser only (the page CSP has connect-src 'none'). Strings in Q, set by the page.
(function () {
  var box = document.getElementById('quiz');
  if (!box) return;
  var qs = [].slice.call(box.querySelectorAll('.q')), res = document.getElementById('qres'), score = document.getElementById('qscore'), left = document.getElementById('qleft');
  var cert = document.getElementById('qcert'), nameIn = document.getElementById('qname');
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function count() { return qs.filter(function (q) { return q.dataset.got; }).length; }
  function right() { return qs.filter(function (q) { return q.dataset.got === 'ok'; }).length; }
  function update() {
    var n = count(), t = qs.length;
    left.textContent = n < t ? Q.left.replace('{n}', t - n) : '';
    if (n < t) { res.hidden = true; return; }
    var r = right();
    score.className = 'state ' + (r >= 7 ? 'lk-ok' : r >= 5 ? 'lk-warn' : 'lk-bad');
    score.textContent = Q.score.replace('{n}', r).replace('{t}', t) + ' · ' + (r >= 7 ? Q.hi : r >= 5 ? Q.mid : Q.lo);
    res.hidden = false;
  }
  qs.forEach(function (q) {
    var btns = q.querySelector('.qz-btns'), ans = q.querySelector('.qz-ans'), fb = q.querySelector('.qz-fb');
    btns.hidden = false; ans.hidden = true;
    [].slice.call(btns.querySelectorAll('button')).forEach(function (b) {
      b.addEventListener('click', function () {
        if (q.dataset.got) return;
        var ok = b.dataset.v === q.dataset.a;
        q.dataset.got = ok ? 'ok' : 'no';
        [].slice.call(btns.querySelectorAll('button')).forEach(function (x) { x.disabled = true; x.setAttribute('aria-pressed', String(x === b)); });
        fb.replaceChildren();
        fb.className = 'qz-fb ' + (ok ? 'qz-ok' : 'qz-no');
        fb.appendChild(el('strong', '', (ok ? Q.right : Q.wrong) + ' ' + (q.dataset.a === 'real' ? Q.real : Q.fake) + '.'));
        fb.appendChild(document.createTextNode(' ' + q.querySelector('.qz-e').textContent));
        fb.hidden = false;
        update();
      });
    });
  });
  document.getElementById('qagain').addEventListener('click', function () {
    qs.forEach(function (q) {
      delete q.dataset.got;
      q.querySelector('.qz-fb').hidden = true;
      [].slice.call(q.querySelectorAll('.qz-btns button')).forEach(function (x) { x.disabled = false; x.removeAttribute('aria-pressed'); });
    });
    update();
    qs[0].querySelector('button').focus();
  });
  document.getElementById('qprint').addEventListener('click', function () {
    cert.replaceChildren();
    cert.appendChild(el('h2', '', Q.certH));
    var dl = el('p', '');
    var nm = (nameIn.value || '').trim().slice(0, 80);
    if (nm) { dl.appendChild(el('strong', '', Q.nameL + ': ')); dl.appendChild(document.createTextNode(nm)); dl.appendChild(el('br')); }
    dl.appendChild(el('strong', '', Q.date + ': '));
    dl.appendChild(document.createTextNode(new Date().toLocaleDateString(document.documentElement.lang, { day: 'numeric', month: 'long', year: 'numeric' })));
    cert.appendChild(dl);
    cert.appendChild(el('p', 'qc-score', Q.score.replace('{n}', right()).replace('{t}', qs.length)));
    var ol = el('ol', '');
    qs.forEach(function (q) {
      var li = el('li', '', q.querySelector('h3').textContent.replace(/^\d+\.\s*/, '') + ': ');
      li.appendChild(el('strong', '', q.dataset.got === 'ok' ? Q.ok : Q.no));
      ol.appendChild(li);
    });
    cert.appendChild(ol);
    cert.appendChild(el('p', 'small', Q.certL));
    document.body.appendChild(cert);
    document.documentElement.classList.add('pq');
    window.print();
  });
  window.addEventListener('afterprint', function () { document.documentElement.classList.remove('pq'); });
  update();
})();

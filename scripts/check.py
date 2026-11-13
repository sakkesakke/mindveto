#!/usr/bin/env python3
"""Checks the built site (dist/) before it goes live: titles, descriptions, canonical, one h1, hreflang, links.
Run: npm run build && python3 scripts/check.py"""
import glob, html, os, re, sys
D = 'dist'; SITE = 'https://mindveto.app'
LANGS = ['en', 'nl', 'fr', 'es', 'de', 'pt', 'it', 'ar', 'x-default']
pages = sorted(glob.glob(D + '/**/index.html', recursive=True))
url = lambda p: '/' if os.path.dirname(p) == D else '/' + os.path.relpath(os.path.dirname(p), D) + '/'
urls = {url(p) for p in pages}; probs = []; titles = {}
for p in pages + [D + '/404.html']:
    h = open(p, encoding='utf-8').read(); u = url(p) if p.endswith('index.html') else '/404.html'
    ids = set(re.findall(r'id="([^"]+)"', h))
    for href in set(re.findall(r'(?:href|src|poster)="([^"]+)"', h)):
        if href.startswith(SITE): href = href[len(SITE):] or '/'
        if href.startswith(('http', 'mailto:', 'data:', 'tel:')) or href == '#print': continue
        path, _, frag = href.partition('#'); path = path.split('?')[0]
        if not path:
            if frag and frag not in ids: probs.append((u, 'anchor not on page', href))
            continue
        f = D + path; f = f + 'index.html' if f.endswith('/') else f
        if not os.path.exists(f): probs.append((u, 'broken link', href))
    if u == '/404.html': continue
    t = re.search(r'<title>(.*?)</title>', h); d = re.search(r'<meta name="description" content="(.*?)"', h)
    c = re.search(r'<link rel="canonical" href="(.*?)"', h)
    t = html.unescape(t.group(1)) if t else ''; d = html.unescape(d.group(1)) if d else ''
    if not 20 <= len(t) <= 60: probs.append((u, 'title length', len(t)))
    if not 110 <= len(d) <= 160: probs.append((u, 'description length', len(d)))
    if t in titles: probs.append((u, 'same title as', titles[t]))
    titles[t] = u
    if not c or c.group(1) != SITE + u: probs.append((u, 'canonical', c and c.group(1)))
    if len(re.findall(r'<h1', h)) != 1: probs.append((u, 'h1 count'))
    hl = re.findall(r'<link rel="alternate" hreflang="(.*?)" href="(.*?)"', h)
    if sorted(x for x, _ in hl) != sorted(LANGS): probs.append((u, 'hreflang', [x for x, _ in hl]))
    for _, href in hl:
        if href.replace(SITE, '') not in urls: probs.append((u, 'hreflang target missing', href))
    if re.search(r'fonts\.googleapis|googletagmanager|google-analytics|<script[^>]+src="https?://', h): probs.append((u, 'third-party script or font'))
for x in probs: print('PROBLEM', *x)
print(len(pages), 'pages,', len(probs), 'problems')
sys.exit(1 if probs else 0)

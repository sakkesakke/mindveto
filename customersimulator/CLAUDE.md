# CustomerSimulator

Owner: Amghar Said, a beginner who speaks Dutch. Answer in simple Dutch with numbered steps and exact button names.
This is a separate product from Mindveto. It currently lives in the `customersimulator/` folder of sakkesakke/mindveto, and work on it should not change the Mindveto website, unless it fixes a problem the tool found there (then follow the checks in the root CLAUDE.md).

## What it is
A command-line tool that opens one or more public pages of one site as 7 customer types and writes a plain-language HTML + PDF report (NL/EN).
- `simulate.mjs`: runs the tests with Playwright (Chromium) and axe-core, then builds the report.
- `texts.mjs`: all report text. `T.nl` and `T.en` must always have the same keys. `RULES` holds plain-language versions of axe rules.
- `reports/`: output: .html, .pdf, -mail.txt, .json and `klanten.csv` (customer list, `;`-separated for Excel). It is git-ignored, because reports about other companies' sites and the customer list must never be committed.
- `test/`: a local broken test page (git-ignored). Serve it with `python3 -m http.server 8792 --directory test`.
- `voorbeeld-rapport.html` / `.pdf`: a sample report of mindveto.app. These are the only reports that are committed.
- `LEESMIJ.md`: how to use the tool. `VERKOPEN.md`: the sales plan.
- `site/`: static Dutch landing page (`index.html`, `privacy.html`, `voorwaarden.html`), no cookies/trackers/third-party files. Placeholders in [BRACKETS] still need the owner's details; it is not deployed yet.

## Run
`npm run setup` once, then `node simulate.mjs https://site.tld [https://site.tld/page2 …] [--crawl] [--lang en]`. `--crawl` adds up to 5 important pages found from the first address. Pages that do not load are skipped.

## Rules
- The "Wat wij niet konden testen" section is always shown. Never claim a site is legally compliant (EAA, WCAG, GDPR).
- Mention the EAA micro-enterprise exemption honestly (<10 staff and <=€2M turnover for services). No fear-based selling.
- Test only public pages. No logins, no purchases, no form submits on third-party sites.
- No mass email. Send personal mails to generic business addresses only, with an easy opt-out.
- The report must stay self-contained: no third-party scripts or fonts, no horizontal scroll at 390 px, axe 0 violations.
- Every new finding needs text in both `nl` and `en` in `texts.mjs`.

## Status (2026-11-28)
- Done: the 7 profiles, the NL/EN report, multi-page reports, `--crawl`, PDF output, the first-mail text, klanten.csv, the sample report, the sales guide and a landing page draft in `site/`.
- The cloud session cannot reach most outside websites (proxy), so testing prospects has to run on the owner's own computer.
- Not done yet: the owner's details in `site/`, a domain, the first paying customer.

## Next steps (in this order)
1. Fill in the owner's details in `site/` and choose a domain. Ask the owner which domain to use. It does not go on mindveto.app unless the owner says so.
2. Deploy `site/` (for example GitHub Pages from a separate repository).
3. Payment: start with a bank-transfer invoice (needs a KBO number). Add an online payment later.
4. Later: a checkout simulation on the shop's own test environment, only with permission.

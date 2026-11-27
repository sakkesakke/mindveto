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

## Run
`npm run setup` once, then `node simulate.mjs https://site.tld [https://site.tld/page2 …] [--lang en]`. Pages that do not load are skipped.

## Rules
- The "Wat wij niet konden testen" section is always shown. Never claim a site is legally compliant (EAA, WCAG, GDPR).
- Mention the EAA micro-enterprise exemption honestly (<10 staff and <=€2M turnover for services). No fear-based selling.
- Test only public pages. No logins, no purchases, no form submits on third-party sites.
- No mass email. Send personal mails to generic business addresses only, with an easy opt-out.
- The report must stay self-contained: no third-party scripts or fonts, no horizontal scroll at 390 px, axe 0 violations.
- Every new finding needs text in both `nl` and `en` in `texts.mjs`.

## Status (2026-11-27)
- Done: the 7 profiles, the NL/EN report, multi-page reports, PDF output, the first-mail text, the klanten.csv customer list, the sample report and the sales guide.
- The tool found reflow problems on mindveto.app at 320 px. These are fixed in `src/styles/site.css` (all 240 pages fit at 320 and 390 px).
- Not done yet: the first paying customer and a landing page.

## Next steps (in this order)
1. A landing page with the sample report. Ask the owner first which domain to use. It does not go on mindveto.app unless the owner says so.
2. Payment: start with a bank-transfer invoice (needs a KBO number). Add an online payment later.
3. `--crawl`: pick the 5 most important pages of a site automatically (home, a product, cart, contact, about).
4. Later: a checkout simulation on the shop's own test environment, only with permission.

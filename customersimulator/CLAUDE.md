# CustomerSimulator

Owner: Amghar Said, a beginner who speaks Dutch. Answer in simple Dutch with numbered steps and exact button names.
This is a separate product from Mindveto. It currently lives in the `customersimulator/` folder of sakkesakke/mindveto, but it must not change the Mindveto website.

## What it is
A command-line tool that opens one public web page as 7 customer types and writes a plain-language HTML report (NL/EN).
- `simulate.mjs`: runs the tests with Playwright (Chromium) and axe-core, then builds the report.
- `texts.mjs`: all report text. `T.nl` and `T.en` must always have the same keys. `RULES` holds plain-language versions of axe rules.
- `reports/`: output. It is git-ignored, because reports about other companies' sites must never be committed.
- `test/`: a local broken test page (git-ignored). Serve it with `python3 -m http.server 8792 --directory test`.
- `voorbeeld-rapport.html`: a sample report of mindveto.app. This is the only report that is committed.
- `LEESMIJ.md`: how to use the tool. `VERKOPEN.md`: the sales plan.

## Run
`npm run setup` once, then `node simulate.mjs https://site.tld [--lang en]`.

## Rules
- The "Wat wij niet konden testen" section is always shown. Never claim a site is legally compliant (EAA, WCAG, GDPR).
- Mention the EAA micro-enterprise exemption honestly (<10 staff and <=€2M turnover for services). No fear-based selling.
- Test only public pages. No logins, no purchases, no form submits on third-party sites.
- No mass email. Send personal mails to generic business addresses only, with an easy opt-out.
- The report must stay self-contained: no third-party scripts or fonts, no horizontal scroll at 390 px, axe 0 violations.
- Every new finding needs text in both `nl` and `en` in `texts.mjs`.

## Status (2026-11-27)
- Done: the 7 profiles, the NL/EN report, the sample report and the sales guide.
- Not done yet: first paying customer, landing page, multi-page mode.

## Next steps (in this order)
1. `--pages url1 url2 …`: one combined report for the €149 "Winkelpakket" (5 pages).
2. Direct PDF output (`page.pdf()`) next to the HTML.
3. Short summary mail text generated from the top 3 findings, for the free check.
4. Simple customer list (CSV) to track who was mailed, who answered and who paid.
5. A landing page with the sample report. Ask the owner first which domain to use. It does not go on mindveto.app unless the owner says so.
6. Later: a checkout simulation on the shop's own test environment, only with permission.

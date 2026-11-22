# 0. The website mindveto.app (state 22 Nov 2026)

Everything a new chat needs to know about the site itself. Facts read from the repo on 22 Nov 2026; re-read the files
before changing anything. The repo rules in `CLAUDE.md` (root of this repo) always win.

## What Mindveto is
- "The human override for AI" (formerly Human Override): an AI blocker for browsers (extension), Android, Windows,
  Mac/Linux and whole networks, plus a family filter, PIN lock, exam button for teachers and paste guard for offices.
- Made by Amghar Said (owner, beginner, Dutch-speaking: answer in simple Dutch, numbered steps, exact button names).
- Brand rules: no crypto, no $MAIGA, no links to geopolcoins pages. No price promises beyond the pricing page.
  Honest limits stay visible.

## Two repositories
| Repo | What lives there |
| --- | --- |
| `sakkesakke/mindveto` (this one) | The website mindveto.app, plus copies of the downloads in `public/downloads/` |
| `sakkesakke/geopolcoins` | The apps and lists: `human-override/` (extension, `android/`, `pc/`, lists), `docs/HANDOFF.md` (overall state and open items, read it), old `docs/google-play.md` |

## How the site is built and published
- Astro (static), one template for every page: `src/pages/[...path].astro`. Layout, SEO tags, CSP, footer:
  `src/layouts/Base.astro`. Styles: `src/styles/site.css`. Summary for AI assistants: `src/pages/llms.txt.ts` → `/llms.txt`.
- Hosting: GitHub Pages with the custom domain mindveto.app (`public/CNAME`).
- Workflows (`.github/workflows/`):
  - `deploy.yml`: on every push to `main`. It builds the site, fails on external fonts or trackers, runs `scripts/check.py`
    and `scripts/lighthouse.sh` (every score must be at least 90), deploys, then pings IndexNow.
  - `sync-lists.yml`: daily at 05:17 UTC. Copies the block lists and downloads (APK included) from geopolcoins
    `human-override/` into `public/downloads/`.
  - `archive.yml`: Mondays. Saves pages in the Wayback Machine.
  - `proof.yml`: daily. OpenTimestamps proof of the site files in `proof/`.
- There are no CI checks on pull requests. Run the checks locally before merging (see "Checks before merge").

## Pages (30 page keys × 8 languages = 240 pages + 404)
Every page and its slug per language is in `src/i18n/routes.ts`. English paths:
`/` home · `/parents/` · `/schools/` · `/offices/` · `/browser-extension/` · `/android/` · `/windows/` · `/mac-linux/` ·
`/network/` · `/exam-button/` · `/paste-guard/` · `/block-chatgpt/` (guide) · `/block-porn/` (family filter) ·
`/ai-policy-template/` · `/download/` · `/pricing/` · `/help/` · `/about/` · `/privacy/` · `/terms/` · `/legal/` ·
`/is-it-working/` · `/bypass-tricks/` · `/link-check/` · `/ai-phishing-quiz/` · `/ai-statistics/` · `/blog/` ·
`/blog/is-character-ai-safe-for-kids/` · `/blog/ai-act-article-4-schools/` · `/blog/chatgpt-customer-data-gdpr/`.
Languages: EN (root), `/nl/`, `/fr/`, `/es/`, `/de/`, `/pt/`, `/it/`, `/ar/` (Arabic is right-to-left).

## Where the text lives
| File | Content |
| --- | --- |
| `src/i18n/<lang>.ts` (en, nl, fr, es, de, pt, it, ar) | Home and most pages |
| `src/i18n/ui.ts` | Menu, footer, small labels |
| `src/i18n/products.ts` | Product names and one-liners |
| `src/i18n/extra.ts` | Pricing plans (`PLANS`), exam tool, AI names, test page |
| `src/i18n/protect/<lang>.ts` | Link check and AI phishing quiz |
| `src/i18n/linkable/<lang>.ts` + `sources.ts` | Statistics page and blog article A1. Recheck the figures every 3 months |
| `src/i18n/company.ts` | KBO/VAT/business address. Still empty: the footer and legal page show them once filled |

Link rule: in en/es/de/pt/it/ar write English paths (`href="/android/"`); `src/i18n/localize.ts` rewrites them.
In nl and fr write the Dutch or French path (`/nl/android/`, `/fr/android/`).

## Pages that matter for the Google Play launch
- `/android/` (key `android`, all 8 language files): download button for the APK (`/downloads/human-override-android.apk`
  + `.sha256`), install steps, facts table, and the note "The Google Play version is coming, with a 15-day free trial
  of Plus". Change this note at launch, in all 8 languages.
- `/download/` (key `download`): "Android phone or tablet" block. Add the Play link here too.
- `/pricing/` (`PLANS` in `extra.ts`, 8 languages): Plus €14.99/yr or €1.99/month, "15 days free to try", "From the
  Google Play launch"; Founder offer on the pricing page (first 250 Play installs get Plus free for a year).
  Keep it true: no promise the app cannot keep (see `2-fix-before-upload.md`, item 3).
- `/privacy/`: already describes the Android app (DNS lookups, Cloudflare/Quad9 fallback, nothing sent to Mindveto).
  This is the privacy policy URL for the Play Console.
- `/terms/`: already covers the Android app and purchases through Google Play.
- `llms.txt` (built from `src/pages/llms.txt.ts`) says "Free to use": check it against the pricing decision.
- A Google Play badge must be self-hosted (no third-party images or scripts). The CSP in `Base.astro` allows only this
  site (plus Supabase for the exam button).

## Privacy and design rules (never break)
- No cookies, no analytics, no trackers, no third-party scripts or fonts. Font: Atkinson Hyperlegible Next, self-hosted,
  weights 400-600.
- Design "Kalme controle": chalk/paper/pine ink, moss for the human side, violet (`--ai`) only for AI. The switch is the
  only rounded object.
- Never delete `public/google28b43fb835ba26d8.html` (Search Console) or the `msvalidate.01` meta in `Base.astro` (Bing).

## Checks before merge (from CLAUDE.md)
1. `npm ci` then `npm run build`.
2. `python3 scripts/check.py` must report 0 problems. It checks titles (≤ 60 characters), descriptions (110-160),
   canonical links, one h1, hreflang and broken links.
3. `sh scripts/lighthouse.sh`: every score must be at least 90.
4. axe (wcag2a/aa, 21a/aa, 22aa): 0 violations at 1280 and 390 px. No horizontal scroll at 390 px. No console errors.
5. Squash-merge. Then confirm the change is live on mindveto.app once `deploy.yml` has run.

## Contact and accounts
- `hello@mindveto.app` forwards to the owner's mailbox. It is the contact e-mail for the stores.
- The owner signs in, pays and clicks Submit/Publish himself. Never ask for passwords or codes. Never send e-mails or
  posts without his explicit OK.

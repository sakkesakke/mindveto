# 2. Fix before the first upload

Work in `sakkesakke/geopolcoins` (`human-override/android/`) unless a line says "mindveto".
Follow that repo's CLAUDE.md. One PR per logical change, checks green, squash-merge.

## A. Needs the owner's decision first (see README, "4 beslissingen")
1. **applicationId.** `xyz.geopolcoins.humanoverride` contains "geopolcoins" (brand rule: no geopolcoins) and is
   permanent once uploaded to Play. Proposed: `app.mindveto`. Change `applicationId` only (keep `namespace` and the Java
   package to avoid a large rename), or both if the owner prefers. After the change: run the workflow, install the APK on
   the emulator, confirm the app still starts and blocks (`e2e.sh`). Update the mindveto `/android/` page note if needed.
2. **Donate button** (`MainActivity.java`, `R.string.donate`, opens `https://ko-fi.com/geopolcoins`): proposed removal
   in all builds (brand rule). Remove the string in EN/NL/FR too.
3. **Free or paid at launch.** No billing code exists. If "free first": mindveto texts that promise Plus/trial/Founders
   "from the Google Play launch" must be changed in all 8 languages (`src/i18n/*.ts` key `android`, `pricing`,
   `src/i18n/extra.ts` → `PLANS`) before the Play listing goes live, so the site never promises what the app lacks.
   If "paid": a separate project (Play Billing Library, products, trial, server-free entitlement check, terms update).

## B. Plain fixes (no decision needed)
4. **VPN prominent disclosure (likely required by Google, verify first: `6-check-on-the-day.md`).** Today the app shows
   only the terms dialog, then the big button calls Android's VPN prompt. Add a separate, plain screen before the first
   `VpnService.prepare()` that says why the app needs the VPN slot (local DNS filter only, nothing leaves the phone
   through us, other traffic untouched), with **Continue** and **Not now**. EN/NL/FR strings. Store the consent locally.
   The declaration video must show this screen.
5. **Terms link**: `TERMS_URL` in `MainActivity.java` → `https://mindveto.app/terms/` (now `geopolcoins.xyz`).
   The mindveto terms page already covers the Android app. Keep `TERMS_VERSION` unless the terms text changes.
6. **versionName**: `0.1.<run>` looks like an alpha. Proposed `1.0.<run>` for the first Play release (versionCode stays
   the run number, which always goes up).
7. **Test on new Android versions**: add an emulator run on API 34 and 36 (the e2e job only runs API 30), and check:
   VPN starts, a blocked name fails, tamper notification after force-stop, notification permission prompt (API 33+).
8. **Signing check**: open the latest "Human Override Android app" run and read the log line. If it says "fresh random
   beta key", the owner has not added the upload key yet (owner steps 1-2 in `5-stappen-eigenaar.md`). Play App Signing
   (Google-generated app key) is the plan, so the upload key can be reset later through Google if lost.
9. **Workflow names**: rename "Human Override Android app" and the artifact names to Mindveto only if it does not break
   the site copy (`sync-lists.yml` in mindveto names the APK file `human-override-android.apk`; keep that file name).
10. **Keystore DN**: the workflow's fallback beta key uses `O=Human Override` (cosmetic, beta builds only). The owner's
   permanent key in `5-stappen-eigenaar.md` step 1 already uses `O=Mindveto`.

## C. Website (mindveto repo, all 8 languages)
11. After Play approval: `/android/` page gets the Play link as the main button (keep the APK as second option),
    `/download/` too. A Google Play badge must be self-hosted (no third-party images/scripts) and follow Google's badge
    guidelines (link in `6-check-on-the-day.md`).
12. Remove "Beta: to update, uninstall the old version first" once the APK is signed with the permanent key.
13. `llms.txt` and the home "Key facts" stay true: check the "Free to use" line against the pricing decision.

# 1. App facts (read from the code on 22 Nov 2026)

Source: `sakkesakke/geopolcoins` at commit `68afae4`, folder `human-override/android/`.
Re-read the files before acting: the code may have changed since.

## Identity
| Item | Value | File |
| --- | --- | --- |
| App label | `Mindveto` (EN/NL/FR strings) | `app/src/main/res/values*/strings.xml` |
| applicationId / namespace | `xyz.geopolcoins.humanoverride` (decision: see `2-fix-before-upload.md`) | `app/build.gradle` |
| Java package | `xyz.geopolcoins.humanoverride` | `app/src/main/java/...` |
| minSdk / targetSdk / compileSdk | 26 (Android 8) / 36 / 36 | `app/build.gradle` |
| versionCode | GitHub run number (`HO_VERSION_CODE`) | `app/build.gradle`, `.github/workflows/android.yml` |
| versionName | `0.1.<run number>` | `app/build.gradle` |
| Languages in the app | EN, NL, FR | `res/values`, `values-nl`, `values-fr` |
| Launcher icon | Mindveto mark, PNG per density (no adaptive icon) | `res/mipmap-*/ic_launcher.png` |
| Toolchain | AGP 8.11.1, Gradle 8.13, Java 17, no AndroidX, no libraries | `build.gradle`, `gradle.properties`, workflow |
| Size | APK about 389 KB (site text) | mindveto `src/i18n/en.ts` → `android` |

## Permissions (AndroidManifest.xml)
| Permission | Why (from code comments and strings) |
| --- | --- |
| `INTERNET` | Forward DNS lookups that are not blocked; download the public block list |
| `POST_NOTIFICATIONS` | Tamper alerts; opt-in camera/microphone guard notifications |
| `ACCESS_WIFI_STATE`, `CHANGE_WIFI_STATE` | "Sensor check" button: scan nearby Wi-Fi radios for small ESP sensor boards |
| `ACCESS_FINE_LOCATION` (`maxSdkVersion=32`) | Needed for Wi-Fi scan results on Android 12L and older only |
| `NEARBY_WIFI_DEVICES` (`neverForLocation`) | Wi-Fi scan on Android 13+ |
| Service `BlockVpnService` with `BIND_VPN_SERVICE` | Local DNS filter through Android `VpnService` |

No camera or microphone permission: the guard only listens to `CameraManager.AvailabilityCallback` and the
audio-recording callback to notice that *another* app uses them (`PrivacyGuard.java`).
`android:allowBackup="false"`, `usesCleartextTraffic="false"`.

## What leaves the phone (network)
1. **DNS lookups** that are not blocked: forwarded to the DNS servers of the current Wi-Fi/mobile network; if none answer,
   to Cloudflare `1.1.1.1` and Quad9 `9.9.9.9` (`BlockVpnService.upstreams()`). Blocked names get "does not exist".
   The VPN only routes the DNS address (`addRoute(DNS_IP, 32)`); all other traffic goes straight to the internet.
2. **Block list update**: `https://mindveto.app/downloads/domains.txt`, at most every 12 hours, no user data
   (`Lists.java`). The bundled list stays; the download can only add blocks.
3. **Links the user taps**: `https://mindveto.app/privacy/`, `https://mindveto.app/`,
   `https://geopolcoins.xyz/human-override-terms.html` (terms), `https://ko-fi.com/geopolcoins` (donate).
4. Nothing is sent to Mindveto. No account, no analytics, no ads, no crash reporting SDK.

This matches the privacy policy at `https://mindveto.app/privacy/` (section "The apps and scripts", which already names
Cloudflare and Quad9). Source text: mindveto `src/i18n/en.ts` → `privacy`, plus 7 other languages.

## Features (strings.xml)
Big on/off button ("AI BLOCKED"/"AI ALLOWED"), daily/total blocked-lookup counter, PIN lock (4-12 digits, lockout after
5 wrong tries), "Always-on VPN" instructions, family filter (adult sites, SafeSearch, gambling, dating/random video chat,
VPN/proxy/secure-DNS services), Private DNS warning, tamper log (kept on the phone only), sensor check, camera/mic guard,
honest limits text, terms dialog on first start (`TERMS_VERSION = 1`).

## Build and signing (`.github/workflows/android.yml` in geopolcoins)
- Runs on push to `main` (paths `human-override/android/**`) and on manual **Run workflow**.
- Unit tests (`test-jvm/`: DNS logic, sensor check, tamper log), then `assembleRelease` + `bundleRelease`.
- Signing: if the secrets `HO_UPLOAD_KEYSTORE_B64`, `HO_UPLOAD_STORE_PASS`, `HO_UPLOAD_KEY_ALIAS`, `HO_UPLOAD_KEY_PASS`
  exist, the log says "Signing with the permanent upload key"; otherwise "No upload key secret yet: signing with a fresh
  random beta key". Check the latest run log to see which one applies today. Never ask the owner for the key or passwords.
- The `.aab` for Play is the artifact `human-override-google-play-aab` (kept 30 days).
- The APK is committed to `human-override/human-override-android.apk` (+ `.sha256`); mindveto's `sync-lists.yml`
  copies it daily to `public/downloads/` (served at `https://mindveto.app/downloads/human-override-android.apk`).
- E2E job: Android emulator API 30 (`e2e.sh`). Not yet tested on Android 14/15/16 or on a real phone
  (HANDOFF: "camera/mic guard + tamper notification not yet tested on a real phone").

## Related website pages (mindveto repo, 8 languages each)
- `/android/` (key `android`): download button, install steps, facts, note "The Google Play version is coming, with a
  15-day free trial of Plus".
- `/pricing/` (`src/i18n/extra.ts` → `PLANS`): Plus €14.99/yr or €1.99/month, "15 days free to try", "From the Google
  Play launch"; Founder offer "first 250 people who install the Android app from Google Play get Plus free for one year".
- `/privacy/`, `/terms/` (terms already mention Google Play purchases), `/download/`.
Any text change there must be made in all 8 language files (`src/i18n/<lang>.ts`, `extra.ts`), see the repo CLAUDE.md.

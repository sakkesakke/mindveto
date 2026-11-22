# 3. Play Console: proposed answers

Proposed answers based on what the code does (see `1-app-facts.md`). The owner clicks **Submit**/**Save** himself.
Google renames sections often: match by meaning, and re-read Google's help text on the day (`6-check-on-the-day.md`).
Never claim something the code does not do.

## Create app
- App name: see `4-store-listing.md` (max 30 characters).
- Default language: English (United Kingdom) or English (United States).
- App or game: **App**. Free or paid: **Free** (in-app products can be added later, the app itself stays free).
- Declarations: developer program policies, US export laws: owner reads and ticks.

## App signing
- **Use Google-generated key** (Play App Signing). The owner's key is only the upload key.

## Policy → App content
| Section | Proposed answer | Why |
| --- | --- | --- |
| Privacy policy | `https://mindveto.app/privacy/` | Covers the Android app, Cloudflare/Quad9 fallback |
| App access | All functionality available without special access | No login, no account |
| Ads | No, the app contains no ads | True |
| Content rating | Fill the IARC questionnaire honestly: category "All other app types"; no violence, sexual content, gambling, user-generated content, chat between users, or location sharing; no purchases (unless billing is added) | The app filters content; it shows none |
| Target audience | **18 and over** (the person who installs and sets the PIN is a parent, teacher or employer) | Choosing ages under 13 brings the Families policy. Re-read the target-audience help text on the day |
| News app | No | |
| COVID-19, health, financial features, government app | No / not applicable | |
| Data safety | See below | |
| VPN service declaration | See below | Uses `VpnService` |
| Advertising ID | No (the app does not use it) | No ads SDK |

## Data safety (draft, check every definition on the day)
- Does the app collect or share any of the required user data types? Proposed: **No data collected, no data shared**,
  because nothing is sent to the developer and the processing happens on the device.
- **Open point for the new chat to settle with Google's definitions:** lookups that are not blocked are forwarded to the
  network's DNS server, and as a fallback to Cloudflare (1.1.1.1) or Quad9 (9.9.9.9). Read Google's Data safety help on
  "collection", "sharing" and the exceptions (for example data sent to a service provider, or user-initiated actions),
  decide honestly, and if in doubt declare it (for example "Web browsing → shared? / processed ephemerally") rather than
  hide it. The privacy policy already discloses it.
- Is data encrypted in transit? The list download uses HTTPS. Plain DNS to the network resolver is not encrypted:
  answer accordingly if the form asks per data type.
- Users can request deletion? Not applicable (no data held by the developer); tamper log and settings are deleted by
  uninstalling.

## VPN service declaration (text proposal)
- Is VPN the core functionality? **No**. Purpose: **Parental control** (and, if offered, **Device security / content
  filtering**). Pick what Google's current list offers that matches.
- Explanation (EN, keep under the field limit):
  "Mindveto uses Android's VpnService only as a local DNS filter on the device. Only DNS lookups are routed to the app;
  names of AI services (and, if the user turns it on, adult, gambling or dating sites) get a 'does not exist' answer.
  Other lookups go to the phone's own DNS server. All other traffic goes straight to the internet, not through any
  server of ours. No traffic or personal data is collected, logged off the device, sold or shared with us. The user
  turns it on and off with the big button and can protect that with a PIN."
- Video (if asked, unlisted YouTube; check the length limit): open the app, accept the terms, tap the big button, show the
  in-app VPN disclosure screen (`2-fix-before-upload.md` item 4) and tap Continue, accept Android's VPN prompt, show the key icon, open chatgpt.com in Chrome (does not load), tap the button again, reload
  (loads). Record with the phone's screen recorder. Script in `5-stappen-eigenaar.md`.

## Permissions questions
- `ACCESS_FINE_LOCATION` is foreground only and limited to Android 12L and older (`maxSdkVersion=32`), used for the
  Wi-Fi sensor check. No background location. If the Console asks about location, explain this.
- No SMS, call log, accessibility, device admin, `QUERY_ALL_PACKAGES` or background location: no extra forms expected.

## Release
- First track: **Closed testing** (personal accounts must run a closed test before production; see bestand 6).
- Release name: versionName. Release notes (EN): "First Google Play release. Block AI apps and sites on this phone with
  one switch. PIN lock, tamper log, optional family filter."
- Countries: all, or start with BE/NL/FR/DE/ES/PT/IT/UK/US/Morocco (owner's choice).

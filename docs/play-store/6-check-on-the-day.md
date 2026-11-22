# 6. Check on the day (Google's rules change)

Open each official page before relying on it, and note the date you checked. Search results found these URLs on
22 Nov 2026; their content was NOT re-read for this folder, so treat every line below as "to verify".
Network note: in the cloud environment `mindveto`, add `support.google.com`, `developer.android.com` and
`play.google.com` to the allowed hosts if they are refused (the user approves that on a card).

| Topic | What to check | Official page |
| --- | --- | --- |
| Closed test for new personal accounts | Search summary 22 Nov 2026: at least 12 testers opted in continuously for 14 days before "Apply for production" (accounts created after 13 Nov 2023). Does it still apply, and to organisation accounts? | https://support.google.com/googleplay/android-developer/answer/14151465 |
| Target API level | Search summary: new apps and updates must target Android 16 (API 36) since 31 Aug 2026. The app targets 36. Is a newer level announced? | https://developer.android.com/google/play/requirements/target-sdk and https://support.google.com/googleplay/android-developer/answer/11926878 |
| VpnService policy + declaration | Allowed purposes (parental control, device security …), the **prominent in-app disclosure** rules (separate notice before the VPN prompt, with consent), the declaration form and the video | https://support.google.com/googleplay/android-developer/answer/12564964 |
| Data safety | Definitions of "collected" and "shared", exceptions, how to treat DNS forwarding (see `3-play-console-answers.md`) | https://support.google.com/googleplay/android-developer/answer/10787469 |
| Store graphics | Icon 512 × 512 32-bit PNG ≤ 1024 KB; feature graphic 1024 × 500 JPEG or 24-bit PNG without alpha; up to 8 screenshots per device type; screenshot pixel limits | https://support.google.com/googleplay/android-developer/answer/9866151 |
| Payments | Digital goods must use Play billing; donations rules (the Ko-fi button); region programmes (EEA external offers, US) | https://support.google.com/googleplay/android-developer/answer/9858738 and https://play.google.com/about/monetization-ads/payments |
| Android developer verification | Applies also to the APK on mindveto.app (sideloading). Search summary: enforcement started in some countries on 30 Sep 2026, global in 2027; Play-verified developers get eligible apps registered automatically. What must be done for the website APK? | https://developer.android.com/developer-verification/guides and https://support.google.com/android-developer-console/answer/16561738 |
| Developer contact details shown in Play | Which details Google shows publicly for a personal account, with and without in-app purchases (owner waited with Microsoft Edge for this reason) | Search Play Console Help: "developer account information" / "contact details" |
| Target audience and Families | When the Families policy applies; parental-control apps | Search Play Console Help: "target audience and content" |
| Google Play badge | Usage guidelines; badge must be self-hosted on mindveto.app (no third-party images or scripts) | Search: "Google Play badge guidelines" |

Write the result of each check (date, what the page says, link) into this file when you use it, then commit.

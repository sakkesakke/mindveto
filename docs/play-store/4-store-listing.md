# 4. Store listing (drafts)

Built from the app's own strings and the mindveto.app texts. Only describe what the build really does.
Limits to re-check on the day: app name 30 characters, short description 80, full description 4000.
Third-party names (ChatGPT, Gemini …) only in the full description, as plain facts, never in the app name or icon.

## Contact details
- Website: `https://mindveto.app/`
- E-mail: `hello@mindveto.app` (forwards to the owner's Gmail)
- Privacy policy: `https://mindveto.app/privacy/`
- Category proposal: **Tools** (parents, schools and offices). Alternative: **Parenting**.
- Tags: parental control, productivity/security, whatever Google offers that fits.

## App name (max 30)
- EN `Mindveto: AI blocker` (20) · NL `Mindveto: AI-blokker` (20) · FR `Mindveto : bloqueur d’IA` (24)

## Short description (max 80)
- EN `Block ChatGPT and 150+ AI apps in every app. PIN lock, tamper log. No account.` (78)
- NL `Blokkeer ChatGPT en 150+ AI-apps in elke app. Pincode, sabotagelog. Gratis.` (75)
- FR `Bloquez ChatGPT et 150+ IA dans toutes les applis. PIN, journal. Sans compte.` (77)
If Google flags a third-party name in the short description, use: EN `Switch off AI chatbots in every app on this phone. PIN lock, tamper log.` (72)
NL says "Gratis": keep it only if the pricing decision is "free at launch".

## Full description, EN
```
Mindveto is a switch that turns AI off on this phone. It blocks ChatGPT, Gemini, Copilot, Claude, Character.AI and 150+ other AI services in every app and browser, from a public block list that updates daily.

Made for parents, schools and offices:
• One big button: AI blocked, or AI allowed.
• PIN lock, so nobody else can switch AI back on in the app.
• Tamper log: wrong PINs and switching off are noted on this phone, with a notification if protection stops.
• Optional family filter: adult sites, SafeSearch in Google, Bing, DuckDuckGo and YouTube, gambling, dating and random video chat, and VPN/proxy services.
• Optional camera and microphone guard: a notification when an app starts using them.

Private by design
Mindveto uses Android's VpnService only as a local filter for address lookups (DNS) on the phone. AI addresses get the answer "does not exist". Other lookups go to the phone's own DNS server, and everything else goes straight to the internet. No account, no ads, no trackers. Nothing you type or visit is sent to us.

Honest limits
• It cannot block AI built into apps you allow, AI that runs fully on the phone, or apps that use their own secure DNS.
• Android allows one VPN at a time, and the phone owner can switch any VPN off in Settings. Turn on "Always-on VPN" and set a PIN.
• New AI tools appear every week. The list updates daily, but one may slip through for a few days.

Made by Amghar Said. Questions: hello@mindveto.app
```
(Adjust the first and last lines once the pricing decision is made. Never mention prices or trials that the build does not offer.)

## Full description, NL and FR
Translate the EN text above. Reuse the app's own NL/FR strings for the limits (`honest_text`, `fam_text`, `guard_text`
in `res/values-nl` and `res/values-fr`) so app and store say the same. The other 5 site languages (ES/DE/PT/IT/AR) are
optional for the store: the app itself is only EN/NL/FR, so say that in those listings or leave them out.

## Graphics
| Asset | Spec to re-check | Have it? |
| --- | --- | --- |
| App icon | 512 × 512 PNG, full square (Google applies the rounded mask) | mindveto `public/icon-512.png` is 512 × 512 but already has rounded corners on white: make a full-square version from `public/brand/app-icon.svg` |
| Feature graphic | 1024 × 500 | No. Make one in the site style ("Kalme controle": chalk/paper/pine, violet only for AI), e.g. based on `public/og.png` (1200 × 630) |
| Phone screenshots | 2 to 8, portrait | No Android ones yet (`docs/store-kit/screenshots/` in geopolcoins are browser-extension shots). Make them on an emulator (API 34+, 1080 × 2400): 1) big button "AI BLOCKED" with counter, 2) PIN card, 3) family filter, 4) tamper log. EN, NL, FR |
| Video | optional YouTube link | Existing promo `https://youtu.be/c-_Isw8tUY8` is about the extension: only use it if it shows the Android app |

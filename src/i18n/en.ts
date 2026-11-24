import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';
import { P as PR } from './protect/en';
import { LK } from './linkable/en';

export const home: Home = {
  title: 'Mindveto: block ChatGPT and 150+ AI tools with one switch',
  desc: 'Block ChatGPT, Gemini, Copilot and 150+ AI tools on browsers, Android, Windows, Mac and networks. PIN lock, exam button, paste guard. Free, no tracking.',
  h1: 'Switch off ChatGPT and 150+ AI tools.',
  motto: 'Your mind gets the last word.', trust: 'Free. No account, no tracking. Made by Amghar Said.', mockOn: 'AI chat is open', mockOff: 'Blocked by Mindveto',
  lead: 'For parents, schools and offices. Mindveto works on a browser, a phone, a computer or a whole network, and a PIN decides who can switch AI back on.',
  switchOn: 'AI', switchOff: 'Veto', switchLabel: 'Try it: switch AI off on this page',
  statusOn: 'AI allowed. Flip it.', statusOff: 'Veto. 150+ AI services blocked.',
  how: 'How it works',
  doorsH: 'Who it is for',
  doors: [
    { key: 'parents', who: 'Parents', why: 'AI companions at midnight, homework written by a chatbot. Lock it on the family PC and the child’s phone. New: a free family filter for porn, gambling and dating sites.', go: 'For parents' },
    { key: 'schools', who: 'Schools', why: 'An exam button for teachers, and files IT can roll out to every school computer today.', go: 'For schools' },
    { key: 'offices', who: 'Offices', why: 'Keep client files, IBANs and contracts out of public chatbots. Allow only the AI your firm approves.', go: 'For offices' },
  ],
  productsH: 'One idea, seven tools',
  productsLead: 'Pick what fits the device. Everything is free to use today.',
  proofH: 'What leaves your device',
  proofP: 'Mindveto checks everything on the device itself. We do not want your data, so we built it so we never get it.',
  ledger: [
    ['Nothing', 'The pages you visit, what you type, what you paste.', true],
    ['Nothing', 'Your name, e-mail address or an account. There is no account.', true],
    ['Once a day', 'The extension downloads the public list of AI addresses. It sends nothing with it.', false],
    ['Only if you join', 'In exam mode, the class code is sent once a minute to ask whether the exam is on. No names.', false],
  ],
  limitsH: 'Honest limits',
  limits: [
    'It works on the browser, phone, computer or network where you install it. A child can still use a friend’s phone.',
    'Whoever controls the whole device can remove it. Use a normal (non-admin) account for children and staff.',
    'New AI tools appear every week. The list updates daily, but one may slip through for a few days.',
  ],
  priceH: 'Free to start',
  priceP: 'Blocking stays free for everyone. Paid plans for families, schools and offices start with the Google Play launch.',
  priceGo: 'See the plans',
};

const L = (s: string) => s; // marks strings that contain inline HTML

export const pages: Record<string, Page> = {
  check: {"title": "Is Mindveto working? Test AI blocking", "desc": "Test in a few seconds whether ChatGPT, Gemini, Claude and other AI sites are really blocked on this device. Free, no account, nothing sent to us.", "h1": "Is it working? Test it here.", "lead": "Open this page on the device you want to check, press the button, and see per AI site whether it is blocked. Test on each device and in each browser.", "blocks": [{"h": "What the test checks", "list": ["Eight well-known AI sites, one by one.", "Blocked means Mindveto (or your network filter) stopped the connection on this device.", "Open means the AI site can be reached from here right now."]}, {"h": "If a site is open", "list": ["Is Mindveto switched on? In the browser, click the Mindveto icon.", "Is the schedule pausing it right now? Then AI is allowed on purpose.", "Did you approve that AI in the settings? Approved AI stays open.", "Are you in another browser or a private window? Each browser needs its own extension."], "note": "The test only shows this device, this browser and this moment. Run it again on your child’s phone or laptop.", "human": true}], "faq": [{"q": "Does the test send my data to Mindveto?", "a": "No. The page only tries to reach the AI sites from your own device. Nothing about the result is sent to us."}, {"q": "Why does a site say “No answer”?", "a": "The site did not respond within six seconds. That can be a slow connection or a block that waits instead of refusing. Try again."}], "related": ["bypass", "download", "help"]},
  bypass: {"title": "How kids get around AI blockers, honestly", "desc": "The tricks children use to get around AI and parental blockers, and for each one: does Mindveto stop it, what you must set up, and what no filter can stop.", "h1": "Bypass tricks, honestly.", "lead": "Children try. Here is what Mindveto stops on its own, what it stops once you set it up, and what no filter can stop. Read it before you rely on any blocker.", "actions": [{"label": "Is it working? Test it", "to": "check", "solid": true}], "blocks": [{"h": "Mindveto stops these", "list": ["Typing the address of another AI site: 150+ AI sites and their sub-sites are blocked.", "Opening an AI site through Google Translate: those copies are blocked too.", "Using Google’s “AI Mode” in search: blocked.", "Switching Mindveto off or changing settings: needs the PIN, and the attempt is written in the tamper log.", "Guessing the PIN: after 5 wrong tries it locks for a while, and that is logged."]}, {"h": "Stopped once you set it up", "list": ["VPN and proxy websites: switch on “Block VPN, proxy and secure-DNS sites” in the family filter.", "A private (incognito) window: in Chrome or Edge, open the extension details and allow it in private windows.", "Another browser on the same computer: install the extension there too, or use the Windows or Mac download, which works for every browser and app.", "Removing the browser extension: use the Windows or Mac download and give your child a normal (non-admin) account, so it cannot be undone.", "Turning off the Android app: turn on “Always-on VPN” and “Block connections without VPN” in Android settings. The app also warns you.", "Changing the clock to escape the schedule: a normal (non-admin) account cannot change the computer’s clock."]}, {"h": "No filter stops these", "list": ["Mobile data or a friend’s hotspot: a Wi-Fi filter stops at the door of your home. The browser, phone and computer versions keep working on any network.", "A friend’s phone or a school computer: no filter at home reaches those.", "AI built into apps such as Snapchat or WhatsApp: it often runs on the app’s own servers, so blocking it would break the app. Switch it off in the app settings where possible.", "An iPhone: there is no Mindveto iPhone app yet. Use Screen Time on the iPhone, or block AI for the whole Wi-Fi."], "note": "No blocker replaces a conversation. Tell your child why the rule exists and when AI is fine.", "human": true}], "related": ["check", "family", "parents"]},
  parents: {
    title: 'Block ChatGPT and AI apps for your child',
    desc: 'Block AI chatbots, AI companions and homework AI on your child’s browser, Android phone and the family PC. PIN lock and schedule. Free.',
    h1: 'Block AI for your child, on every screen they use.',
    lead: 'AI companions that chat at midnight, essays written in ten seconds. Mindveto lets you decide when AI is part of your child’s day, and a PIN keeps it that way.',
    actions: [{ label: 'Download free', to: 'download', solid: true }, { label: 'Which version do I need?', to: 'help' }],
    blocks: [
      { h: 'What you can do', list: [
        'Block 150+ AI chatbots, AI companions, homework helpers and AI image tools with one switch.',
        'Set a PIN so your child cannot turn it off or change the list.',
        'Use a schedule: block only on school days, or only in the evening. School holidays for Belgium, the Netherlands and France are built in.',
        'See a tamper log: wrong PIN attempts and when the switch was turned off.',
        'New: AI friend heads-up. Companion apps such as Character.AI, Replika and Talkie are blocked, and a try puts “AI friend app tried” in the tamper log with a red mark on the icon. Only the time is saved, not the site or the chat. In the browser extension; the Android app and PC downloads block these apps too, without the heads-up. Read more: <a href="/blog/is-character-ai-safe-for-kids/">Is Character.AI safe for kids?</a>',
        'Night mode: one button blocks AI every night from 22:00 to 07:00 (browser extension).',
        'Allow one AI you trust, for example for a school project, and keep the rest blocked.',
        'If you want, also block social media such as TikTok, Instagram and Snapchat in the browser. It is off unless you switch it on.',
        'Family filter, free: block porn and 18+ sites and force SafeSearch in Google, Bing, DuckDuckGo and YouTube. Off until you switch it on. Optional: also block VPN, proxy and secure-DNS sites, so the filter is not easy to skip. Also optional: block gambling and betting sites, and dating apps and random video chat.',
      ]},
      { h: 'Set it up in 10 minutes', steps: [
        L('On the family computer: install the <a href="/browser-extension/">browser extension</a>, or block AI in every app with the <a href="/windows/">Windows</a> or <a href="/mac-linux/">Mac</a> download.'),
        L('On your child’s Android phone: install the <a href="/android/">Android app</a> and turn on “Always-on VPN” so it cannot be skipped.'),
        'Set the same PIN everywhere and keep it to yourself.',
        'Give your child a normal (non-admin) account on the computer. Then they cannot remove it.',
      ]},
      { h: 'A good conversation beats any block', p: [
        'Blocking works best when your child knows why. Tell them what Mindveto does, when AI is allowed, and that the tamper log shows if someone tries to switch it off.',
      ], note: 'Mindveto does not read your child’s messages and sends nothing to us. It only stops AI addresses from opening.', human: true },
    ],
    faq: [
      { q: 'Does it work on iPhone?', a: L('There is no iPhone app yet. You can block AI on an iPhone with our free list and a DNS service: see <a href="/network/">whole network</a>. Apple Screen Time can also block single sites.') },
      { q: 'My child uses a school laptop. Can I install it there?', a: 'Ask the school first. School devices are managed by the school, and many schools can install Mindveto for all pupils at once.' },
      { q: 'Is it really free?', a: 'Yes. Blocking, PIN and schedule stay free. A paid Plus plan with extras for families comes with the Google Play launch.' },
    ],
    related: ['family', 'browser', 'android'],
  },

  schools: {
    title: 'Block AI on school computers, with an exam button',
    desc: 'Block ChatGPT and AI tools on school computers and networks. Exam button for teachers, policy and DNS files for IT. No pupil data.',
    h1: 'AI off during the test. On when the lesson needs it.',
    lead: 'Teachers get an exam button. IT gets ready-made files for every school computer and the school network. Nobody reads what pupils type.',
    actions: [{ label: 'Open the exam button', to: 'exam', solid: true }, { label: 'Files for IT', to: 'network' }],
    blocks: [
      { h: 'For teachers', list: [
        'EU AI Act: what Article 4 on AI literacy asks of your school, with a 6-step plan: <a href="/blog/ai-act-article-4-schools/">read the guide</a>.',
        'Make a class in one click. Pupils join with a code in the extension.',
        'Start exam mode for 30 to 240 minutes. Every AI is blocked in the browsers of your class within a minute.',
        'No accounts, no pupil names, no e-mail addresses.',
      ], actions: [{ label: 'Make a class', to: 'exam' }] },
      { h: 'For IT', list: [
        'Force-install the extension with Chrome and Edge policy (Google Admin, GPO, Intune) so pupils cannot remove it.',
        'Block AI on the school network with files for Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid and common firewalls.',
        'Allow only the AI tools your school approves, and keep everything else blocked.',
      ], actions: [{ label: 'Download the IT pack', to: 'network' }] },
      { h: 'Privacy for pupils', p: [
        'Mindveto checks everything on the device. It does not record which sites pupils visit and it does not read prompts. For exam mode our database keeps only a hashed class code and the exam end time.',
        L('That makes it simple to explain to parents and your data protection officer. Read the <a href="/privacy/">privacy policy</a>.'),
      ]},
      { h: 'Try it for a term', p: [
        L('Free during the pilot. Mail <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> with your school name and the number of devices, and we help you set it up.'),
      ]},
    ],
    faq: [
      { q: 'Can a pupil leave the class or switch it off?', a: 'Not if the school sets the PIN and installs the extension with browser policy. On a computer where the pupil is administrator, they can remove it.' },
      { q: 'Does it block phones in the classroom?', a: 'Exam mode works in the browsers of school computers. For phones on the school Wi-Fi, use the DNS files for the school network.' },
      { q: 'What does it cost later?', a: L('The plan is €1 per pupil per year, minimum €149 per school. See <a href="/pricing/">pricing</a>.') },
    ],
    related: ['exam', 'network', 'browser'],
  },

  offices: {
    title: 'Stop staff pasting client data into ChatGPT',
    desc: 'Paste guard for offices: a warning before IBANs, ID numbers, client lists or confidential text go into AI chats. Allow only approved AI.',
    h1: 'Client data stays out of public chatbots.',
    lead: 'An accountant pastes a bank statement into a chatbot to “summarise it”. Mindveto stops that moment on the screen, before the data leaves the office.',
    actions: [{ label: 'Protect private data in ChatGPT', to: 'paste', solid: true }, { label: 'Pricing for teams', to: 'pricing' }],
    blocks: [
      { h: 'What it does for a firm', list: [
        'Allow only the AI your firm approves (for example Microsoft Copilot with your business account) and block the other 150+.',
        'Warn before IBANs, card numbers, national ID numbers, lists of e-mail addresses, secret keys or text marked “confidential” are pasted into an AI site.',
        'Add your own private words: client names, project codes, file numbers.',
        'Lock the settings with a PIN, and see when someone tried to change them.',
      ]},
      { h: 'Why firms choose it', p: [
        'Big data-loss tools send your data to their cloud to check it, and cost thousands. Mindveto checks on the PC itself, so the text never leaves the office.',
        'It fits accountants, lawyers, notaries, insurance brokers, HR and medical practices: small teams with confidential files and no IT department.',
      ], note: 'In Belgium, the Netherlands and Germany, the works council or staff may need to be informed before you introduce a tool like this. Mindveto reads nothing and sends nothing, which makes that conversation easier.', human: true },
      { h: 'Roll it out', steps: [
        L('Install the <a href="/browser-extension/">browser extension</a> on each work computer, or force-install it with Edge or Chrome policy.'),
        'Tick the AI your firm allows and add your private words.',
        'Set one PIN for the whole office.',
      ]},
    ],
    faq: [
      { q: 'Can it block AI inside Word or Outlook?', a: L('The extension works in the browser. On Windows, the <a href="/windows/">Windows download</a> can also switch off Copilot and Recall built into Windows.') },
      { q: 'Do you see what my staff paste?', a: 'No. The check runs on the computer. Pasted text is never stored or sent.' },
      { q: 'What does it cost?', a: L('The plan for teams is €2.50 per user per month. During the launch it is free. See <a href="/pricing/">pricing</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'AI blocker extension for Chrome, Edge, Brave and Opera',
    desc: 'Free extension that blocks ChatGPT, Gemini, Claude and 150+ AI sites in Chrome, Edge, Brave and Opera. PIN, schedule, paste guard. No tracking.',
    h1: 'The AI switch for your browser.',
    lead: 'One switch blocks 150+ AI chatbots and AI tools. A PIN stops anyone else from changing it. Works in Chrome, Edge, Brave and Opera.',
    actions: [{ label: 'Download v1.8.1 (738 KB)', url: DL + 'human-override-1.8.1.zip', solid: true, download: true }, { label: 'Install steps', url: '#install' }],
    blocks: [
      { h: 'What is inside', list: [
        'Blocks AI chat, AI search, AI image, video, voice and music tools, AI writing and homework tools, AI coding tools and AI note-takers.',
        'PIN lock for the switch and all settings.',
        'Schedule with school holidays for Belgium, the Netherlands and France.',
        L('<a href="/paste-guard/">Paste guard</a> with your own private words.'),
        'Approved AI: allow only the tools your school or company allows.',
        L('Class and <a href="/exam-button/">exam mode</a> for teachers.'),
        'Tamper log and a red mark on the icon after a wrong PIN.',
        'AI friend apps (Character.AI, Replika, Talkie and more) have their own switch, on by default. A blocked try adds “AI friend app tried” to the tamper log and a red mark on the icon. Only the time is saved.',
        'Night mode: one button blocks AI every night, 22:00-07:00.',
        'Your own block and allow lists. The public list updates once a day.',
        'Optional: block social media too (TikTok, Instagram, Snapchat and more). Off until you switch it on.',
        'Family filter: block 60,000+ porn and 18+ sites and force SafeSearch in Google, Bing, DuckDuckGo and YouTube. Off until you switch it on; with a PIN, only you can switch it off. Optional: also block VPN, proxy, Tor and secure-DNS sites, so the filter cannot simply be skipped. Also optional: block gambling and betting sites, and dating apps and random video chat.',
      ]},
      { h: 'Install in one minute', fold: 'Show the install steps', foldLead: 'Store versions are on the way. Until then you install it by hand in one minute.', steps: [
        'Download the zip above and unzip it (right click, “Extract all”).',
        L('Open <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>).'),
        'Switch on “Developer mode” (top right).',
        'Click “Load unpacked” and choose the unzipped folder.',
        'Pin the icon to your toolbar, open it and set a PIN.',
      ], note: 'For parents and schools: on the extension’s “Details” page, switch on “Allow in Incognito”. Otherwise private windows are not blocked.' },
      { h: 'Facts', facts: [
        ['Version', '1.8.1 (Manifest V3)'], ['Size', '738 KB'], ['Browsers', 'Chrome, Edge, Brave, Opera. Firefox and the official stores: coming soon'],
        ['Permissions', 'Blocking rules, local storage, a daily timer'], ['Data sent', 'None. Only the public list is downloaded once a day'], ['Price', 'Free'],
      ]},
    ],
    faq: [
      { q: 'Why is it not in the Chrome Web Store yet?', a: 'Store versions are on the way. Until then you install it by hand in one minute, with the steps above.' },
      { q: 'Why does an older download say “Human Override”?', a: 'That was its name until November 2026. Version 1.3.0 and newer show the name Mindveto. It is the same product.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'Block AI apps on Android',
    desc: 'Android app that blocks ChatGPT, Gemini, Character.AI and 150+ AI services in every app on the phone. PIN and tamper alerts. Nothing sent.',
    h1: 'AI off in every app on the phone.',
    lead: 'Browsers are only half the story: AI apps live on the phone. The Mindveto Android app blocks AI addresses for every app, and tells you if someone tries to switch it off.',
    actions: [{ label: 'Download for Android (389 KB, beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'How it works', p: [
        'The app runs a small local filter for internet names (DNS) on the phone. When an app asks for an AI address, the filter answers that it does not exist. Everything else works as normal.',
        'Only these name lookups pass through the app. Nothing is sent to us.',
        'Optional family filter: switch on “Adult sites” and “SafeSearch” in the app. Porn sites then do not open in any app, and Google, Bing, DuckDuckGo and YouTube show safe results. With a PIN set, switching it off needs the PIN. A third switch blocks VPN, proxy and secure-DNS services, so the filter is not easy to skip. Also optional: block gambling and betting sites, and dating apps and random video chat.',
      ]},
      { h: 'Install', steps: [
        'Open the download link on the phone.',
        'When Android asks, allow “install unknown apps” for your browser.',
        'Open the app and tap the big button.',
        'Turn on “Always-on VPN” and “Block connections without VPN” (the app shows how). Then it cannot be skipped.',
        'Set a PIN.',
      ], note: 'Beta: to update, uninstall the old version first. The Google Play version is coming, with a 15-day free trial of Plus.' },
      { h: 'Facts', facts: [
        ['Version', 'Beta, target Android 16 (SDK 36)'], ['Size', '389 KB'], ['Needs', 'Android 8 or newer'],
        ['Tamper alerts', 'Yes, a notification if protection stops'], ['Data sent', 'None'], ['Price', 'Free during the beta'],
      ]},
    ],
    faq: [
      { q: 'Does it slow down the phone or the battery?', a: 'Hardly. It only answers name lookups; it does not route your traffic through a server.' },
      { q: 'Can I use another VPN at the same time?', a: 'No. Android allows one VPN at a time. Mindveto uses that slot for its local filter.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'Block AI on Windows, in every browser and app',
    desc: 'Free Windows download that blocks ChatGPT and 150+ AI services in every browser and app, and can switch off Copilot and Recall.',
    h1: 'Block AI on the whole Windows PC.',
    lead: 'No extension needed: one download blocks AI addresses for every browser and every app on the computer. It can also switch off the AI built into Windows.',
    actions: [{ label: 'Download for Windows (501 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Install', fold: 'Show the install steps', foldLead: 'Store versions are on the way. Until then you install it by hand in one minute.', steps: [
        'Unzip the download.',
        'Double-click “Start-Mindveto.bat” and click Yes.',
        'Type 1 to block AI. Type 3 to also switch off Copilot, Recall and the AI in Edge and Chrome.',
        'Give children or staff a normal (non-admin) account. Then they cannot undo it.',
        'Type 5 to switch on the family filter: porn and 18+ sites blocked, SafeSearch forced in Google, Bing and YouTube. Type 6 to switch it off. It also blocks VPN, proxy and secure-DNS sites and switches off secure DNS in Chrome, Edge and Firefox. Option 5 also asks about gambling and dating sites.',
      ], note: 'Windows may first say it “protected your PC”. Click “More info”, then “Run anyway”. The script is plain text: you can open it in Notepad and read every line.' },
      { h: 'Facts', facts: [
        ['Works on', 'Windows 10 and 11'], ['How', 'Adds AI addresses to the Windows hosts file, and sets official Windows policies for built-in AI'],
        ['Undo', 'Run it again and type 2 (4 for the built-in AI)'], ['Needs', 'Administrator rights once'], ['Price', 'Free'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'Block AI on Mac and Linux',
    desc: 'Free script that blocks ChatGPT and 150+ AI services in every browser and app on a Mac or Linux computer. One command on, one off.',
    h1: 'One command. AI off on the whole Mac or Linux computer.',
    lead: 'The script adds AI addresses to the system hosts file, so every browser and app on the computer is covered.',
    actions: [{ label: 'Download for Mac and Linux (498 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Install', steps: [
        'Unzip the download.',
        'Open Terminal in the unzipped folder.',
        L('Type <code>sudo sh mindveto.sh on</code> and your password.'),
        L('To allow AI again: <code>sudo sh mindveto.sh off</code>.'),
        L('Family filter (porn and 18+ sites, SafeSearch): <code>sudo sh mindveto.sh family-on</code>, and <code>family-off</code> to undo. It also blocks VPN, proxy and secure-DNS sites. Add <code>gambling dating</code> to also block those sites.'),
      ], note: 'Use a normal (non-admin) account for children. Then they cannot change the hosts file.' },
      { h: 'Facts', facts: [
        ['Works on', 'macOS, Ubuntu, Debian, Fedora and most Linux systems'], ['Undo', 'One command'], ['Price', 'Free'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'Block AI on a whole network: DNS, firewall, policy',
    desc: 'Free lists and an IT pack to block ChatGPT and 150+ AI services on a whole network: Pi-hole, AdGuard, Windows DNS, BIND, Squid, GPO, Intune.',
    h1: 'Block AI for every device on the network.',
    lead: 'For homes, schools, offices and public services. Use our free lists with the filter you already have, or roll out the IT pack today.',
    actions: [{ label: 'Download the IT pack (13 KB)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Free lists', p: ['Add one address to your filter. The lists stay at the same address and are updated when new AI services appear.'], facts: [
        ['AdGuard / uBlock list', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['Hosts file', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Plain domains', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Where to use them', list: [
        'Home or office router with Pi-hole or AdGuard Home: add the list once, every device on the Wi-Fi is covered.',
        'Android and iPhone: a free AdGuard DNS account with our list as user rules, then Private DNS (Android) or a profile (iPhone).',
        'One computer: add the hosts list to the hosts file (admin rights needed).',
      ]},
      { h: 'In the IT pack', list: [
        'Chrome and Edge policy (GPO, Intune, Google Admin) to force-install the extension and block AI sites.',
        'Firefox policy.',
        'Windows Server DNS (PowerShell), BIND RPZ zone, Unbound, dnsmasq.',
        'Squid proxy ACL and a firewall list for Palo Alto, Fortinet and Check Point.',
      ], note: 'DNS lists block whole domains. A few page-level blocks, such as Bing Chat, only work in the browser extension.' },
    ],
    faq: [
      { q: 'Can we use the lists commercially?', a: L('Yes, inside your own organisation. Reselling them needs written permission. See the <a href="/terms/">terms</a>.') },
      { q: 'Do you offer help with a roll-out?', a: L('Yes. Mail <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> with the number of devices and your setup.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Exam button: switch AI off for your class',
    desc: 'Free exam button for teachers: one tap blocks every AI chatbot in your class’s browsers during a test. No accounts, no pupil names.',
    h1: 'No AI during the test.',
    lead: 'One tap switches every AI chatbot off in the browsers of your class, for as long as the test lasts. Free, no accounts, no pupil names.',
    blocks: [
      { h: 'How it works', steps: ['Make a class here. You get a class code and a private teacher link.', 'Pupils open the Mindveto extension, go to “Class · exam mode” and type the code.', 'Tap “Start exam mode”. Within a minute every AI is blocked in their browsers, until the time runs out or you stop it.'] },
    ],
    faq: [
      { q: 'What do pupils need?', a: L('The <a href="/browser-extension/">Mindveto extension</a> in their browser, joined to your class with the code. On school computers the school installs it once.') },
      { q: 'What does your server keep?', a: 'A hashed class code, a hashed teacher key and the exam end time. No names, no e-mail addresses, no IP addresses.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Paste guard: stop private data going into AI chats',
    desc: 'Mindveto warns before IBANs, ID numbers, e-mail lists, secret keys or confidential text are pasted into ChatGPT and other AI sites. Runs locally.',
    h1: 'A second look before you paste.',
    lead: 'People paste first and think later. On AI sites, the paste guard checks what you paste, on your own computer, and asks before private data goes into the chat.',
    actions: [{ label: 'Get the browser extension', to: 'browser', solid: true }, { label: 'For offices', to: 'offices' }],
    blocks: [
      { h: 'What it notices', list: [
        'Bank account numbers (IBAN) and card numbers.',
        'National ID and social security numbers.',
        'Lists of e-mail addresses.',
        'Secret keys, passwords and access tokens.',
        'Text marked “confidential”, “vertrouwelijk” or “confidentiel”.',
        'Your own private words: client names, project codes, file numbers.',
      ]},
      { h: 'What you can choose', steps: [
        'Do not paste.',
        'Paste without the private parts: they are replaced by a placeholder.',
        'Paste anyway, if you are sure.',
      ]},
      { h: 'Where the check runs', p: [
        'On your computer, inside the browser. The pasted text is never stored and never sent, also not to us.',
      ], note: 'It works on AI chat, search, writing and coding sites. It does not watch your e-mail, documents or other websites.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Download Mindveto: browser, Android, Windows, Mac',
    desc: 'Download Mindveto for free: browser extension, Android app, Windows and Mac/Linux scripts, block lists and the IT pack. No account, no tracking.',
    h1: 'Download Mindveto.',
    lead: 'Pick the device you want to protect. Everything is free and needs no account.',
    blocks: [
      { h: 'Browser on a laptop or PC', p: ['Browser extension. Chrome, Edge, Brave and Opera. Version 1.8.1, 738 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-1.8.1.zip', solid: true, download: true }, { label: 'Install steps', to: 'browser' }] },
      { h: 'Android phone or tablet', p: ['Android app (beta). Blocks AI in every app. 389 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Install steps', to: 'android' }] },
      { h: 'Windows PC: every app', p: ['Windows. Every browser and app on the PC. 501 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Install steps', to: 'windows' }] },
      { h: 'Mac or Linux computer', p: ['Mac and Linux. One command, system-wide. 498 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Install steps', to: 'maclinux' }] },
      { h: 'Whole home or office Wi-Fi (IT)', p: ['IT pack and lists. DNS, firewall and browser-policy files. 13 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'All lists', to: 'network' }] },
      { h: 'iPhone or iPad', p: ['There is no iPhone app yet. Block AI for every device on your Wi-Fi with the IT pack, or block sites in Screen Time on the iPhone.'] },
    ],
    related: ['check', 'help', 'pricing'],
  },

  pricing: {
    title: 'Mindveto pricing: Free, Plus, School and Business',
    desc: 'Blocking is free. Plus €14.99 a year for families, €1 per pupil for schools, €2.50 per user a month for offices. Free during the launch.',
    h1: 'Blocking is free. Extras pay for the work.',
    lead: 'Today every feature is free while we launch. Paid plans start with the Google Play version.',
    blocks: [],
    faq: [
      { q: 'When do I have to pay?', a: 'Not now. When paid plans start, you choose yourself whether to upgrade. Nothing is charged automatically and the free plan stays.' },
      { q: 'Is there a launch offer?', a: 'Yes. The first 250 people who install the Android app from Google Play get Plus free for one year. A counter on this page will show how many places are left.' },
      { q: 'Do prices include VAT?', a: 'Yes, prices for consumers include Belgian VAT. Schools and companies get an invoice.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Help and frequently asked questions',
    desc: 'Answers about Mindveto: which version you need, PIN, schedule, privacy, uninstalling, and what Mindveto can and cannot block.',
    h1: 'Help',
    lead: 'Short answers to the questions people ask most. Not here? Mail hello@mindveto.app.',
    blocks: [
      { h: 'Which version do I need?', facts: [
        ['A child’s Android phone', L('<a href="/android/">Android app</a>')],
        ['A family or office computer', L('<a href="/browser-extension/">Browser extension</a>, plus <a href="/windows/">Windows</a> or <a href="/mac-linux/">Mac</a> for every app')],
        ['School computers', L('<a href="/browser-extension/">Extension</a> by browser policy, plus the <a href="/exam-button/">exam button</a>')],
        ['Every device at home or at work', L('<a href="/network/">Network lists</a>')],
      ]},
    ],
    faq: [
      { q: 'I forgot my PIN.', a: 'For safety there is no reset button. Remove the extension in the browser’s extension page (this needs control of the computer) and install it again.' },
      { q: 'A normal website is blocked by mistake.', a: 'Open the extension and add the site to your allow list. Mail us the address, and we fix the public list.' },
      { q: 'An AI tool is not blocked.', a: 'Add it to your own block list now, and mail us the address. We add new AI services to the public list.' },
      { q: 'How do I uninstall it?', a: 'Browser: remove it on the extensions page. Android: switch it off, then uninstall. Windows: run the script and type 2. Mac and Linux: run the script with “off”.' },
      { q: 'Does Mindveto use AI?', a: 'No. Blocking and the paste guard use plain rules on your device.' },
      { q: 'Who makes Mindveto?', a: L('Amghar Said, an independent maker. <a href="/about/">About</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'About Mindveto',
    desc: 'Mindveto is made by Amghar Said, an independent maker. Why we build an AI kill switch, how we keep it private, and what happens if we ever stop.',
    h1: 'People should decide when AI is part of their day.',
    lead: 'Mindveto is made by Amghar Said, an independent maker. It started as Human Override in 2026 and got its own name in November 2026.',
    blocks: [
      { h: 'Who makes it', p: [
        'Amghar Said coordinates educational stays for teenagers in his day job. Technology has been his passion for 30 years, and Mindveto is a project he builds alongside his work.',
        L('Follow him or send a message on <a href="https://www.linkedin.com/in/amghar-said-67a95a22/" rel="me">LinkedIn</a>.'),
      ]},
      { h: 'Why the name', p: [
        'In the 1980s the brain researcher Benjamin Libet described how our conscious mind can stop an urge just before we act: a veto. Mindveto gives that pause to people who want it from AI.',
      ]},
      { h: 'What we promise', list: [
        'No account, no tracking, no ads, no data sales.',
        'Honest limits, written on the product pages, not hidden in small print.',
        'Blocking stays free.',
        'Website in 8 languages; e-mail support in English, Dutch and French.',
      ]},
      { h: 'If we ever stop', p: [
        'Everything you installed keeps working: the extension, the app and the scripts block from the list already on your device. You can always remove them in the normal way.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Privacy policy',
    desc: 'Mindveto collects no personal data: no cookies, no trackers, no accounts. What the site, apps and exam mode process, and your GDPR rights.',
    h1: 'Privacy policy',
    lead: 'Short version: we collect no personal data. This page explains the few things that do touch a server, and your rights. Version 2, 13 November 2026.',
    blocks: [
      { h: 'Who is responsible', p: [L('Amghar Said, Belgium. Contact: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'This website', list: [
        'No cookies, no analytics, no trackers, no advertising, no fonts or scripts from other companies.',
        'The site is hosted on GitHub Pages (GitHub, Inc., USA). Like every web host, GitHub briefly processes your IP address in server logs to deliver and protect the site. We do not receive these logs.',
        'The exam button page stores your class code and teacher key in your own browser (local storage), only so the page works. You can remove them with “Forget this class”.',
        "The “Is it working?” test page only contacts AI sites when you press its button. Those sites then see your IP address, as with a normal visit. The result stays in your browser.",
      ]},
      { h: 'The apps and scripts', list: [
        'Blocking, the paste guard and all settings work on your device. Pasted text is never stored or sent.',
        'The browser extension downloads the public block list once a day. It sends no personal data with that request.',
        'The Android app only filters internet name lookups on the phone. It sends nothing to us.',
        'To look up website names, the Android app passes lookups that are not blocked to the DNS server your phone already uses. If that does not answer, it uses Cloudflare (1.1.1.1) or Quad9 (9.9.9.9). Those services see the website name and your IP address, as with any DNS lookup.',
      ]},
      { h: 'Exam mode', p: [
        'When a teacher makes a class, our database (Supabase, Frankfurt, EU) stores a hashed class code, a hashed teacher key and the exam end time. Extensions in the class send only the class code once a minute. To stop abuse, a hashed version of the IP address is kept for one hour. No names, no e-mail addresses.',
        'Legal basis: our legitimate interest in offering the exam button safely (GDPR article 6.1.f).',
      ]},
      { h: 'E-mail', p: ['If you mail us, we use your message only to answer you, and delete it when it is no longer needed.'] },
      { h: 'Your rights', p: [
        L('You can ask for access, correction or deletion, and object. Mail <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. You can also complain to the Belgian Data Protection Authority (<a href="https://www.dataprotectionauthority.be" rel="noopener">dataprotectionauthority.be</a>) or the authority in your country.'),
      ]},
    ],
  },

  terms: {
    title: 'Terms of use',
    desc: 'Terms of use for Mindveto: what it does and does not do, your responsibility, no warranty, limited liability, ownership and Belgian law.',
    h1: 'Terms of use',
    lead: 'Mindveto is software made by Amghar Said. It helps block AI services, but no tool can block every AI. Version 2, 12 November 2026. Applies to the extension, the Android app, the Windows, Mac and Linux scripts, the lists and the IT pack.',
    blocks: [
      { h: '1. Who provides it', p: [L('Mindveto (formerly Human Override) is created and owned by Amghar Said (“the author”). Contact: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Accepting these terms', p: ['By installing, downloading or using Mindveto you accept these terms. If you do not agree, do not use it and remove it.'] },
      { h: '3. What it does and does not do', p: ['Mindveto tries to stop access to AI services by blocking their web addresses. It does not guarantee that no AI can be reached. It cannot block AI built into services you allow, AI that runs offline on a device, other browsers, apps or devices, VPNs, proxies, other DNS services, or new AI services not yet on the list. Anyone with enough access to the device can change or remove the settings. Lists may block a site by mistake or miss one.'] },
      { h: '4. Your responsibility', p: ['You decide where and how you use Mindveto. Schools, companies and other organisations remain fully responsible for their own policies, supervision, security, testing and compliance with law, including privacy and employment law. Test it before relying on it. Do not use it to break the law or to monitor people without a legal basis.'] },
      { h: '5. Provided “as is”', p: ['Mindveto is provided “as is” and “as available”, without any warranty of any kind, express or implied, including fitness for a particular purpose, accuracy, availability or freedom from errors.'] },
      { h: '6. Limitation of liability', p: ['To the maximum extent permitted by law, Amghar Said is not liable for any direct or indirect damage, loss of data, loss of income, lost access, missed blocks, wrongly blocked sites, or any other consequence of using or not being able to use Mindveto. For paid plans, total liability is limited to the amount you paid in the last twelve months. Nothing in these terms limits liability that cannot be limited by law, such as for intent or gross negligence, or mandatory consumer rights.'] },
      { h: '7. Ownership', p: ['Mindveto, its code, block lists, icons, texts and name are © 2026 Amghar Said, all rights reserved. You may use the official, unmodified version. Copying, modifying, redistributing or selling it requires written permission.'] },
      { h: '8. Privacy', p: [L('Mindveto does not collect personal data. See the <a href="/privacy/">privacy policy</a>.')] },
      { h: '9. Paid plans', p: ['Paid plans, when offered, are described on the pricing page before you buy. Purchases through Google Play also follow Google Play’s terms. Consumers in the EU keep their legal rights, including the right of withdrawal where it applies.'] },
      { h: '10. Changes and end', p: ['The author may change Mindveto, the lists or these terms, or stop offering it. The current version of these terms is always on this page.'] },
      { h: '11. Law', p: ['These terms are governed by Belgian law, without prejudice to the mandatory rules of the country where a consumer lives.'] },
    ],
  },

  legal: {
    title: 'Legal information',
    desc: 'Legal information about Mindveto: who publishes the site and the software, how to contact us, hosting and intellectual property.',
    h1: 'Legal information',
    lead: 'Who publishes this website and the Mindveto software.',
    blocks: [
      { h: 'Publisher', facts: [
        ['Name', 'Amghar Said'], ['Country', 'Belgium'], ['E-mail', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Enterprise number', COMPANY.kbo || 'Will be shown here before any paid plan starts'],
        ...(COMPANY.vat ? [['VAT number', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Business address', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Hosting', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.'] },
      { h: 'Intellectual property', p: ['© 2026 Amghar Said. All rights reserved. Product names such as ChatGPT, Gemini, Claude and Copilot belong to their owners and are named only to describe what Mindveto blocks. Mindveto is not affiliated with them.', 'Font: Atkinson Hyperlegible Next, SIL Open Font License, served from this site. School holiday dates: OpenHolidays API (ODbL).'] },
      { h: 'Sources and licences', p: [L('School holiday dates: OpenHolidays API data, <a href="https://www.openholidaysapi.org/">openholidaysapi.org</a>, ODbL 1.0. Adult and gambling block lists: Sinfonietta/hostfiles, StevenBlack/hosts (clefspeare13) and bigdargon/hostsVN, MIT licence; full notices ship with every download. Font: Atkinson Hyperlegible Next, Braille Institute, SIL Open Font License 1.1.')] },
    ],
  },
  guide: {
    title: 'How to block ChatGPT on any device (2026 guide)',
    desc: 'Block ChatGPT on Chrome, Windows, Mac, Android, iPhone or a whole Wi-Fi network. Free step-by-step methods, with the honest limits of each one.',
    h1: 'How to block ChatGPT, on every device.',
    lead: 'The short answer: block the address chatgpt.com (and chat.openai.com) in the browser, on the computer, on the phone or on the router. This page shows the free way to do each one, and which one fits your situation.',
    actions: [{ label: 'Download Mindveto free', to: 'download', solid: true }, { label: 'Which version do I need?', to: 'help' }],
    blocks: [
      { h: 'Pick the method that fits', facts: [
        ['One browser (Chrome, Edge, Brave, Opera)', L('<a href="/browser-extension/">Browser extension</a>: one switch, PIN lock. About 1 minute.')],
        ['A whole Windows PC, every browser and app', L('<a href="/windows/">Windows download</a>: adds the AI addresses to the hosts file.')],
        ['A Mac or Linux computer', L('<a href="/mac-linux/">One command</a> in Terminal.')],
        ['An Android phone, also inside apps', L('<a href="/android/">Android app</a> with a local filter and a PIN.')],
        ['An iPhone', L('A DNS service with our <a href="/network/">free list</a>, or Apple Screen Time for single sites.')],
        ['Every device on the Wi-Fi', L('<a href="/network/">Network lists</a> for Pi-hole, AdGuard Home or the school or office DNS.')],
      ]},
      { h: 'Block ChatGPT in Chrome or Edge', steps: [
        L('Download the <a href="/browser-extension/">Mindveto extension</a> and unzip it.'),
        L('Open <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>) and switch on “Developer mode”.'),
        'Click “Load unpacked” and choose the unzipped folder.',
        'Open Mindveto, flip the switch and set a PIN. ChatGPT, Gemini, Copilot and 150+ other AI tools now show a blocked page.',
        'On the extension’s “Details” page, switch on “Allow in Incognito”, or private windows are not blocked.',
      ]},
      { h: 'Block ChatGPT without any software', p: [
        L('You can block it by hand. On a computer, add these lines to the hosts file (administrator rights needed): <code>0.0.0.0 chatgpt.com</code> and <code>0.0.0.0 chat.openai.com</code>. On a router with Pi-hole or AdGuard Home, add the same two names to the block list.'),
        L('The catch: ChatGPT is one of many. Gemini, Copilot, Claude, Character.AI and the rest stay open, and new ones appear every week. That is why Mindveto keeps a <a href="/network/">public list of 150+ AI services</a> that updates daily. You can use that list without installing anything from us.'),
      ]},
      { h: 'Honest limits of every method', list: [
        'A block works only where you install it. A child or colleague can still use another phone or another network.',
        'Whoever is administrator of the device can remove a block. Give children and staff a normal (non-admin) account.',
        'Browser extensions do not cover other browsers or apps. For that, block on the computer, the phone or the network.',
        'Lists that block whole domains cannot block a single page. A few page-level blocks, such as Bing Chat, only work in the browser extension.',
      ], note: 'Blocking works best together with a clear rule: when is AI allowed, and why not now. Mindveto reads nothing and sends nothing; it only stops AI addresses from opening.', human: true },
    ],
    faq: [
      { q: 'How do I block ChatGPT on my child’s phone?', a: L('On Android, install the <a href="/android/">Mindveto app</a>, turn on “Always-on VPN” and set a PIN. On an iPhone, use a DNS service with our free list, or Apple Screen Time to block chatgpt.com. See <a href="/parents/">for parents</a>.') },
      { q: 'How do I block ChatGPT on school computers?', a: L('Force-install the extension with Chrome or Edge policy and block AI on the school DNS with the IT pack. Teachers can also use the <a href="/exam-button/">exam button</a>. See <a href="/schools/">for schools</a>.') },
      { q: 'How do I block ChatGPT at work but allow Copilot?', a: L('In the extension, tick the AI your firm approves and keep the rest blocked. The <a href="/paste-guard/">paste guard</a> also warns before private data is pasted into an AI site. See <a href="/offices/">for offices</a>.') },
      { q: 'Is blocking ChatGPT free?', a: 'Yes. Blocking, the PIN and the schedule are free in Mindveto, and the block lists are free to use.' },
      { q: 'Can I block ChatGPT only during homework or work hours?', a: 'Yes. The browser extension has a schedule, with school holidays for Belgium, the Netherlands and France built in.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Free AI policy template for small offices',
    desc: 'A one-page AI policy for accountants, lawyers and other small offices: approved tools, what never goes into AI, and how to check it. Free, EN/NL/FR.',
    h1: 'An AI policy your team reads in two minutes.',
    lead: 'A one-page template for accountants, lawyers, notaries and other small offices. Copy it, fill in the parts in brackets, and share it with your team.',
    actions: [{ label: 'Print or save as PDF', url: '#print', solid: true }, { label: 'For offices', to: 'offices' }],
    blocks: [
      { h: 'Why have one', p: ['Since 2 February 2025, the EU AI Act asks organisations that use AI tools to help their staff understand them (AI literacy). A short written policy is a simple first step, and it protects your clients’ data.'] },
      { h: '1. Purpose', p: ['We use AI where it helps us work better. Client data and confidential files stay protected. This policy says which tools we use and what never goes into them.'] },
      { h: '2. Approved AI tools', list: ['[Tool, for example Microsoft Copilot with our business account]: allowed for [drafting, summarising our own texts].', 'All other AI chatbots, AI search and AI writing tools are not used on work devices or for work.'] },
      { h: '3. Never put into an AI tool', list: ['Names of clients together with their data.', 'Bank account and card numbers.', 'National register, social security or other ID numbers.', 'Contracts, tax returns, medical or HR files.', 'Passwords, access codes and keys.', 'Anything marked confidential.'] },
      { h: '4. Before you use AI output', list: ['Check facts, figures and sources yourself.', 'A person signs off on every advice or letter that goes to a client.', 'Say that AI helped when a client asks, or when the law or your professional rules require it.'] },
      { h: '5. How we keep to it', list: ['On work computers, Mindveto blocks AI tools we did not approve and warns before private data is pasted into an AI chat. The check runs on the computer; nothing is sent.', 'The settings are locked with a PIN held by [name].'] },
      { h: '6. Mistakes and questions', p: ['Pasted something by mistake? Tell [name] the same day. We would rather know early than late.', 'Owner of this policy: [name]. Last review: [date]. Next review: [date plus six months].'], note: 'This template helps you start; it is not legal advice. Check your professional rules, and inform staff before you introduce new IT rules.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },

  family: {"title": "Block porn, gambling and dating sites for free", "desc": "Free family filter: block porn and 18+ sites, gambling and dating apps, force SafeSearch and stop VPN tricks. For browser, Android, Windows and Mac.", "h1": "Block porn, gambling and dating sites.", "lead": "Mindveto has a family filter next to the AI switch. You choose what it blocks, and a PIN keeps your choice in place. It is off until you switch it on.", "actions": [{"label": "Download free", "to": "download", "solid": true}, {"label": "For parents", "to": "parents"}], "blocks": [{"h": "What you can switch on", "list": ["Adult sites: 60,000+ porn and 18+ sites.", "AI “undress” apps that make fake nude photos of real people: blocked together with the adult sites.", "SafeSearch: Google, Bing, DuckDuckGo and YouTube show safe results only, whatever the search settings say.", "Gambling: 1,600 betting, casino and poker sites.", "Dating: 65 dating apps and random video chat sites.", "Anti-bypass: well-known VPN, proxy and Tor sites, so the filter is not skipped with one click.", "Each part has its own switch. It works apart from the AI switch."]}, {"h": "Switch it on", "steps": ["Browser: install the <a href=\"/browser-extension/\">browser extension</a>, open it and tick what you want under “Family filter”.", "Android: install the <a href=\"/android/\">Android app</a> and use the switches under “Family filter”. It then works in every app on the phone.", "Windows: run the <a href=\"/windows/\">Windows download</a> and type 5. It asks about gambling and dating.", "Mac and Linux: use the <a href=\"/mac-linux/\">Mac and Linux download</a> and type <code>sudo sh mindveto.sh family-on gambling dating</code>.", "In the extension and the app, set a PIN: switching the filter off then needs the PIN. On a computer, give your child a normal (non-admin) account."]}, {"h": "Honest limits", "list": ["No filter catches everything. New sites appear every day, and images can still show up in chats, apps and social media.", "The lists stop known sites. A child with a friend’s phone or an admin account can get around them.", "On Android the filter works while Mindveto is on. Turn on “Always-on VPN” so it stays on."], "note": "Mindveto does not record which sites are visited and sends nothing to us. A filter helps; talking with your child helps more.", "human": true}, {"h": "Facts", "facts": [["Price", "Free"], ["Adult sites", "60,000+"], ["Gambling sites", "1,600"], ["Dating and video chat", "65"], ["Lists", "Open lists (MIT licence) plus our own lists"], ["Data sent", "None"]]}], "faq": [{"q": "Is the family filter free?", "a": "Yes. It is part of the free Mindveto downloads today."}, {"q": "Does it also block AI?", "a": "Only if you want that. The AI switch and the family filter work apart: you can use one without the other."}, {"q": "Does it work on an iPhone or on the whole Wi-Fi?", "a": "There is no iPhone app yet. You can use the same free lists in a DNS filter such as AdGuard Home or Pi-hole: see <a href=\"/network/\">whole network</a>."}, {"q": "Will it block a normal site by mistake?", "a": "That can happen with any list. In the browser extension you can allow a site you trust; your choice wins over the filter."}], "related": ["parents", "browser", "android"]},
  blog: {"title": "Mindveto blog: AI, children and schools", "desc": "Clear answers for parents, schools and offices about AI apps, AI friends and the EU AI Act. Checked facts, honest limits, written by Amghar Said.", "h1": "Mindveto blog.", "lead": "Short, checked answers to the questions parents, teachers and offices ask us about AI. Every article lists its sources.", "blocks": [{"h": "Articles", "list": ["<a href=\"/blog/chatgpt-customer-data-gdpr/\"><strong>ChatGPT and customer data under the GDPR</strong></a> What OpenAI does with what you paste, what the GDPR expects from your office, and a 5-step plan.", "<a href=\"/blog/is-character-ai-safe-for-kids/\"><strong>Is Character.AI safe for kids?</strong></a> The age rules in 2026, the real risks, and how to block Character.AI and similar AI friend apps.", "<a href=\"/blog/ai-act-article-4-schools/\"><strong>AI Act Article 4 for schools</strong></a> What the AI literacy rule asks of a school in 2026, and a 6-step plan you can start this week."]}, {"h": "Data", "list": ["<a href=\"/ai-statistics/\"><strong>Children, schools and AI: the numbers (2026)</strong></a> 24 checked statistics on chatbots, AI companions, cheating, deepfakes and data leaks, each with its source. Free to quote."]}], "related": ["parents", "schools", "guide"]},
  charai: {"title": "Is Character.AI Safe for Kids? A Parent’s Guide (2026)", "desc": "Is Character.AI safe for kids? The age limit, the 2025 ban on open chats for under-18s, the real risks and how to block Character.AI on any device.", "h1": "Is Character.AI safe for kids?", "lead": "Short answer: not for children. Character.AI is for ages 13 and up (16 and up in the EU), and since November 2025 under-18 accounts can no longer chat freely with its characters. But age checks can be fooled, and many similar “AI friend” apps have weaker rules.", "blocks": [{"h": "What Character.AI is", "p": ["Character.AI is a website and app where you chat with AI characters: made-up people, film and game heroes, “boyfriend” or “girlfriend” bots and famous people. Most characters are made by other users.", "The characters answer at once, at any hour, remember what you told them and are always kind. That is exactly what makes them feel like a friend, and why children can spend hours with them."]}, {"h": "The age rules in 2026", "list": ["Minimum age: 13, and 16 in the European Union.", "Since late November 2025, accounts of users under 18 can no longer have open-ended chats with characters. Teens keep other features, such as interactive Stories.", "Character.AI checks the age of every account with signals such as behaviour, and can ask for a selfie or ID check if it thinks someone is under 18.", "No age check is perfect. A child who uses a parent’s account, or an older friend’s, can still reach the adult chats."]}, {"h": "The real risks for children", "list": ["Emotional attachment: a character that is always there can replace real friends and sleep. Watch for night use.", "Unsuitable content: user-made characters can steer a chat towards sex, violence or self-harm, even when filters exist.", "Serious cases: in October 2024 a mother in Florida sued Character.AI after the death of her 14-year-old son, who had spent months chatting with a character. The company changed its teen rules in the year that followed.", "Privacy: everything a child types is stored on the company’s servers.", "Copycats: dozens of other AI friend apps (Talkie, Chai, Janitor AI, Replika and more) offer the same kind of chat, often with weaker age checks."]}, {"h": "Signs to watch", "list": ["Long phone or laptop use late at night, often with headphones.", "Talking about an “AI friend” or a character as if it were a real person.", "Hiding the screen, getting upset when the device is taken away, losing interest in friends."]}, {"h": "How to block Character.AI and similar apps", "steps": ["In the browser (Chrome, Edge, Brave, Opera): install the free <a href=\"/browser-extension/\">Mindveto extension</a>. The switch “AI friend apps” is on by default and blocks Character.AI, Replika, Talkie, Chai, Janitor AI and 20+ more. A try shows up in the tamper log with a red mark on the icon, so you know without reading any chats.", "On Android: install the <a href=\"/android/\">Mindveto app</a> (it blocks these sites in every app) and in Google Family Link block the Character.AI app and turn on approval for new downloads.", "On iPhone or iPad: open Settings, then Screen Time, Content &amp; Privacy Restrictions, App Store, Media, Web &amp; Games, Web Content. Choose “Limit Adult Websites” and add character.ai under “Never Allow”. Also block the app under App Store purchases.", "For every device at home: use our free lists in a DNS filter on the Wi-Fi, see <a href=\"/network/\">whole network</a>.", "Set a PIN in Mindveto and give your child a normal (non-admin) account, so the block stays on."]}, {"h": "Talk first, block second", "p": ["Ask what your child likes about the character. Often it is attention, someone who listens. Explain that a chatbot is built to keep you talking, and agree on rules together. A block works best when your child knows why it is there."], "note": "Mindveto does not read messages and sends nothing to us. The AI friend heads-up only saves the time of a try, never the site or the chat.", "human": true}], "faq": [{"q": "What age is Character.AI for?", "a": "13 and up, and 16 and up in the European Union. Since November 2025 users under 18 cannot have open-ended chats with characters."}, {"q": "Does Character.AI have parental controls?", "a": "It offers “Parental Insights”: a weekly e-mail to a parent with time spent and the most-used characters, not the chats themselves. The teen has to add the parent’s e-mail, so it only works with their cooperation."}, {"q": "Can my child get around a block?", "a": "Sometimes: with another phone, a friend’s Wi-Fi or an admin account. That is why a PIN, a normal user account and a conversation matter as much as the block. See our honest list of <a href=\"/bypass-tricks/\">bypass tricks</a>."}, {"q": "Is Mindveto free?", "a": "Yes. The browser extension, the Android app and the computer downloads are free to use."}], "related": ["parents", "browser", "android"], "article": {"date": "2026-11-18", "sources": [["TechCrunch: Character.AI ends open-ended chat for under-18s (29 Oct 2025)", "https://techcrunch.com/2025/10/29/character-ai-is-killing-the-chatbot-experience-for-minors/"], ["eSafety Commissioner (Australia): Character.AI guide", "https://www.esafety.gov.au/key-topics/esafety-guide/characterai"], ["Internet Matters: What is Character.AI? Parent guide", "https://www.internetmatters.org/hub/news-blogs/what-is-character-ai-parent-guide/"], ["Google Family Link Help: manage your child's apps", "https://support.google.com/families/answer/7101025"]]}},
  aiact: {"title": "AI Act Article 4 for Schools: What to Do in 2026", "desc": "Does the EU AI Act apply to schools? What Article 4 on AI literacy asks in 2026 after the Digital Omnibus change, and a 6-step plan for your school.", "h1": "AI Act Article 4 for schools: what to do.", "lead": "Short answer: yes, it applies to your school if staff use AI tools. Article 4 asks the school to take measures that build the AI literacy of its staff. There is no exam or certificate, but you should be able to show what you did.", "blocks": [{"h": "Does the AI Act apply to my school?", "p": ["The AI Act calls an organisation that uses an AI system under its own authority a “deployer”. A school whose teachers use ChatGPT or Copilot, an AI marking tool or the AI feature of a learning platform is a deployer.", "Article 4 is about staff and other people who use AI on behalf of the school. Pupils are not covered by Article 4 itself, but teaching them about AI is the logical next step."]}, {"h": "What Article 4 says in 2026", "list": ["It applies since 2 February 2025, in every EU country.", "The 2026 “Digital Omnibus” change, in force since 27 July 2026, rewrote it: the school must take measures to support the AI literacy of its staff, but does not have to guarantee a set level for every person.", "National market surveillance authorities supervise the AI Act from August 2026.", "The AI Act sets no separate fine for Article 4 alone. But if something goes wrong, for example pupil data pasted into a free chatbot, missing training can count against the school, also under the GDPR.", "Some school uses of AI are “high-risk” (Annex III): AI that decides on admission, grades work, places pupils in a level or watches pupils during tests. Stricter rules apply to those, on a later date after the 2026 postponement."]}, {"h": "A 6-step plan for this school year", "steps": ["List the AI tools in use: also the free ones teachers use on their own, and AI features inside tools you already have.", "Decide which tools are allowed and write a short AI policy. Start from our free <a href=\"/ai-policy-template/\">AI policy template</a>.", "Give short training per role: for all staff what AI is, why it makes mistakes, and why pupil data never goes into a free chatbot; more for IT, care and management staff.", "Tell parents and pupils what the rules are, for example with a letter at the start of the term.", "Set rules for tests and exams. The free <a href=\"/exam-button/\">exam button</a> switches AI off for a whole class during a test.", "Keep a simple record: date, who took part, what was covered. That is your proof."]}, {"h": "What you can show an inspector", "list": ["Your AI policy and the list of approved tools.", "Training dates, topics and who took part.", "The letter to parents and the rules for tests.", "The settings you use on school devices."]}, {"h": "Where Mindveto helps, and where it does not", "list": ["Approved AI: allow only the tools in your policy and keep the rest blocked.", "The <a href=\"/paste-guard/\">paste guard</a> warns before pupil data, ID numbers or confidential text go into an AI site.", "The exam button blocks AI for a whole class during a test.", "Mindveto is not a training course and does not make a school compliant on its own. The training and the policy are your part."], "note": "This page is general information, not legal advice. Check the official text on EUR-Lex and the guidance of your education ministry."}], "faq": [{"q": "Do teachers need an AI literacy certificate?", "a": "No. Article 4 does not ask for a certificate or a test. It asks the school to take suitable measures, such as training, and it helps to write down what you did."}, {"q": "Is there a fine for ignoring Article 4?", "a": "The AI Act has no separate fine for Article 4 alone. National authorities supervise it, and missing training can count against a school when another rule is broken, for example the GDPR."}, {"q": "Does it also cover pupils?", "a": "Article 4 covers staff and others who use AI on behalf of the school. Pupils are not named, but most schools also teach pupils about AI."}, {"q": "Does the AI Act apply outside the EU?", "a": "It applies to schools in the EU that use AI, and to companies that offer AI in the EU, wherever they are based."}], "related": ["schools", "policy", "exam"], "article": {"date": "2026-11-18", "sources": [["EUR-Lex: AI Act, Regulation (EU) 2024/1689", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"], ["European Commission: AI talent, skills and literacy", "https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy"], ["KI-Campus: AI Omnibus recalibrates Article 4, AI literacy remains mandatory", "https://ki-campus.org/en/blog/eu-ai-act-ai-omnibus-recalibrates-article-4-ai-literacy-remains-mandatory"], ["CMS: Compulsory or optional? AI literacy and the AI Act", "https://cms.law/en/bel/legal-updates/compulsory-or-optional-ai-literacy-a-central-component-of-compliance-with-ai-act"]]}},
  ...PR.pages,
  ...LK.pages,
};

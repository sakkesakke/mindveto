import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';

export const home: Home = {
  title: 'Mindveto: block ChatGPT and 150+ AI tools with one switch',
  desc: 'Block ChatGPT, Gemini, Copilot and 150+ AI tools on browsers, Android, Windows, Mac and networks. PIN lock, exam button, paste guard. Free, no tracking.',
  h1: 'Your mind gets the last word.',
  lead: 'Mindveto switches off ChatGPT, Gemini, Copilot and 150+ other AI tools on a browser, a phone, a computer or a whole network. A PIN decides who can switch them back on.',
  switchOn: 'AI', switchOff: 'Veto', switchLabel: 'Try it: switch AI off on this page',
  statusOn: 'AI allowed. Flip it.', statusOff: 'Veto. 150+ AI services blocked.',
  how: 'How it works',
  doorsH: 'Who it is for',
  doors: [
    { key: 'parents', who: 'Parents', why: 'AI companions at midnight, homework written by a chatbot. Lock it on the family PC and the child’s phone.', go: 'For parents' },
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
        'Allow one AI you trust, for example for a school project, and keep the rest blocked.',
        'If you want, also block social media such as TikTok, Instagram and Snapchat in the browser. It is off unless you switch it on.',
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
    related: ['browser', 'android', 'windows'],
  },

  schools: {
    title: 'Block AI on school computers, with an exam button',
    desc: 'Block ChatGPT and AI tools on school computers and networks. Exam button for teachers, policy and DNS files for IT. No pupil data.',
    h1: 'AI off during the test. On when the lesson needs it.',
    lead: 'Teachers get an exam button. IT gets ready-made files for every school computer and the school network. Nobody reads what pupils type.',
    actions: [{ label: 'Open the exam button', to: 'exam', solid: true }, { label: 'Files for IT', to: 'network' }],
    blocks: [
      { h: 'For teachers', list: [
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
    actions: [{ label: 'See the paste guard', to: 'paste', solid: true }, { label: 'Pricing for teams', to: 'pricing' }],
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
    actions: [{ label: 'Download v1.3.0 (93 KB)', url: DL + 'human-override-1.3.0.zip', solid: true, download: true }, { label: 'Install steps', url: '#install' }],
    blocks: [
      { h: 'What is inside', list: [
        'Blocks AI chat, AI search, AI image, video, voice and music tools, AI writing and homework tools, AI coding tools and AI note-takers.',
        'PIN lock for the switch and all settings.',
        'Schedule with school holidays for Belgium, the Netherlands and France.',
        L('<a href="/paste-guard/">Paste guard</a> with your own private words.'),
        'Approved AI: allow only the tools your school or company allows.',
        L('Class and <a href="/exam-button/">exam mode</a> for teachers.'),
        'Tamper log and a red mark on the icon after a wrong PIN.',
        'Your own block and allow lists. The public list updates once a day.',
        'Optional: block social media too (TikTok, Instagram, Snapchat and more). Off until you switch it on.',
      ]},
      { h: 'Install in one minute', fold: 'Show the install steps', foldLead: 'Store versions are on the way. Until then you install it by hand in one minute.', steps: [
        'Download the zip above and unzip it (right click, “Extract all”).',
        L('Open <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>).'),
        'Switch on “Developer mode” (top right).',
        'Click “Load unpacked” and choose the unzipped folder.',
        'Pin the icon to your toolbar, open it and set a PIN.',
      ], note: 'For parents and schools: on the extension’s “Details” page, switch on “Allow in Incognito”. Otherwise private windows are not blocked.' },
      { h: 'Facts', facts: [
        ['Version', '1.3.0 (Manifest V3)'], ['Size', '93 KB'], ['Browsers', 'Chrome, Edge, Brave, Opera. Firefox and the official stores: coming soon'],
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
    actions: [{ label: 'Download for Android (45 KB, beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'How it works', p: [
        'The app runs a small local filter for internet names (DNS) on the phone. When an app asks for an AI address, the filter answers that it does not exist. Everything else works as normal.',
        'Only these name lookups pass through the app. Nothing is sent to us.',
      ]},
      { h: 'Install', steps: [
        'Open the download link on the phone.',
        'When Android asks, allow “install unknown apps” for your browser.',
        'Open the app and tap the big button.',
        'Turn on “Always-on VPN” and “Block connections without VPN” (the app shows how). Then it cannot be skipped.',
        'Set a PIN.',
      ], note: 'Beta: to update, uninstall the old version first. The Google Play version is coming, with a 15-day free trial of Plus.' },
      { h: 'Facts', facts: [
        ['Version', 'Beta, target Android 16 (SDK 36)'], ['Size', '45 KB'], ['Needs', 'Android 8 or newer'],
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
    actions: [{ label: 'Download for Windows (7 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Install', fold: 'Show the install steps', foldLead: 'Store versions are on the way. Until then you install it by hand in one minute.', steps: [
        'Unzip the download.',
        'Double-click “Start-Mindveto.bat” and click Yes.',
        'Type 1 to block AI. Type 3 to also switch off Copilot, Recall and the AI in Edge and Chrome.',
        'Give children or staff a normal (non-admin) account. Then they cannot undo it.',
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
    actions: [{ label: 'Download for Mac and Linux (5 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Install', steps: [
        'Unzip the download.',
        'Open Terminal in the unzipped folder.',
        L('Type <code>sudo sh mindveto.sh on</code> and your password.'),
        L('To allow AI again: <code>sudo sh mindveto.sh off</code>.'),
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
      { h: 'Browser extension', p: ['Chrome, Edge, Brave and Opera. Version 1.3.0, 93 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-1.3.0.zip', solid: true, download: true }, { label: 'Install steps', to: 'browser' }] },
      { h: 'Android app (beta)', p: ['Blocks AI in every app. 45 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Install steps', to: 'android' }] },
      { h: 'Windows', p: ['Every browser and app on the PC. 7 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Install steps', to: 'windows' }] },
      { h: 'Mac and Linux', p: ['One command, system-wide. 5 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Install steps', to: 'maclinux' }] },
      { h: 'IT pack and lists', p: ['DNS, firewall and browser-policy files. 13 KB.'], actions: [{ label: 'Download', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'All lists', to: 'network' }] },
    ],
    related: ['help', 'pricing'],
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
      { q: 'Who makes Mindveto?', a: L('Amghar Said, an independent maker in Belgium. <a href="/about/">About</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'About Mindveto',
    desc: 'Mindveto is made by Amghar Said in Belgium. Why we build an AI kill switch, how we keep it private, and what happens if we ever stop.',
    h1: 'People should decide when AI is part of their day.',
    lead: 'Mindveto is made by Amghar Said, an independent maker in Belgium. It started as Human Override in 2026 and got its own name in November 2026.',
    blocks: [
      { h: 'Why the name', p: [
        'In the 1980s the brain researcher Benjamin Libet described how our conscious mind can stop an urge just before we act: a veto. Mindveto gives that pause to people who want it from AI.',
      ]},
      { h: 'What we promise', list: [
        'No account, no tracking, no ads, no data sales.',
        'Honest limits, written on the product pages, not hidden in small print.',
        'Blocking stays free.',
        'Made and supported in Dutch, French and English.',
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
    lead: 'Short version: we collect no personal data. This page explains the few things that do touch a server, and your rights. Version 1, 12 November 2026.',
    blocks: [
      { h: 'Who is responsible', p: [L('Amghar Said, Belgium. Contact: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'This website', list: [
        'No cookies, no analytics, no trackers, no advertising, no fonts or scripts from other companies.',
        'The site is hosted on GitHub Pages (GitHub, Inc., USA). Like every web host, GitHub briefly processes your IP address in server logs to deliver and protect the site. We do not receive these logs.',
        'The exam button page stores your class code and teacher key in your own browser (local storage), only so the page works. You can remove them with “Forget this class”.',
      ]},
      { h: 'The apps and scripts', list: [
        'Blocking, the paste guard and all settings work on your device. Pasted text is never stored or sent.',
        'The browser extension downloads the public block list once a day. It sends no personal data with that request.',
        'The Android app only filters internet name lookups on the phone. It sends nothing to us.',
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
};

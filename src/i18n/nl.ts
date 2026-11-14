import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';

export const home: Home = {
  title: 'Mindveto: blokkeer ChatGPT en 150+ AI-tools met één knop',
  desc: 'Blokkeer ChatGPT, Gemini, Copilot en 150+ AI-tools op browsers, Android, Windows, Mac en netwerken. Pincode, examenknop, plakbewaker. Gratis.',
  h1: 'Zet ChatGPT en 150+ AI-tools uit.',
  motto: 'Jouw verstand heeft het laatste woord.', trust: 'Gratis. Geen account, geen tracking. Gemaakt door Amghar Said.', mockOn: 'AI-chat staat open', mockOff: 'Geblokkeerd door Mindveto',
  lead: 'Voor ouders, scholen en kantoren. Mindveto werkt in een browser, op een telefoon, een computer of een heel netwerk, en een pincode bepaalt wie AI weer aan mag zetten.',
  switchOn: 'AI', switchOff: 'Veto', switchLabel: 'Probeer het: zet AI uit op deze pagina',
  statusOn: 'AI toegestaan. Zet hem om.', statusOff: 'Veto. 150+ AI-diensten geblokkeerd.',
  how: 'Zo werkt het',
  doorsH: 'Voor wie',
  doors: [
    { key: 'parents', who: 'Ouders', why: 'AI-vriendjes om middernacht, huiswerk geschreven door een chatbot. Zet het vast op de gezinscomputer en de telefoon van je kind. Nieuw: een gratis gezinsfilter voor porno-, gok- en datingsites.', go: 'Voor ouders' },
    { key: 'schools', who: 'Scholen', why: 'Een examenknop voor leraren, en bestanden die IT vandaag op elke schoolcomputer kan uitrollen.', go: 'Voor scholen' },
    { key: 'offices', who: 'Kantoren', why: 'Klantdossiers, IBAN’s en contracten blijven uit publieke chatbots. Laat alleen de AI toe die je kantoor goedkeurt.', go: 'Voor kantoren' },
  ],
  productsH: 'Eén idee, zeven tools',
  productsLead: 'Kies wat bij het toestel past. Vandaag is alles gratis.',
  proofH: 'Wat je toestel verlaat',
  proofP: 'Mindveto controleert alles op het toestel zelf. We willen je gegevens niet, dus bouwden we het zo dat we ze nooit krijgen.',
  ledger: [
    ['Niets', 'De pagina’s die je bezoekt, wat je typt, wat je plakt.', true],
    ['Niets', 'Je naam, e-mailadres of een account. Er is geen account.', true],
    ['Eén keer per dag', 'De extensie haalt de openbare lijst met AI-adressen op. Ze stuurt daarbij niets mee.', false],
    ['Alleen als je meedoet', 'In examenmodus wordt de klascode één keer per minuut verstuurd om te vragen of het examen loopt. Geen namen.', false],
  ],
  limitsH: 'Eerlijke grenzen',
  limits: [
    'Het werkt op de browser, telefoon, computer of het netwerk waar je het installeert. Een kind kan nog altijd de telefoon van een vriend gebruiken.',
    'Wie het hele toestel beheert, kan het verwijderen. Geef kinderen en personeel een gewone account (geen beheerder).',
    'Elke week verschijnen nieuwe AI-tools. De lijst wordt dagelijks bijgewerkt, maar er kan er een paar dagen één doorglippen.',
  ],
  priceH: 'Gratis om te starten',
  priceP: 'Blokkeren blijft gratis voor iedereen. Betaalde plannen voor gezinnen, scholen en kantoren starten met de lancering op Google Play.',
  priceGo: 'Bekijk de plannen',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
  parents: {
    title: 'ChatGPT en AI-apps blokkeren voor je kind',
    desc: 'Blokkeer AI-chatbots, AI-vriendjes en huiswerk-AI in de browser, op de Android-telefoon van je kind en op de gezinscomputer. Pincode. Gratis.',
    h1: 'Blokkeer AI voor je kind, op elk scherm dat het gebruikt.',
    lead: 'AI-vriendjes die om middernacht chatten, opstellen in tien seconden geschreven. Met Mindveto bepaal jij wanneer AI deel is van de dag van je kind, en een pincode houdt het zo.',
    actions: [{ label: 'Gratis downloaden', to: 'download', solid: true }, { label: 'Welke versie heb ik nodig?', to: 'help' }],
    blocks: [
      { h: 'Wat je kunt doen', list: [
        'Blokkeer 150+ AI-chatbots, AI-vriendjes, huiswerkhulpen en AI-beeldtools met één schakelaar.',
        'Stel een pincode in, zodat je kind het niet kan uitzetten of de lijst kan wijzigen.',
        'Gebruik een rooster: alleen blokkeren op schooldagen, of alleen ’s avonds. De schoolvakanties van België, Nederland en Frankrijk zitten erin.',
        'Bekijk het sabotagelog: verkeerde pincodes en wanneer de schakelaar uit is gezet.',
        'Laat één AI toe die je vertrouwt, bijvoorbeeld voor een schoolproject, en houd de rest geblokkeerd.',
        'Als je wilt, blokkeer je in de browser ook sociale media zoals TikTok, Instagram en Snapchat. Dat staat uit tot je het aanzet.',
        'Gezinsfilter, gratis: blokkeer porno- en 18+-sites en zet SafeSearch vast in Google, Bing, DuckDuckGo en YouTube. Staat uit tot jij het aanzet. Optioneel: blokkeer ook VPN-, proxy- en secure-DNS-sites, zodat niemand de filter makkelijk omzeilt. Ook optioneel: gok- en wedsites, en datingapps en willekeurige videochat blokkeren.',
      ]},
      { h: 'In 10 minuten ingesteld', steps: [
        L('Op de gezinscomputer: installeer de <a href="/nl/browserextensie/">browserextensie</a>, of blokkeer AI in elke app met de download voor <a href="/nl/windows/">Windows</a> of <a href="/nl/mac-linux/">Mac</a>.'),
        L('Op de Android-telefoon van je kind: installeer de <a href="/nl/android/">Android-app</a> en zet “Altijd-aan VPN” aan, zodat hij niet omzeild kan worden.'),
        'Gebruik overal dezelfde pincode en houd ze voor jezelf.',
        'Geef je kind een gewone account (geen beheerder) op de computer. Dan kan het Mindveto niet verwijderen.',
      ]},
      { h: 'Een goed gesprek werkt beter dan elke blokkering', p: [
        'Blokkeren werkt het best als je kind weet waarom. Vertel wat Mindveto doet, wanneer AI mag, en dat het sabotagelog toont als iemand het probeert uit te zetten.',
      ], note: 'Mindveto leest de berichten van je kind niet en stuurt ons niets. Het houdt alleen AI-adressen tegen.', human: true },
    ],
    faq: [
      { q: 'Werkt het op een iPhone?', a: L('Er is nog geen iPhone-app. Je kunt AI op een iPhone blokkeren met onze gratis lijst en een DNS-dienst: zie <a href="/nl/netwerk/">hele netwerk</a>. Apple Schermtijd kan ook losse sites blokkeren.') },
      { q: 'Mijn kind gebruikt een laptop van school. Kan ik het daarop zetten?', a: 'Vraag het eerst aan de school. Schooltoestellen worden door de school beheerd, en veel scholen kunnen Mindveto voor alle leerlingen tegelijk installeren.' },
      { q: 'Is het echt gratis?', a: 'Ja. Blokkeren, pincode en rooster blijven gratis. Een betaald Plus-plan met extra’s voor gezinnen komt met de lancering op Google Play.' },
    ],
    related: ['family', 'browser', 'android'],
  },

  schools: {
    title: 'AI blokkeren op schoolcomputers, met examenknop',
    desc: 'Blokkeer ChatGPT en AI-tools op schoolcomputers en het schoolnetwerk. Examenknop voor leraren, bestanden voor IT. Geen leerlingengegevens.',
    h1: 'AI uit tijdens de toets. Aan als de les erom vraagt.',
    lead: 'Leraren krijgen een examenknop. IT krijgt kant-en-klare bestanden voor elke schoolcomputer en het schoolnetwerk. Niemand leest wat leerlingen typen.',
    actions: [{ label: 'Open de examenknop', to: 'exam', solid: true }, { label: 'Bestanden voor IT', to: 'network' }],
    blocks: [
      { h: 'Voor leraren', list: [
        'Maak een klas met één klik. Leerlingen koppelen met een code in de extensie.',
        'Start de examenmodus voor 30 tot 240 minuten. Binnen een minuut is elke AI geblokkeerd in de browsers van je klas.',
        'Geen accounts, geen namen van leerlingen, geen e-mailadressen.',
      ], actions: [{ label: 'Maak een klas', to: 'exam' }] },
      { h: 'Voor IT', list: [
        'Installeer de extensie verplicht via Chrome- en Edge-beleid (Google Admin, GPO, Intune), zodat leerlingen ze niet kunnen verwijderen.',
        'Blokkeer AI op het schoolnetwerk met bestanden voor Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid en gangbare firewalls.',
        'Laat alleen de AI-tools toe die je school goedkeurt, en houd de rest geblokkeerd.',
      ], actions: [{ label: 'Download het IT-pakket', to: 'network' }] },
      { h: 'Privacy van leerlingen', p: [
        'Mindveto controleert alles op het toestel. Het houdt niet bij welke sites leerlingen bezoeken en leest geen prompts. Voor de examenmodus bewaart onze database alleen een gehashte klascode en het einduur van het examen.',
        L('Zo leg je het makkelijk uit aan ouders en aan je functionaris voor gegevensbescherming. Lees het <a href="/nl/privacy/">privacybeleid</a>.'),
      ]},
      { h: 'Probeer het een trimester', p: [
        L('Gratis tijdens de proef. Mail <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> met de naam van je school en het aantal toestellen, en we helpen je het in te stellen.'),
      ]},
    ],
    faq: [
      { q: 'Kan een leerling de klas verlaten of het uitzetten?', a: 'Niet als de school de pincode instelt en de extensie via browserbeleid installeert. Op een computer waar de leerling beheerder is, kan hij ze verwijderen.' },
      { q: 'Blokkeert het telefoons in de klas?', a: 'De examenmodus werkt in de browsers van schoolcomputers. Voor telefoons op de school-wifi gebruik je de DNS-bestanden voor het schoolnetwerk.' },
      { q: 'Wat kost het later?', a: L('Het plan is €1 per leerling per jaar, minimum €149 per school. Zie <a href="/nl/prijzen/">prijzen</a>.') },
    ],
    related: ['exam', 'network', 'browser'],
  },

  offices: {
    title: 'Voorkom dat personeel klantgegevens in ChatGPT plakt',
    desc: 'Plakbewaker voor kantoren: een waarschuwing voor IBAN’s, klantlijsten of vertrouwelijke tekst in AI-chats belanden. Alleen goedgekeurde AI.',
    h1: 'Klantgegevens blijven uit publieke chatbots.',
    lead: 'Een boekhouder plakt een rekeninguittreksel in een chatbot om het “samen te vatten”. Mindveto stopt dat moment op het scherm, voor de gegevens het kantoor verlaten.',
    actions: [{ label: 'Bekijk de plakbewaker', to: 'paste', solid: true }, { label: 'Prijzen voor teams', to: 'pricing' }],
    blocks: [
      { h: 'Wat het doet voor een kantoor', list: [
        'Laat alleen de AI toe die je kantoor goedkeurt (bijvoorbeeld Microsoft Copilot met je zakelijke account) en blokkeer de andere 150+.',
        'Waarschuwt voor IBAN’s, kaartnummers, rijksregisternummers, lijsten met e-mailadressen, geheime sleutels of tekst met “vertrouwelijk” in een AI-site geplakt worden.',
        'Voeg je eigen privéwoorden toe: klantnamen, projectcodes, dossiernummers.',
        'Vergrendel de instellingen met een pincode en zie wanneer iemand ze probeerde te wijzigen.',
      ]},
      { h: 'Waarom kantoren ervoor kiezen', p: [
        'Grote tools tegen datalekken sturen je gegevens naar hun cloud om ze te controleren, en kosten duizenden euro’s. Mindveto controleert op de pc zelf, dus de tekst verlaat het kantoor nooit.',
        'Het past bij boekhouders, advocaten, notarissen, verzekeringsmakelaars, HR en medische praktijken: kleine teams met vertrouwelijke dossiers en zonder IT-afdeling.',
      ], note: 'In België, Nederland en Duitsland moet de ondernemingsraad of het personeel soms eerst geïnformeerd worden voor je zo’n tool invoert. Mindveto leest niets en stuurt niets, en dat maakt dat gesprek makkelijker.', human: true },
      { h: 'Uitrollen', steps: [
        L('Installeer de <a href="/nl/browserextensie/">browserextensie</a> op elke werkcomputer, of installeer ze verplicht via Edge- of Chrome-beleid.'),
        'Vink de AI aan die je kantoor toelaat en voeg je privéwoorden toe.',
        'Stel één pincode in voor het hele kantoor.',
      ]},
    ],
    faq: [
      { q: 'Kan het AI in Word of Outlook blokkeren?', a: L('De extensie werkt in de browser. Op Windows kan de <a href="/nl/windows/">Windows-download</a> ook Copilot en Recall uitzetten die in Windows zitten.') },
      { q: 'Zien jullie wat mijn personeel plakt?', a: 'Nee. De controle gebeurt op de computer. Geplakte tekst wordt nooit bewaard of verstuurd.' },
      { q: 'Wat kost het?', a: L('Het plan voor teams is €2,50 per gebruiker per maand. Tijdens de lancering is het gratis. Zie <a href="/nl/prijzen/">prijzen</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'AI-blokker voor Chrome, Edge, Brave en Opera',
    desc: 'Gratis extensie die ChatGPT, Gemini, Claude en 150+ AI-sites blokkeert in Chrome, Edge, Brave en Opera. Pincode, rooster, plakbewaker.',
    h1: 'De AI-schakelaar voor je browser.',
    lead: 'Eén schakelaar blokkeert 150+ AI-chatbots en AI-tools. Een pincode zorgt dat niemand anders het wijzigt. Werkt in Chrome, Edge, Brave en Opera.',
    actions: [{ label: 'Download v1.6.0 (735 KB)', url: DL + 'human-override-1.6.0.zip', solid: true, download: true }, { label: 'Installatiestappen', url: '#install' }],
    blocks: [
      { h: 'Wat erin zit', list: [
        'Blokkeert AI-chat, AI-zoeken, AI-tools voor beeld, video, stem en muziek, AI voor schrijven en huiswerk, AI voor programmeren en AI-notulisten.',
        'Pincode voor de schakelaar en alle instellingen.',
        'Rooster met schoolvakanties voor België, Nederland en Frankrijk.',
        L('<a href="/nl/plakbewaker/">Plakbewaker</a> met je eigen privéwoorden.'),
        'Goedgekeurde AI: laat alleen de tools toe die je school of bedrijf toestaat.',
        L('Klas- en <a href="/nl/examenknop/">examenmodus</a> voor leraren.'),
        'Sabotagelog en een rood teken op het icoon na een verkeerde pincode.',
        'Je eigen blokkeer- en toelaatlijsten. De openbare lijst wordt dagelijks bijgewerkt.',
        'Optioneel: blokkeer ook sociale media (TikTok, Instagram, Snapchat en meer). Uit tot je het aanzet.',
        'Gezinsfilter: blokkeert 60.000+ porno- en 18+-sites en zet SafeSearch vast in Google, Bing, DuckDuckGo en YouTube. Staat uit tot jij het aanzet; met een pincode kan alleen jij het uitzetten. Optioneel: blokkeer ook VPN-, proxy-, Tor- en secure-DNS-sites, zodat de filter niet zomaar te omzeilen is. Ook optioneel: gok- en wedsites, en datingapps en willekeurige videochat blokkeren.',
      ]},
      { h: 'Installeren in één minuut', fold: 'Toon de installatiestappen', foldLead: 'De versies in de stores komen eraan. Tot dan installeer je het met de hand in één minuut.', steps: [
        'Download de zip hierboven en pak hem uit (rechtsklik, “Alles uitpakken”).',
        L('Open <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>).'),
        'Zet “Ontwikkelaarsmodus” aan (rechtsboven).',
        'Klik op “Uitgepakte extensie laden” en kies de uitgepakte map.',
        'Maak het icoon vast in je werkbalk, open het en stel een pincode in.',
      ], note: 'Voor ouders en scholen: zet op de pagina “Details” van de extensie “Toestaan in incognito” aan. Anders worden privévensters niet geblokkeerd.' },
      { h: 'Feiten', facts: [
        ['Versie', '1.6.0 (Manifest V3)'], ['Grootte', '735 KB'], ['Browsers', 'Chrome, Edge, Brave, Opera. Firefox en de officiële stores: binnenkort'],
        ['Rechten', 'Blokkeerregels, lokale opslag, een dagelijkse timer'], ['Verstuurde gegevens', 'Geen. Alleen de openbare lijst wordt dagelijks opgehaald'], ['Prijs', 'Gratis'],
      ]},
    ],
    faq: [
      { q: 'Waarom staat het nog niet in de Chrome Web Store?', a: 'De store-versies komen eraan. Tot dan installeer je het met de hand in één minuut, met de stappen hierboven.' },
      { q: 'Waarom staat er “Human Override” in een oudere download?', a: 'Zo heette ze tot november 2026. Versie 1.3.0 en nieuwer tonen de naam Mindveto. Het is hetzelfde product.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'AI-apps blokkeren op Android',
    desc: 'Android-app die ChatGPT, Gemini, Character.AI en 150+ AI-diensten blokkeert in elke app op de telefoon. Pincode en sabotagemeldingen.',
    h1: 'AI uit in elke app op de telefoon.',
    lead: 'De browser is maar de helft: AI-apps staan op de telefoon. De Android-app van Mindveto blokkeert AI-adressen voor elke app, en meldt het als iemand hem probeert uit te zetten.',
    actions: [{ label: 'Download voor Android (389 KB, bèta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'Hoe het werkt', p: [
        'De app draait een klein lokaal filter voor internetnamen (DNS) op de telefoon. Vraagt een app een AI-adres op, dan antwoordt het filter dat het niet bestaat. Al de rest werkt gewoon.',
        'Alleen die naamopvragingen gaan door de app. Er gaat niets naar ons.',
        'Optioneel gezinsfilter: zet in de app “Volwassenensites” en “SafeSearch” aan. Pornosites openen dan in geen enkele app, en Google, Bing, DuckDuckGo en YouTube tonen veilige resultaten. Met een pincode kan het alleen met de pincode uit. Een derde schakelaar blokkeert VPN-, proxy- en secure-DNS-diensten, zodat de filter niet makkelijk te omzeilen is. Ook optioneel: gok- en wedsites, en datingapps en willekeurige videochat blokkeren.',
      ]},
      { h: 'Installeren', steps: [
        'Open de downloadlink op de telefoon.',
        'Als Android het vraagt: sta “onbekende apps installeren” toe voor je browser.',
        'Open de app en tik op de grote knop.',
        'Zet “Altijd-aan VPN” en “Verbindingen zonder VPN blokkeren” aan (de app toont hoe). Dan kan hij niet omzeild worden.',
        'Stel een pincode in.',
      ], note: 'Bèta: verwijder eerst de oude versie om bij te werken. De versie op Google Play komt eraan, met 15 dagen Plus gratis.' },
      { h: 'Feiten', facts: [
        ['Versie', 'Bèta, gericht op Android 16 (SDK 36)'], ['Grootte', '389 KB'], ['Vereist', 'Android 8 of nieuwer'],
        ['Sabotagemeldingen', 'Ja, een melding als de bescherming stopt'], ['Verstuurde gegevens', 'Geen'], ['Prijs', 'Gratis tijdens de bèta'],
      ]},
    ],
    faq: [
      { q: 'Maakt het de telefoon of de batterij trager?', a: 'Nauwelijks. Het beantwoordt alleen naamopvragingen; je verkeer gaat niet via een server.' },
      { q: 'Kan ik tegelijk een andere VPN gebruiken?', a: 'Nee. Android laat één VPN tegelijk toe. Mindveto gebruikt die plek voor zijn lokale filter.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'AI blokkeren op Windows, in elke browser en app',
    desc: 'Gratis Windows-download die ChatGPT en 150+ AI-diensten blokkeert in elke browser en app, en Copilot en Recall kan uitzetten.',
    h1: 'Blokkeer AI op de hele Windows-pc.',
    lead: 'Geen extensie nodig: één download blokkeert AI-adressen voor elke browser en elke app op de computer. Hij kan ook de AI uitzetten die in Windows zit.',
    actions: [{ label: 'Download voor Windows (501 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installeren', fold: 'Toon de installatiestappen', foldLead: 'De versies in de stores komen eraan. Tot dan installeer je het met de hand in één minuut.', steps: [
        'Pak de download uit.',
        'Dubbelklik op “Start-Mindveto.bat” en klik op Ja.',
        'Typ 1 om AI te blokkeren. Typ 3 om ook Copilot, Recall en de AI in Edge en Chrome uit te zetten.',
        'Geef kinderen of personeel een gewone account (geen beheerder). Dan kunnen ze het niet ongedaan maken.',
        'Typ 5 om het gezinsfilter aan te zetten: porno- en 18+-sites geblokkeerd, SafeSearch vast in Google, Bing en YouTube. Typ 6 om het uit te zetten. Het blokkeert ook VPN-, proxy- en secure-DNS-sites en zet secure DNS uit in Chrome, Edge en Firefox. Optie 5 vraagt ook naar gok- en datingsites.',
      ], note: 'Windows zegt misschien eerst dat het “je pc heeft beschermd”. Klik op “Meer informatie” en dan op “Toch uitvoeren”. Het script is gewone tekst: je kunt het in Kladblok openen en elke regel lezen.' },
      { h: 'Feiten', facts: [
        ['Werkt op', 'Windows 10 en 11'], ['Hoe', 'Zet AI-adressen in het hosts-bestand van Windows, en gebruikt officiële Windows-beleidsregels voor ingebouwde AI'],
        ['Ongedaan maken', 'Opnieuw starten en 2 typen (4 voor de ingebouwde AI)'], ['Vereist', 'Eén keer beheerdersrechten'], ['Prijs', 'Gratis'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'AI blokkeren op Mac en Linux',
    desc: 'Gratis script dat ChatGPT en 150+ AI-diensten blokkeert in elke browser en app op een Mac of Linux-computer. Eén commando aan, één uit.',
    h1: 'Eén commando. AI uit op de hele Mac of Linux-computer.',
    lead: 'Het script zet AI-adressen in het hosts-bestand van het systeem, zodat elke browser en app op de computer meedoet.',
    actions: [{ label: 'Download voor Mac en Linux (498 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installeren', steps: [
        'Pak de download uit.',
        'Open Terminal in de uitgepakte map.',
        L('Typ <code>sudo sh mindveto.sh on</code> en je wachtwoord.'),
        L('Om AI weer toe te laten: <code>sudo sh mindveto.sh off</code>.'),
        L('Gezinsfilter (porno- en 18+-sites, SafeSearch): <code>sudo sh mindveto.sh family-on</code>, en <code>family-off</code> om het ongedaan te maken. Het blokkeert ook VPN-, proxy- en secure-DNS-sites. Voeg <code>gambling dating</code> toe om ook die sites te blokkeren.'),
      ], note: 'Geef kinderen een gewone account (geen beheerder). Dan kunnen ze het hosts-bestand niet wijzigen.' },
      { h: 'Feiten', facts: [
        ['Werkt op', 'macOS, Ubuntu, Debian, Fedora en de meeste Linux-systemen'], ['Ongedaan maken', 'Eén commando'], ['Prijs', 'Gratis'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'AI blokkeren op een heel netwerk: DNS en firewall',
    desc: 'Gratis lijsten en een IT-pakket om ChatGPT en 150+ AI-diensten op een heel netwerk te blokkeren: Pi-hole, AdGuard, DNS, BIND, Squid, GPO.',
    h1: 'Blokkeer AI voor elk toestel op het netwerk.',
    lead: 'Voor gezinnen, scholen, kantoren en overheidsdiensten. Gebruik onze gratis lijsten met het filter dat je al hebt, of rol vandaag het IT-pakket uit.',
    actions: [{ label: 'Download het IT-pakket (13 KB)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Gratis lijsten', p: ['Voeg één adres toe aan je filter. De lijsten blijven op hetzelfde adres en worden bijgewerkt als er nieuwe AI-diensten opduiken.'], facts: [
        ['AdGuard-/uBlock-lijst', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['Hosts-bestand', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Gewone domeinen', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Waar je ze gebruikt', list: [
        'Router thuis of op kantoor met Pi-hole of AdGuard Home: voeg de lijst één keer toe, elk toestel op de wifi doet mee.',
        'Android en iPhone: een gratis AdGuard DNS-account met onze lijst als gebruikersregels, daarna Privé-DNS (Android) of een profiel (iPhone).',
        'Eén computer: zet de hosts-lijst in het hosts-bestand (beheerdersrechten nodig).',
      ]},
      { h: 'In het IT-pakket', list: [
        'Chrome- en Edge-beleid (GPO, Intune, Google Admin) om de extensie verplicht te installeren en AI-sites te blokkeren.',
        'Firefox-beleid.',
        'Windows Server DNS (PowerShell), BIND RPZ-zone, Unbound, dnsmasq.',
        'Squid-proxy-ACL en een firewall-lijst voor Palo Alto, Fortinet en Check Point.',
      ], note: 'DNS-lijsten blokkeren hele domeinen. Een paar blokkeringen op paginaniveau, zoals Bing Chat, werken alleen in de browserextensie.' },
    ],
    faq: [
      { q: 'Mogen we de lijsten zakelijk gebruiken?', a: L('Ja, binnen je eigen organisatie. Doorverkopen kan alleen met schriftelijke toestemming. Zie de <a href="/nl/voorwaarden/">voorwaarden</a>.') },
      { q: 'Helpen jullie bij een uitrol?', a: L('Ja. Mail <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> met het aantal toestellen en je opstelling.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Examenknop: zet AI uit voor je klas',
    desc: 'Gratis examenknop voor leraren: één tik blokkeert elke AI-chatbot in de browsers van je klas tijdens een toets. Geen accounts, geen namen.',
    h1: 'Geen AI tijdens de toets.',
    lead: 'Eén tik zet elke AI-chatbot uit in de browsers van je klas, zolang de toets duurt. Gratis, geen accounts, geen namen van leerlingen.',
    blocks: [
      { h: 'Zo werkt het', steps: ['Maak hier een klas. Je krijgt een klascode en een privé-lerarenlink.', 'Leerlingen openen de Mindveto-extensie, gaan naar “Klas · examenmodus” en typen de code.', 'Tik op “Start examenmodus”. Binnen een minuut is elke AI geblokkeerd in hun browsers, tot de tijd om is of jij stopt.'] },
    ],
    faq: [
      { q: 'Wat hebben leerlingen nodig?', a: L('De <a href="/nl/browserextensie/">Mindveto-extensie</a> in hun browser, gekoppeld aan je klas met de code. Op schoolcomputers installeert de school ze één keer.') },
      { q: 'Wat bewaart jullie server?', a: 'Een gehashte klascode, een gehashte lerarensleutel en het einduur van het examen. Geen namen, geen e-mailadressen, geen IP-adressen.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Plakbewaker: privégegevens blijven uit AI-chats',
    desc: 'Mindveto waarschuwt voor IBAN’s, rijksregisternummers, e-maillijsten of vertrouwelijke tekst in ChatGPT en andere AI-sites geplakt worden.',
    h1: 'Nog één keer kijken voor je plakt.',
    lead: 'Mensen plakken eerst en denken daarna. Op AI-sites controleert de plakbewaker wat je plakt, op je eigen computer, en vraagt het eerst voor privégegevens in de chat belanden.',
    actions: [{ label: 'Haal de browserextensie', to: 'browser', solid: true }, { label: 'Voor kantoren', to: 'offices' }],
    blocks: [
      { h: 'Wat het opmerkt', list: [
        'Rekeningnummers (IBAN) en kaartnummers.',
        'Rijksregister-, BSN- en andere identiteitsnummers.',
        'Lijsten met e-mailadressen.',
        'Geheime sleutels, wachtwoorden en toegangstokens.',
        'Tekst met “vertrouwelijk”, “confidential” of “confidentiel”.',
        'Je eigen privéwoorden: klantnamen, projectcodes, dossiernummers.',
      ]},
      { h: 'Wat je kunt kiezen', steps: [
        'Niet plakken.',
        'Plakken zonder de privédelen: die worden vervangen door een plaatshouder.',
        'Toch plakken, als je het zeker weet.',
      ]},
      { h: 'Waar de controle gebeurt', p: [
        'Op je computer, in de browser. De geplakte tekst wordt nooit bewaard en nooit verstuurd, ook niet naar ons.',
      ], note: 'Het werkt op AI-sites voor chat, zoeken, schrijven en programmeren. Het kijkt niet mee in je e-mail, documenten of andere websites.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Mindveto downloaden: browser, Android, Windows, Mac',
    desc: 'Download Mindveto gratis: browserextensie, Android-app, scripts voor Windows en Mac/Linux, blokkeerlijsten en het IT-pakket. Geen account.',
    h1: 'Mindveto downloaden.',
    lead: 'Kies het toestel dat je wilt beschermen. Alles is gratis en vraagt geen account.',
    blocks: [
      { h: 'Browserextensie', p: ['Chrome, Edge, Brave en Opera. Versie 1.6.0, 735 KB.'], actions: [{ label: 'Downloaden', url: DL + 'human-override-1.6.0.zip', solid: true, download: true }, { label: 'Installatiestappen', to: 'browser' }] },
      { h: 'Android-app (bèta)', p: ['Blokkeert AI in elke app. 389 KB.'], actions: [{ label: 'Downloaden', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Installatiestappen', to: 'android' }] },
      { h: 'Windows', p: ['Elke browser en app op de pc. 501 KB.'], actions: [{ label: 'Downloaden', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Installatiestappen', to: 'windows' }] },
      { h: 'Mac en Linux', p: ['Eén commando, voor het hele systeem. 498 KB.'], actions: [{ label: 'Downloaden', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Installatiestappen', to: 'maclinux' }] },
      { h: 'IT-pakket en lijsten', p: ['Bestanden voor DNS, firewall en browserbeleid. 13 KB.'], actions: [{ label: 'Downloaden', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Alle lijsten', to: 'network' }] },
    ],
    related: ['help', 'pricing'],
  },

  pricing: {
    title: 'Mindveto prijzen: Gratis, Plus, School en Business',
    desc: 'Blokkeren is gratis. Plus €14,99 per jaar voor gezinnen, €1 per leerling voor scholen, €2,50 per gebruiker per maand voor kantoren.',
    h1: 'Blokkeren is gratis. Extra’s betalen het werk.',
    lead: 'Vandaag is elke functie gratis terwijl we lanceren. Betaalde plannen starten met de versie op Google Play.',
    blocks: [],
    faq: [
      { q: 'Wanneer moet ik betalen?', a: 'Nu niet. Als de betaalde plannen starten, kies je zelf of je overstapt. Er wordt niets automatisch aangerekend en het gratis plan blijft.' },
      { q: 'Is er een lanceringsaanbod?', a: 'Ja. De eerste 250 mensen die de Android-app via Google Play installeren, krijgen Plus een jaar gratis. Een teller op deze pagina toont hoeveel plaatsen er nog zijn.' },
      { q: 'Zijn de prijzen inclusief btw?', a: 'Ja, prijzen voor consumenten zijn inclusief Belgische btw. Scholen en bedrijven krijgen een factuur.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Hulp en veelgestelde vragen',
    desc: 'Antwoorden over Mindveto: welke versie je nodig hebt, pincode, rooster, privacy, verwijderen, en wat Mindveto wel en niet blokkeert.',
    h1: 'Hulp',
    lead: 'Korte antwoorden op de vragen die het meest gesteld worden. Staat jouw vraag er niet tussen? Mail hello@mindveto.app.',
    blocks: [
      { h: 'Welke versie heb ik nodig?', facts: [
        ['De Android-telefoon van een kind', L('<a href="/nl/android/">Android-app</a>')],
        ['Een gezins- of kantoorcomputer', L('<a href="/nl/browserextensie/">Browserextensie</a>, plus <a href="/nl/windows/">Windows</a> of <a href="/nl/mac-linux/">Mac</a> voor elke app')],
        ['Schoolcomputers', L('<a href="/nl/browserextensie/">Extensie</a> via browserbeleid, plus de <a href="/nl/examenknop/">examenknop</a>')],
        ['Elk toestel thuis of op het werk', L('<a href="/nl/netwerk/">Netwerklijsten</a>')],
      ]},
    ],
    faq: [
      { q: 'Ik ben mijn pincode vergeten.', a: 'Voor de veiligheid is er geen resetknop. Verwijder de extensie op de extensiepagina van de browser (daarvoor moet je de computer beheren) en installeer ze opnieuw.' },
      { q: 'Een gewone website wordt per vergissing geblokkeerd.', a: 'Open de extensie en zet de site op je toelaatlijst. Mail ons het adres, dan passen we de openbare lijst aan.' },
      { q: 'Een AI-tool wordt niet geblokkeerd.', a: 'Zet hem nu op je eigen blokkeerlijst en mail ons het adres. We voegen nieuwe AI-diensten toe aan de openbare lijst.' },
      { q: 'Hoe verwijder ik het?', a: 'Browser: verwijder het op de extensiepagina. Android: zet het uit en verwijder de app. Windows: start het script en typ 2. Mac en Linux: start het script met “off”.' },
      { q: 'Gebruikt Mindveto zelf AI?', a: 'Nee. Blokkeren en de plakbewaker gebruiken gewone regels op je toestel.' },
      { q: 'Wie maakt Mindveto?', a: L('Amghar Said, een onafhankelijke maker. <a href="/nl/over/">Over ons</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'Over Mindveto',
    desc: 'Mindveto wordt gemaakt door Amghar Said, een onafhankelijke maker. Waarom we een AI-noodknop bouwen, hoe we het privé houden en wat er gebeurt als we stoppen.',
    h1: 'Mensen beslissen zelf wanneer AI deel is van hun dag.',
    lead: 'Mindveto wordt gemaakt door Amghar Said, een onafhankelijke maker. Het begon in 2026 als Human Override en kreeg in november 2026 een eigen naam.',
    blocks: [
      { h: 'Wie het maakt', p: [
        'Amghar Said coördineert in zijn dagelijkse job educatieve verblijven voor jongeren. Technologie is al 30 jaar zijn passie, en Mindveto bouwt hij naast zijn werk.',
        L('Volg hem of stuur een bericht op <a href="https://www.linkedin.com/in/amghar-said-67a95a22/" rel="me">LinkedIn</a>.'),
      ]},
      { h: 'Waarom de naam', p: [
        'In de jaren 1980 beschreef hersenonderzoeker Benjamin Libet hoe ons bewuste denken een impuls kan stoppen vlak voor we handelen: een veto. Mindveto geeft die pauze aan wie ze wil tegenover AI.',
      ]},
      { h: 'Wat we beloven', list: [
        'Geen account, geen tracking, geen advertenties, geen verkoop van gegevens.',
        'Eerlijke grenzen, op de productpagina’s en niet in kleine lettertjes.',
        'Blokkeren blijft gratis.',
        'Website in 8 talen; ondersteuning per e-mail in het Engels, Nederlands en Frans.',
      ]},
      { h: 'Als we ooit stoppen', p: [
        'Alles wat je installeerde blijft werken: de extensie, de app en de scripts blokkeren met de lijst die al op je toestel staat. Je kunt ze altijd op de gewone manier verwijderen.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Privacybeleid',
    desc: 'Mindveto verzamelt geen persoonsgegevens: geen cookies, geen trackers, geen accounts. Wat de site, apps en examenmodus verwerken, en je rechten.',
    h1: 'Privacybeleid',
    lead: 'Kort: we verzamelen geen persoonsgegevens. Deze pagina legt uit welke paar dingen wel een server raken, en wat je rechten zijn. Versie 2, 13 november 2026.',
    blocks: [
      { h: 'Wie verantwoordelijk is', p: [L('Amghar Said, België. Contact: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Deze website', list: [
        'Geen cookies, geen statistieken, geen trackers, geen advertenties, geen lettertypen of scripts van andere bedrijven.',
        'De site staat op GitHub Pages (GitHub, Inc., VS). Zoals elke webhost verwerkt GitHub je IP-adres kort in serverlogs om de site te leveren en te beschermen. Wij krijgen die logs niet.',
        'De pagina van de examenknop bewaart je klascode en lerarensleutel in je eigen browser (lokale opslag), alleen zodat de pagina werkt. Je wist ze met “Vergeet deze klas”.',
      ]},
      { h: 'De apps en scripts', list: [
        'Blokkeren, de plakbewaker en alle instellingen werken op je toestel. Geplakte tekst wordt nooit bewaard of verstuurd.',
        'De browserextensie haalt één keer per dag de openbare blokkeerlijst op. Ze stuurt daarbij geen persoonsgegevens mee.',
        'De Android-app filtert alleen naamopvragingen op de telefoon. Hij stuurt ons niets.',
        'Om websitenamen op te zoeken, stuurt de Android-app opvragingen die niet geblokkeerd zijn door naar de DNS-server die je telefoon al gebruikt. Antwoordt die niet, dan gebruikt de app Cloudflare (1.1.1.1) of Quad9 (9.9.9.9). Die diensten zien de websitenaam en je IP-adres, zoals bij elke DNS-opvraging.',
      ]},
      { h: 'Examenmodus', p: [
        'Als een leraar een klas maakt, bewaart onze database (Supabase, Frankfurt, EU) een gehashte klascode, een gehashte lerarensleutel en het einduur van het examen. Extensies in de klas sturen alleen de klascode, één keer per minuut. Om misbruik te stoppen, wordt een gehashte versie van het IP-adres één uur bewaard. Geen namen, geen e-mailadressen.',
        'Rechtsgrond: ons gerechtvaardigd belang om de examenknop veilig aan te bieden (AVG artikel 6.1.f).',
      ]},
      { h: 'E-mail', p: ['Mail je ons, dan gebruiken we je bericht alleen om te antwoorden, en wissen we het als het niet meer nodig is.'] },
      { h: 'Je rechten', p: [
        L('Je kunt inzage, verbetering of wissing vragen, en bezwaar maken. Mail <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. Je kunt ook klagen bij de Belgische Gegevensbeschermingsautoriteit (<a href="https://www.gegevensbeschermingsautoriteit.be" rel="noopener">gegevensbeschermingsautoriteit.be</a>) of de autoriteit in je land.'),
      ]},
    ],
  },

  terms: {
    title: 'Gebruiksvoorwaarden',
    desc: 'Gebruiksvoorwaarden van Mindveto: wat het wel en niet doet, je verantwoordelijkheid, geen garantie, beperkte aansprakelijkheid, Belgisch recht.',
    h1: 'Gebruiksvoorwaarden',
    lead: 'Mindveto is software gemaakt door Amghar Said. Het helpt AI-diensten te blokkeren, maar geen enkel hulpmiddel kan elke AI blokkeren. Versie 2, 12 november 2026. Geldt voor de extensie, de Android-app, de scripts voor Windows, Mac en Linux, de lijsten en het IT-pakket.',
    blocks: [
      { h: '1. Wie het aanbiedt', p: [L('Mindveto (voorheen Human Override) is gemaakt door en eigendom van Amghar Said (“de auteur”). Contact: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Aanvaarding', p: ['Door Mindveto te installeren, te downloaden of te gebruiken, aanvaard je deze voorwaarden. Ben je niet akkoord, gebruik het dan niet en verwijder het.'] },
      { h: '3. Wat het wel en niet doet', p: ['Mindveto probeert de toegang tot AI-diensten te stoppen door hun webadressen te blokkeren. Het garandeert niet dat geen enkele AI bereikbaar is. Het kan geen AI blokkeren die ingebouwd is in diensten die je toelaat, AI die offline op een toestel draait, andere browsers, apps of toestellen, VPN’s, proxy’s, andere DNS-diensten, of nieuwe AI-diensten die nog niet op de lijst staan. Iedereen met voldoende toegang tot het toestel kan de instellingen wijzigen of verwijderen. Lijsten kunnen per vergissing een site blokkeren of er één missen.'] },
      { h: '4. Jouw verantwoordelijkheid', p: ['Jij beslist waar en hoe je Mindveto gebruikt. Scholen, bedrijven en andere organisaties blijven volledig verantwoordelijk voor hun eigen beleid, toezicht, beveiliging, tests en naleving van de wet, ook privacy- en arbeidsrecht. Test het voor je erop vertrouwt. Gebruik het niet om de wet te overtreden of om mensen te controleren zonder wettelijke basis.'] },
      { h: '5. Geleverd “zoals het is”', p: ['Mindveto wordt geleverd “zoals het is” en “zoals beschikbaar”, zonder enige garantie, uitdrukkelijk of stilzwijgend, ook niet over geschiktheid voor een bepaald doel, nauwkeurigheid, beschikbaarheid of foutloosheid.'] },
      { h: '6. Beperking van aansprakelijkheid', p: ['Voor zover de wet het toelaat, is Amghar Said niet aansprakelijk voor enige directe of indirecte schade, verlies van gegevens of inkomsten, verlies van toegang, gemiste blokkeringen, onterecht geblokkeerde sites of enig ander gevolg van het gebruik of het niet kunnen gebruiken van Mindveto. Voor betaalde plannen is de totale aansprakelijkheid beperkt tot het bedrag dat je de laatste twaalf maanden betaalde. Niets in deze voorwaarden beperkt aansprakelijkheid die de wet niet laat beperken, zoals bij opzet of zware fout, of dwingende consumentenrechten.'] },
      { h: '7. Eigendom', p: ['Mindveto, de code, blokkeerlijsten, iconen, teksten en naam zijn © 2026 Amghar Said, alle rechten voorbehouden. Je mag de officiële, ongewijzigde versie gebruiken. Kopiëren, wijzigen, verspreiden of verkopen kan alleen met schriftelijke toestemming.'] },
      { h: '8. Privacy', p: [L('Mindveto verzamelt geen persoonsgegevens. Zie het <a href="/nl/privacy/">privacybeleid</a>.')] },
      { h: '9. Betaalde plannen', p: ['Betaalde plannen worden, wanneer ze aangeboden worden, op de prijzenpagina beschreven voor je koopt. Aankopen via Google Play volgen ook de voorwaarden van Google Play. Consumenten in de EU behouden hun wettelijke rechten, ook het herroepingsrecht waar het geldt.'] },
      { h: '10. Wijzigingen en einde', p: ['De auteur mag Mindveto, de lijsten of deze voorwaarden wijzigen, of stoppen met het aanbod. De geldende versie staat altijd op deze pagina.'] },
      { h: '11. Recht', p: ['Op deze voorwaarden is het Belgisch recht van toepassing, onverminderd de dwingende regels van het land waar een consument woont.'] },
    ],
  },

  legal: {
    title: 'Wettelijke informatie',
    desc: 'Wettelijke informatie over Mindveto: wie de site en de software uitgeeft, hoe je ons bereikt, hosting en intellectuele eigendom.',
    h1: 'Wettelijke informatie',
    lead: 'Wie deze website en de software van Mindveto uitgeeft.',
    blocks: [
      { h: 'Uitgever', facts: [
        ['Naam', 'Amghar Said'], ['Land', 'België'], ['E-mail', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Ondernemingsnummer', COMPANY.kbo || 'Komt hier voor een betaald plan start'],
        ...(COMPANY.vat ? [['Btw-nummer', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Zakelijk adres', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Hosting', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, VS.'] },
      { h: 'Intellectuele eigendom', p: ['© 2026 Amghar Said. Alle rechten voorbehouden. Productnamen zoals ChatGPT, Gemini, Claude en Copilot zijn van hun eigenaars en worden alleen genoemd om te beschrijven wat Mindveto blokkeert. Mindveto is niet met hen verbonden.', 'Lettertype: Atkinson Hyperlegible Next, SIL Open Font License, geleverd vanaf deze site. Data van schoolvakanties: OpenHolidays API (ODbL).'] },
      { h: 'Bronnen en licenties', p: [L('Schoolvakanties: gegevens van de OpenHolidays API, <a href="https://www.openholidaysapi.org/">openholidaysapi.org</a>, ODbL 1.0. Blokkeerlijsten voor volwassenensites en gokken: Sinfonietta/hostfiles, StevenBlack/hosts (clefspeare13) en bigdargon/hostsVN, MIT-licentie; de volledige vermeldingen zitten in elke download. Lettertype: Atkinson Hyperlegible Next, Braille Institute, SIL Open Font License 1.1.')] },
    ],
  },
  guide: {
    title: 'ChatGPT blokkeren op elk toestel (gids 2026)',
    desc: 'Blokkeer ChatGPT in Chrome, op Windows, Mac, Android, iPhone of op het hele wifi-netwerk. Gratis stappen per toestel, met de eerlijke grenzen erbij.',
    h1: 'ChatGPT blokkeren, op elk toestel.',
    lead: 'Het korte antwoord: blokkeer het adres chatgpt.com (en chat.openai.com) in de browser, op de computer, op de telefoon of op de router. Deze pagina toont de gratis manier voor elk toestel, en welke bij jouw situatie past.',
    actions: [{ label: 'Download Mindveto gratis', to: 'download', solid: true }, { label: 'Welke versie heb ik nodig?', to: 'help' }],
    blocks: [
      { h: 'Kies de manier die past', facts: [
        ['Eén browser (Chrome, Edge, Brave, Opera)', L('<a href="/nl/browserextensie/">Browserextensie</a>: één schakelaar, pincode. Ongeveer 1 minuut.')],
        ['Een hele Windows-pc, elke browser en app', L('<a href="/nl/windows/">Windows-download</a>: zet de AI-adressen in het hosts-bestand.')],
        ['Een Mac of Linux-computer', L('<a href="/nl/mac-linux/">Eén opdracht</a> in Terminal.')],
        ['Een Android-telefoon, ook in apps', L('<a href="/nl/android/">Android-app</a> met een lokaal filter en een pincode.')],
        ['Een iPhone', L('Een DNS-dienst met onze <a href="/nl/netwerk/">gratis lijst</a>, of Apple Schermtijd voor losse sites.')],
        ['Elk toestel op de wifi', L('<a href="/nl/netwerk/">Netwerklijsten</a> voor Pi-hole, AdGuard Home of de DNS van school of kantoor.')],
      ]},
      { h: 'ChatGPT blokkeren in Chrome of Edge', steps: [
        L('Download de <a href="/nl/browserextensie/">Mindveto-extensie</a> en pak het zip-bestand uit.'),
        L('Open <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>) en zet “Ontwikkelaarsmodus” aan.'),
        'Klik op “Uitgepakte extensie laden” en kies de uitgepakte map.',
        'Open Mindveto, zet de schakelaar om en kies een pincode. ChatGPT, Gemini, Copilot en 150+ andere AI-tools tonen nu een blokkeerpagina.',
        'Zet op de pagina “Details” van de extensie “Toestaan in incognitomodus” aan, anders worden privévensters niet geblokkeerd.',
      ]},
      { h: 'ChatGPT blokkeren zonder software', p: [
        L('Je kunt het met de hand doen. Zet op een computer deze regels in het hosts-bestand (beheerdersrechten nodig): <code>0.0.0.0 chatgpt.com</code> en <code>0.0.0.0 chat.openai.com</code>. Op een router met Pi-hole of AdGuard Home zet je dezelfde twee namen op de blokkeerlijst.'),
        L('Het nadeel: ChatGPT is er één van vele. Gemini, Copilot, Claude, Character.AI en de rest blijven open, en elke week komen er nieuwe bij. Daarom houdt Mindveto een <a href="/nl/netwerk/">openbare lijst van 150+ AI-diensten</a> bij die elke dag wordt bijgewerkt. Je kunt die lijst gebruiken zonder iets van ons te installeren.'),
      ]},
      { h: 'Eerlijke grenzen van elke manier', list: [
        'Een blokkade werkt alleen waar je ze installeert. Een kind of collega kan nog een andere telefoon of een ander netwerk gebruiken.',
        'Wie beheerder is van het toestel kan een blokkade verwijderen. Geef kinderen en personeel een gewoon account (geen beheerder).',
        'Browserextensies dekken geen andere browsers of apps. Blokkeer daarvoor op de computer, de telefoon of het netwerk.',
        'Lijsten die hele domeinen blokkeren kunnen geen losse pagina blokkeren. Enkele blokkades op paginaniveau, zoals Bing Chat, werken alleen in de browserextensie.',
      ], note: 'Blokkeren werkt het best samen met een duidelijke afspraak: wanneer mag AI, en waarom nu niet. Mindveto leest niets en stuurt niets; het zorgt alleen dat AI-adressen niet openen.', human: true },
    ],
    faq: [
      { q: 'Hoe blokkeer ik ChatGPT op de telefoon van mijn kind?', a: L('Op Android: installeer de <a href="/nl/android/">Mindveto-app</a>, zet “Altijd-aan VPN” aan en kies een pincode. Op een iPhone: gebruik een DNS-dienst met onze gratis lijst, of Apple Schermtijd om chatgpt.com te blokkeren. Zie <a href="/nl/ouders/">voor ouders</a>.') },
      { q: 'Hoe blokkeer ik ChatGPT op schoolcomputers?', a: L('Installeer de extensie verplicht via Chrome- of Edge-beleid en blokkeer AI op de school-DNS met het IT-pakket. Leerkrachten kunnen ook de <a href="/nl/examenknop/">examenknop</a> gebruiken. Zie <a href="/nl/scholen/">voor scholen</a>.') },
      { q: 'Hoe blokkeer ik ChatGPT op het werk maar laat ik Copilot toe?', a: L('Vink in de extensie de AI aan die je kantoor goedkeurt en laat de rest geblokkeerd. De <a href="/nl/plakbewaker/">plakbewaker</a> waarschuwt ook voor privégegevens in een AI-site geplakt worden. Zie <a href="/nl/kantoren/">voor kantoren</a>.') },
      { q: 'Is ChatGPT blokkeren gratis?', a: 'Ja. Blokkeren, de pincode en het rooster zijn gratis in Mindveto, en de blokkeerlijsten zijn gratis te gebruiken.' },
      { q: 'Kan ik ChatGPT alleen tijdens huiswerk of werkuren blokkeren?', a: 'Ja. De browserextensie heeft een rooster, met de schoolvakanties van België, Nederland en Frankrijk ingebouwd.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Gratis AI-beleid-sjabloon voor kleine kantoren',
    desc: 'Een AI-beleid van één pagina voor boekhouders, advocaten en andere kleine kantoren: welke tools mogen, wat nooit in AI gaat en hoe je het opvolgt. Gratis.',
    h1: 'Een AI-beleid dat je team in twee minuten leest.',
    lead: 'Een sjabloon van één pagina voor boekhouders, advocaten, notarissen en andere kleine kantoren. Kopieer het, vul de delen tussen haakjes in en deel het met je team.',
    actions: [{ label: 'Afdrukken of opslaan als pdf', url: '#print', solid: true }, { label: 'Voor kantoren', to: 'offices' }],
    blocks: [
      { h: 'Waarom je er een nodig hebt', p: ['Sinds 2 februari 2025 vraagt de Europese AI-verordening aan organisaties die AI-tools gebruiken om hun personeel er wegwijs in te maken (AI-geletterdheid). Een kort, geschreven beleid is een eenvoudige eerste stap, en het beschermt de gegevens van je klanten.'] },
      { h: '1. Doel', p: ['We gebruiken AI waar het ons werk beter maakt. Klantgegevens en vertrouwelijke dossiers blijven beschermd. Dit beleid zegt welke tools we gebruiken en wat er nooit in gaat.'] },
      { h: '2. Goedgekeurde AI-tools', list: ['[Tool, bijvoorbeeld Microsoft Copilot met onze zakelijke account]: toegestaan voor [opstellen, onze eigen teksten samenvatten].', 'Alle andere AI-chatbots, AI-zoekmachines en AI-schrijftools gebruiken we niet op werktoestellen of voor ons werk.'] },
      { h: '3. Nooit in een AI-tool', list: ['Namen van klanten samen met hun gegevens.', 'Rekening- en kaartnummers.', 'Rijksregister-, BSN- of andere identiteitsnummers.', 'Contracten, belastingaangiftes, medische of personeelsdossiers.', 'Wachtwoorden, toegangscodes en sleutels.', 'Alles wat als vertrouwelijk gemarkeerd is.'] },
      { h: '4. Voor je AI-resultaten gebruikt', list: ['Controleer feiten, cijfers en bronnen zelf.', 'Een mens keurt elk advies of elke brief aan een klant goed.', 'Zeg dat AI hielp als een klant ernaar vraagt, of als de wet of je beroepsregels het vragen.'] },
      { h: '5. Hoe we het opvolgen', list: ['Op werkcomputers blokkeert Mindveto AI-tools die we niet goedkeurden en waarschuwt het voor privégegevens in een AI-chat geplakt worden. De controle gebeurt op de computer; er wordt niets verstuurd.', 'De instellingen zijn vergrendeld met een pincode die [naam] beheert.'] },
      { h: '6. Vergissingen en vragen', p: ['Per vergissing iets geplakt? Meld het dezelfde dag aan [naam]. We weten het liever vroeg dan laat.', 'Eigenaar van dit beleid: [naam]. Laatst nagekeken: [datum]. Volgende controle: [datum plus zes maanden].'], note: 'Dit sjabloon helpt je op weg; het is geen juridisch advies. Kijk je beroepsregels na en informeer je personeel voor je nieuwe IT-regels invoert.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },

  family: {"title": "Porno-, gok- en datingsites gratis blokkeren", "desc": "Gratis gezinsfilter: blokkeer porno- en 18+-sites, gok- en datingsites, zet SafeSearch vast en stop VPN-trucs. Voor browser, Android, Windows en Mac.", "h1": "Blokkeer porno-, gok- en datingsites.", "lead": "Mindveto heeft naast de AI-schakelaar een gezinsfilter. Jij kiest wat het blokkeert, en een pincode houdt je keuze vast. Het staat uit tot jij het aanzet.", "actions": [{"label": "Gratis downloaden", "to": "download", "solid": true}, {"label": "Voor ouders", "to": "parents"}], "blocks": [{"h": "Wat je kunt aanzetten", "list": ["Volwassenensites: 60.000+ porno- en 18+-sites.", "SafeSearch: Google, Bing, DuckDuckGo en YouTube tonen alleen veilige resultaten, wat er ook in de zoekinstellingen staat.", "Gokken: 1.600 wed-, casino- en pokersites.", "Dating: 65 datingapps en sites voor willekeurige videochat.", "Anti-omzeilen: bekende VPN-, proxy- en Tor-sites, zodat het filter niet met één klik omzeild wordt.", "Elk onderdeel heeft een eigen schakelaar. Het werkt los van de AI-schakelaar."]}, {"h": "Zo zet je het aan", "steps": ["Browser: installeer de <a href=\"/nl/browserextensie/\">browserextensie</a>, open ze en vink onder “Gezinsfilter” aan wat je wilt.", "Android: installeer de <a href=\"/nl/android/\">Android-app</a> en gebruik de schakelaars onder “Gezinsfilter”. Het werkt dan in elke app op de telefoon.", "Windows: start de <a href=\"/nl/windows/\">Windows-download</a> en typ 5. Het script vraagt naar gokken en dating.", "Mac en Linux: gebruik de <a href=\"/nl/mac-linux/\">download voor Mac en Linux</a> en typ <code>sudo sh mindveto.sh family-on gambling dating</code>.", "Stel in de extensie en de app een pincode in: het filter uitzetten vraagt dan de pincode. Geef je kind op een computer een gewone account (geen beheerder)."]}, {"h": "Eerlijke grenzen", "list": ["Geen enkel filter vangt alles. Er komen elke dag nieuwe sites bij, en beelden kunnen nog opduiken in chats, apps en sociale media.", "De lijsten stoppen bekende sites. Een kind met de telefoon van een vriend of een beheerdersaccount kan eromheen.", "Op Android werkt het filter zolang Mindveto aanstaat. Zet “Altijd-aan VPN” aan, dan blijft het aan."], "note": "Mindveto houdt niet bij welke sites bezocht worden en stuurt niets naar ons. Een filter helpt; praten met je kind helpt meer.", "human": true}, {"h": "Feiten", "facts": [["Prijs", "Gratis"], ["Volwassenensites", "60.000+"], ["Goksites", "1.600"], ["Dating en videochat", "65"], ["Lijsten", "Open lijsten (MIT-licentie) plus onze eigen lijsten"], ["Verstuurde gegevens", "Geen"]]}], "faq": [{"q": "Is het gezinsfilter gratis?", "a": "Ja. Het zit vandaag in de gratis downloads van Mindveto."}, {"q": "Blokkeert het ook AI?", "a": "Alleen als je dat wilt. De AI-schakelaar en het gezinsfilter werken los van elkaar: je kunt het ene zonder het andere gebruiken."}, {"q": "Werkt het op een iPhone of op de hele wifi?", "a": "Er is nog geen iPhone-app. Je kunt dezelfde gratis lijsten gebruiken in een DNS-filter zoals AdGuard Home of Pi-hole: zie <a href=\"/nl/netwerk/\">hele netwerk</a>."}, {"q": "Blokkeert het per ongeluk een gewone site?", "a": "Dat kan bij elke lijst gebeuren. In de browserextensie kun je een site die je vertrouwt toelaten; jouw keuze gaat voor op het filter."}], "related": ["parents", "browser", "android"]},
};

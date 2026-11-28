import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';
import { P as PR } from './protect/de';
import { LK } from './linkable/de';
import { TR } from './trace/de';
import { ASK, ASK_REGION } from './ask';

// Internal links use the English paths; localize.ts rewrites them to /de/ paths at build time.
export const home: Home = {
  title: 'Mindveto: ChatGPT und 150+ KI-Tools per Schalter sperren',
  desc: 'Sperrt ChatGPT, Gemini, Copilot und über 150 KI-Tools in Browsern, auf Android, Windows, Mac und im Netzwerk. PIN, Prüfungsknopf. Kostenlos, ohne Tracking.',
  h1: 'Sperre ChatGPT und 150+ KI-Tools.',
  motto: 'Dein Kopf hat das letzte Wort.', trust: 'Kostenlos. Kein Konto, kein Tracking. Entwickelt von Amghar Said.', mockOn: 'KI-Chat ist offen', mockOff: 'Von Mindveto gesperrt',
  lead: 'Für Eltern, Schulen und Büros. Mindveto läuft im Browser, auf dem Handy, dem Computer oder im ganzen Netzwerk, und eine PIN entscheidet, wer KI wieder einschalten darf.',
  switchOn: 'KI', switchOff: 'Veto', switchLabel: 'Ausprobieren: KI auf dieser Seite abschalten',
  statusOn: 'KI erlaubt. Umlegen.', statusOff: 'Veto. Über 150 KI-Dienste gesperrt.',
  how: 'So funktioniert es',
  doorsH: 'Für wen',
  doors: [
    { key: 'parents', who: 'Eltern', why: 'KI-Begleiter um Mitternacht, Hausaufgaben vom Chatbot. Sperren Sie es auf dem Familien-PC und dem Handy Ihres Kindes. Neu: ein kostenloser Familienfilter für Porno-, Glücksspiel- und Dating-Seiten.', go: 'Für Eltern' },
    { key: 'schools', who: 'Schulen', why: 'Ein Prüfungsknopf für Lehrkräfte und Dateien, die die IT heute auf jedem Schulrechner ausrollen kann.', go: 'Für Schulen' },
    { key: 'offices', who: 'Büros', why: 'Mandantenakten, IBANs und Verträge bleiben aus öffentlichen Chatbots. Nur die KI, die Ihr Büro freigibt.', go: 'Für Büros' },
  ],
  productsH: 'Eine Idee, sieben Werkzeuge',
  productsLead: 'Wählen Sie, was zum Gerät passt. Heute ist alles kostenlos.',
  proofH: 'Was Ihr Gerät verlässt',
  proofP: 'Mindveto prüft alles auf dem Gerät selbst. Wir wollen Ihre Daten nicht, also haben wir es so gebaut, dass wir sie nie bekommen.',
  ledger: [
    ['Nichts', 'Die Seiten, die Sie besuchen, was Sie tippen, was Sie einfügen.', true],
    ['Nichts', 'Ihr Name, Ihre E-Mail-Adresse oder ein Konto. Es gibt kein Konto.', true],
    ['Einmal am Tag', 'Die Erweiterung lädt die öffentliche Liste der KI-Adressen. Sie sendet keine Einstellungen oder Surfdaten mit. Wie bei jedem Download sieht der Server Ihre IP-Adresse.', false],
    ['Nur wenn Sie beitreten', 'Im Prüfungsmodus wird der Klassencode einmal pro Minute gesendet, um zu fragen, ob die Prüfung läuft. Keine Namen.', false],
  ],
  limitsH: 'Ehrliche Grenzen',
  limits: [
    'Es wirkt im Browser, auf dem Handy, Computer oder Netzwerk, wo Sie es installieren. Ein Kind kann noch das Handy eines Freundes nutzen.',
    'Wer das ganze Gerät kontrolliert, kann es entfernen. Nutzen Sie für Kinder und Personal ein normales Konto (ohne Admin-Rechte).',
    'Jede Woche erscheinen neue KI-Tools. Die Liste wird täglich aktualisiert, aber eins kann ein paar Tage durchrutschen.',
  ],
  priceH: 'Kostenlos starten',
  priceP: 'Sperren bleibt für alle kostenlos. Bezahlte Pläne für Familien, Schulen und Büros kommen später.',
  priceGo: 'Pläne ansehen',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
  check: {"title": "Funktioniert Mindveto? KI-Sperre testen", "desc": "Teste in Sekunden, ob ChatGPT, Gemini, Claude und andere KI-Seiten auf diesem Gerät wirklich gesperrt sind. Kostenlos, ohne Konto, nichts geht an uns.", "h1": "Funktioniert es? Hier testen.", "lead": "Öffne diese Seite auf dem Gerät, das du prüfen willst, drücke den Knopf und sieh pro KI-Seite, ob sie gesperrt ist. Teste jedes Gerät und jeden Browser.", "blocks": [{"h": "Was der Test prüft", "list": ["Acht bekannte KI-Seiten, eine nach der anderen.", "Gesperrt heißt: Mindveto (oder dein Netzwerkfilter) hat die Verbindung auf diesem Gerät gestoppt.", "Offen heißt: Die KI-Seite ist von hier aus gerade erreichbar."]}, {"h": "Wenn eine Seite offen ist", "list": ["Ist Mindveto eingeschaltet? Klicke im Browser auf das Mindveto-Symbol.", "Pausiert der Zeitplan es gerade? Dann ist KI absichtlich erlaubt.", "Hast du diese KI in den Einstellungen freigegeben? Freigegebene KI bleibt offen.", "Bist du in einem anderen Browser oder einem privaten Fenster? Jeder Browser braucht seine eigene Erweiterung."], "note": "Der Test zeigt nur dieses Gerät, diesen Browser und diesen Moment. Wiederhole ihn auf dem Handy oder Laptop deines Kindes.", "human": true}], "faq": [{"q": "Sendet der Test meine Daten an Mindveto?", "a": "Nein. Die Seite versucht nur, die KI-Seiten von deinem eigenen Gerät aus zu erreichen. Vom Ergebnis geht nichts an uns."}, {"q": "Warum steht bei einer Seite „Keine Antwort“?", "a": "Die Seite hat nicht innerhalb von sechs Sekunden geantwortet. Das kann eine langsame Verbindung sein oder eine Sperre, die wartet statt abzulehnen. Versuche es erneut."}], "related": ["bypass", "download", "help"]},
  bypass: {"title": "Wie Kinder KI-Sperren umgehen, ehrlich", "desc": "Die Tricks, mit denen Kinder KI-Sperren und Kinderschutz umgehen, und für jeden: Stoppt Mindveto ihn, was musst du einstellen, und was stoppt kein Filter.", "h1": "Umgehungstricks, ehrlich.", "lead": "Kinder probieren es. Hier steht, was Mindveto von selbst stoppt, was es stoppt, wenn du es einrichtest, und was kein Filter stoppt. Lies es, bevor du dich auf eine Sperre verlässt.", "actions": [{"label": "Funktioniert es? Testen", "to": "check", "solid": true}], "blocks": [{"h": "Das stoppt Mindveto", "list": ["Die Adresse einer anderen KI-Seite eintippen: über 150 KI-Seiten und ihre Unterseiten sind gesperrt.", "Eine KI-Seite über Google Übersetzer öffnen: diese Kopien sind auch gesperrt.", "Den „KI-Modus“ der Google-Suche nutzen: gesperrt.", "Mindveto ausschalten oder Einstellungen ändern: braucht die PIN, und der Versuch steht im Manipulationsprotokoll.", "Die PIN raten: nach 5 falschen Versuchen wird eine Weile gesperrt, und das wird protokolliert."]}, {"h": "Gestoppt, wenn du es einrichtest", "list": ["VPN- und Proxy-Seiten: schalte im Familienfilter „VPN-, Proxy- und Secure-DNS-Seiten sperren“ ein.", "Ein privates Fenster (Inkognito): öffne in Chrome oder Edge die Details der Erweiterung und erlaube sie in privaten Fenstern.", "Ein anderer Browser auf demselben Computer: installiere die Erweiterung auch dort, oder nutze den Download für Windows oder Mac, der für jeden Browser und jede App gilt.", "Die Erweiterung entfernen: nutze den Download für Windows oder Mac und gib deinem Kind ein normales Konto (kein Admin), damit es das nicht rückgängig machen kann.", "Die Android-App ausschalten: schalte in den Android-Einstellungen „Durchgehend aktives VPN“ und „Verbindungen ohne VPN blockieren“ ein. Die App warnt dich auch.", "Die Uhr verstellen, um dem Zeitplan zu entgehen: ein normales Konto (kein Admin) kann die Uhr des Computers nicht ändern."]}, {"h": "Das stoppt kein Filter", "list": ["Mobile Daten oder der Hotspot eines Freundes: ein WLAN-Filter endet an der Haustür. Die Versionen für Browser, Handy und Computer wirken in jedem Netz.", "Das Handy eines Freundes oder ein Schulcomputer: dorthin reicht kein Filter von zu Hause.", "KI in Apps wie Snapchat oder WhatsApp: sie läuft oft über die Server der App selbst, eine Sperre würde die App kaputt machen. Schalte sie, wo möglich, in den Einstellungen der App aus.", "Ein iPhone: es gibt noch keine Mindveto-App für iPhone. Nutze Bildschirmzeit auf dem iPhone oder sperre KI für das ganze WLAN."], "note": "Keine Sperre ersetzt ein Gespräch. Erkläre deinem Kind, warum es die Regel gibt und wann KI in Ordnung ist.", "human": true}], "related": ["check", "family", "parents"]},
  parents: {
    title: 'ChatGPT und KI-Apps für Ihr Kind sperren',
    desc: 'Sperren Sie KI-Chatbots, KI-Begleiter und Hausaufgaben-KI im Browser, auf dem Android-Handy und dem Familien-PC Ihres Kindes. PIN und Zeitplan. Kostenlos.',
    h1: 'KI für Ihr Kind sperren, auf jedem Bildschirm.',
    lead: 'KI-Begleiter, die um Mitternacht chatten, Aufsätze in zehn Sekunden. Mit Mindveto entscheiden Sie, wann KI Teil des Tages Ihres Kindes ist, und eine PIN sorgt dafür, dass es so bleibt.',
    actions: [{ label: 'Kostenlos herunterladen', to: 'download', solid: true }, { label: 'Welche Version brauche ich?', to: 'help' }],
    blocks: [
      { h: 'Was Sie tun können', list: [
        'Über 150 KI-Chatbots, KI-Begleiter, Hausaufgabenhelfer und KI-Bildtools mit einem Schalter sperren.',
        'Eine PIN setzen, damit Ihr Kind es nicht abschalten oder die Liste ändern kann.',
        'Einen Zeitplan nutzen: nur an Schultagen sperren, oder nur abends. Die Schulferien von Belgien, den Niederlanden und Frankreich sind eingebaut.',
        'Ein Manipulationsprotokoll sehen: falsche PIN-Versuche und wann der Schalter ausgeschaltet wurde.',
        'Neu: Hinweis bei KI-Freund-Apps. Begleiter-Apps wie Character.AI, Replika und Talkie werden blockiert, und ein Versuch schreibt „KI-Freund-App versucht“ ins Manipulationsprotokoll und setzt eine rote Markierung am Symbol. Gespeichert wird nur die Uhrzeit, nicht die Seite oder der Chat. In der Browser-Erweiterung; die Android-App und die PC-Downloads blockieren diese Apps auch, aber ohne Hinweis. Mehr dazu: <a href="/de/blog/ist-character-ai-sicher-fuer-kinder/">Ist Character.AI sicher für Kinder?</a>',
        'Nachtmodus: Ein Knopf blockiert KI jede Nacht von 22:00 bis 07:00 (Browser-Erweiterung).',
        'Eine vertrauenswürdige KI erlauben, etwa für ein Schulprojekt, und den Rest gesperrt lassen.',
        'Auf Wunsch auch soziale Medien wie TikTok, Instagram und Snapchat im Browser sperren. Aus, bis Sie es einschalten.',
        'Familienfilter, kostenlos: Porno- und Ab-18-Seiten sperren und SafeSearch in Google, Bing, DuckDuckGo und YouTube erzwingen. Aus, bis du ihn einschaltest. Optional: auch VPN-, Proxy- und Secure-DNS-Seiten sperren, damit der Filter nicht leicht zu umgehen ist. Ebenfalls optional: Glücksspiel- und Wettseiten sowie Dating-Apps und Zufalls-Videochats sperren.',
      ]},
      { h: 'In 10 Minuten eingerichtet', steps: [
        L('Auf dem Familien-PC: Installieren Sie die <a href="/browser-extension/">Browser-Erweiterung</a>, oder sperren Sie KI in jeder App mit dem Download für <a href="/windows/">Windows</a> oder <a href="/mac-linux/">Mac</a>.'),
        L('Auf dem Android-Handy Ihres Kindes: Installieren Sie die <a href="/android/">Android-App</a> und schalten Sie „Durchgehend aktives VPN“ ein, damit sie viel schwerer zu umgehen ist.'),
        'Setzen Sie überall dieselbe PIN und behalten Sie sie für sich.',
        'Geben Sie Ihrem Kind ein normales Konto (ohne Admin-Rechte) auf dem Computer. Dann kann es Mindveto nicht entfernen.',
      ]},
      { h: 'Ein gutes Gespräch schlägt jede Sperre', p: [
        'Sperren wirkt am besten, wenn Ihr Kind den Grund kennt. Erklären Sie, was Mindveto tut, wann KI erlaubt ist und dass das Protokoll zeigt, wenn jemand versucht, es abzuschalten.',
      ], note: 'Mindveto liest keine Nachrichten Ihres Kindes und sendet uns nichts. Es verhindert nur, dass KI-Adressen geöffnet werden.', human: true },
    ],
    faq: [
      { q: 'Funktioniert es auf dem iPhone?', a: L('Eine iPhone-App gibt es noch nicht. Sie können KI auf einem iPhone mit unserer kostenlosen Liste und einem DNS-Dienst sperren: siehe <a href="/network/">ganzes Netzwerk</a>. Auch Apples Bildschirmzeit kann einzelne Seiten sperren.') },
      { q: 'Mein Kind nutzt einen Schul-Laptop. Kann ich es dort installieren?', a: 'Fragen Sie zuerst die Schule. Schulgeräte werden von der Schule verwaltet, und viele Schulen können Mindveto für alle Schüler auf einmal installieren.' },
      { q: 'Ist es wirklich kostenlos?', a: 'Ja. Sperren, PIN und Zeitplan bleiben kostenlos. Ein bezahlter Plus-Plan mit Extras für Familien kommt später.' },
    ],
    related: ['family', 'browser', 'android'],
  },

  schools: {
    title: 'KI auf Schulrechnern sperren, mit Prüfungsknopf',
    desc: 'Sperrt ChatGPT und KI-Tools auf Schulrechnern und im Schulnetz. Prüfungsknopf für Lehrkräfte, Richtlinien- und DNS-Dateien für die IT. Keine Schülerdaten.',
    h1: 'KI aus während der Prüfung. An, wenn der Unterricht sie braucht.',
    lead: 'Lehrkräfte bekommen einen Prüfungsknopf. Die IT bekommt fertige Dateien für jeden Schulrechner und das Schulnetz. Niemand liest, was Schüler tippen.',
    actions: [{ label: 'Prüfungsknopf öffnen', to: 'exam', solid: true }, { label: 'Dateien für die IT', to: 'network' }],
    blocks: [
      { h: 'Für Lehrkräfte', list: [
        'EU-KI-Verordnung: was Artikel 4 zur KI-Kompetenz von Ihrer Schule verlangt, mit einem 6-Schritte-Plan: <a href="/de/blog/ki-verordnung-artikel-4-schulen/">zum Ratgeber</a>.',
        'Eine Klasse mit einem Klick anlegen. Schüler treten mit einem Code in der Erweiterung bei.',
        'Den Prüfungsmodus für 30 bis 240 Minuten starten. Innerhalb einer Minute ist jede KI in den Browsern Ihrer Klasse gesperrt.',
        'Keine Konten, keine Schülernamen, keine E-Mail-Adressen.',
      ], actions: [{ label: 'Klasse anlegen', to: 'exam' }] },
      { h: 'Für die IT', list: [
        'Die Erweiterung per Chrome- und Edge-Richtlinie (Google Admin, GPO, Intune) zwangsinstallieren, damit Schüler sie nicht entfernen können.',
        'KI im Schulnetz sperren mit Dateien für Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid und gängige Firewalls.',
        'Nur die KI-Tools erlauben, die Ihre Schule freigibt, und alles andere gesperrt lassen.',
      ], actions: [{ label: 'IT-Paket herunterladen', to: 'network' }] },
      { h: 'Datenschutz für Schüler', p: [
        'Mindveto prüft alles auf dem Gerät. Es zeichnet nicht auf, welche Seiten Schüler besuchen, und liest keine Eingaben. Für den Prüfungsmodus speichert unsere Datenbank nur einen gehashten Klassencode und das Prüfungsende.',
        L('Das lässt sich Eltern und Ihrem Datenschutzbeauftragten leicht erklären. Lesen Sie die <a href="/privacy/">Datenschutzerklärung</a>.'),
      ]},
      { h: 'Ein Halbjahr testen', p: [
        L('Kostenlos während des Pilots. Schreiben Sie an <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> mit dem Namen der Schule und der Zahl der Geräte, und wir helfen bei der Einrichtung.'),
      ]},
    ],
    faq: [
      { q: 'Kann ein Schüler die Klasse verlassen oder es abschalten?', a: 'Nicht, wenn die Schule die PIN setzt und die Erweiterung per Browser-Richtlinie installiert. Auf einem Rechner, auf dem der Schüler Administrator ist, kann er sie entfernen.' },
      { q: 'Sperrt es Handys im Klassenraum?', a: 'Der Prüfungsmodus wirkt in den Browsern der Schulrechner. Für Handys im Schul-WLAN nutzen Sie die DNS-Dateien für das Schulnetz.' },
      { q: 'Was kostet es später?', a: L('Geplant ist 1 € pro Schüler und Jahr, mindestens 149 € pro Schule. Siehe <a href="/pricing/">Preise</a>.') },
    ],
    related: ['exam', 'trace', 'network'],
  },

  offices: {
    title: 'Mandantendaten nicht mehr in ChatGPT einfügen',
    desc: 'Einfüge-Schutz für Büros: eine Warnung, bevor IBANs, Ausweisnummern, Kundenlisten oder vertrauliche Texte in KI-Chats landen. Nur freigegebene KI.',
    h1: 'Eine Warnung, bevor Mandantendaten in einem Chatbot landen.',
    lead: 'Eine Steuerfachangestellte fügt einen Kontoauszug in einen Chatbot ein, um ihn „zusammenzufassen“. Mindveto stoppt diesen Moment auf dem Bildschirm, bevor die Daten das Büro verlassen.',
    actions: [{ label: 'Private Daten in ChatGPT schützen', to: 'paste', solid: true }, { label: 'Preise für Teams', to: 'pricing' }],
    blocks: [
      { h: 'Was es für ein Büro tut', list: [
        'Nur die KI erlauben, die Ihr Büro freigibt (zum Beispiel Microsoft Copilot mit Ihrem Geschäftskonto), und die anderen 150+ sperren.',
        'Warnen, bevor IBANs, Kartennummern, Ausweisnummern, E-Mail-Listen, geheime Schlüssel oder als „vertraulich“ markierte Texte in eine KI-Seite eingefügt werden.',
        'Eigene private Wörter hinzufügen: Mandantennamen, Projektcodes, Aktenzeichen.',
        'Die Einstellungen mit einer PIN sperren und sehen, wann jemand sie ändern wollte.',
      ]},
      { h: 'Warum Büros es wählen', p: [
        'Große Data-Loss-Tools schicken Ihre Daten zur Prüfung in ihre Cloud und kosten Tausende. Mindveto prüft auf dem PC selbst, der Text verlässt das Büro nie.',
        'Es passt zu Steuerberatern, Kanzleien, Notariaten, Versicherungsmaklern, Personalabteilungen und Arztpraxen: kleine Teams mit vertraulichen Akten und ohne IT-Abteilung.',
      ], note: 'In Deutschland, Österreich und vielen anderen Ländern muss der Betriebsrat oder das Personal informiert werden, bevor Sie ein solches Werkzeug einführen. Mindveto prüft eingefügten Text nur auf dem Gerät und sendet nichts an uns, das macht dieses Gespräch leichter.', human: true },
      { h: 'Ausrollen', steps: [
        L('Installieren Sie die <a href="/browser-extension/">Browser-Erweiterung</a> auf jedem Arbeitsrechner, oder zwangsinstallieren Sie sie per Edge- oder Chrome-Richtlinie.'),
        'Haken Sie die KI an, die Ihr Büro erlaubt, und fügen Sie Ihre privaten Wörter hinzu.',
        'Setzen Sie eine PIN für das ganze Büro.',
      ]},
    ],
    faq: [
      { q: 'Kann es KI in Word oder Outlook sperren?', a: L('Die Erweiterung wirkt im Browser. Unter Windows kann der <a href="/windows/">Windows-Download</a> auch das in Windows eingebaute Copilot und Recall abschalten.') },
      { q: 'Sehen Sie, was mein Personal einfügt?', a: 'Nein. Die Prüfung läuft auf dem Computer. Eingefügter Text wird nie gespeichert oder gesendet.' },
      { q: 'Was kostet es?', a: L('Der Plan für Teams kostet 2,50 € pro Nutzer und Monat. Während des Starts ist er kostenlos. Siehe <a href="/pricing/">Preise</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'KI-Blocker-Erweiterung für Chrome, Edge, Brave und Opera',
    desc: 'Kostenlose Erweiterung: sperrt ChatGPT, Gemini, Claude und über 150 KI-Seiten in Chrome, Edge, Brave und Opera. PIN, Zeitplan, Einfüge-Schutz. Kein Tracking.',
    h1: 'Der KI-Schalter für Ihren Browser.',
    lead: 'Ein Schalter sperrt über 150 KI-Chatbots und KI-Tools. Eine PIN verhindert, dass jemand anderes ihn ändert. Funktioniert in Chrome, Edge, Brave und Opera.',
    actions: [{ label: 'v1.8.1 herunterladen (738 KB)', url: DL + 'human-override-1.8.1.zip', solid: true, download: true }, { label: 'Installationsschritte', url: '#install' }],
    blocks: [
      { h: 'Was drin ist', list: [
        'Sperrt KI-Chat, KI-Suche, KI-Bild-, Video-, Stimm- und Musiktools, KI-Schreib- und Hausaufgabentools, KI-Programmiertools und KI-Protokollanten.',
        'PIN-Sperre für den Schalter und alle Einstellungen.',
        'Zeitplan mit Schulferien für Belgien, die Niederlande und Frankreich.',
        L('<a href="/paste-guard/">Einfüge-Schutz</a> mit eigenen privaten Wörtern.'),
        'Freigegebene KI: nur die Tools erlauben, die Ihre Schule oder Firma erlaubt.',
        L('Klassen- und <a href="/exam-button/">Prüfungsmodus</a> für Lehrkräfte.'),
        'Manipulationsprotokoll und eine rote Markierung am Symbol nach einer falschen PIN.',
        'KI-Freund-Apps (Character.AI, Replika, Talkie und mehr) haben einen eigenen Schalter, standardmäßig an. Ein blockierter Versuch schreibt „KI-Freund-App versucht“ ins Manipulationsprotokoll und setzt eine rote Markierung am Symbol. Gespeichert wird nur die Uhrzeit.',
        'Nachtmodus: Ein Knopf blockiert KI jede Nacht, 22:00-07:00.',
        'Eigene Sperr- und Erlaubt-Listen. Die öffentliche Liste wird einmal täglich aktualisiert.',
        'Optional: auch soziale Medien sperren (TikTok, Instagram, Snapchat und mehr). Aus, bis Sie es einschalten.',
        'Die Erweiterung ist vorerst auf Englisch, Niederländisch und Französisch.',
        'Familienfilter: sperrt über 60.000 Porno- und Ab-18-Seiten und erzwingt SafeSearch in Google, Bing, DuckDuckGo und YouTube. Aus, bis du ihn einschaltest; mit PIN kannst nur du ihn ausschalten. Optional: sperrt auch VPN-, Proxy-, Tor- und Secure-DNS-Seiten, damit der Filter nicht einfach umgangen wird. Ebenfalls optional: Glücksspiel- und Wettseiten sowie Dating-Apps und Zufalls-Videochats sperren.',
      ]},
      { h: 'In einer Minute installiert', fold: 'Installationsschritte zeigen', foldLead: 'Store-Versionen sind unterwegs. Bis dahin installieren Sie sie in einer Minute von Hand.', steps: [
        'Laden Sie das Zip oben herunter und entpacken Sie es (Rechtsklick, „Alle extrahieren“).',
        L('Öffnen Sie <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>).'),
        'Schalten Sie den „Entwicklermodus“ ein (oben rechts).',
        'Klicken Sie auf „Entpackte Erweiterung laden“ und wählen Sie den entpackten Ordner.',
        'Heften Sie das Symbol an die Leiste, öffnen Sie es und setzen Sie eine PIN.',
      ], note: 'Für Eltern und Schulen: Schalten Sie auf der Seite „Details“ der Erweiterung „Im Inkognitomodus zulassen“ ein. Sonst werden private Fenster nicht gesperrt.' },
      { h: 'Fakten', facts: [
        ['Version', '1.8.1 (Manifest V3)'], ['Größe', '738 KB'], ['Browser', 'Chrome, Edge, Brave, Opera. Firefox und die offiziellen Stores: bald'],
        ['Berechtigungen', 'Sperrregeln, lokaler Speicher, ein täglicher Timer und Zugriff auf alle Seiten: nötig, um jede KI-Adresse auf die Mindveto-Seite umzuleiten. Der Einfüge-Schutz läuft nur auf KI-Seiten'], ['Gesendete Daten', 'Keine Surfdaten. Die öffentliche Liste wird einmal täglich geladen; der Prüfungsmodus sendet nur einen Klassencode, einmal pro Minute'], ['Preis', 'Kostenlos'],
      ]},
    ],
    faq: [
      { q: 'Warum ist es noch nicht im Chrome Web Store?', a: 'Store-Versionen sind unterwegs. Bis dahin installieren Sie es in einer Minute von Hand, mit den Schritten oben.' },
      { q: 'Warum zeigt ein älterer Download „Human Override“?', a: 'So hieß es bis November 2026. Ab Version 1.3.0 heißt es Mindveto. Es ist dasselbe Produkt.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'KI-Apps auf Android sperren',
    desc: 'Android-App, die ChatGPT, Gemini, Character.AI und über 150 KI-Dienste in jeder App auf dem Handy sperrt. PIN und Manipulationswarnungen. Nichts wird gesendet.',
    h1: 'KI aus, in jeder App auf dem Handy.',
    lead: 'Browser sind nur die halbe Geschichte: KI-Apps leben auf dem Handy. Die Mindveto-App für Android sperrt KI-Adressen für jede App und meldet, wenn jemand versucht, sie abzuschalten.',
    actions: [{ label: 'Für Android herunterladen (389 KB, Beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'So funktioniert es', p: [
        'Die App betreibt auf dem Handy einen kleinen lokalen Filter für Internet-Namen (DNS). Fragt eine App nach einer KI-Adresse, antwortet der Filter, dass es sie nicht gibt. Alles andere funktioniert normal.',
        'Nur diese Namensabfragen laufen durch die App. An uns wird nichts gesendet.',
        'Optionaler Familienfilter: Schalte in der App „Erwachsenenseiten“ und „SafeSearch“ ein. Pornoseiten öffnen sich dann in keiner App, und Google, Bing, DuckDuckGo und YouTube zeigen sichere Ergebnisse. Mit PIN lässt er sich nur mit der PIN ausschalten. Ein dritter Schalter sperrt VPN-, Proxy- und Secure-DNS-Dienste, damit der Filter nicht leicht zu umgehen ist. Ebenfalls optional: Glücksspiel- und Wettseiten sowie Dating-Apps und Zufalls-Videochats sperren.',
      ]},
      { h: 'Installieren', steps: [
        'Öffnen Sie den Download-Link auf dem Handy.',
        'Wenn Android fragt, erlauben Sie „Unbekannte Apps installieren“ für Ihren Browser.',
        'Öffnen Sie die App und tippen Sie auf den großen Knopf.',
        'Schalten Sie „Durchgehend aktives VPN“ und „Verbindungen ohne VPN blockieren“ ein (die App zeigt, wie). Dann ist es viel schwerer zu umgehen.',
        'Setzen Sie eine PIN.',
      ], note: 'Beta: Deinstallieren Sie zum Aktualisieren zuerst die alte Version. Eine Google-Play-Version kommt bald. Die App ist vorerst auf Englisch, Niederländisch und Französisch.' },
      { h: 'Fakten', facts: [
        ['Version', 'Beta, Ziel Android 16 (SDK 36)'], ['Größe', '389 KB'], ['Voraussetzung', 'Android 8 oder neuer'],
        ['Manipulationswarnungen', 'Ja, eine Meldung, wenn der Schutz stoppt'], ['Gesendete Daten', 'Nichts an uns. Nicht gesperrte Anfragen gehen wie üblich an einen DNS-Server'], ['Preis', 'Kostenlos während der Beta'],
      ]},
    ],
    faq: [
      { q: 'Macht es das Handy langsamer oder kostet es Akku?', a: 'Kaum. Es beantwortet nur Namensabfragen und leitet Ihren Verkehr nicht über einen Server.' },
      { q: 'Kann ich gleichzeitig ein anderes VPN nutzen?', a: 'Nein. Android erlaubt nur ein VPN zur Zeit. Mindveto nutzt diesen Platz für seinen lokalen Filter.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'KI unter Windows sperren, in jedem Browser und jeder App',
    desc: 'Kostenloser Windows-Download, der ChatGPT und über 150 KI-Dienste in jedem Browser und jeder App sperrt und Copilot und Recall abschalten kann.',
    h1: 'KI auf dem ganzen Windows-PC sperren.',
    lead: 'Keine Erweiterung nötig: Ein Download sperrt KI-Adressen für jeden Browser und jede App auf dem Computer. Er kann auch die in Windows eingebaute KI abschalten.',
    actions: [{ label: 'Für Windows herunterladen (501 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installieren', fold: 'Installationsschritte zeigen', foldLead: 'Store-Versionen sind unterwegs. Bis dahin installieren Sie es in einer Minute von Hand.', steps: [
        'Entpacken Sie den Download.',
        'Doppelklicken Sie auf „Start-Mindveto.bat“ und klicken Sie auf Ja.',
        'Tippen Sie 1, um KI zu sperren. Tippen Sie 3, um auch Copilot, Recall und die KI in Edge und Chrome abzuschalten.',
        'Geben Sie Kindern oder Personal ein normales Konto (ohne Admin-Rechte). Dann können sie es nicht rückgängig machen.',
        'Tippe 5, um den Familienfilter einzuschalten: Porno- und Ab-18-Seiten gesperrt, SafeSearch in Google, Bing und YouTube erzwungen. Tippe 6, um ihn auszuschalten. Er sperrt auch VPN-, Proxy- und Secure-DNS-Seiten und schaltet Secure DNS in Chrome, Edge und Firefox aus. Option 5 fragt auch nach Glücksspiel- und Dating-Seiten.',
      ], note: 'Windows meldet eventuell zuerst, dass es „den PC geschützt“ hat. Klicken Sie auf „Weitere Informationen“, dann auf „Trotzdem ausführen“. Das Skript ist reiner Text: Sie können es im Editor öffnen und jede Zeile lesen. Das Skript ist auf Englisch.' },
      { h: 'Fakten', facts: [
        ['Läuft auf', 'Windows 10 und 11'], ['Wie', 'Trägt KI-Adressen in die Windows-hosts-Datei ein und setzt offizielle Windows-Richtlinien für eingebaute KI'],
        ['Rückgängig', 'Erneut ausführen und 2 tippen (4 für die eingebaute KI)'], ['Voraussetzung', 'Einmal Administratorrechte'], ['Preis', 'Kostenlos'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'KI auf Mac und Linux sperren',
    desc: 'Kostenloses Skript, das ChatGPT und über 150 KI-Dienste in jedem Browser und jeder App auf einem Mac oder Linux-Rechner sperrt. Ein Befehl an, einer aus.',
    h1: 'Ein Befehl. KI aus auf dem ganzen Mac oder Linux-Rechner.',
    lead: 'Das Skript trägt KI-Adressen in die hosts-Datei des Systems ein, so ist jeder Browser und jede App auf dem Computer abgedeckt.',
    actions: [{ label: 'Für Mac und Linux herunterladen (498 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installieren', steps: [
        'Entpacken Sie den Download.',
        'Öffnen Sie das Terminal im entpackten Ordner.',
        L('Tippen Sie <code>sudo sh mindveto.sh on</code> und Ihr Passwort.'),
        L('Um KI wieder zu erlauben: <code>sudo sh mindveto.sh off</code>.'),
        L('Familienfilter (Porno- und Ab-18-Seiten, SafeSearch): <code>sudo sh mindveto.sh family-on</code>, und <code>family-off</code> zum Rückgängigmachen. Er sperrt auch VPN-, Proxy- und Secure-DNS-Seiten. Füge <code>gambling dating</code> hinzu, um auch diese Seiten zu sperren.'),
      ], note: 'Nutzen Sie für Kinder ein normales Konto (ohne Admin-Rechte). Dann können sie die hosts-Datei nicht ändern.' },
      { h: 'Fakten', facts: [
        ['Läuft auf', 'macOS, Ubuntu, Debian, Fedora und den meisten Linux-Systemen'], ['Rückgängig', 'Ein Befehl'], ['Preis', 'Kostenlos'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'KI im ganzen Netzwerk sperren: DNS, Firewall, Richtlinien',
    desc: 'Kostenlose Listen und ein IT-Paket, um ChatGPT und über 150 KI-Dienste im ganzen Netzwerk zu sperren: Pi-hole, AdGuard, Windows DNS, BIND, Squid, GPO, Intune.',
    h1: 'KI für jedes Gerät im Netzwerk sperren.',
    lead: 'Für Zuhause, Schulen, Büros und Behörden. Nutzen Sie unsere kostenlosen Listen mit dem Filter, den Sie schon haben, oder rollen Sie heute das IT-Paket aus.',
    actions: [{ label: 'IT-Paket herunterladen (13 KB)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Kostenlose Listen', p: ['Fügen Sie Ihrem Filter eine Adresse hinzu. Die Listen bleiben unter derselben Adresse und werden aktualisiert, wenn neue KI-Dienste erscheinen.'], facts: [
        ['AdGuard- / uBlock-Liste', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['hosts-Datei', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Reine Domains', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Wo man sie nutzt', list: [
        'Router zu Hause oder im Büro mit Pi-hole oder AdGuard Home: Liste einmal hinzufügen, jedes Gerät im WLAN ist abgedeckt.',
        'Android und iPhone: ein kostenloses AdGuard-DNS-Konto mit unserer Liste als eigene Regeln, dann Privates DNS (Android) oder ein Profil (iPhone).',
        'Ein Computer: die hosts-Liste in die hosts-Datei eintragen (Admin-Rechte nötig).',
      ]},
      { h: 'Im IT-Paket', list: [
        'Chrome- und Edge-Richtlinien (GPO, Intune, Google Admin), um die Erweiterung zwangszuinstallieren und KI-Seiten zu sperren.',
        'Firefox-Richtlinien.',
        'Windows Server DNS (PowerShell), BIND-RPZ-Zone, Unbound, dnsmasq.',
        'Squid-Proxy-ACL und eine Firewall-Liste für Palo Alto, Fortinet und Check Point.',
      ], note: 'DNS-Listen sperren ganze Domains. Einige Sperren auf Seitenebene, etwa Bing Chat, wirken nur in der Browser-Erweiterung.' },
    ],
    faq: [
      { q: 'Dürfen wir die Listen gewerblich nutzen?', a: L('Ja, innerhalb Ihrer eigenen Organisation. Weiterverkauf braucht eine schriftliche Erlaubnis. Siehe die <a href="/terms/">Nutzungsbedingungen</a>.') },
      { q: 'Helfen Sie beim Ausrollen?', a: L('Ja. Schreiben Sie an <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> mit der Zahl der Geräte und Ihrer Umgebung.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Prüfungsknopf: KI für Ihre Klasse abschalten',
    desc: 'Kostenloser Prüfungsknopf für Lehrkräfte: Ein Tipp sperrt jeden KI-Chatbot in den Browsern Ihrer Klasse während einer Prüfung. Keine Konten, keine Namen.',
    h1: 'Keine KI während der Prüfung.',
    lead: 'Ein Tipp schaltet jeden KI-Chatbot in den Browsern Ihrer Klasse ab, so lange die Prüfung dauert. Kostenlos, ohne Konten, ohne Schülernamen.',
    blocks: [
      { h: 'So funktioniert es', steps: ['Legen Sie hier eine Klasse an. Sie erhalten einen Klassencode und einen privaten Lehrkraft-Link.', 'Die Schüler öffnen die Mindveto-Erweiterung, gehen zu „Class · exam mode“ und geben den Code ein.', 'Tippen Sie auf „Prüfungsmodus starten“. Innerhalb einer Minute ist jede KI in ihren Browsern gesperrt, bis die Zeit abläuft oder Sie stoppen.'] },
    ],
    faq: [
      { q: 'Was brauchen die Schüler?', a: L('Die <a href="/browser-extension/">Mindveto-Erweiterung</a> im Browser, mit dem Code Ihrer Klasse beigetreten. Auf Schulrechnern installiert die Schule sie einmal.') },
      { q: 'Was speichert Ihr Server?', a: 'Einen gehashten Klassencode, einen gehashten Lehrkraft-Schlüssel und das Prüfungsende. Keine Namen, keine E-Mail-Adressen. Gegen Missbrauch wird eine gehashte IP-Adresse eine Stunde lang gespeichert.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Einfüge-Schutz: private Daten bleiben aus KI-Chats',
    desc: 'Mindveto warnt, bevor IBANs, Ausweisnummern, E-Mail-Listen, geheime Schlüssel oder vertrauliche Texte in ChatGPT und andere KI-Seiten eingefügt werden.',
    h1: 'Ein zweiter Blick vor dem Einfügen.',
    lead: 'Menschen fügen erst ein und denken dann nach. Auf KI-Seiten prüft der Einfüge-Schutz, was Sie einfügen, auf Ihrem eigenen Computer, und fragt, bevor private Daten im Chat landen.',
    actions: [{ label: 'Browser-Erweiterung holen', to: 'browser', solid: true }, { label: 'Für Büros', to: 'offices' }],
    blocks: [
      { h: 'Was er erkennt', list: [
        'Kontonummern (IBAN) und Kartennummern.',
        'Ausweis- und Sozialversicherungsnummern.',
        'Listen mit E-Mail-Adressen.',
        'Geheime Schlüssel, Passwörter und Zugangstoken.',
        'Texte mit „confidential“, „vertrouwelijk“ oder „confidentiel“.',
        'Ihre eigenen privaten Wörter: Mandantennamen, Projektcodes, Aktenzeichen.',
      ]},
      { h: 'Was Sie wählen können', steps: [
        'Nicht einfügen.',
        'Ohne die privaten Teile einfügen: Sie werden durch einen Platzhalter ersetzt.',
        'Trotzdem einfügen, wenn Sie sicher sind.',
      ]},
      { h: 'Wo die Prüfung läuft', p: [
        'Auf Ihrem Computer, im Browser. Der eingefügte Text wird nie gespeichert und nie gesendet, auch nicht an uns.',
      ], note: 'Es wirkt auf KI-Seiten für Chat, Suche, Schreiben und Programmieren. Es beobachtet nicht Ihre E-Mails, Dokumente oder andere Websites.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Mindveto herunterladen: Browser, Android, Windows, Mac',
    desc: 'Mindveto kostenlos herunterladen: Browser-Erweiterung, Android-App, Skripte für Windows und Mac/Linux, Sperrlisten und das IT-Paket. Kein Konto, kein Tracking.',
    h1: 'Mindveto herunterladen.',
    lead: 'Wählen Sie das Gerät, das Sie schützen möchten. Alles ist kostenlos und braucht kein Konto. Die Apps sind vorerst auf Englisch, Niederländisch und Französisch.',
    blocks: [
      { h: 'Browser auf Laptop oder PC', p: ['Browser-Erweiterung. Chrome, Edge, Brave und Opera. Version 1.8.1, 738 KB.'], actions: [{ label: 'Herunterladen', url: DL + 'human-override-1.8.1.zip', solid: true, download: true }, { label: 'Installationsschritte', to: 'browser' }] },
      { h: 'Android-Handy oder -Tablet', p: ['Android-App (Beta). Sperrt KI in jeder App. 389 KB.'], actions: [{ label: 'Herunterladen', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Installationsschritte', to: 'android' }] },
      { h: 'Windows-PC: jede App', p: ['Windows. Jeder Browser und jede App auf dem PC. 501 KB.'], actions: [{ label: 'Herunterladen', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Installationsschritte', to: 'windows' }] },
      { h: 'Mac- oder Linux-Computer', p: ['Mac und Linux. Ein Befehl, systemweit. 498 KB.'], actions: [{ label: 'Herunterladen', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Installationsschritte', to: 'maclinux' }] },
      { h: 'Ganzes WLAN zu Hause oder im Büro (IT)', p: ['IT-Paket und Listen. Dateien für DNS, Firewall und Browser-Richtlinien. 13 KB.'], actions: [{ label: 'Herunterladen', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Alle Listen', to: 'network' }] },
      { h: 'iPhone oder iPad', p: ['Noch keine iPhone-App. Sperre KI für jedes Gerät in deinem WLAN mit dem IT-Paket oder sperre Seiten über Bildschirmzeit auf dem iPhone.'] },
    ],
    related: ['check', 'help', 'pricing'],
  },

  pricing: {
    title: 'Mindveto Preise: Kostenlos, Plus, Schule und Business',
    desc: 'Sperren ist kostenlos. Plus 14,99 € pro Jahr für Familien, 1 € pro Schüler für Schulen, 2,50 € pro Nutzer und Monat für Büros. Kostenlos während des Starts.',
    h1: 'Sperren ist kostenlos. Extras bezahlen die Arbeit.',
    lead: 'Heute ist jede Funktion kostenlos, während wir starten. Bezahlte Pläne kommen später; wir kündigen sie zuerst hier an.',
    blocks: [],
    faq: [
      { q: 'Wann muss ich zahlen?', a: 'Jetzt nicht. Wenn bezahlte Pläne starten, entscheiden Sie selbst, ob Sie upgraden. Nichts wird automatisch abgebucht, und der kostenlose Plan bleibt.' },
      { q: 'Sind die Preise inklusive MwSt.?', a: 'Ja, Preise für Privatkunden enthalten die belgische MwSt. Schulen und Unternehmen erhalten eine Rechnung.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Hilfe und häufige Fragen',
    desc: 'Antworten zu Mindveto: welche Version Sie brauchen, PIN, Zeitplan, Datenschutz, Deinstallation und was Mindveto sperren kann und was nicht.',
    h1: 'Hilfe',
    lead: 'Kurze Antworten auf die häufigsten Fragen. Nicht dabei? Schreiben Sie an hello@mindveto.app (wir antworten auf Englisch, Niederländisch oder Französisch).',
    blocks: [
      { h: 'Welche Version brauche ich?', facts: [
        ['Das Android-Handy eines Kindes', L('<a href="/android/">Android-App</a>')],
        ['Ein Familien- oder Bürorechner', L('<a href="/browser-extension/">Browser-Erweiterung</a>, plus <a href="/windows/">Windows</a> oder <a href="/mac-linux/">Mac</a> für jede App')],
        ['Schulrechner', L('<a href="/browser-extension/">Erweiterung</a> per Browser-Richtlinie, plus der <a href="/exam-button/">Prüfungsknopf</a>')],
        ['Jedes Gerät zu Hause oder bei der Arbeit', L('<a href="/network/">Netzwerklisten</a>')],
      ]},
    ],
    faq: [
      { q: 'Ich habe meine PIN vergessen.', a: 'Aus Sicherheitsgründen gibt es keinen Zurücksetzen-Knopf. Entfernen Sie die Erweiterung auf der Erweiterungsseite des Browsers (dafür braucht man Kontrolle über den Computer) und installieren Sie sie neu.' },
      { q: 'Eine normale Website ist versehentlich gesperrt.', a: 'Öffnen Sie die Erweiterung und fügen Sie die Seite Ihrer Erlaubt-Liste hinzu. Schicken Sie uns die Adresse, und wir korrigieren die öffentliche Liste.' },
      { q: 'Ein KI-Tool ist nicht gesperrt.', a: 'Fügen Sie es jetzt Ihrer eigenen Sperrliste hinzu und schicken Sie uns die Adresse. Wir nehmen neue KI-Dienste in die öffentliche Liste auf.' },
      { q: 'Wie deinstalliere ich es?', a: 'Browser: auf der Erweiterungsseite entfernen. Android: ausschalten, dann deinstallieren. Windows: das Skript starten und 2 tippen. Mac und Linux: das Skript mit „off“ starten.' },
      { q: 'Nutzt Mindveto KI?', a: 'Nein. Sperren und Einfüge-Schutz nutzen einfache Regeln auf Ihrem Gerät.' },
      { q: 'Wer macht Mindveto?', a: L('Amghar Said, ein unabhängiger Entwickler. <a href="/about/">Über uns</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'Über Mindveto',
    desc: 'Mindveto entwickelt Amghar Said, ein unabhängiger Entwickler. Warum ein KI-Notschalter, wie wir ihn privat halten und was passiert, wenn wir aufhören.',
    h1: 'Menschen sollten entscheiden, wann KI Teil ihres Tages ist.',
    lead: 'Mindveto wird von Amghar Said entwickelt, einem unabhängigen Entwickler. Es begann 2026 als Human Override und bekam im November 2026 einen eigenen Namen.',
    blocks: [
      { h: 'Wer es macht', p: [
        'Im Beruf koordiniert Amghar Said pädagogische Aufenthalte für Jugendliche. Technik ist seit 30 Jahren seine Leidenschaft, und Mindveto baut er neben seiner Arbeit.',
        L('Folge ihm oder schreib ihm auf <a href="https://www.linkedin.com/in/amghar-said-67a95a22/" rel="me">LinkedIn</a>.'),
      ]},
      { h: 'Warum der Name', p: [
        'In den 1980er-Jahren beschrieb der Hirnforscher Benjamin Libet, wie unser Bewusstsein einen Impuls kurz vor dem Handeln stoppen kann: ein Veto. Mindveto gibt diese Pause allen, die sie bei KI wollen.',
      ]},
      { h: 'Was wir versprechen', list: [
        'Kein Konto, kein Tracking, keine Werbung, kein Datenverkauf.',
        'Ehrliche Grenzen, auf den Produktseiten geschrieben, nicht im Kleingedruckten versteckt.',
        'Sperren bleibt kostenlos.',
        'Website in 8 Sprachen; Support per E-Mail auf Englisch, Niederländisch und Französisch.',
      ]},
      { h: 'Falls wir je aufhören', p: [
        'Alles, was Sie installiert haben, funktioniert weiter: Erweiterung, App und Skripte sperren mit der Liste, die schon auf Ihrem Gerät ist. Sie können sie jederzeit normal entfernen.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Datenschutzerklärung',
    desc: 'Mindveto erhebt keine personenbezogenen Daten: keine Cookies, keine Tracker, keine Konten. Was Website, Apps und Prüfungsmodus verarbeiten. Ihre DSGVO-Rechte.',
    h1: 'Datenschutzerklärung',
    lead: 'Kurz: Wir erheben keine personenbezogenen Daten. Diese Seite erklärt die wenigen Dinge, die einen Server berühren, und Ihre Rechte. Version 2, 13. November 2026. Maßgeblich ist die englische Fassung.',
    blocks: [
      { h: 'Verantwortlicher', p: [L('Amghar Said, Belgien. Kontakt: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Diese Website', list: [
        'Keine Cookies, keine Analyse, keine Tracker, keine Werbung, keine Schriften oder Skripte anderer Firmen.',
        'Die Website liegt bei GitHub Pages (GitHub, Inc., USA). Wie jeder Webhoster verarbeitet GitHub Ihre IP-Adresse kurz in Server-Logs, um die Seite auszuliefern und zu schützen. Wir erhalten diese Logs nicht.',
        'Die Seite des Prüfungsknopfs speichert Ihren Klassencode und Lehrkraft-Schlüssel in Ihrem eigenen Browser (lokaler Speicher), nur damit die Seite funktioniert. Sie können sie mit „Diese Klasse vergessen“ löschen.',
        'Die Schreibspur-Seite speichert den Entwurf und seine Spur in Ihrem eigenen Browser (lokaler Speicher), nur damit beim Neuladen nichts verloren geht. Es wird nichts gesendet. „Neuen Text beginnen“ löscht ihn.',
        `Die Seite „Fragen an Schüler“ sendet den eingefügten Text an den eigenen Server von Mindveto (${ASK_REGION.de}), nur um die Fragen zu erstellen. Der Text wird gleich danach gelöscht: nicht gespeichert, nicht protokolliert, nicht zum Training eines Modells genutzt, und kein externer KI-Dienst sieht ihn. Der Server speichert Ihren Zugangscode nur unlesbar (als Hash), mit einem Monatszähler. Der Code bleibt außerdem in Ihrem Browser (lokaler Speicher), damit Sie ihn nicht erneut eingeben müssen. Marokko liegt außerhalb der EU: Es gilt der Auftragsverarbeitungsvertrag von Oracle mit den EU-Standardvertragsklauseln. Entfernen Sie zuerst Namen aus dem Text.`,
        "Die Testseite „Funktioniert es?“ kontaktiert KI-Seiten, und Wikipedia als Kontrolle, nur, wenn du ihren Knopf drückst. Diese Seiten sehen dann deine IP-Adresse, wie bei einem normalen Besuch. Das Ergebnis bleibt in deinem Browser.",
      ]},
      { h: 'Apps und Skripte', list: [
        'Sperren, Einfüge-Schutz und alle Einstellungen laufen auf Ihrem Gerät. Eingefügter Text wird nie gespeichert oder gesendet.',
        'Die Erweiterung fragt nur deshalb nach Zugriff auf alle Seiten, damit ihre Sperrregeln jede KI-Adresse auf die Mindveto-Seite umleiten können. Der Einfüge-Schutz läuft nur auf den KI-Seiten, die in der Erweiterung stehen, und sendet nicht, was er liest.',
        'Die Browser-Erweiterung lädt einmal täglich die öffentliche Sperrliste. Sie sendet dabei keine personenbezogenen Daten.',
        'Die Android-App filtert nur Namensabfragen auf dem Handy. Sie sendet uns nichts.',
        'Um Website-Namen aufzulösen, gibt die Android-App nicht gesperrte Anfragen an den DNS-Server weiter, den dein Handy ohnehin nutzt. Antwortet er nicht, nutzt sie Cloudflare (1.1.1.1) oder Quad9 (9.9.9.9). Diese Dienste sehen den Website-Namen und deine IP-Adresse, wie bei jeder DNS-Anfrage.',
      ]},
      { h: 'Prüfungsmodus', p: [
        'Wenn eine Lehrkraft eine Klasse anlegt, speichert unsere Datenbank (Supabase, Frankfurt, EU) einen gehashten Klassencode, einen gehashten Lehrkraft-Schlüssel und das Prüfungsende. Erweiterungen in der Klasse senden nur den Klassencode, einmal pro Minute. Gegen Missbrauch wird eine gehashte Version der IP-Adresse eine Stunde lang gespeichert. Keine Namen, keine E-Mail-Adressen.',
        'Rechtsgrundlage: unser berechtigtes Interesse, den Prüfungsknopf sicher anzubieten (Art. 6 Abs. 1 lit. f DSGVO).',
      ]},
      { h: 'E-Mail', p: ['Wenn Sie uns schreiben, nutzen wir Ihre Nachricht nur zur Antwort und löschen sie, wenn sie nicht mehr gebraucht wird.'] },
      { h: 'Ihre Rechte', p: [
        L('Sie können Auskunft, Berichtigung oder Löschung verlangen und widersprechen. Schreiben Sie an <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. Sie können sich auch bei der belgischen Datenschutzbehörde (<a href="https://www.dataprotectionauthority.be" rel="noopener">dataprotectionauthority.be</a>) oder der Behörde in Ihrem Land beschweren.'),
      ]},
    ],
  },

  terms: {
    title: 'Nutzungsbedingungen',
    desc: 'Nutzungsbedingungen von Mindveto: was es tut und was nicht, Ihre Verantwortung, keine Garantie, begrenzte Haftung, Eigentum und anwendbares Recht.',
    h1: 'Nutzungsbedingungen',
    lead: 'Mindveto ist Software von Amghar Said. Sie hilft, KI-Dienste zu sperren, aber kein Werkzeug kann jede KI sperren. Version 2, 12. November 2026. Gilt für die Erweiterung, die Android-App, die Skripte für Windows, Mac und Linux, die Listen und das IT-Paket. Dies ist eine Übersetzung; bei Abweichungen gilt die englische Fassung.',
    blocks: [
      { h: '1. Anbieter', p: [L('Mindveto (früher Human Override) wurde von Amghar Said („der Autor“) geschaffen und gehört ihm. Kontakt: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Annahme', p: ['Mit dem Installieren, Herunterladen oder Nutzen von Mindveto akzeptieren Sie diese Bedingungen. Wenn Sie nicht einverstanden sind, nutzen Sie es nicht und entfernen Sie es.'] },
      { h: '3. Was es tut und was nicht', p: ['Mindveto versucht, den Zugang zu KI-Diensten zu stoppen, indem es deren Webadressen sperrt. Es garantiert nicht, dass keine KI erreichbar ist. Es kann keine KI sperren, die in erlaubte Dienste eingebaut ist, keine KI, die offline auf einem Gerät läuft, keine anderen Browser, Apps oder Geräte, keine VPNs, Proxys, anderen DNS-Dienste und keine neuen KI-Dienste, die noch nicht auf der Liste stehen. Wer genug Zugriff auf das Gerät hat, kann die Einstellungen ändern oder entfernen. Listen können eine Seite irrtümlich sperren oder eine übersehen.'] },
      { h: '4. Ihre Verantwortung', p: ['Sie entscheiden, wo und wie Sie Mindveto nutzen. Schulen, Unternehmen und andere Organisationen bleiben voll verantwortlich für ihre eigenen Regeln, Aufsicht, Sicherheit, Tests und die Einhaltung von Gesetzen, auch Datenschutz- und Arbeitsrecht. Testen Sie es, bevor Sie sich darauf verlassen. Nutzen Sie es nicht, um Gesetze zu brechen oder Menschen ohne Rechtsgrundlage zu überwachen.'] },
      { h: '5. Bereitstellung „wie besehen“', p: ['Mindveto wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne jede ausdrückliche oder stillschweigende Gewährleistung, auch nicht für die Eignung für einen bestimmten Zweck, Genauigkeit, Verfügbarkeit oder Fehlerfreiheit.'] },
      { h: '6. Haftungsbeschränkung', p: ['Soweit gesetzlich zulässig, haftet Amghar Said nicht für direkte oder indirekte Schäden, Datenverlust, Einkommensverlust, verlorenen Zugang, verpasste Sperren, falsch gesperrte Seiten oder andere Folgen der Nutzung oder Nichtnutzbarkeit von Mindveto. Bei bezahlten Plänen ist die Gesamthaftung auf den Betrag begrenzt, den Sie in den letzten zwölf Monaten gezahlt haben. Nichts hier begrenzt eine Haftung, die gesetzlich nicht begrenzt werden darf, etwa bei Vorsatz oder grober Fahrlässigkeit, oder zwingende Verbraucherrechte.'] },
      { h: '7. Eigentum', p: ['Mindveto, sein Code, Sperrlisten, Symbole, Texte und Name sind © 2026 Amghar Said, alle Rechte vorbehalten. Sie dürfen die offizielle, unveränderte Version nutzen. Kopieren, Ändern, Weitergeben oder Verkaufen braucht eine schriftliche Erlaubnis.'] },
      { h: '8. Datenschutz', p: [L('Mindveto erhebt keine personenbezogenen Daten. Siehe die <a href="/privacy/">Datenschutzerklärung</a>.')] },
      { h: '9. Bezahlte Pläne', p: ['Bezahlte Pläne werden, sobald es sie gibt, vor dem Kauf auf der Preisseite beschrieben. Käufe über Google Play folgen auch den Bedingungen von Google Play. Verbraucher behalten ihre gesetzlichen Rechte, einschließlich des Widerrufsrechts, wo es gilt.'] },
      { h: '10. Änderungen und Ende', p: ['Der Autor kann Mindveto, die Listen oder diese Bedingungen ändern oder das Angebot einstellen. Die aktuelle Fassung dieser Bedingungen steht immer auf dieser Seite.'] },
      { h: '11. Anwendbares Recht', p: ['Für diese Bedingungen gilt belgisches Recht, unbeschadet der zwingenden Vorschriften des Landes, in dem ein Verbraucher lebt.'] },
    ],
  },

  legal: {
    title: 'Impressum',
    desc: 'Impressum von Mindveto: wer die Website und die Software veröffentlicht, wie Sie uns erreichen, Hosting und geistiges Eigentum. Anbieterkennzeichnung.',
    h1: 'Impressum',
    lead: 'Wer diese Website und die Mindveto-Software veröffentlicht.',
    blocks: [
      { h: 'Anbieter', facts: [
        ['Name', 'Amghar Said'], ['Land', 'Belgien'], ['E-Mail', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Unternehmensnummer', COMPANY.kbo || 'Wird hier angezeigt, bevor ein bezahlter Plan startet'],
        ...(COMPANY.vat ? [['USt-IdNr.', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Geschäftsadresse', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Hosting', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.'] },
      { h: 'Geistiges Eigentum', p: ['© 2026 Amghar Said. Alle Rechte vorbehalten. Produktnamen wie ChatGPT, Gemini, Claude und Copilot gehören ihren Inhabern und werden nur genannt, um zu beschreiben, was Mindveto sperrt. Mindveto ist mit ihnen nicht verbunden.', 'Schrift: Atkinson Hyperlegible Next, SIL Open Font License, von dieser Website ausgeliefert. Schulferien-Daten: OpenHolidays API (ODbL).'] },
      { h: 'Quellen und Lizenzen', p: [L('Schulferien: Daten der OpenHolidays API, <a href="https://www.openholidaysapi.org/">openholidaysapi.org</a>, ODbL 1.0. Sperrlisten für Erwachseneninhalte und Glücksspiel: Sinfonietta/hostfiles, StevenBlack/hosts (clefspeare13) und bigdargon/hostsVN, MIT-Lizenz; die vollständigen Hinweise liegen jedem Download bei. Schrift: Atkinson Hyperlegible Next, Braille Institute, SIL Open Font License 1.1.')] },
    ],
  },

  guide: {
    title: 'ChatGPT auf jedem Gerät blockieren (Anleitung 2026)',
    desc: 'ChatGPT in Chrome, unter Windows, auf dem Mac, Android, iPhone oder im ganzen WLAN blockieren. Kostenlose Schritt-für-Schritt-Wege, mit ehrlichen Grenzen.',
    h1: 'ChatGPT blockieren, auf jedem Gerät.',
    lead: 'Die kurze Antwort: Sperren Sie die Adresse chatgpt.com (und chat.openai.com) im Browser, auf dem Computer, auf dem Handy oder am Router. Diese Seite zeigt den kostenlosen Weg für jedes Gerät und welcher zu Ihrer Lage passt.',
    actions: [{ label: 'Mindveto kostenlos herunterladen', to: 'download', solid: true }, { label: 'Welche Version brauche ich?', to: 'help' }],
    blocks: [
      { h: 'Den passenden Weg wählen', facts: [
        ['Ein Browser (Chrome, Edge, Brave, Opera)', L('<a href="/browser-extension/">Browser-Erweiterung</a>: ein Schalter, PIN-Sperre. Etwa 1 Minute.')],
        ['Ein ganzer Windows-PC, jeder Browser und jede App', L('<a href="/windows/">Windows-Download</a>: trägt die KI-Adressen in die hosts-Datei ein.')],
        ['Ein Mac oder Linux-Rechner', L('<a href="/mac-linux/">Ein Befehl</a> im Terminal.')],
        ['Ein Android-Handy, auch in Apps', L('<a href="/android/">Android-App</a> mit lokalem Filter und PIN.')],
        ['Ein iPhone', L('Ein DNS-Dienst mit unserer <a href="/network/">kostenlosen Liste</a>, oder Apples Bildschirmzeit für einzelne Seiten.')],
        ['Jedes Gerät im WLAN', L('<a href="/network/">Netzwerklisten</a> für Pi-hole, AdGuard Home oder das DNS von Schule oder Büro.')],
      ]},
      { h: 'ChatGPT in Chrome oder Edge blockieren', steps: [
        L('Laden Sie die <a href="/browser-extension/">Mindveto-Erweiterung</a> herunter und entpacken Sie sie.'),
        L('Öffnen Sie <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>) und schalten Sie den „Entwicklermodus“ ein.'),
        'Klicken Sie auf „Entpackte Erweiterung laden“ und wählen Sie den entpackten Ordner.',
        'Öffnen Sie Mindveto, legen Sie den Schalter um und setzen Sie eine PIN. ChatGPT, Gemini, Copilot und über 150 weitere KI-Tools zeigen jetzt eine Sperrseite.',
        'Schalten Sie auf der Seite „Details“ der Erweiterung „Im Inkognitomodus zulassen“ ein, sonst werden private Fenster nicht gesperrt.',
      ]},
      { h: 'ChatGPT ohne Software blockieren', p: [
        L('Es geht auch von Hand. Tragen Sie auf einem Computer diese Zeilen in die hosts-Datei ein (Admin-Rechte nötig): <code>0.0.0.0 chatgpt.com</code> und <code>0.0.0.0 chat.openai.com</code>. Auf einem Router mit Pi-hole oder AdGuard Home setzen Sie dieselben zwei Namen auf die Sperrliste.'),
        L('Der Haken: ChatGPT ist nur eines von vielen. Gemini, Copilot, Claude, Character.AI und der Rest bleiben offen, und jede Woche kommen neue dazu. Darum pflegt Mindveto eine <a href="/network/">öffentliche Liste mit über 150 KI-Diensten</a>, die täglich aktualisiert wird. Sie können diese Liste nutzen, ohne etwas von uns zu installieren.'),
      ]},
      { h: 'Ehrliche Grenzen jedes Wegs', list: [
        'Eine Sperre wirkt nur dort, wo Sie sie installieren. Ein Kind oder Kollege kann noch ein anderes Handy oder Netz nutzen.',
        'Wer Administrator des Geräts ist, kann eine Sperre entfernen. Geben Sie Kindern und Personal ein normales Konto.',
        'Browser-Erweiterungen decken keine anderen Browser oder Apps ab. Dafür sperren Sie auf dem Computer, dem Handy oder im Netzwerk.',
        'Listen, die ganze Domains sperren, können keine einzelne Seite sperren. Einige Sperren auf Seitenebene, etwa Bing Chat, wirken nur in der Browser-Erweiterung.',
      ], note: 'Sperren wirkt am besten mit einer klaren Regel: Wann ist KI erlaubt, und warum gerade nicht. Mindveto prüft alles auf dem Gerät und sendet nichts an uns; es verhindert nur, dass KI-Adressen geöffnet werden.', human: true },
    ],
    faq: [
      { q: 'Wie blockiere ich ChatGPT auf dem Handy meines Kindes?', a: L('Auf Android: Installieren Sie die <a href="/android/">Mindveto-App</a>, schalten Sie „Durchgehend aktives VPN“ ein und setzen Sie eine PIN. Auf dem iPhone: Nutzen Sie einen DNS-Dienst mit unserer kostenlosen Liste, oder Apples Bildschirmzeit, um chatgpt.com zu sperren. Siehe <a href="/parents/">für Eltern</a>.') },
      { q: 'Wie blockiere ich ChatGPT auf Schulrechnern?', a: L('Zwangsinstallieren Sie die Erweiterung per Chrome- oder Edge-Richtlinie und sperren Sie KI im Schul-DNS mit dem IT-Paket. Lehrkräfte können auch den <a href="/exam-button/">Prüfungsknopf</a> nutzen. Siehe <a href="/schools/">für Schulen</a>.') },
      { q: 'Wie blockiere ich ChatGPT bei der Arbeit, erlaube aber Copilot?', a: L('Haken Sie in der Erweiterung die KI an, die Ihr Büro freigibt, und lassen Sie den Rest gesperrt. Der <a href="/paste-guard/">Einfüge-Schutz</a> warnt außerdem, bevor private Daten in eine KI-Seite eingefügt werden. Siehe <a href="/offices/">für Büros</a>.') },
      { q: 'Ist ChatGPT blockieren kostenlos?', a: 'Ja. Sperren, PIN und Zeitplan sind in Mindveto kostenlos, und die Sperrlisten sind frei nutzbar.' },
      { q: 'Kann ich ChatGPT nur während Hausaufgaben oder Arbeitszeiten blockieren?', a: 'Ja. Die Browser-Erweiterung hat einen Zeitplan, mit eingebauten Schulferien für Belgien, die Niederlande und Frankreich.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Kostenlose KI-Richtlinie (Vorlage) für kleine Büros',
    desc: 'Eine einseitige KI-Richtlinie für Steuerberater, Kanzleien und andere kleine Büros: freigegebene Tools, was nie in KI gehört und wie man es prüft. Kostenlos.',
    h1: 'Eine KI-Richtlinie, die Ihr Team in zwei Minuten liest.',
    lead: 'Eine einseitige Vorlage für Steuerberater, Kanzleien, Notariate und andere kleine Büros. Kopieren Sie sie, füllen Sie die Teile in Klammern aus und teilen Sie sie mit Ihrem Team.',
    actions: [{ label: 'Drucken oder als PDF speichern', url: '#print', solid: true }, { label: 'Für Büros', to: 'offices' }],
    blocks: [
      { h: 'Warum eine Richtlinie', p: ['Seit dem 2. Februar 2025 verlangt die EU-KI-Verordnung von Organisationen, die KI-Tools nutzen, ihrem Personal beim Verständnis zu helfen (KI-Kompetenz). Eine kurze schriftliche Richtlinie ist ein einfacher erster Schritt und schützt die Daten Ihrer Mandanten.'] },
      { h: '1. Zweck', p: ['Wir nutzen KI, wo sie uns hilft, besser zu arbeiten. Mandantendaten und vertrauliche Akten bleiben geschützt. Diese Richtlinie sagt, welche Tools wir nutzen und was nie hineingehört.'] },
      { h: '2. Freigegebene KI-Tools', list: ['[Tool, zum Beispiel Microsoft Copilot mit unserem Geschäftskonto]: erlaubt für [Entwürfe, Zusammenfassungen eigener Texte].', 'Alle anderen KI-Chatbots, KI-Suchmaschinen und KI-Schreibtools werden auf Arbeitsgeräten und für die Arbeit nicht genutzt.'] },
      { h: '3. Nie in ein KI-Tool', list: ['Namen von Mandanten zusammen mit ihren Daten.', 'Konto- und Kartennummern.', 'Ausweis-, Sozialversicherungs- oder andere Identifikationsnummern.', 'Verträge, Steuererklärungen, medizinische oder Personalakten.', 'Passwörter, Zugangscodes und Schlüssel.', 'Alles, was als vertraulich markiert ist.'] },
      { h: '4. Bevor Sie KI-Ergebnisse nutzen', list: ['Prüfen Sie Fakten, Zahlen und Quellen selbst.', 'Ein Mensch gibt jeden Rat und jeden Brief frei, der an einen Mandanten geht.', 'Sagen Sie, dass KI geholfen hat, wenn ein Mandant fragt oder Gesetz oder Berufsrecht es verlangen.'] },
      { h: '5. Wie wir uns daran halten', list: ['Auf Arbeitsrechnern sperrt Mindveto KI-Tools, die wir nicht freigegeben haben, und warnt, bevor private Daten in einen KI-Chat eingefügt werden. Die Prüfung läuft auf dem Computer; nichts wird gesendet.', 'Die Einstellungen sind mit einer PIN gesperrt, die [Name] verwahrt.'] },
      { h: '6. Fehler und Fragen', p: ['Versehentlich etwas eingefügt? Sagen Sie es [Name] am selben Tag. Wir wissen es lieber früh als spät.', 'Verantwortlich für diese Richtlinie: [Name]. Letzte Prüfung: [Datum]. Nächste Prüfung: [Datum plus sechs Monate].'], note: 'Diese Vorlage hilft beim Start; sie ist keine Rechtsberatung. Prüfen Sie Ihr Berufsrecht und informieren Sie Personal und Betriebsrat, bevor Sie neue IT-Regeln einführen.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },

  family: {"title": "Porno-, Glücksspiel- und Dating-Seiten sperren", "desc": "Kostenloser Familienfilter: Porno- und Ab-18-Seiten, Glücksspiel und Dating sperren, SafeSearch erzwingen. Für Browser, Android, Windows und Mac.", "h1": "Porno-, Glücksspiel- und Dating-Seiten sperren.", "lead": "Mindveto hat neben dem KI-Schalter einen Familienfilter. Du wählst, was er sperrt, und eine PIN hält deine Wahl fest. Er ist aus, bis du ihn einschaltest.", "actions": [{"label": "Kostenlos herunterladen", "to": "download", "solid": true}, {"label": "Für Eltern", "to": "parents"}], "blocks": [{"h": "Was du einschalten kannst", "list": ["Erwachsenenseiten: über 60.000 Porno- und Ab-18-Seiten.", "KI-„Auszieh“-Apps, die gefälschte Nacktfotos echter Menschen machen: zusammen mit den Seiten für Erwachsene gesperrt.", "SafeSearch: Google, Bing, DuckDuckGo und YouTube zeigen nur sichere Ergebnisse, egal was in den Sucheinstellungen steht.", "Glücksspiel: 1.600 Wett-, Casino- und Pokerseiten.", "Dating: 65 Dating-Apps und Seiten für Zufalls-Videochats.", "Umgehungsschutz: bekannte VPN-, Proxy- und Tor-Seiten, damit der Filter nicht mit einem Klick umgangen wird.", "Jeder Teil hat einen eigenen Schalter. Er arbeitet getrennt vom KI-Schalter."]}, {"h": "So schaltest du ihn ein", "steps": ["Browser: Installiere die <a href=\"/browser-extension/\">Browser-Erweiterung</a>, öffne sie und hake beim Familienfilter („Family filter“) an, was du willst.", "Android: Installiere die <a href=\"/android/\">Android-App</a> und nutze die Schalter beim Familienfilter. Er wirkt dann in jeder App auf dem Handy.", "Windows: Starte den <a href=\"/windows/\">Windows-Download</a> und tippe 5. Das Skript fragt nach Glücksspiel und Dating.", "Mac und Linux: Nutze den <a href=\"/mac-linux/\">Download für Mac und Linux</a> und tippe <code>sudo sh mindveto.sh family-on gambling dating</code>.", "Lege in der Erweiterung und in der App eine PIN fest: Ausschalten verlangt dann die PIN. Gib deinem Kind am Computer ein normales Konto (kein Admin)."]}, {"h": "Ehrliche Grenzen", "list": ["Kein Filter erwischt alles. Jeden Tag entstehen neue Seiten, und Bilder können weiter in Chats, Apps und sozialen Medien auftauchen.", "Die Listen stoppen bekannte Seiten. Ein Kind mit dem Handy eines Freundes oder einem Admin-Konto kommt daran vorbei.", "Auf Android wirkt der Filter, solange Mindveto an ist. Schalte „Durchgehend aktives VPN“ ein, damit es an bleibt."], "note": "Mindveto zeichnet nicht auf, welche Seiten besucht werden, und sendet nichts an uns. Ein Filter hilft; mit deinem Kind zu reden hilft mehr.", "human": true}, {"h": "Fakten", "facts": [["Preis", "Kostenlos"], ["Erwachsenenseiten", "60.000+"], ["Glücksspielseiten", "1.600"], ["Dating und Videochat", "65"], ["Listen", "Offene Listen (MIT-Lizenz) und unsere eigenen Listen"], ["Gesendete Daten", "Keine"]]}], "faq": [{"q": "Ist der Familienfilter kostenlos?", "a": "Ja. Er gehört heute zu den kostenlosen Mindveto-Downloads."}, {"q": "Sperrt er auch KI?", "a": "Nur wenn du das willst. KI-Schalter und Familienfilter arbeiten getrennt: Du kannst das eine ohne das andere nutzen."}, {"q": "Funktioniert er auf dem iPhone oder im ganzen WLAN?", "a": "Es gibt noch keine iPhone-App. Du kannst dieselben kostenlosen Listen in einem DNS-Filter wie AdGuard Home oder Pi-hole nutzen: siehe <a href=\"/network/\">ganzes Netzwerk</a>."}, {"q": "Sperrt er versehentlich eine normale Seite?", "a": "Das kann bei jeder Liste passieren. In der Erweiterung kannst du eine Seite erlauben, der du vertraust; deine Wahl geht vor."}], "related": ["parents", "browser", "android"]},
  blog: {"title": "Mindveto-Blog: KI, Kinder und Schulen", "desc": "Klare Antworten für Eltern, Schulen und Büros zu KI-Apps, KI-Freunden und der EU-KI-Verordnung. Geprüfte Fakten, ehrliche Grenzen, von Amghar Said.", "h1": "Mindveto-Blog.", "lead": "Kurze, geprüfte Antworten auf die Fragen, die Eltern, Lehrkräfte und Büros uns zu KI stellen. Jeder Artikel nennt seine Quellen.", "blocks": [{"h": "Artikel", "list": ["<a href=\"/blog/chatgpt-customer-data-gdpr/\"><strong>ChatGPT und Kundendaten nach der DSGVO</strong></a> Was OpenAI mit dem Eingefügten macht, was die DSGVO von Ihrem Büro erwartet, und ein Plan in 5 Schritten.", "<a href=\"/de/blog/ist-character-ai-sicher-fuer-kinder/\"><strong>Ist Character.AI sicher für Kinder?</strong></a> Die Altersregeln 2026, die echten Risiken und wie Sie Character.AI und ähnliche KI-Freund-Apps blockieren.", "<a href=\"/de/blog/ki-verordnung-artikel-4-schulen/\"><strong>KI-Verordnung Artikel 4 für Schulen</strong></a> Was die Regel zur KI-Kompetenz 2026 von einer Schule verlangt, mit einem 6-Schritte-Plan für diese Woche."]}, {"h": "Zahlen", "list": ["<a href=\"/ai-statistics/\"><strong>Kinder, Schulen und KI: die Zahlen (2026)</strong></a> 24 geprüfte Statistiken zu Chatbots, KI-Begleitern, Schummeln, Deepfakes und Datenlecks, jeweils mit Quelle. Frei zitierbar."]}], "related": ["parents", "schools", "guide"]},
  charai: {"title": "Ist Character.AI sicher für Kinder? Elternratgeber 2026", "desc": "Ist Character.AI sicher für Kinder? Das Mindestalter, das Ende freier Chats für unter 18-Jährige seit 2025, die echten Risiken und wie Sie Character.AI sperren.", "h1": "Ist Character.AI sicher für Kinder?", "lead": "Kurze Antwort: nicht für Kinder. Character.AI ist ab 13 Jahren (in der EU ab 16), und seit November 2025 können Konten unter 18 nicht mehr frei mit den Figuren chatten. Aber Alterskontrollen lassen sich austricksen, und viele ähnliche „KI-Freund“-Apps haben schwächere Regeln.", "blocks": [{"h": "Was Character.AI ist", "p": ["Character.AI ist eine Website und App, auf der man mit KI-Figuren chattet: erfundene Menschen, Helden aus Filmen und Spielen, „Freund“- oder „Freundin“-Bots und Prominente. Die meisten Figuren erstellen andere Nutzer.", "Die Figuren antworten sofort, zu jeder Uhrzeit, merken sich, was man erzählt hat, und sind immer freundlich. Genau das lässt sie wie einen Freund wirken, und deshalb verbringen Kinder Stunden mit ihnen."]}, {"h": "Die Altersregeln 2026", "list": ["Mindestalter: 13 Jahre, in der Europäischen Union 16 Jahre.", "Seit Ende November 2025 können Konten von Nutzern unter 18 keine offenen Gespräche mehr mit Figuren führen. Jugendliche behalten andere Funktionen, etwa interaktive Geschichten (Stories).", "Character.AI schätzt das Alter jedes Kontos anhand von Signalen wie dem Verhalten und kann ein Selfie oder einen Ausweis verlangen, wenn es jemanden für jünger als 18 hält.", "Keine Alterskontrolle ist perfekt. Ein Kind mit dem Konto eines Elternteils oder eines älteren Freundes kommt weiterhin zu den Chats für Erwachsene."]}, {"h": "Die echten Risiken für Kinder", "list": ["Emotionale Bindung: eine Figur, die immer da ist, kann echte Freunde und Schlaf ersetzen. Achten Sie auf Nutzung in der Nacht.", "Ungeeignete Inhalte: von Nutzern erstellte Figuren können ein Gespräch in Richtung Sex, Gewalt oder Selbstverletzung lenken, auch mit Filtern.", "Schwere Fälle: Im Oktober 2024 verklagte eine Mutter in Florida Character.AI nach dem Tod ihres 14-jährigen Sohnes, der monatelang mit einer Figur gechattet hatte. Das Unternehmen änderte im Jahr darauf seine Regeln für Jugendliche.", "Datenschutz: Alles, was ein Kind tippt, wird auf den Servern des Unternehmens gespeichert.", "Nachahmer: Dutzende andere KI-Freund-Apps (Talkie, Chai, Janitor AI, Replika und mehr) bieten dieselbe Art Chat, oft mit schwächeren Alterskontrollen."]}, {"h": "Warnzeichen", "list": ["Lange Handy- oder Laptopnutzung spät abends, oft mit Kopfhörern.", "Über einen „KI-Freund“ oder eine Figur sprechen, als wäre sie ein echter Mensch.", "Den Bildschirm verstecken, wütend werden, wenn das Gerät weggenommen wird, weniger Interesse an Freunden."]}, {"h": "Character.AI und ähnliche Apps blockieren", "steps": ["Im Browser (Chrome, Edge, Brave, Opera): Installieren Sie die kostenlose <a href=\"/de/browser-erweiterung/\">Mindveto-Erweiterung</a>. Der Schalter „KI-Freund-Apps“ ist standardmäßig an und blockiert Character.AI, Replika, Talkie, Chai, Janitor AI und 20+ weitere. Ein Versuch erscheint im Manipulationsprotokoll mit roter Markierung am Symbol: Sie wissen es, ohne Chats zu lesen.", "Auf Android: Installieren Sie die <a href=\"/de/android/\">Mindveto-App</a> (sie blockiert diese Seiten in jeder App) und sperren Sie in Google Family Link die Character.AI-App und schalten Sie die Genehmigung neuer Downloads ein.", "Auf iPhone oder iPad: Öffnen Sie Einstellungen, dann Bildschirmzeit, Beschränkungen, Inhaltsbeschränkungen, Webinhalte. Wählen Sie „Websites für Erwachsene beschränken“ und fügen Sie character.ai unter „Nie erlauben“ hinzu. Sperren Sie auch die App bei den App-Store-Käufen.", "Für alle Geräte zu Hause: Nutzen Sie unsere kostenlosen Listen in einem DNS-Filter im WLAN, siehe <a href=\"/de/netzwerk/\">ganzes Netzwerk</a>.", "Setzen Sie in Mindveto eine PIN und geben Sie Ihrem Kind ein normales Konto (kein Administrator), damit die Sperre bleibt."]}, {"h": "Erst reden, dann sperren", "p": ["Fragen Sie Ihr Kind, was es an der Figur mag. Oft ist es Aufmerksamkeit: jemand, der zuhört. Erklären Sie, dass ein Chatbot gebaut ist, damit man weiterredet, und legen Sie Regeln gemeinsam fest. Eine Sperre wirkt am besten, wenn das Kind weiß, warum es sie gibt."], "note": "Mindveto liest keine Nachrichten und sendet uns nichts. Der KI-Freund-Hinweis speichert nur die Uhrzeit eines Versuchs, nie die Seite oder den Chat.", "human": true}], "faq": [{"q": "Ab welchem Alter ist Character.AI?", "a": "Ab 13 Jahren, in der Europäischen Union ab 16. Seit November 2025 können Nutzer unter 18 keine offenen Gespräche mit Figuren mehr führen."}, {"q": "Hat Character.AI eine Kindersicherung?", "a": "Es bietet „Parental Insights“: eine wöchentliche E-Mail an ein Elternteil mit Nutzungszeit und meistgenutzten Figuren, nicht die Gespräche selbst. Der Jugendliche muss die E-Mail des Elternteils eintragen, es funktioniert also nur mit seiner Mitwirkung."}, {"q": "Kann mein Kind eine Sperre umgehen?", "a": "Manchmal: mit einem anderen Handy, dem WLAN eines Freundes oder einem Administratorkonto. Darum sind eine PIN, ein normales Benutzerkonto und ein Gespräch so wichtig wie die Sperre. Siehe unsere ehrliche Liste der <a href=\"/de/umgehungstricks/\">Umgehungstricks</a>."}, {"q": "Ist Mindveto kostenlos?", "a": "Ja. Die Browser-Erweiterung, die Android-App und die Downloads für den Computer sind kostenlos nutzbar."}], "related": ["parents", "browser", "android"], "article": {"date": "2026-11-18", "sources": [["TechCrunch: Character.AI ends open-ended chat for under-18s (29 Oct 2025)", "https://techcrunch.com/2025/10/29/character-ai-is-killing-the-chatbot-experience-for-minors/"], ["eSafety Commissioner (Australia): Character.AI guide", "https://www.esafety.gov.au/key-topics/esafety-guide/characterai"], ["Internet Matters: What is Character.AI? Parent guide", "https://www.internetmatters.org/hub/news-blogs/what-is-character-ai-parent-guide/"], ["Google Family Link Help: manage your child's apps", "https://support.google.com/families/answer/7101025"]]}},
  aiact: {"title": "KI-Verordnung Artikel 4: Was Schulen tun müssen (2026)", "desc": "Gilt die EU-KI-Verordnung für Schulen? Was Artikel 4 zur KI-Kompetenz 2026 nach dem Digital Omnibus verlangt, mit einem 6-Schritte-Plan für Ihre Schule.", "h1": "KI-Verordnung Artikel 4: Was Schulen tun müssen.", "lead": "Kurze Antwort: Ja, sie gilt für Ihre Schule, wenn das Personal KI-Tools nutzt. Artikel 4 verlangt, dass die Schule Maßnahmen ergreift, um die KI-Kompetenz ihres Personals aufzubauen. Es gibt keine Prüfung und kein Zertifikat, aber Sie sollten zeigen können, was Sie getan haben.", "blocks": [{"h": "Gilt die KI-Verordnung für meine Schule?", "p": ["Die KI-Verordnung (AI Act) nennt eine Organisation, die ein KI-System in eigener Verantwortung nutzt, „Betreiber“. Eine Schule, deren Lehrkräfte ChatGPT oder Copilot, ein KI-Korrekturtool oder die KI-Funktion einer Lernplattform nutzen, ist Betreiber.", "Artikel 4 betrifft das Personal und andere Personen, die KI im Auftrag der Schule nutzen. Schülerinnen und Schüler fallen nicht unter Artikel 4 selbst, aber ihnen KI beizubringen ist der logische nächste Schritt."]}, {"h": "Was Artikel 4 im Jahr 2026 sagt", "list": ["Er gilt seit dem 2. Februar 2025 in jedem EU-Land.", "Die „Digital Omnibus“-Änderung von 2026, in Kraft seit dem 27. Juli 2026, hat ihn neu gefasst: Die Schule muss Maßnahmen ergreifen, um die KI-Kompetenz ihres Personals zu fördern, muss aber kein festes Niveau für jede Person garantieren.", "Die nationalen Marktüberwachungsbehörden beaufsichtigen die Verordnung ab August 2026.", "Die Verordnung sieht kein eigenes Bußgeld nur für Artikel 4 vor. Geht aber etwas schief, etwa Schülerdaten in einem kostenlosen Chatbot, kann fehlende Schulung gegen die Schule sprechen, auch nach der DSGVO.", "Manche KI-Anwendungen in Schulen sind „hochriskant“ (Anhang III): KI, die über die Zulassung entscheidet, Arbeiten bewertet, Schüler einem Niveau zuordnet oder sie bei Prüfungen überwacht. Dafür gelten strengere Regeln, zu einem späteren Termin nach der Verschiebung von 2026."]}, {"h": "Ein 6-Schritte-Plan für dieses Schuljahr", "steps": ["Listen Sie die genutzten KI-Tools auf: auch die kostenlosen, die Lehrkräfte selbst nutzen, und KI-Funktionen in Tools, die Sie schon haben.", "Entscheiden Sie, welche Tools erlaubt sind, und schreiben Sie eine kurze KI-Richtlinie. Starten Sie mit unserer kostenlosen <a href=\"/de/ki-richtlinie-vorlage/\">Vorlage für eine KI-Richtlinie</a>.", "Bieten Sie kurze Schulungen je Rolle an: für alle, was KI ist, warum sie Fehler macht und warum Schülerdaten nie in einen kostenlosen Chatbot gehören; mehr für IT, Beratung und Schulleitung.", "Erklären Sie Eltern und Schülern die Regeln, zum Beispiel mit einem Brief zu Beginn des Halbjahres.", "Legen Sie Regeln für Tests und Prüfungen fest. Der kostenlose <a href=\"/de/pruefungsknopf/\">Prüfungsknopf</a> schaltet KI für eine ganze Klasse während eines Tests ab.", "Führen Sie eine einfache Liste: Datum, Teilnehmende, Inhalt. Das ist Ihr Nachweis."]}, {"h": "Was Sie einer Aufsicht zeigen können", "list": ["Ihre KI-Richtlinie und die Liste der freigegebenen Tools.", "Schulungstermine, Themen und Teilnehmende.", "Den Elternbrief und die Regeln für Tests.", "Die Einstellungen auf den Schulgeräten."]}, {"h": "Wo Mindveto hilft und wo nicht", "list": ["Freigegebene KI: Erlauben Sie nur die Tools aus Ihrer Richtlinie, der Rest bleibt gesperrt.", "Der <a href=\"/de/einfuege-schutz/\">Einfüge-Schutz</a> warnt, bevor Schülerdaten, Ausweisnummern oder vertrauliche Texte in eine KI-Seite gelangen.", "Der Prüfungsknopf sperrt KI für eine ganze Klasse während eines Tests.", "Mindveto ist keine Schulung und macht eine Schule nicht allein regelkonform. Schulung und Richtlinie sind Ihr Teil."], "note": "Diese Seite ist eine allgemeine Information, keine Rechtsberatung. Prüfen Sie den amtlichen Text auf EUR-Lex und die Hinweise Ihres Bildungsministeriums."}], "faq": [{"q": "Brauchen Lehrkräfte ein Zertifikat für KI-Kompetenz?", "a": "Nein. Artikel 4 verlangt kein Zertifikat und keinen Test. Er verlangt geeignete Maßnahmen der Schule, etwa Schulungen, und es hilft, aufzuschreiben, was Sie getan haben."}, {"q": "Gibt es ein Bußgeld, wenn man Artikel 4 ignoriert?", "a": "Die Verordnung sieht kein eigenes Bußgeld nur für Artikel 4 vor. Nationale Behörden beaufsichtigen ihn, und fehlende Schulung kann gegen eine Schule sprechen, wenn eine andere Regel verletzt wird, etwa die DSGVO."}, {"q": "Gilt das auch für Schüler?", "a": "Artikel 4 betrifft Personal und andere, die KI im Auftrag der Schule nutzen. Schüler werden nicht genannt, aber die meisten Schulen unterrichten sie auch über KI."}, {"q": "Gilt die KI-Verordnung außerhalb der EU?", "a": "Sie gilt für Schulen in der EU, die KI nutzen, und für Unternehmen, die KI in der EU anbieten, egal wo sie sitzen."}], "related": ["schools", "policy", "exam"], "article": {"date": "2026-11-18", "sources": [["EUR-Lex: AI Act, Regulation (EU) 2024/1689", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"], ["European Commission: AI talent, skills and literacy", "https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy"], ["KI-Campus: AI Omnibus recalibrates Article 4, AI literacy remains mandatory", "https://ki-campus.org/en/blog/eu-ai-act-ai-omnibus-recalibrates-article-4-ai-literacy-remains-mandatory"], ["CMS: Compulsory or optional? AI literacy and the AI Act", "https://cms.law/en/bel/legal-updates/compulsory-or-optional-ai-literacy-a-central-component-of-compliance-with-ai-act"]]}},
  ...PR.pages,
  ...LK.pages,
  ...TR.pages,
  ...ASK.de.pages,
};

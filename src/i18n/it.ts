import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';

// Internal links use the English paths; localize.ts rewrites them to /it/ paths at build time.
export const home: Home = {
  title: 'Mindveto: blocca ChatGPT e oltre 150 IA con un interruttore',
  desc: 'Blocca ChatGPT, Gemini, Copilot e oltre 150 strumenti di IA su browser, Android, Windows, Mac e reti. PIN, pulsante esame. Gratis, senza tracciamento.',
  h1: 'La tua mente ha l’ultima parola.',
  lead: 'Mindveto spegne ChatGPT, Gemini, Copilot e oltre 150 strumenti di IA su un browser, un telefono, un computer o un’intera rete. Un PIN decide chi può riaccenderli.',
  switchOn: 'IA', switchOff: 'Veto', switchLabel: 'Prova: spegni l’IA su questa pagina',
  statusOn: 'IA consentita. Gira l’interruttore.', statusOff: 'Veto. Oltre 150 servizi di IA bloccati.',
  how: 'Come funziona',
  doorsH: 'Per chi è',
  doors: [
    { key: 'parents', who: 'Genitori', why: 'Compagni IA a mezzanotte, compiti scritti da un chatbot. Bloccalo sul PC di famiglia e sul telefono di tuo figlio. Nuovo: un filtro famiglia gratuito per siti porno, di scommesse e di incontri.', go: 'Per i genitori' },
    { key: 'schools', who: 'Scuole', why: 'Un pulsante esame per gli insegnanti, e file che l’IT può installare oggi su ogni computer della scuola.', go: 'Per le scuole' },
    { key: 'offices', who: 'Uffici', why: 'Pratiche dei clienti, IBAN e contratti restano fuori dai chatbot pubblici. Solo l’IA che il tuo studio approva.', go: 'Per gli uffici' },
  ],
  productsH: 'Un’idea, sette strumenti',
  productsLead: 'Scegli ciò che va bene per il dispositivo. Oggi è tutto gratis.',
  proofH: 'Cosa esce dal tuo dispositivo',
  proofP: 'Mindveto controlla tutto sul dispositivo stesso. Non vogliamo i tuoi dati, quindi l’abbiamo costruito per non riceverli mai.',
  ledger: [
    ['Niente', 'Le pagine che visiti, ciò che scrivi, ciò che incolli.', true],
    ['Niente', 'Il tuo nome, la tua e-mail o un account. Non esiste un account.', true],
    ['Una volta al giorno', 'L’estensione scarica la lista pubblica degli indirizzi di IA. Non invia nulla insieme.', false],
    ['Solo se ti unisci', 'In modalità esame, il codice classe viene inviato una volta al minuto per sapere se l’esame è attivo. Nessun nome.', false],
  ],
  limitsH: 'Limiti onesti',
  limits: [
    'Funziona sul browser, telefono, computer o rete dove lo installi. Un bambino può ancora usare il telefono di un amico.',
    'Chi controlla tutto il dispositivo può rimuoverlo. Usa un account normale (non amministratore) per bambini e personale.',
    'Ogni settimana compaiono nuove IA. La lista si aggiorna ogni giorno, ma qualcuna può sfuggire per qualche giorno.',
  ],
  priceH: 'Gratis per iniziare',
  priceP: 'Bloccare resta gratis per tutti. I piani a pagamento per famiglie, scuole e uffici partono con il lancio su Google Play.',
  priceGo: 'Vedi i piani',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
  parents: {
    title: 'Bloccare ChatGPT e le app di IA per tuo figlio',
    desc: 'Blocca chatbot di IA, compagni IA e IA per i compiti sul browser, sul telefono Android e sul PC di famiglia di tuo figlio. PIN e orario. Gratis.',
    h1: 'Blocca l’IA per tuo figlio, su ogni schermo che usa.',
    lead: 'Compagni IA che chattano a mezzanotte, temi scritti in dieci secondi. Mindveto ti lascia decidere quando l’IA fa parte della giornata di tuo figlio, e un PIN fa sì che resti così.',
    actions: [{ label: 'Scarica gratis', to: 'download', solid: true }, { label: 'Quale versione mi serve?', to: 'help' }],
    blocks: [
      { h: 'Cosa puoi fare', list: [
        'Bloccare oltre 150 chatbot, compagni IA, aiuti per i compiti e strumenti di immagini con IA con un solo interruttore.',
        'Impostare un PIN perché tuo figlio non possa spegnerlo o cambiare la lista.',
        'Usare un orario: bloccare solo nei giorni di scuola, o solo la sera. Le vacanze scolastiche di Belgio, Paesi Bassi e Francia sono già incluse.',
        'Vedere un registro manomissioni: tentativi di PIN sbagliati e quando l’interruttore è stato spento.',
        'Consentire una IA di fiducia, per esempio per un progetto scolastico, e tenere bloccato il resto.',
        'Se vuoi, bloccare anche i social come TikTok, Instagram e Snapchat nel browser. È spento finché non lo attivi.',
        'Filtro famiglia, gratis: blocca i siti porno e 18+ e imponi SafeSearch in Google, Bing, DuckDuckGo e YouTube. Spento finché non lo accendi. Opzionale: blocca anche i siti di VPN, proxy e DNS sicuro, così il filtro non si aggira facilmente. Anche opzionale: bloccare i siti di gioco d’azzardo e scommesse, e le app di incontri e la videochat casuale.',
      ]},
      { h: 'Pronto in 10 minuti', steps: [
        L('Sul computer di famiglia: installa l’<a href="/browser-extension/">estensione per browser</a>, oppure blocca l’IA in ogni app con il download per <a href="/windows/">Windows</a> o <a href="/mac-linux/">Mac</a>.'),
        L('Sul telefono Android di tuo figlio: installa l’<a href="/android/">app Android</a> e attiva “VPN sempre attiva” perché non si possa aggirare.'),
        'Usa lo stesso PIN ovunque e tienilo per te.',
        'Dai a tuo figlio un account normale (non amministratore) sul computer. Così non può rimuoverlo.',
      ]},
      { h: 'Una buona conversazione vale più di ogni blocco', p: [
        'Il blocco funziona meglio quando tuo figlio sa perché. Spiegagli cosa fa Mindveto, quando l’IA è permessa e che il registro mostra se qualcuno prova a spegnerlo.',
      ], note: 'Mindveto non legge i messaggi di tuo figlio e non ci invia nulla. Impedisce solo che si aprano indirizzi di IA.', human: true },
    ],
    faq: [
      { q: 'Funziona su iPhone?', a: L('Non c’è ancora un’app per iPhone. Puoi bloccare l’IA su un iPhone con la nostra lista gratuita e un servizio DNS: vedi <a href="/network/">intera rete</a>. Anche Tempo di utilizzo di Apple può bloccare singoli siti.') },
      { q: 'Mio figlio usa un portatile della scuola. Posso installarlo lì?', a: 'Chiedi prima alla scuola. I dispositivi scolastici sono gestiti dalla scuola, e molte scuole possono installare Mindveto per tutti gli studenti in una volta.' },
      { q: 'È davvero gratis?', a: 'Sì. Blocco, PIN e orario restano gratis. Un piano Plus a pagamento con extra per le famiglie arriva con il lancio su Google Play.' },
    ],
    related: ['family', 'browser', 'android'],
  },

  schools: {
    title: 'Bloccare l’IA sui computer della scuola, con pulsante esame',
    desc: 'Blocca ChatGPT e strumenti di IA sui computer e sulla rete della scuola. Pulsante esame per insegnanti e file per l’IT. Nessun dato degli studenti.',
    h1: 'IA spenta durante la verifica. Accesa quando la lezione la richiede.',
    lead: 'Gli insegnanti hanno un pulsante esame. L’IT riceve file pronti per ogni computer e per la rete della scuola. Nessuno legge ciò che scrivono gli studenti.',
    actions: [{ label: 'Apri il pulsante esame', to: 'exam', solid: true }, { label: 'File per l’IT', to: 'network' }],
    blocks: [
      { h: 'Per gli insegnanti', list: [
        'Crea una classe con un clic. Gli studenti entrano con un codice nell’estensione.',
        'Avvia la modalità esame da 30 a 240 minuti. In meno di un minuto ogni IA è bloccata nei browser della tua classe.',
        'Niente account, niente nomi degli studenti, niente e-mail.',
      ], actions: [{ label: 'Crea una classe', to: 'exam' }] },
      { h: 'Per l’IT', list: [
        'Installa l’estensione in modo forzato con i criteri di Chrome ed Edge (Google Admin, GPO, Intune) perché gli studenti non possano rimuoverla.',
        'Blocca l’IA sulla rete della scuola con file per Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid e i firewall più comuni.',
        'Consenti solo gli strumenti di IA che la scuola approva e tieni bloccato tutto il resto.',
      ], actions: [{ label: 'Scarica il pacchetto IT', to: 'network' }] },
      { h: 'Privacy degli studenti', p: [
        'Mindveto controlla tutto sul dispositivo. Non registra quali siti visitano gli studenti e non legge ciò che scrivono. Per la modalità esame il nostro database conserva solo un codice classe cifrato (hash) e l’ora di fine dell’esame.',
        L('Così è facile spiegarlo alle famiglie e al responsabile della protezione dei dati. Leggi l’<a href="/privacy/">informativa sulla privacy</a>.'),
      ]},
      { h: 'Provalo per un quadrimestre', p: [
        L('Gratis durante il pilota. Scrivi a <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> con il nome della scuola e il numero di dispositivi, e ti aiutiamo a configurarlo.'),
      ]},
    ],
    faq: [
      { q: 'Uno studente può uscire dalla classe o spegnerlo?', a: 'No, se la scuola imposta il PIN e installa l’estensione con i criteri del browser. Su un computer dove lo studente è amministratore, può rimuoverla.' },
      { q: 'Blocca i telefoni in classe?', a: 'La modalità esame funziona nei browser dei computer della scuola. Per i telefoni sul Wi-Fi della scuola, usa i file DNS per la rete scolastica.' },
      { q: 'Quanto costerà dopo?', a: L('Il piano è 1 € per studente all’anno, minimo 149 € per scuola. Vedi i <a href="/pricing/">prezzi</a>.') },
    ],
    related: ['exam', 'network', 'browser'],
  },

  offices: {
    title: 'Evita che il personale incolli dati dei clienti in ChatGPT',
    desc: 'Guardia incolla per uffici: un avviso prima che IBAN, numeri d’identità, liste di clienti o testi riservati finiscano nelle chat di IA. Solo IA approvata.',
    h1: 'I dati dei clienti restano fuori dai chatbot pubblici.',
    lead: 'Un commercialista incolla un estratto conto in un chatbot per “riassumerlo”. Mindveto ferma quel momento sullo schermo, prima che i dati escano dallo studio.',
    actions: [{ label: 'Vedi la guardia incolla', to: 'paste', solid: true }, { label: 'Prezzi per i team', to: 'pricing' }],
    blocks: [
      { h: 'Cosa fa per uno studio', list: [
        'Consente solo l’IA che il tuo studio approva (per esempio Microsoft Copilot con l’account aziendale) e blocca le altre 150+.',
        'Avvisa prima di incollare in un sito di IA IBAN, numeri di carta, numeri d’identità, liste di e-mail, chiavi segrete o testi marcati come “riservato”.',
        'Aggiungi le tue parole private: nomi dei clienti, codici di progetto, numeri di pratica.',
        'Blocca le impostazioni con un PIN e vedi quando qualcuno ha provato a cambiarle.',
      ]},
      { h: 'Perché gli studi lo scelgono', p: [
        'I grandi strumenti contro la fuga di dati inviano i tuoi dati al loro cloud per controllarli, e costano migliaia di euro. Mindveto controlla sul PC stesso, così il testo non esce mai dallo studio.',
        'È adatto a commercialisti, avvocati, notai, broker assicurativi, risorse umane e studi medici: piccoli team con pratiche riservate e senza reparto IT.',
      ], note: 'In molti paesi bisogna informare il personale o i suoi rappresentanti prima di introdurre uno strumento del genere. Mindveto non legge nulla e non invia nulla, e questo rende la conversazione più facile.', human: true },
      { h: 'Distribuiscilo', steps: [
        L('Installa l’<a href="/browser-extension/">estensione per browser</a> su ogni computer di lavoro, o installala in modo forzato con i criteri di Edge o Chrome.'),
        'Spunta l’IA che il tuo studio consente e aggiungi le tue parole private.',
        'Imposta un unico PIN per tutto lo studio.',
      ]},
    ],
    faq: [
      { q: 'Può bloccare l’IA dentro Word o Outlook?', a: L('L’estensione funziona nel browser. Su Windows, il <a href="/windows/">download per Windows</a> può anche spegnere Copilot e Recall integrati in Windows.') },
      { q: 'Vedete cosa incolla il mio personale?', a: 'No. Il controllo avviene sul computer. Il testo incollato non viene mai salvato né inviato.' },
      { q: 'Quanto costa?', a: L('Il piano per i team costa 2,50 € per utente al mese. Durante il lancio è gratis. Vedi i <a href="/pricing/">prezzi</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'Estensione per bloccare l’IA in Chrome, Edge, Brave e Opera',
    desc: 'Estensione gratuita che blocca ChatGPT, Gemini, Claude e oltre 150 siti di IA in Chrome, Edge, Brave e Opera. PIN, orario, guardia incolla. Nessun tracciamento.',
    h1: 'L’interruttore dell’IA per il tuo browser.',
    lead: 'Un interruttore blocca oltre 150 chatbot e strumenti di IA. Un PIN impedisce ad altri di cambiarlo. Funziona in Chrome, Edge, Brave e Opera.',
    actions: [{ label: 'Scarica v1.6.0 (735 KB)', url: DL + 'human-override-1.6.0.zip', solid: true, download: true }, { label: 'Passi di installazione', url: '#install' }],
    blocks: [
      { h: 'Cosa contiene', list: [
        'Blocca chat IA, ricerca IA, strumenti IA per immagini, video, voce e musica, strumenti IA per scrittura e compiti, per programmazione e per prendere appunti.',
        'Blocco con PIN dell’interruttore e di tutte le impostazioni.',
        'Orario con le vacanze scolastiche di Belgio, Paesi Bassi e Francia.',
        L('<a href="/paste-guard/">Guardia incolla</a> con le tue parole private.'),
        'IA approvata: consenti solo gli strumenti che la tua scuola o azienda permette.',
        L('Modalità classe e <a href="/exam-button/">modalità esame</a> per gli insegnanti.'),
        'Registro manomissioni e un segno rosso sull’icona dopo un PIN sbagliato.',
        'Le tue liste di blocco e di permesso. La lista pubblica si aggiorna una volta al giorno.',
        'Opzionale: bloccare anche i social (TikTok, Instagram, Snapchat e altri). Spento finché non lo attivi.',
        'Per ora l’estensione è in inglese, olandese e francese.',
        'Filtro famiglia: blocca oltre 60.000 siti porno e 18+ e impone SafeSearch in Google, Bing, DuckDuckGo e YouTube. Spento finché non lo accendi; con un PIN, solo tu puoi spegnerlo. Opzionale: blocca anche i siti di VPN, proxy, Tor e DNS sicuro, così il filtro non si aggira facilmente. Anche opzionale: bloccare i siti di gioco d’azzardo e scommesse, e le app di incontri e la videochat casuale.',
      ]},
      { h: 'Installala in un minuto', fold: 'Mostra i passi di installazione', foldLead: 'Le versioni degli store sono in arrivo. Nel frattempo la installi a mano in un minuto.', steps: [
        'Scarica lo zip qui sopra ed estrailo (tasto destro, “Estrai tutto”).',
        L('Apri <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>).'),
        'Attiva la “Modalità sviluppatore” (in alto a destra).',
        'Clicca su “Carica estensione non pacchettizzata” e scegli la cartella estratta.',
        'Fissa l’icona nella barra, aprila e imposta un PIN.',
      ], note: 'Per genitori e scuole: nella pagina “Dettagli” dell’estensione, attiva “Consenti in modalità in incognito”. Altrimenti le finestre private non vengono bloccate.' },
      { h: 'Dati', facts: [
        ['Versione', '1.6.0 (Manifest V3)'], ['Dimensione', '735 KB'], ['Browser', 'Chrome, Edge, Brave, Opera. Firefox e store ufficiali: presto'],
        ['Permessi', 'Regole di blocco, archiviazione locale, un timer giornaliero'], ['Dati inviati', 'Nessuno. Si scarica solo la lista pubblica una volta al giorno'], ['Prezzo', 'Gratis'],
      ]},
    ],
    faq: [
      { q: 'Perché non è ancora nel Chrome Web Store?', a: 'Le versioni degli store sono in arrivo. Nel frattempo la installi a mano in un minuto, con i passi qui sopra.' },
      { q: 'Perché un download vecchio dice “Human Override”?', a: 'Era il suo nome fino a novembre 2026. Dalla versione 1.3.0 si chiama Mindveto. È lo stesso prodotto.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'Bloccare le app di IA su Android',
    desc: 'App Android che blocca ChatGPT, Gemini, Character.AI e oltre 150 servizi di IA in ogni app del telefono. PIN e avvisi di manomissione. Non invia nulla.',
    h1: 'IA spenta in ogni app del telefono.',
    lead: 'I browser sono solo metà della storia: le app di IA vivono sul telefono. L’app Mindveto per Android blocca gli indirizzi di IA per ogni app, e ti avvisa se qualcuno prova a spegnerla.',
    actions: [{ label: 'Scarica per Android (389 KB, beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'Come funziona', p: [
        'L’app esegue sul telefono un piccolo filtro locale per i nomi di internet (DNS). Quando un’app chiede un indirizzo di IA, il filtro risponde che non esiste. Tutto il resto funziona normalmente.',
        'Solo queste richieste di nomi passano dall’app. Non ci viene inviato nulla.',
        'Filtro famiglia opzionale: attiva “Siti per adulti” e “SafeSearch” nell’app. I siti porno non si aprono in nessuna app, e Google, Bing, DuckDuckGo e YouTube mostrano risultati sicuri. Con un PIN, per spegnerlo serve il PIN. Un terzo interruttore blocca i servizi di VPN, proxy e DNS sicuro, così il filtro non si aggira facilmente. Anche opzionale: bloccare i siti di gioco d’azzardo e scommesse, e le app di incontri e la videochat casuale.',
      ]},
      { h: 'Installare', steps: [
        'Apri il link di download sul telefono.',
        'Quando Android lo chiede, consenti “installa app sconosciute” per il tuo browser.',
        'Apri l’app e tocca il pulsante grande.',
        'Attiva “VPN sempre attiva” e “Blocca connessioni senza VPN” (l’app mostra come). Così non si può aggirare.',
        'Imposta un PIN.',
      ], note: 'Beta: per aggiornare, disinstalla prima la versione vecchia. La versione su Google Play arriverà con 15 giorni di Plus gratis. Per ora l’app è in inglese, olandese e francese.' },
      { h: 'Dati', facts: [
        ['Versione', 'Beta, Android 16 (SDK 36)'], ['Dimensione', '389 KB'], ['Requisiti', 'Android 8 o successivo'],
        ['Avvisi di manomissione', 'Sì, una notifica se la protezione si ferma'], ['Dati inviati', 'Nessuno'], ['Prezzo', 'Gratis durante la beta'],
      ]},
    ],
    faq: [
      { q: 'Rallenta il telefono o consuma batteria?', a: 'Pochissimo. Risponde solo alle richieste di nomi; non fa passare il tuo traffico da un server.' },
      { q: 'Posso usare un’altra VPN insieme?', a: 'No. Android consente una VPN alla volta. Mindveto usa quello spazio per il suo filtro locale.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'Bloccare l’IA su Windows, in ogni browser e app',
    desc: 'Download gratuito per Windows che blocca ChatGPT e oltre 150 servizi di IA in ogni browser e app, e può spegnere Copilot e Recall.',
    h1: 'Blocca l’IA su tutto il PC Windows.',
    lead: 'Nessuna estensione: un download blocca gli indirizzi di IA per ogni browser e app del computer. Può anche spegnere l’IA integrata in Windows.',
    actions: [{ label: 'Scarica per Windows (501 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installare', fold: 'Mostra i passi di installazione', foldLead: 'Le versioni degli store sono in arrivo. Nel frattempo lo installi a mano in un minuto.', steps: [
        'Estrai il download.',
        'Fai doppio clic su “Start-Mindveto.bat” e clicca Sì.',
        'Scrivi 1 per bloccare l’IA. Scrivi 3 per spegnere anche Copilot, Recall e l’IA di Edge e Chrome.',
        'Dai a bambini o personale un account normale (non amministratore). Così non possono annullarlo.',
        'Digita 5 per accendere il filtro famiglia: siti porno e 18+ bloccati, SafeSearch imposto in Google, Bing e YouTube. Digita 6 per spegnerlo. Blocca anche i siti di VPN, proxy e DNS sicuro e spegne il DNS sicuro in Chrome, Edge e Firefox. L’opzione 5 chiede anche dei siti di gioco d’azzardo e di incontri.',
      ], note: 'Windows può dire prima che “ha protetto il PC”. Clicca su “Ulteriori informazioni” e poi su “Esegui comunque”. Lo script è testo semplice: puoi aprirlo con il Blocco note e leggere ogni riga. Lo script è in inglese.' },
      { h: 'Dati', facts: [
        ['Funziona su', 'Windows 10 e 11'], ['Come', 'Aggiunge indirizzi di IA al file hosts di Windows e imposta i criteri ufficiali di Windows per l’IA integrata'],
        ['Annullare', 'Eseguilo di nuovo e scrivi 2 (4 per l’IA integrata)'], ['Requisiti', 'Diritti di amministratore una volta'], ['Prezzo', 'Gratis'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'Bloccare l’IA su Mac e Linux',
    desc: 'Script gratuito che blocca ChatGPT e oltre 150 servizi di IA in ogni browser e app di un Mac o di un computer Linux. Un comando per attivare, uno per togliere.',
    h1: 'Un comando. IA spenta su tutto il Mac o Linux.',
    lead: 'Lo script aggiunge gli indirizzi di IA al file hosts del sistema, così ogni browser e app del computer è coperto.',
    actions: [{ label: 'Scarica per Mac e Linux (498 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Installare', steps: [
        'Estrai il download.',
        'Apri il Terminale nella cartella estratta.',
        L('Scrivi <code>sudo sh mindveto.sh on</code> e la tua password.'),
        L('Per consentire di nuovo l’IA: <code>sudo sh mindveto.sh off</code>.'),
        L('Filtro famiglia (siti porno e 18+, SafeSearch): <code>sudo sh mindveto.sh family-on</code>, e <code>family-off</code> per annullare. Blocca anche i siti di VPN, proxy e DNS sicuro. Aggiungi <code>gambling dating</code> per bloccare anche quei siti.'),
      ], note: 'Usa un account normale (non amministratore) per i bambini. Così non possono cambiare il file hosts.' },
      { h: 'Dati', facts: [
        ['Funziona su', 'macOS, Ubuntu, Debian, Fedora e la maggior parte dei sistemi Linux'], ['Annullare', 'Un comando'], ['Prezzo', 'Gratis'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'Bloccare l’IA su un’intera rete: DNS, firewall, criteri',
    desc: 'Liste gratuite e un pacchetto IT per bloccare ChatGPT e oltre 150 servizi di IA su un’intera rete: Pi-hole, AdGuard, Windows DNS, BIND, Squid, GPO, Intune.',
    h1: 'Blocca l’IA per ogni dispositivo della rete.',
    lead: 'Per case, scuole, uffici e servizi pubblici. Usa le nostre liste gratuite con il filtro che hai già, o distribuisci oggi il pacchetto IT.',
    actions: [{ label: 'Scarica il pacchetto IT (13 KB)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Liste gratuite', p: ['Aggiungi un indirizzo al tuo filtro. Le liste restano allo stesso indirizzo e si aggiornano quando compaiono nuovi servizi di IA.'], facts: [
        ['Lista AdGuard / uBlock', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['File hosts', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Domini semplici', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Dove usarle', list: [
        'Router di casa o dell’ufficio con Pi-hole o AdGuard Home: aggiungi la lista una volta e ogni dispositivo sul Wi-Fi è coperto.',
        'Android e iPhone: un account gratuito AdGuard DNS con la nostra lista come regole personali, poi DNS privato (Android) o un profilo (iPhone).',
        'Un computer: aggiungi la lista hosts al file hosts (servono i diritti di amministratore).',
      ]},
      { h: 'Nel pacchetto IT', list: [
        'Criteri di Chrome ed Edge (GPO, Intune, Google Admin) per installare l’estensione in modo forzato e bloccare i siti di IA.',
        'Criteri di Firefox.',
        'Windows Server DNS (PowerShell), zona RPZ di BIND, Unbound, dnsmasq.',
        'ACL per il proxy Squid e una lista per i firewall Palo Alto, Fortinet e Check Point.',
      ], note: 'Le liste DNS bloccano domini interi. Alcuni blocchi a livello di pagina, come Bing Chat, funzionano solo nell’estensione per browser.' },
    ],
    faq: [
      { q: 'Possiamo usare le liste a scopo commerciale?', a: L('Sì, all’interno della tua organizzazione. Rivenderle richiede un permesso scritto. Vedi i <a href="/terms/">termini</a>.') },
      { q: 'Aiutate con la distribuzione?', a: L('Sì. Scrivi a <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> con il numero di dispositivi e la tua configurazione.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Pulsante esame: spegni l’IA per la tua classe',
    desc: 'Pulsante esame gratuito per insegnanti: un tocco blocca ogni chatbot di IA nei browser della classe durante una verifica. Senza account né nomi.',
    h1: 'Niente IA durante la verifica.',
    lead: 'Un tocco spegne ogni chatbot di IA nei browser della tua classe, per tutta la durata della verifica. Gratis, senza account, senza nomi degli studenti.',
    blocks: [
      { h: 'Come funziona', steps: ['Crea qui una classe. Ricevi un codice classe e un link privato da insegnante.', 'Gli studenti aprono l’estensione Mindveto, vanno su “Class · exam mode” e digitano il codice.', 'Tocca “Avvia modalità esame”. In meno di un minuto ogni IA è bloccata nei loro browser, finché il tempo scade o la fermi.'] },
    ],
    faq: [
      { q: 'Di cosa hanno bisogno gli studenti?', a: L('Dell’<a href="/browser-extension/">estensione Mindveto</a> nel browser, unita alla tua classe con il codice. Sui computer della scuola, la scuola la installa una volta.') },
      { q: 'Cosa conserva il vostro server?', a: 'Un codice classe cifrato (hash), una chiave insegnante cifrata e l’ora di fine dell’esame. Niente nomi, niente e-mail, niente indirizzi IP.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Guardia incolla: dati privati fuori dalle chat di IA',
    desc: 'Mindveto avvisa prima che IBAN, numeri d’identità, liste di e-mail, chiavi segrete o testi riservati vengano incollati in ChatGPT e in altri siti di IA.',
    h1: 'Un secondo sguardo prima di incollare.',
    lead: 'Le persone incollano prima e pensano dopo. Sui siti di IA, la guardia incolla controlla ciò che incolli, sul tuo computer, e chiede prima che dati privati entrino nella chat.',
    actions: [{ label: 'Prendi l’estensione', to: 'browser', solid: true }, { label: 'Per gli uffici', to: 'offices' }],
    blocks: [
      { h: 'Cosa riconosce', list: [
        'Numeri di conto (IBAN) e di carta.',
        'Numeri d’identità nazionale e di previdenza sociale.',
        'Liste di indirizzi e-mail.',
        'Chiavi segrete, password e token di accesso.',
        'Testi marcati “confidential”, “vertrouwelijk” o “confidentiel”.',
        'Le tue parole private: nomi dei clienti, codici di progetto, numeri di pratica.',
      ]},
      { h: 'Cosa puoi scegliere', steps: [
        'Non incollare.',
        'Incollare senza le parti private: vengono sostituite da un segnaposto.',
        'Incollare comunque, se sei sicuro.',
      ]},
      { h: 'Dove avviene il controllo', p: [
        'Sul tuo computer, nel browser. Il testo incollato non viene mai salvato né inviato, nemmeno a noi.',
      ], note: 'Funziona sui siti di IA per chat, ricerca, scrittura e programmazione. Non osserva la tua e-mail, i documenti o altri siti.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Scarica Mindveto: browser, Android, Windows, Mac',
    desc: 'Scarica Mindveto gratis: estensione per browser, app Android, script per Windows e Mac/Linux, liste di blocco e pacchetto IT. Senza account né tracciamento.',
    h1: 'Scarica Mindveto.',
    lead: 'Scegli il dispositivo che vuoi proteggere. Tutto è gratis e non serve un account. Per ora le app sono in inglese, olandese e francese.',
    blocks: [
      { h: 'Estensione per browser', p: ['Chrome, Edge, Brave e Opera. Versione 1.6.0, 735 KB.'], actions: [{ label: 'Scarica', url: DL + 'human-override-1.6.0.zip', solid: true, download: true }, { label: 'Passi di installazione', to: 'browser' }] },
      { h: 'App Android (beta)', p: ['Blocca l’IA in ogni app. 389 KB.'], actions: [{ label: 'Scarica', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Passi di installazione', to: 'android' }] },
      { h: 'Windows', p: ['Ogni browser e app del PC. 501 KB.'], actions: [{ label: 'Scarica', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Passi di installazione', to: 'windows' }] },
      { h: 'Mac e Linux', p: ['Un comando, in tutto il sistema. 498 KB.'], actions: [{ label: 'Scarica', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Passi di installazione', to: 'maclinux' }] },
      { h: 'Pacchetto IT e liste', p: ['File per DNS, firewall e criteri del browser. 13 KB.'], actions: [{ label: 'Scarica', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Tutte le liste', to: 'network' }] },
    ],
    related: ['help', 'pricing'],
  },

  pricing: {
    title: 'Prezzi di Mindveto: Gratis, Plus, Scuola e Business',
    desc: 'Bloccare è gratis. Plus 14,99 € all’anno per le famiglie, 1 € per studente per le scuole, 2,50 € per utente al mese per gli uffici. Gratis durante il lancio.',
    h1: 'Bloccare è gratis. Gli extra pagano il lavoro.',
    lead: 'Oggi ogni funzione è gratis mentre lanciamo. I piani a pagamento partono con la versione su Google Play.',
    blocks: [],
    faq: [
      { q: 'Quando devo pagare?', a: 'Non ora. Quando partiranno i piani a pagamento, deciderai tu se passare. Nulla viene addebitato in automatico e il piano gratuito resta.' },
      { q: 'C’è un’offerta di lancio?', a: 'Sì. Le prime 250 persone che installano l’app Android da Google Play avranno Plus gratis per un anno. Un contatore su questa pagina mostrerà quanti posti restano.' },
      { q: 'I prezzi includono l’IVA?', a: 'Sì, i prezzi per i consumatori includono l’IVA belga. Scuole e aziende ricevono una fattura.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Aiuto e domande frequenti',
    desc: 'Risposte su Mindveto: quale versione ti serve, PIN, orario, privacy, disinstallazione, e cosa Mindveto può e non può bloccare.',
    h1: 'Aiuto',
    lead: 'Risposte brevi alle domande più frequenti. Non trovi la tua? Scrivi a hello@mindveto.app (rispondiamo in inglese, olandese o francese).',
    blocks: [
      { h: 'Quale versione mi serve?', facts: [
        ['Il telefono Android di un bambino', L('<a href="/android/">App Android</a>')],
        ['Un computer di famiglia o d’ufficio', L('<a href="/browser-extension/">Estensione per browser</a>, più <a href="/windows/">Windows</a> o <a href="/mac-linux/">Mac</a> per ogni app')],
        ['Computer della scuola', L('<a href="/browser-extension/">Estensione</a> tramite criteri del browser, più il <a href="/exam-button/">pulsante esame</a>')],
        ['Ogni dispositivo a casa o al lavoro', L('<a href="/network/">Liste di rete</a>')],
      ]},
    ],
    faq: [
      { q: 'Ho dimenticato il PIN.', a: 'Per sicurezza non c’è un pulsante di ripristino. Rimuovi l’estensione dalla pagina delle estensioni del browser (serve il controllo del computer) e installala di nuovo.' },
      { q: 'Un sito normale è bloccato per errore.', a: 'Apri l’estensione e aggiungi il sito alla tua lista dei permessi. Mandaci l’indirizzo e correggiamo la lista pubblica.' },
      { q: 'Uno strumento di IA non è bloccato.', a: 'Aggiungilo subito alla tua lista di blocco e mandaci l’indirizzo. Aggiungiamo i nuovi servizi di IA alla lista pubblica.' },
      { q: 'Come lo disinstallo?', a: 'Browser: rimuovilo dalla pagina delle estensioni. Android: spegnilo, poi disinstallalo. Windows: esegui lo script e scrivi 2. Mac e Linux: esegui lo script con “off”.' },
      { q: 'Mindveto usa l’IA?', a: 'No. Il blocco e la guardia incolla usano regole semplici sul tuo dispositivo.' },
      { q: 'Chi fa Mindveto?', a: L('Amghar Said, un creatore indipendente. <a href="/about/">Chi siamo</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'Chi siamo: Mindveto',
    desc: 'Mindveto è creato da Amghar Said, un creatore indipendente. Perché costruiamo un interruttore per l’IA, come lo teniamo privato e cosa succede se ci fermiamo.',
    h1: 'Le persone dovrebbero decidere quando l’IA fa parte della loro giornata.',
    lead: 'Mindveto è creato da Amghar Said, un creatore indipendente. È nato come Human Override nel 2026 e ha preso il suo nome a novembre 2026.',
    blocks: [
      { h: 'Chi lo fa', p: [
        'Nel suo lavoro, Amghar Said coordina soggiorni educativi per adolescenti. La tecnologia è la sua passione da 30 anni, e Mindveto è un progetto che costruisce accanto al lavoro.',
        L('Seguilo o scrivigli su <a href="https://www.linkedin.com/in/amghar-said-67a95a22/" rel="me">LinkedIn</a>.'),
      ]},
      { h: 'Perché il nome', p: [
        'Negli anni Ottanta il neuroscienziato Benjamin Libet descrisse come la mente cosciente possa fermare un impulso poco prima di agire: un veto. Mindveto dà questa pausa a chi la vuole di fronte all’IA.',
      ]},
      { h: 'Cosa promettiamo', list: [
        'Niente account, niente tracciamento, niente pubblicità, niente vendita di dati.',
        'Limiti onesti, scritti nelle pagine dei prodotti, non nascosti in piccolo.',
        'Bloccare resta gratis.',
        'Sito in 8 lingue; assistenza via e-mail in inglese, olandese e francese.',
      ]},
      { h: 'Se un giorno ci fermiamo', p: [
        'Tutto ciò che hai installato continua a funzionare: estensione, app e script bloccano con la lista già presente sul tuo dispositivo. Puoi sempre rimuoverli nel modo normale.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Informativa sulla privacy',
    desc: 'Mindveto non raccoglie dati personali: niente cookie, niente tracker, niente account. Cosa trattano il sito, le app e la modalità esame, e i tuoi diritti GDPR.',
    h1: 'Informativa sulla privacy',
    lead: 'In breve: non raccogliamo dati personali. Questa pagina spiega le poche cose che passano da un server, e i tuoi diritti. Versione 1, 12 novembre 2026. Fa fede la versione inglese.',
    blocks: [
      { h: 'Titolare', p: [L('Amghar Said, Belgio. Contatto: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Questo sito', list: [
        'Niente cookie, niente analisi, niente tracker, niente pubblicità, niente font o script di altre aziende.',
        'Il sito è ospitato su GitHub Pages (GitHub, Inc., USA). Come ogni hosting, GitHub tratta brevemente il tuo indirizzo IP nei log del server per servire e proteggere il sito. Noi non riceviamo questi log.',
        'La pagina del pulsante esame salva il codice classe e la chiave insegnante nel tuo browser (archiviazione locale), solo perché la pagina funzioni. Puoi cancellarli con “Dimentica questa classe”.',
      ]},
      { h: 'App e script', list: [
        'Il blocco, la guardia incolla e tutte le impostazioni funzionano sul tuo dispositivo. Il testo incollato non viene mai salvato né inviato.',
        'L’estensione scarica la lista pubblica di blocco una volta al giorno. Non invia dati personali con questa richiesta.',
        'L’app Android filtra solo le richieste di nomi internet sul telefono. Non ci invia nulla.',
      ]},
      { h: 'Modalità esame', p: [
        'Quando un insegnante crea una classe, il nostro database (Supabase, Francoforte, UE) conserva un codice classe cifrato (hash), una chiave insegnante cifrata e l’ora di fine dell’esame. Le estensioni della classe inviano solo il codice classe, una volta al minuto. Per evitare abusi, una versione cifrata dell’indirizzo IP viene conservata per un’ora. Niente nomi, niente e-mail.',
        'Base giuridica: il nostro legittimo interesse a offrire il pulsante esame in modo sicuro (articolo 6.1.f del GDPR).',
      ]},
      { h: 'E-mail', p: ['Se ci scrivi, usiamo il tuo messaggio solo per risponderti e lo cancelliamo quando non serve più.'] },
      { h: 'I tuoi diritti', p: [
        L('Puoi chiedere accesso, rettifica o cancellazione, e opporti. Scrivi a <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. Puoi anche presentare reclamo all’autorità belga per la protezione dei dati (<a href="https://www.dataprotectionauthority.be" rel="noopener">dataprotectionauthority.be</a>) o all’autorità del tuo paese.'),
      ]},
    ],
  },

  terms: {
    title: 'Termini di utilizzo',
    desc: 'Termini di utilizzo di Mindveto: cosa fa e cosa non fa, la tua responsabilità, nessuna garanzia, responsabilità limitata, proprietà e legge applicabile.',
    h1: 'Termini di utilizzo',
    lead: 'Mindveto è un software creato da Amghar Said. Aiuta a bloccare i servizi di IA, ma nessuno strumento può bloccare tutta l’IA. Versione 2, 12 novembre 2026. Vale per l’estensione, l’app Android, gli script per Windows, Mac e Linux, le liste e il pacchetto IT. Questa è una traduzione; in caso di differenze prevale la versione inglese.',
    blocks: [
      { h: '1. Chi lo fornisce', p: [L('Mindveto (prima Human Override) è stato creato da Amghar Said (“l’autore”), che ne è il proprietario. Contatto: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Accettazione', p: ['Installando, scaricando o usando Mindveto accetti questi termini. Se non sei d’accordo, non usarlo e rimuovilo.'] },
      { h: '3. Cosa fa e cosa non fa', p: ['Mindveto cerca di impedire l’accesso ai servizi di IA bloccandone gli indirizzi web. Non garantisce che nessuna IA sia raggiungibile. Non può bloccare l’IA integrata in servizi che consenti, l’IA che funziona offline su un dispositivo, altri browser, app o dispositivi, VPN, proxy, altri servizi DNS, né nuovi servizi di IA non ancora in lista. Chiunque abbia abbastanza accesso al dispositivo può cambiare o rimuovere le impostazioni. Le liste possono bloccare un sito per errore o non includerne uno.'] },
      { h: '4. La tua responsabilità', p: ['Sei tu a decidere dove e come usare Mindveto. Scuole, aziende e altre organizzazioni restano pienamente responsabili delle proprie regole, vigilanza, sicurezza, test e rispetto della legge, compresa quella sulla privacy e sul lavoro. Provalo prima di farci affidamento. Non usarlo per violare la legge o per sorvegliare persone senza base giuridica.'] },
      { h: '5. Fornito “così com’è”', p: ['Mindveto è fornito “così com’è” e “come disponibile”, senza alcuna garanzia, espressa o implicita, compresa l’idoneità a uno scopo particolare, l’accuratezza, la disponibilità o l’assenza di errori.'] },
      { h: '6. Limitazione di responsabilità', p: ['Nella misura massima consentita dalla legge, Amghar Said non risponde di danni diretti o indiretti, perdita di dati, perdita di reddito, perdita di accesso, blocchi mancati, siti bloccati per errore o altre conseguenze dell’uso o dell’impossibilità di usare Mindveto. Per i piani a pagamento, la responsabilità totale è limitata a quanto hai pagato negli ultimi dodici mesi. Nulla di ciò limita la responsabilità che la legge non permette di limitare, come per dolo o colpa grave, né i diritti inderogabili dei consumatori.'] },
      { h: '7. Proprietà', p: ['Mindveto, il suo codice, le liste di blocco, le icone, i testi e il nome sono © 2026 Amghar Said, tutti i diritti riservati. Puoi usare la versione ufficiale non modificata. Copiarlo, modificarlo, ridistribuirlo o venderlo richiede un permesso scritto.'] },
      { h: '8. Privacy', p: [L('Mindveto non raccoglie dati personali. Vedi l’<a href="/privacy/">informativa sulla privacy</a>.')] },
      { h: '9. Piani a pagamento', p: ['I piani a pagamento, quando ci saranno, sono descritti nella pagina dei prezzi prima dell’acquisto. Gli acquisti tramite Google Play seguono anche i termini di Google Play. I consumatori conservano i loro diritti di legge, compreso il diritto di recesso quando si applica.'] },
      { h: '10. Modifiche e fine', p: ['L’autore può modificare Mindveto, le liste o questi termini, o smettere di offrirlo. La versione attuale di questi termini è sempre su questa pagina.'] },
      { h: '11. Legge applicabile', p: ['Questi termini sono regolati dalla legge belga, fatte salve le norme inderogabili del paese in cui vive il consumatore.'] },
    ],
  },

  legal: {
    title: 'Note legali',
    desc: 'Note legali di Mindveto: chi pubblica il sito e il software, come contattarci, hosting e proprietà intellettuale. Informazioni sull’editore.',
    h1: 'Note legali',
    lead: 'Chi pubblica questo sito e il software Mindveto.',
    blocks: [
      { h: 'Editore', facts: [
        ['Nome', 'Amghar Said'], ['Paese', 'Belgio'], ['E-mail', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Numero d’impresa', COMPANY.kbo || 'Sarà indicato qui prima dell’avvio di qualsiasi piano a pagamento'],
        ...(COMPANY.vat ? [['Partita IVA', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Indirizzo commerciale', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Hosting', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.'] },
      { h: 'Proprietà intellettuale', p: ['© 2026 Amghar Said. Tutti i diritti riservati. I nomi di prodotti come ChatGPT, Gemini, Claude e Copilot appartengono ai rispettivi titolari e sono citati solo per descrivere ciò che Mindveto blocca. Mindveto non è affiliato a loro.', 'Font: Atkinson Hyperlegible Next, SIL Open Font License, servito da questo sito. Date delle vacanze scolastiche: OpenHolidays API (ODbL).'] },
    ],
  },

  guide: {
    title: 'Come bloccare ChatGPT su ogni dispositivo (guida 2026)',
    desc: 'Blocca ChatGPT su Chrome, Windows, Mac, Android, iPhone o su un’intera rete Wi-Fi. Metodi gratuiti passo passo, con i limiti onesti di ciascuno.',
    h1: 'Come bloccare ChatGPT, su ogni dispositivo.',
    lead: 'La risposta breve: blocca l’indirizzo chatgpt.com (e chat.openai.com) nel browser, sul computer, sul telefono o sul router. Questa pagina mostra il modo gratuito per ciascuno, e quale fa al caso tuo.',
    actions: [{ label: 'Scarica Mindveto gratis', to: 'download', solid: true }, { label: 'Quale versione mi serve?', to: 'help' }],
    blocks: [
      { h: 'Scegli il metodo giusto', facts: [
        ['Un browser (Chrome, Edge, Brave, Opera)', L('<a href="/browser-extension/">Estensione per browser</a>: un interruttore, PIN. Circa 1 minuto.')],
        ['Un intero PC Windows, ogni browser e app', L('<a href="/windows/">Download per Windows</a>: aggiunge gli indirizzi di IA al file hosts.')],
        ['Un Mac o un computer Linux', L('<a href="/mac-linux/">Un comando</a> nel Terminale.')],
        ['Un telefono Android, anche nelle app', L('<a href="/android/">App Android</a> con filtro locale e PIN.')],
        ['Un iPhone', L('Un servizio DNS con la nostra <a href="/network/">lista gratuita</a>, o Tempo di utilizzo di Apple per singoli siti.')],
        ['Ogni dispositivo sul Wi-Fi', L('<a href="/network/">Liste di rete</a> per Pi-hole, AdGuard Home o il DNS della scuola o dell’ufficio.')],
      ]},
      { h: 'Bloccare ChatGPT in Chrome o Edge', steps: [
        L('Scarica l’<a href="/browser-extension/">estensione Mindveto</a> ed estraila.'),
        L('Apri <code>chrome://extensions</code> (in Edge: <code>edge://extensions</code>) e attiva la “Modalità sviluppatore”.'),
        'Clicca su “Carica estensione non pacchettizzata” e scegli la cartella estratta.',
        'Apri Mindveto, gira l’interruttore e imposta un PIN. ChatGPT, Gemini, Copilot e oltre 150 strumenti di IA ora mostrano una pagina di blocco.',
        'Nella pagina “Dettagli” dell’estensione, attiva “Consenti in modalità in incognito”, altrimenti le finestre private non vengono bloccate.',
      ]},
      { h: 'Bloccare ChatGPT senza software', p: [
        L('Puoi farlo a mano. Su un computer, aggiungi queste righe al file hosts (servono i diritti di amministratore): <code>0.0.0.0 chatgpt.com</code> e <code>0.0.0.0 chat.openai.com</code>. Su un router con Pi-hole o AdGuard Home, aggiungi gli stessi due nomi alla lista di blocco.'),
        L('Il problema: ChatGPT è solo uno dei tanti. Gemini, Copilot, Claude, Character.AI e gli altri restano aperti, e ogni settimana ne arrivano di nuovi. Per questo Mindveto tiene una <a href="/network/">lista pubblica di oltre 150 servizi di IA</a>, aggiornata ogni giorno. Puoi usare quella lista senza installare nulla di nostro.'),
      ]},
      { h: 'I limiti onesti di ogni metodo', list: [
        'Un blocco funziona solo dove lo installi. Un bambino o un collega può ancora usare un altro telefono o un’altra rete.',
        'Chi è amministratore del dispositivo può rimuovere un blocco. Dai a bambini e personale un account normale (non amministratore).',
        'Le estensioni per browser non coprono altri browser né le app. Per quello, blocca sul computer, sul telefono o sulla rete.',
        'Le liste che bloccano domini interi non possono bloccare una singola pagina. Alcuni blocchi a livello di pagina, come Bing Chat, funzionano solo nell’estensione.',
      ], note: 'Il blocco funziona meglio insieme a una regola chiara: quando l’IA è permessa, e perché ora no. Mindveto non legge nulla e non invia nulla; impedisce solo che si aprano indirizzi di IA.', human: true },
    ],
    faq: [
      { q: 'Come blocco ChatGPT sul telefono di mio figlio?', a: L('Su Android, installa l’<a href="/android/">app Mindveto</a>, attiva “VPN sempre attiva” e imposta un PIN. Su iPhone, usa un servizio DNS con la nostra lista gratuita, o Tempo di utilizzo di Apple per bloccare chatgpt.com. Vedi <a href="/parents/">per i genitori</a>.') },
      { q: 'Come blocco ChatGPT sui computer della scuola?', a: L('Installa l’estensione in modo forzato con i criteri di Chrome o Edge e blocca l’IA sul DNS della scuola con il pacchetto IT. Gli insegnanti possono anche usare il <a href="/exam-button/">pulsante esame</a>. Vedi <a href="/schools/">per le scuole</a>.') },
      { q: 'Come blocco ChatGPT al lavoro ma consento Copilot?', a: L('Nell’estensione, spunta l’IA che il tuo studio approva e lascia bloccato il resto. La <a href="/paste-guard/">guardia incolla</a> avvisa anche prima di incollare dati privati in un sito di IA. Vedi <a href="/offices/">per gli uffici</a>.') },
      { q: 'Bloccare ChatGPT è gratis?', a: 'Sì. Blocco, PIN e orario sono gratis in Mindveto, e le liste di blocco sono di libero utilizzo.' },
      { q: 'Posso bloccare ChatGPT solo durante i compiti o l’orario di lavoro?', a: 'Sì. L’estensione ha un orario, con le vacanze scolastiche di Belgio, Paesi Bassi e Francia incluse.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Modello gratuito di policy IA per piccoli uffici',
    desc: 'Una policy IA di una pagina per commercialisti, avvocati e altri piccoli studi: strumenti approvati, cosa non va mai nell’IA e come verificarlo. Gratis.',
    h1: 'Una policy IA che il tuo team legge in due minuti.',
    lead: 'Un modello di una pagina per commercialisti, avvocati, notai e altri piccoli studi. Copialo, compila le parti tra parentesi e condividilo con il team.',
    actions: [{ label: 'Stampa o salva come PDF', url: '#print', solid: true }, { label: 'Per gli uffici', to: 'offices' }],
    blocks: [
      { h: 'Perché averne una', p: ['Dal 2 febbraio 2025 il Regolamento europeo sull’IA chiede alle organizzazioni che usano strumenti di IA di aiutare il personale a capirli (alfabetizzazione in materia di IA). Una breve policy scritta è un primo passo semplice, e protegge i dati dei tuoi clienti.'] },
      { h: '1. Scopo', p: ['Usiamo l’IA dove ci aiuta a lavorare meglio. I dati dei clienti e le pratiche riservate restano protetti. Questa policy dice quali strumenti usiamo e cosa non ci entra mai.'] },
      { h: '2. Strumenti di IA approvati', list: ['[Strumento, per esempio Microsoft Copilot con il nostro account aziendale]: consentito per [bozze, riassunti dei nostri testi].', 'Tutti gli altri chatbot, motori di ricerca IA e strumenti di scrittura IA non si usano sui dispositivi di lavoro né per il lavoro.'] },
      { h: '3. Mai in uno strumento di IA', list: ['Nomi dei clienti insieme ai loro dati.', 'Numeri di conto e di carta.', 'Codici fiscali, numeri di previdenza o altri identificativi.', 'Contratti, dichiarazioni dei redditi, cartelle mediche o del personale.', 'Password, codici di accesso e chiavi.', 'Tutto ciò che è marcato come riservato.'] },
      { h: '4. Prima di usare un risultato dell’IA', list: ['Verifica tu stesso fatti, cifre e fonti.', 'Una persona approva ogni parere o lettera che va a un cliente.', 'Di’ che l’IA ha aiutato quando un cliente lo chiede, o quando la legge o le regole professionali lo richiedono.'] },
      { h: '5. Come lo rispettiamo', list: ['Sui computer di lavoro, Mindveto blocca gli strumenti di IA che non abbiamo approvato e avvisa prima di incollare dati privati in una chat IA. Il controllo avviene sul computer; nulla viene inviato.', 'Le impostazioni sono bloccate con un PIN custodito da [nome].'] },
      { h: '6. Errori e domande', p: ['Hai incollato qualcosa per errore? Dillo a [nome] lo stesso giorno. Preferiamo saperlo presto che tardi.', 'Responsabile di questa policy: [nome]. Ultima revisione: [data]. Prossima revisione: [data più sei mesi].'], note: 'Questo modello ti aiuta a iniziare; non è una consulenza legale. Verifica le tue regole professionali e informa il personale prima di introdurre nuove regole IT.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },

  family: {"title": "Bloccare siti porno, di scommesse e di incontri", "desc": "Filtro famiglia gratuito: blocca siti porno e 18+, scommesse e incontri, imponi SafeSearch e ferma i trucchi con le VPN. Browser, Android, Windows, Mac.", "h1": "Blocca i siti porno, di scommesse e di incontri.", "lead": "Mindveto ha un filtro famiglia accanto all’interruttore dell’IA. Scegli tu cosa blocca, e un PIN mantiene la tua scelta. È spento finché non lo accendi.", "actions": [{"label": "Scarica gratis", "to": "download", "solid": true}, {"label": "Per i genitori", "to": "parents"}], "blocks": [{"h": "Cosa puoi attivare", "list": ["Siti per adulti: oltre 60.000 siti porno e 18+.", "SafeSearch: Google, Bing, DuckDuckGo e YouTube mostrano solo risultati sicuri, qualunque cosa dicano le impostazioni di ricerca.", "Gioco d’azzardo: 1.600 siti di scommesse, casinò e poker.", "Incontri: 65 app di incontri e siti di videochat casuale.", "Anti-aggiramento: i siti noti di VPN, proxy e Tor, così il filtro non si salta con un clic.", "Ogni parte ha il suo interruttore. Funziona separata dall’interruttore dell’IA."]}, {"h": "Come attivarlo", "steps": ["Browser: installa l’<a href=\"/browser-extension/\">estensione per browser</a>, aprila e spunta ciò che vuoi nel filtro famiglia (“Family filter”).", "Android: installa l’<a href=\"/android/\">app Android</a> e usa gli interruttori del filtro famiglia. Così funziona in ogni app del telefono.", "Windows: avvia il <a href=\"/windows/\">download per Windows</a> e digita 5. Chiede di scommesse e incontri.", "Mac e Linux: usa il <a href=\"/mac-linux/\">download per Mac e Linux</a> e digita <code>sudo sh mindveto.sh family-on gambling dating</code>.", "Nell’estensione e nell’app imposta un PIN: per spegnere il filtro servirà il PIN. Sul computer, dai a tuo figlio un account normale (non amministratore)."]}, {"h": "Limiti onesti", "list": ["Nessun filtro prende tutto. Ogni giorno nascono siti nuovi, e le immagini possono ancora comparire in chat, app e social.", "Le liste fermano i siti conosciuti. Un bambino con il telefono di un amico o un account amministratore può aggirarle.", "Su Android il filtro funziona finché Mindveto è acceso. Attiva “VPN sempre attiva” perché resti acceso."], "note": "Mindveto non registra quali siti vengono visitati e non ci invia nulla. Un filtro aiuta; parlare con tuo figlio aiuta di più.", "human": true}, {"h": "In breve", "facts": [["Prezzo", "Gratis"], ["Siti per adulti", "60.000+"], ["Siti di gioco d’azzardo", "1.600"], ["Incontri e videochat", "65"], ["Liste", "Liste aperte (licenza MIT) e le nostre liste"], ["Dati inviati", "Nessuno"]]}], "faq": [{"q": "Il filtro famiglia è gratis?", "a": "Sì. Oggi fa parte dei download gratuiti di Mindveto."}, {"q": "Blocca anche l’IA?", "a": "Solo se lo vuoi. L’interruttore dell’IA e il filtro famiglia funzionano separati: puoi usare l’uno senza l’altro."}, {"q": "Funziona su iPhone o su tutto il Wi-Fi?", "a": "Non c’è ancora un’app per iPhone. Puoi usare le stesse liste gratuite in un filtro DNS come AdGuard Home o Pi-hole: vedi <a href=\"/network/\">intera rete</a>."}, {"q": "Può bloccare per errore un sito normale?", "a": "Può succedere con qualsiasi lista. Nell’estensione puoi consentire un sito di cui ti fidi; la tua scelta vince sul filtro."}], "related": ["parents", "browser", "android"]},
};

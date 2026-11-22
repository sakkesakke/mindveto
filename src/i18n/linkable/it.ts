import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

// Links use the English page paths; the page template rewrites them to the Italian pages.
export const LK: Linkable = {
  ui: {
    checked: 'Ultima verifica', cite: 'Come citare questa pagina', src: 'Fonte',
    statsT: 'Bambini, scuole e IA: i numeri', statsD: '24 dati verificati con la fonte, liberi da citare.',
    gdprT: 'ChatGPT e dati dei clienti', gdprD: 'Cosa significa il GDPR per il tuo ufficio, e un piano in 5 passi.',
  },
  pages: {
    stats: {
      title: 'Bambini, scuole e IA: i numeri (2026)',
      desc: '24 statistiche verificate su bambini, adolescenti, scuole e IA: chatbot, compagni IA, copiature, deepfake e fughe di dati. Ognuna con fonte, anno e link.',
      h1: 'Bambini, scuole e IA: i numeri (2026).',
      lead: '24 dati su come bambini, studenti e dipendenti usano l’IA, e su cosa va storto. Ogni numero rimanda alla fonte originale ed è stato verificato il giorno stesso. Liberi da citare.',
      blocks: [
        { h: 'Bambini e adolescenti: chatbot e compagni IA', stats: [
          st('64%', 'degli adolescenti statunitensi tra 13 e 17 anni dice di usare chatbot IA.', 'pew1'),
          st('Circa 3 su 10', 'adolescenti statunitensi usano chatbot IA ogni giorno, compreso un 16% che lo fa più volte al giorno o quasi di continuo.', 'pew1'),
          st('59%', 'degli adolescenti statunitensi usa ChatGPT, di gran lunga il chatbot più usato tra loro.', 'pew1'),
          st('72%', 'degli adolescenti statunitensi tra 13 e 17 anni ha usato almeno una volta un compagno IA (AI companion). Più della metà li usa almeno qualche volta al mese.', 'csm'),
          st('Circa 1 su 3', 'adolescenti statunitensi trova le conversazioni con un compagno IA soddisfacenti quanto, o più di, quelle con amici veri.', 'csm'),
          st('Circa 1 su 3', 'adolescenti statunitensi che usano compagni IA ha preferito parlare di qualcosa di importante o serio con un compagno IA invece che con una persona reale.', 'csm'),
          st('12%', 'degli adolescenti statunitensi ha usato chatbot per avere sostegno emotivo o consigli.', 'pew2'),
          st('63,8%', 'delle persone tra 16 e 24 anni nell’UE ha usato strumenti di IA generativa nel 2025, quasi il doppio di tutti gli adulti tra 16 e 74 anni (32,7%).', 'eu1'),
        ] },
        { h: 'Scuola: compiti, studio e copiature', stats: [
          st('54%', 'degli adolescenti statunitensi ha usato chatbot per farsi aiutare nei compiti.', 'pew2'),
          st('59%', 'degli adolescenti statunitensi pensa che nella propria scuola si copi con l’IA almeno abbastanza spesso.', 'pew2'),
          st('26%', 'degli adolescenti statunitensi ha usato ChatGPT per i compiti nel 2024, il doppio del 13% del 2023.', 'pew3'),
          st('39,3%', 'delle persone tra 16 e 24 anni nell’UE ha usato l’IA generativa per l’istruzione formale nel 2025, contro il 9,4% di tutti gli adulti.', 'eu1'),
          st('94%', 'degli studenti universitari a tempo pieno nel Regno Unito usa l’IA generativa nei lavori valutati.', 'hepi'),
        ] },
        { h: 'Deepfake, falsi nudi e voci false', stats: [
          st('1 su 8', 'giovani tra 13 e 20 anni conosce di persona qualcuno preso di mira con falsi nudi (deepfake nudes).', 'thorn'),
          st('1 su 5', 'adolescenti credeva che fosse legale creare falsi nudi di un’altra persona, anche di un altro minore.', 'thorn'),
          st('34%', 'delle giovani vittime di falsi nudi lo ha detto a un genitore, mentre il 62% di chi non era vittima diceva che lo avrebbe fatto.', 'thorn'),
          st('73%', 'è la quota di voci false create con l’IA riconosciute correttamente dagli ascoltatori, in un test con 529 persone in inglese e mandarino.', 'plos'),
          st('3.440', 'video di abusi sessuali su minori creati con l’IA sono stati trovati dalla Internet Watch Foundation nel 2025, contro 13 nel 2024.', 'iwf'),
        ] },
        { h: 'Lavoro: uso dell’IA e fughe di dati', stats: [
          st('58%', 'dei dipendenti usa l’IA al lavoro in modo intenzionale e regolare (sondaggio su 48.340 persone in 47 Paesi).', 'kpmg'),
          st('48%', 'dei dipendenti dice di aver caricato informazioni aziendali, come dati finanziari, di vendita o dei clienti, in strumenti di IA pubblici.', 'kpmg'),
          st('20,0%', 'delle imprese dell’UE con 10 o più dipendenti ha usato l’IA nel 2025, contro il 13,5% nel 2024.', 'eu2'),
          st('13%', 'delle organizzazioni ha segnalato una violazione di modelli o applicazioni di IA. Di queste, il 97% non aveva controlli di accesso per l’IA.', 'ibm'),
          st('1 su 5', 'organizzazioni ha segnalato una violazione dovuta alla shadow AI: strumenti di IA usati dal personale senza autorizzazione. Chi ne aveva molta ha pagato in media 670.000 dollari in più per violazione.', 'ibm'),
          st('15 milioni di €', 'di sanzione a OpenAI dal Garante per la protezione dei dati personali per ChatGPT, tra l’altro per aver addestrato i modelli con dati personali senza un’adeguata base giuridica.', 'gar'),
        ] },
        { h: 'Su questi numeri', p: [
          'Abbiamo aperto ogni fonte e verificato ogni dato il 22 novembre 2026. I dati che quel giorno non abbiamo potuto verificare non sono qui.',
          'Gli studi differiscono per Paese, fascia d’età e metodo. Non sommarli e non confrontarli come se fossero un unico sondaggio. La maggior parte delle indagini sui minori qui viene da Stati Uniti, Regno Unito e UE.',
        ] },
        { h: 'Cosa puoi fare', list: [
          'Genitori: <a href="/parents/">Mindveto per i genitori</a> e <a href="/blog/is-character-ai-safe-for-kids/">Character.AI è sicuro per i bambini?</a>',
          'Scuole: <a href="/schools/">Mindveto per le scuole</a>, il <a href="/exam-button/">pulsante esame</a> e <a href="/blog/ai-act-article-4-schools/">l’articolo 4 dell’AI Act per le scuole</a>.',
          'Deepfake e truffe: il <a href="/ai-phishing-quiz/">quiz sul phishing con IA</a>, <a href="/link-check/">Questo link è sicuro?</a> e il <a href="/block-porn/">filtro famiglia gratuito</a>.',
          'Uffici: la <a href="/paste-guard/">guardia incolla</a> e <a href="/blog/chatgpt-customer-data-gdpr/">ChatGPT e i dati dei clienti secondo il GDPR</a>.',
        ] },
      ],
      faq: [
        { q: 'Quanti adolescenti usano chatbot IA?', a: 'Negli Stati Uniti il 64% degli adolescenti tra 13 e 17 anni dice di usare chatbot IA, e circa tre su dieci li usano ogni giorno (Pew Research Center, dicembre 2025).' },
        { q: 'Gli studenti copiano con l’IA?', a: 'Il 59% degli adolescenti statunitensi pensa che nella propria scuola si copi con l’IA almeno abbastanza spesso (Pew Research Center, 2026). Nel Regno Unito il 94% degli studenti universitari usa l’IA generativa nei lavori valutati, e non sempre si tratta di copiare (HEPI, 2026).' },
        { q: 'Posso usare questi numeri?', a: 'Sì. Citali con un link a questa pagina e indica la fonte originale. Ogni dato ha un proprio link: aggiungi da #s1 a #s24 all’indirizzo della pagina.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, «Bambini, scuole e IA: i numeri (2026)», https://mindveto.app/it/statistiche-ia/, ultima verifica il 22 novembre 2026. Se citi un solo dato, indica anche la sua fonte originale, riportata sotto il numero.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT e dati dei clienti: cosa dice il GDPR (2026)',
      desc: 'Il tuo ufficio può incollare dati dei clienti in ChatGPT? Cosa ne fa OpenAI, cosa si aspettano il GDPR e le autorità, e un piano in 5 passi per piccoli uffici.',
      h1: 'ChatGPT e dati dei clienti: cosa significa il GDPR per il tuo ufficio.',
      lead: 'Risposta breve: non incollare dati dei clienti in un account ChatGPT personale. Secondo il GDPR il tuo ufficio resta responsabile di quei dati, e con Free, Plus e Pro le chat possono essere usate per addestrare i modelli di OpenAI, a meno che l’opzione non sia disattivata. Se il team ha bisogno dell’IA, usa un piano aziendale con un accordo sul trattamento dei dati, fissa regole chiare e aggiungi un controllo prima di incollare.',
      blocks: [
        { h: 'Cosa succede a ciò che incolli', list: [
          'ChatGPT Free, Plus e Pro: l’impostazione «Improve the model for everyone» è attiva per impostazione predefinita, quindi le chat possono servire ad addestrare i modelli di OpenAI. Ogni utente può disattivarla in Settings, Data controls.',
          'Disattivare l’addestramento non cancella le chat salvate. Restano sui server di OpenAI.',
          'Le chat temporanee non sono usate per l’addestramento, ma possono essere conservate fino a 30 giorni per motivi di sicurezza.',
          'ChatGPT Business, Enterprise, Edu e l’API: OpenAI dice di non addestrare i modelli su questi dati aziendali per impostazione predefinita, e offre un accordo sul trattamento dei dati (Data Processing Addendum) per Business, Enterprise e l’API.',
        ] },
        { h: 'Cosa si aspetta il GDPR dal tuo ufficio', list: [
          'Il tuo ufficio decide perché e come si usano i dati dei clienti, quindi ne è responsabile.',
          'Un servizio che tratta dati personali per tuo conto ha bisogno di un accordo scritto con te. Secondo l’accordo di OpenAI, OpenAI agisce allora come responsabile del trattamento; per i clienti nel SEE il contratto è con OpenAI Ireland.',
          'Condividi il meno possibile. La maggior parte dei compiti, come una bozza, un riassunto o una traduzione, riesce altrettanto bene senza nomi, numeri di conto o numeri di identità.',
          'Se dati personali finiscono dove non dovrebbero, può trattarsi di una violazione dei dati. L’autorità olandese ricorda che una violazione va notificata entro 72 ore da quando se ne viene a conoscenza, e che una fuga tramite chatbot va notificata in molti casi.',
        ] },
        { h: 'Succede già', list: [
          'Nell’agosto 2024 l’autorità olandese per la protezione dei dati ha riferito di diverse notifiche di violazioni causate da chatbot IA. In un caso, una persona che lavorava in uno studio di medicina generale aveva inserito dati medici di pazienti in un chatbot. In un altro, una persona di una società di telecomunicazioni vi aveva inserito un file con indirizzi di clienti.',
          'Nel mondo il 48% dei dipendenti dice di aver caricato informazioni aziendali, come dati finanziari, di vendita o dei clienti, in strumenti di IA pubblici (University of Melbourne e KPMG, 2025).',
          'Un’organizzazione su cinque ha segnalato una violazione dovuta alla shadow AI, cioè strumenti di IA usati dal personale senza autorizzazione (IBM, 2025).',
          'Nel dicembre 2024 il Garante per la protezione dei dati personali ha sanzionato OpenAI con 15 milioni di euro per ChatGPT, tra l’altro per aver addestrato i modelli con dati personali senza un’adeguata base giuridica.',
        ], note: 'Altri numeri con le fonti: <a href="/ai-statistics/">Bambini, scuole e IA: i numeri (2026)</a>.' },
        { h: 'Un piano in 5 passi per un piccolo ufficio', steps: [
          'Decidi quale strumento di IA è consentito, meglio un piano aziendale con accordo sul trattamento dei dati, e smetti di usare account personali per il lavoro con i clienti. Mettilo per iscritto con il nostro <a href="/ai-policy-template/">modello di policy IA</a> gratuito.',
          'Elenca cosa non entra mai in uno strumento di IA: nomi dei clienti con i loro dati, numeri di conto e di identità, cartelle sanitarie e del personale, contratti, password.',
          'Mostra al team come togliere prima nomi e numeri. La risposta di solito è altrettanto utile.',
          'Aggiungi un controllo al momento di incollare. La <a href="/paste-guard/">guardia incolla</a> di Mindveto avvisa prima che IBAN, numeri di identità, elenchi di e-mail o testi segnati come riservati entrino in una chat IA, e può bloccare gli strumenti di IA che il tuo ufficio non ha approvato.',
          'Stabilite cosa succede dopo un errore: avvisare lo stesso giorno una persona designata, annotare cosa è stato incollato e dove, cancellare la chat e verificare se va notificato all’autorità per la protezione dei dati.',
        ] },
        { h: 'Dove Mindveto aiuta, e dove no', list: [
          'La guardia incolla controlla sul computer stesso. Il testo incollato non viene mai salvato né inviato, nemmeno a noi.',
          'Funziona nel browser in cui è installata l’estensione. Non controlla e-mail, documenti o app desktop.',
          'Mindveto da solo non rende il tuo ufficio conforme al GDPR. Le regole, l’accordo con il fornitore di IA e la formazione del team sono la tua parte.',
        ], note: 'Questo articolo è un’informazione generale, non una consulenza legale. Consulta anche le indicazioni della tua autorità nazionale per la protezione dei dati.' },
      ],
      faq: [
        { q: 'Possiamo usare ChatGPT al lavoro secondo il GDPR?', a: 'Non è vietato in sé. Conta quali dati entrano e a quali condizioni. Tieni i dati personali fuori dagli account personali e, per il lavoro con i clienti, usa un piano aziendale con accordo sul trattamento dei dati e regole chiare.' },
        { q: 'ChatGPT impara da ciò che incolliamo?', a: 'Con Free, Plus e Pro le chat possono essere usate per l’addestramento, a meno che «Improve the model for everyone» non sia disattivato. Con Business, Enterprise, Edu e l’API, OpenAI dice di non addestrare i modelli sui tuoi dati per impostazione predefinita.' },
        { q: 'Qualcuno del team ha incollato dati dei clienti. E adesso?', a: 'Annota cosa è stato incollato, quando e dove, e cancella la chat. Poi verifica se è una violazione dei dati da notificare. Nei Paesi Bassi il termine è di 72 ore da quando se ne viene a conoscenza.' },
        { q: 'Mindveto vede ciò che incolliamo?', a: 'No. La guardia incolla controlla sul computer stesso. Il testo incollato non viene mai salvato né inviato.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};

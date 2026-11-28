import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Traccia di scrittura: come è nato un testo',
      desc: 'Gli studenti scrivono nel browser e consegnano una traccia di come è cresciuto il testo: digitato, incollato, tempo. Il docente vede fatti, non un’ipotesi IA.',
      h1: 'Traccia di scrittura: come è nato questo testo?',
      lead: 'I rilevatori di IA tirano a indovinare e spesso sbagliano. Una traccia di scrittura mostra fatti: quanto ha lavorato lo studente, cosa è stato digitato e cosa è stato incollato. Lo studente scrive su questa pagina, scarica la traccia e la consegna. Tutto resta sul dispositivo.',
      blocks: [
        { h: 'Come funziona', steps: [
          'Lo studente apre questa pagina e sceglie «Sono uno studente».',
          'Scrive il compito nel riquadro. La pagina annota, sul suo dispositivo, quando il testo viene digitato, incollato o cancellato.',
          'Alla fine clicca su «Fine: scarica la traccia» e consegna il file insieme al testo.',
          'Il docente apre questa pagina, sceglie «Sono un docente» e apre il file.',
        ]},
        { h: 'Cosa vede il docente', list: [
          'Il tempo totale e il tempo reale di scrittura.',
          'Quanto è stato digitato e quanto incollato, con ogni incollaggio elencato.',
          'Quante volte lo studente ha lasciato la pagina, e per quanto tempo.',
          'Un grafico del testo che cresce e una riproduzione della scrittura.',
        ]},
        { h: 'Limiti onesti', list: [
          'Una traccia non prova l’uso dell’IA, e questa pagina non dice mai «IA». Mostra come è nato un testo. Decide il colloquio con lo studente.',
          'Uno studente può ricopiare a mano un testo di IA o modificare il file. Una traccia rende il copiare più faticoso, non impossibile.',
          'Incollare spesso va bene: una citazione, i propri appunti, una frase da una bozza.',
          'Annota solo ciò che si scrive su questa pagina, non il lavoro fatto altrove.',
        ], note: 'Usala insieme a un breve colloquio: chiedi allo studente di spiegare una scelta nel testo.', human: true },
        { h: 'Privacy', p: [
          'Nessun account, nessun cookie, nessun tracker. La pagina non può inviare nulla: il testo e la traccia restano sul dispositivo. La bozza resta salvata in questo browser, così ricaricare non fa perdere lavoro. Il file viene condiviso solo quando lo studente lo consegna.',
        ]},
      ],
      faq: [
        { q: 'Rileva ChatGPT?', a: 'No. Nessuno strumento distingue in modo affidabile un testo di IA da uno umano, e i rilevatori segnalano spesso studenti che scrivono in una seconda lingua. Una traccia mostra come è nato il testo, per parlare di fatti.' },
        { q: 'È gratuito?', a: 'Sì. Funziona nel browser e non serve un account.' },
        { q: 'Gli studenti vedono cosa viene annotato?', a: 'Sì. Prima di consegnare possono aprire il proprio file nella vista docente e vedere esattamente lo stesso.' },
      ],
      related: ['exam', 'schools', 'paste'],
    },
  },
  ui: {
    nav: 'Traccia di scrittura',
    group: 'Chi sei?', modeS: 'Sono uno studente: scrivere', modeT: 'Sono un docente: aprire una traccia',
    pv: 'La tua scrittura viene annotata solo su questo dispositivo: quando digiti, incolli o cancelli. Non viene inviato nulla.',
    nameL: 'Il tuo nome', taskL: 'Compito', textL: 'Il tuo testo',
    info: '{n} caratteri · {m} min · salvato su questo dispositivo',
    done: 'Fine: scarica la traccia', newB: 'Inizia un nuovo testo', confirmNew: 'Cancellare questo testo e la sua traccia da questo dispositivo e ricominciare?',
    hand: 'Consegna il file scaricato insieme al tuo testo, come chiede il docente.',
    empty: 'Scrivi prima qualcosa.',
    fileL: 'Apri un file di traccia (.json)', pvT: 'Il file viene aperto su questo dispositivo. Non viene inviato nulla.',
    bad: 'Questo file non è una traccia di scrittura Mindveto.',
    who: '{name} · {task}', started: 'Iniziato il {d}',
    sumH: 'Fatti', kTime: 'Tempo totale', kActive: 'Tempo reale di scrittura', kChars: 'Caratteri nel testo finale',
    kTyped: 'Digitato', kPasted: 'Incollato', kPastes: 'Volte incollato', kAway: 'Pagina lasciata', kDel: 'Cancellato', kSpeed: 'Ritmo di scrittura',
    min: '{n} min', chars: '{n} caratteri', pace: '{n} caratteri per minuto di scrittura', away: '{n} volte, {m} min in totale',
    sigH: 'Da discutere', sigNone: 'Niente di insolito in questa traccia.',
    sBig: 'È stato incollato un pezzo grande: {n} caratteri a {t}.', sShare: 'Il {p}% di tutti i caratteri aggiunti è stato incollato.',
    sPace: 'Molto testo per il tempo: {n} caratteri per minuto di scrittura.', sAway: 'La pagina è stata lasciata {n} volte ({m} min in totale).',
    sWipe: 'Subito prima di un grande incollaggio sono stati cancellati {n} caratteri del testo.', sAwayP: 'Lo studente è tornato sulla pagina {s} secondi prima di un grande incollaggio.',
    sNoDel: 'Quasi nessuna correzione: {n} caratteri cancellati.',
    sigNote: 'Sono fatti su come è nato il testo, non una prova di uso dell’IA. Chiedi allo studente di spiegare il testo.',
    pasteH: 'Incollaggi', pasteRow: '{t} · {n} caratteri',
    chartH: 'Lunghezza del testo nel tempo', chartAlt: 'Grafico della lunghezza del testo in {m} minuti. Gli incollaggi sono segnati con un punto.',
    replayH: 'Riproduzione', replayL: 'Momento della scrittura', textH: 'Testo finale', file: 'traccia-scrittura',
  },
};

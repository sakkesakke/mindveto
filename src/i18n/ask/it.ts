import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Chiedi allo studente: domande sul suo testo',
      desc: 'Incolla il testo di uno studente e ricevi cinque domande a cui solo il vero autore risponde facilmente. Nessun verdetto IA: decide un colloquio. 5 testi gratis.',
      h1: 'Chiedi allo studente del suo testo.',
      lead: 'Hai dubbi che uno studente abbia scritto il testo da solo? Non tirare a indovinare. Incolla qui il testo e ricevi cinque domande su scelte concrete del testo. Chi l’ha scritto risponde facilmente. Chi non l’ha scritto fa fatica. Decidi tu dopo un breve colloquio.',
      blocks: [
        { h: 'Come funziona', steps: [
          'Chiedi un codice gratuito via e-mail a hello@mindveto.app. Vale per 5 testi al mese.',
          'Incolla il testo dello studente (da 300 a 6.000 caratteri) e scegli la lingua delle domande.',
          'Aspetta 1 o 2 minuti. Un modello di IA aperto sul server di Mindveto scrive cinque domande.',
          'Fai le domande in un breve colloquio e ascolta come lo studente spiega le sue scelte.',
        ]},
        { h: 'Come sono le domande', list: [
          'Su un esempio, una parola o una fonte concreti del testo, con una breve citazione.',
          'Cosa significa una frase, con le parole dello studente.',
          'Cosa cambierebbe lo studente, e perché.',
        ]},
        { h: 'Limiti onesti', list: [
          'Le domande non sono un test né un verdetto. Niente su questa pagina dice se è stata usata l’IA.',
          'Un modello aperto a volte fa una domanda debole o strana. Saltala.',
          'Uno studente che ha studiato bene un testo può rispondere senza averlo scritto. Usa le domande insieme alla traccia di scrittura e a ciò che sai dello studente.',
          'Togli nomi e altri dati personali dal testo prima di incollarlo.',
        ], note: 'Decide il colloquio, non questa pagina.', human: true },
        { h: 'Privacy', p: [
          'Il testo va solo al server di Mindveto ({region}) per creare le domande, e viene cancellato subito dopo. Non viene conservato, né registrato, né usato per addestrare un modello. Nessun’altra azienda lo vede. Conserviamo solo il tuo codice, reso illeggibile, e quanti testi hai usato questo mese.',
        ]},
      ],
      faq: [
        { q: 'È un rilevatore di IA?', a: 'No. Non giudica il testo. Ti dà domande per parlare di fatti con lo studente.' },
        { q: 'Perché ci vogliono uno o due minuti?', a: 'Il modello gira sul nostro server senza hardware costoso, così il tuo testo non va mai a un’altra azienda. Per questo è più lento.' },
        { q: 'E se mi servono più di 5 testi al mese?', a: 'Scrivi a hello@mindveto.app. Le scuole possono avere un piano più grande.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'Il tuo codice', codeHelp: 'Non hai ancora un codice? Chiedi un codice gratuito (5 testi al mese):', mailSub: 'Codice gratuito per Chiedi allo studente',
    textL: 'Testo dello studente', langL: 'Lingua delle domande', count: '{n} / {max} caratteri',
    pv: 'Il testo viene inviato solo al server di Mindveto per creare le domande, e cancellato subito dopo.',
    btn: 'Crea domande', wait: 'Creazione delle domande… ci vogliono 1 o 2 minuti. Tieni aperta questa pagina.',
    resH: 'Domande per il colloquio', about: 'Su:', used: '{used} di {limit} testi usati questo mese.',
    copy: 'Copia le domande', copied: 'Copiato.', note: 'Salta una domanda che non va bene. Decide il colloquio, non questa pagina.',
    eCode: 'Questo codice non è valido. Controllalo o scrivi a hello@mindveto.app.', eShort: 'Il testo è troppo corto: almeno {min} caratteri.',
    eLong: 'Il testo è troppo lungo: al massimo {max} caratteri.', eLimit: 'Hai usato tutti i {limit} testi di questo mese. Scrivi a hello@mindveto.app per averne di più.',
    eBusy: 'Il server è occupato. Riprova tra qualche minuto.', eTime: 'Ci è voluto troppo tempo. Riprova, o con un testo più corto.',
    eNet: 'Il server ora non è raggiungibile. Riprova più tardi.', eModel: 'Qualcosa è andato storto nel creare le domande. Riprova.',
  },
};

import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Vraag het de leerling: vragen over de eigen tekst',
      desc: 'Plak een leerlingtekst en krijg vijf vragen die alleen de echte schrijver vlot beantwoordt. Geen AI-oordeel: een gesprek beslist. 5 teksten per maand gratis.',
      h1: 'Vraag het de leerling: vragen over de tekst.',
      lead: 'Twijfel je of een leerling een tekst zelf schreef? Gok niet. Plak de tekst hier en krijg vijf vragen over concrete keuzes erin. Wie de tekst schreef, antwoordt makkelijk. Wie dat niet deed, heeft het moeilijk. Jij beslist na een kort gesprek.',
      blocks: [
        { h: 'Zo werkt het', steps: [
          'Vraag een gratis code aan via hello@mindveto.app. Daarmee maak je 5 teksten per maand.',
          'Plak de tekst van de leerling (300 tot 6.000 tekens) en kies de taal van de vragen.',
          'Wacht 1 tot 2 minuten. Een open AI-model op de eigen server van Mindveto schrijft vijf vragen.',
          'Stel de vragen in een kort gesprek, en luister hoe de leerling de keuzes uitlegt.',
        ]},
        { h: 'Hoe de vragen eruitzien', list: [
          'Over een concreet voorbeeld, woord of bron in de tekst, met een kort citaat.',
          'Wat een zin betekent, in de eigen woorden van de leerling.',
          'Wat de leerling zou veranderen, en waarom.',
        ]},
        { h: 'Eerlijke grenzen', list: [
          'De vragen zijn geen toets en geen oordeel. Nergens op deze pagina staat of er AI gebruikt werd.',
          'Een open model maakt soms een zwakke of vreemde vraag. Sla die gewoon over.',
          'Een leerling die een tekst goed bestudeerde, kan antwoorden zonder hem te schrijven. Gebruik de vragen samen met het schrijfspoor en wat je van de leerling weet.',
          'Haal namen en andere persoonsgegevens uit de tekst voor je hem plakt.',
        ], note: 'Het gesprek beslist, niet deze pagina.', human: true },
        { h: 'Privacy', p: [
          'De tekst gaat alleen naar de eigen server van Mindveto ({region}) om de vragen te maken, en wordt meteen daarna gewist. Hij wordt niet bewaard, niet gelogd en niet gebruikt om een model te trainen. Geen externe AI-dienst ziet hem. We houden alleen je code bij, onleesbaar gemaakt, en hoeveel teksten je deze maand gebruikte.',
        ]},
      ],
      faq: [
        { q: 'Is dit een AI-detector?', a: 'Nee. Het oordeelt niet over de tekst. Het geeft je vragen, zodat je met de leerling over feiten praat.' },
        { q: 'Waarom duurt het een à twee minuten?', a: 'Het model draait op onze eigen server zonder dure hardware, zodat je tekst nooit naar een externe AI-dienst gaat. Daardoor is het trager.' },
        { q: 'En als ik meer dan 5 teksten per maand nodig heb?', a: 'Mail naar hello@mindveto.app. Scholen kunnen een groter pakket krijgen.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'Je code', codeHelp: 'Nog geen code? Vraag een gratis code aan (5 teksten per maand):', mailSub: 'Gratis code voor Vraag het de leerling',
    textL: 'Tekst van de leerling', langL: 'Taal van de vragen', count: '{n} / {max} tekens',
    pv: 'De tekst gaat alleen naar de eigen server van Mindveto om de vragen te maken, en wordt meteen daarna gewist.',
    btn: 'Maak vragen', wait: 'Vragen maken… dit duurt 1 tot 2 minuten. Laat deze pagina open.',
    resH: 'Vragen voor het gesprek', about: 'Over:', used: '{used} van {limit} teksten gebruikt deze maand.',
    copy: 'Vragen kopiëren', copied: 'Gekopieerd.', note: 'Sla een vraag over die niet past. Het gesprek beslist, niet deze pagina.',
    eCode: 'Deze code klopt niet. Controleer hem, of mail naar hello@mindveto.app.', eShort: 'De tekst is te kort: minstens {min} tekens.',
    eLong: 'De tekst is te lang: hoogstens {max} tekens.', eLimit: 'Je gebruikte alle {limit} teksten van deze maand. Mail naar hello@mindveto.app voor meer.',
    eBusy: 'De server is druk bezig. Probeer het over een paar minuten opnieuw.', eTime: 'Dit duurde te lang. Probeer opnieuw, of met een kortere tekst.',
    eNet: 'De server is nu niet bereikbaar. Probeer het later opnieuw.', eModel: 'Er ging iets mis bij het maken van de vragen. Probeer opnieuw.',
  },
};

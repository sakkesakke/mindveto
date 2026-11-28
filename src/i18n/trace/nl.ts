import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Schrijfspoor: zie hoe een leerlingtekst ontstond',
      desc: 'Leerlingen schrijven in de browser en leveren een spoor in van hoe de tekst groeide: getypt, geplakt, tijd. Leerkrachten zien feiten, geen AI-gok. Gratis.',
      h1: 'Schrijfspoor: hoe is deze tekst ontstaan?',
      lead: 'AI-detectors gokken, en ze zitten vaak fout. Een schrijfspoor toont feiten: hoelang een leerling werkte, wat getypt werd en wat geplakt werd. De leerling schrijft op deze pagina, downloadt het spoor en levert het in. Alles blijft op het toestel.',
      blocks: [
        { h: 'Zo werkt het', steps: [
          'De leerling opent deze pagina en kiest “Ik ben leerling”.',
          'De leerling schrijft de opdracht in het vak. De pagina noteert op het eigen toestel wanneer tekst getypt, geplakt of gewist wordt.',
          'Klaar? Dan klikt de leerling op “Klaar: download spoor” en levert het bestand in samen met de tekst.',
          'De leerkracht opent deze pagina, kiest “Ik ben leerkracht” en opent het bestand.',
        ]},
        { h: 'Wat de leerkracht ziet', list: [
          'De totale tijd en de tijd dat er echt geschreven werd.',
          'Hoeveel er getypt en hoeveel er geplakt werd, met elke keer plakken apart.',
          'Hoe vaak de leerling de pagina verliet, en hoelang.',
          'Een grafiek van de groeiende tekst, en een herhaling van het schrijven.',
        ]},
        { h: 'Eerlijke grenzen', list: [
          'Een spoor is geen bewijs van AI-gebruik, en deze pagina zegt nooit “AI”. Ze toont hoe een tekst ontstond. Het gesprek met de leerling beslist.',
          'Een leerling kan een AI-tekst met de hand overtypen, of het bestand aanpassen. Een spoor maakt spieken meer werk, niet onmogelijk.',
          'Plakken is vaak in orde: een citaat, eigen notities, een zin uit een vorige versie.',
          'Het noteert alleen wat op deze pagina geschreven wordt, niet wat ergens anders gebeurde.',
        ], note: 'Gebruik het samen met een kort gesprek: vraag de leerling één keuze in de tekst uit te leggen.', human: true },
        { h: 'Privacy', p: [
          'Geen account, geen cookies, geen trackers. De pagina kan niets versturen: de tekst en het spoor blijven op het toestel. Het concept blijft in deze browser bewaard, zodat vernieuwen geen werk kost. Het bestand wordt pas gedeeld als de leerling het inlevert.',
        ]},
      ],
      faq: [
        { q: 'Herkent dit ChatGPT?', a: 'Nee. Geen enkele tool kan betrouwbaar AI-tekst van mensentekst onderscheiden, en detectors wijzen vaak leerlingen aan die in een tweede taal schrijven. Een schrijfspoor toont hoe de tekst ontstond, zodat je over feiten praat.' },
        { q: 'Is het gratis?', a: 'Ja. Het werkt in de browser en vraagt geen account.' },
        { q: 'Kunnen leerlingen zien wat er genoteerd wordt?', a: 'Ja. Voor ze inleveren, kunnen ze hun eigen bestand openen bij “Ik ben leerkracht” en precies hetzelfde zien.' },
      ],
      related: ['exam', 'schools', 'paste'],
    },
  },
  ui: {
    nav: 'Schrijfspoor',
    group: 'Wie ben je?', modeS: 'Ik ben leerling: schrijven', modeT: 'Ik ben leerkracht: spoor openen',
    pv: 'Je schrijven wordt alleen op dit toestel genoteerd: wanneer je typt, plakt of wist. Er wordt niets verstuurd.',
    nameL: 'Je naam', taskL: 'Opdracht', textL: 'Je tekst',
    info: '{n} tekens · {m} min · bewaard op dit toestel',
    done: 'Klaar: download spoor', newB: 'Nieuwe tekst beginnen', confirmNew: 'Deze tekst en het spoor van dit toestel wissen en opnieuw beginnen?',
    hand: 'Lever het gedownloade bestand in samen met je tekst, zoals je leerkracht vraagt.',
    empty: 'Schrijf eerst iets.',
    fileL: 'Open een spoorbestand (.json)', pvT: 'Het bestand wordt op dit toestel geopend. Er wordt niets verstuurd.',
    bad: 'Dit bestand is geen schrijfspoor van Mindveto.',
    who: '{name} · {task}', started: 'Begonnen op {d}',
    sumH: 'Feiten', kTime: 'Totale tijd', kActive: 'Echt geschreven', kChars: 'Tekens in de eindtekst',
    kTyped: 'Getypt', kPasted: 'Geplakt', kPastes: 'Aantal keer geplakt', kAway: 'Pagina verlaten', kDel: 'Gewist', kSpeed: 'Schrijftempo',
    min: '{n} min', chars: '{n} tekens', pace: '{n} tekens per minuut schrijven', away: '{n} keer, samen {m} min',
    sigH: 'Goed om over te praten', sigNone: 'Niets opvallends in dit spoor.',
    sBig: 'Er werd een groot stuk geplakt: {n} tekens na {t}.', sShare: '{p}% van alle toegevoegde tekens werd geplakt.',
    sPace: 'Veel tekst voor de tijd: {n} tekens per minuut schrijven.', sAway: 'De pagina werd {n} keer verlaten (samen {m} min).',
    sWipe: 'Vlak voor een groot stuk plakken werden {n} tekens van de tekst gewist.', sAwayP: 'De leerling kwam {s} seconden voor een groot stuk plakken terug naar de pagina.',
    sNoDel: 'Bijna niets verbeterd: {n} tekens gewist.',
    sigNote: 'Dit zijn feiten over hoe de tekst ontstond, geen bewijs van AI-gebruik. Vraag de leerling de tekst uit te leggen.',
    pasteH: 'Geplakt', pasteRow: '{t} · {n} tekens',
    chartH: 'Lengte van de tekst in de tijd', chartAlt: 'Grafiek van de lengte van de tekst over {m} minuten. Plakken is aangeduid met een stip.',
    replayH: 'Herhaling', replayL: 'Moment in het schrijven', textH: 'Eindtekst', file: 'schrijfspoor',
  },
};

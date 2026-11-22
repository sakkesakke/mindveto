import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

// Dutch content uses the Dutch page paths in links.
export const LK: Linkable = {
  ui: {
    checked: 'Laatst gecontroleerd', cite: 'Zo citeer je deze pagina', src: 'Bron',
    statsT: 'Kinderen, scholen en AI: de cijfers', statsD: '24 gecontroleerde cijfers met bron, vrij om te citeren.',
    gdprT: 'ChatGPT en klantgegevens', gdprD: 'Wat de AVG betekent voor je kantoor, en een plan in 5 stappen.',
  },
  pages: {
    stats: {
      title: 'Kinderen, scholen en AI: de cijfers (2026)',
      desc: '24 gecontroleerde cijfers over kinderen, tieners, scholen en AI: chatbots, AI-vriendjes, spieken, deepfakes en datalekken. Elk met bron, jaar en link.',
      h1: 'Kinderen, scholen en AI: de cijfers (2026).',
      lead: '24 cijfers over hoe kinderen, studenten en werknemers AI gebruiken, en wat er misgaat. Elk cijfer linkt naar de originele bron en is op de dag zelf gecontroleerd. Vrij om te citeren.',
      blocks: [
        { h: 'Kinderen en tieners: AI-chatbots en AI-vriendjes', stats: [
          st('64%', 'van de Amerikaanse tieners van 13 tot 17 jaar zegt AI-chatbots te gebruiken.', 'pew1'),
          st('Ongeveer 3 op 10', 'Amerikaanse tieners gebruiken elke dag AI-chatbots, onder wie 16% die dat meerdere keren per dag of bijna constant doet.', 'pew1'),
          st('59%', 'van de Amerikaanse tieners gebruikt ChatGPT, veruit de populairste chatbot onder tieners.', 'pew1'),
          st('72%', 'van de Amerikaanse tieners van 13 tot 17 jaar heeft al eens een AI-vriendje (AI companion) gebruikt. Meer dan de helft doet dat minstens een paar keer per maand.', 'csm'),
          st('Ongeveer 1 op 3', 'Amerikaanse tieners vindt gesprekken met een AI-vriendje even fijn of fijner dan gesprekken met echte vrienden.', 'csm'),
          st('Ongeveer 1 op 3', 'Amerikaanse tieners die AI-vriendjes gebruiken, besprak iets belangrijks of ernstigs liever met een AI-vriendje dan met een echt persoon.', 'csm'),
          st('12%', 'van de Amerikaanse tieners heeft chatbots gebruikt voor emotionele steun of advies.', 'pew2'),
          st('63,8%', 'van de 16- tot 24-jarigen in de EU gebruikte in 2025 generatieve AI, bijna twee keer zoveel als bij alle volwassenen van 16 tot 74 jaar (32,7%).', 'eu1'),
        ] },
        { h: 'School: huiswerk, studeren en spieken', stats: [
          st('54%', 'van de Amerikaanse tieners heeft chatbots gebruikt om hulp te krijgen bij schoolwerk.', 'pew2'),
          st('59%', 'van de Amerikaanse tieners denkt dat leerlingen op hun school minstens vrij vaak spieken met AI.', 'pew2'),
          st('26%', 'van de Amerikaanse tieners gebruikte in 2024 ChatGPT voor schoolwerk, het dubbele van de 13% in 2023.', 'pew3'),
          st('39,3%', 'van de 16- tot 24-jarigen in de EU gebruikte in 2025 generatieve AI voor onderwijs, tegenover 9,4% van alle volwassenen.', 'eu1'),
          st('94%', 'van de voltijdse bachelorstudenten in het Verenigd Koninkrijk gebruikt generatieve AI bij werk dat meetelt voor hun punten.', 'hepi'),
        ] },
        { h: 'Deepfakes, nepnaaktbeelden en nepstemmen', stats: [
          st('1 op 8', 'jongeren van 13 tot 20 jaar kent persoonlijk iemand van wie nepnaaktbeelden (deepfake nudes) zijn gemaakt.', 'thorn'),
          st('1 op 5', 'tieners dacht dat het legaal is om nepnaaktbeelden van iemand anders te maken, ook van een andere minderjarige.', 'thorn'),
          st('34%', 'van de jonge slachtoffers van nepnaaktbeelden vertelde het aan een ouder, terwijl 62% van wie geen slachtoffer was zei dat wel te zullen doen.', 'thorn'),
          st('73%', 'zo vaak herkenden luisteraars een met AI gemaakte nepstem, in een test met 529 mensen in het Engels en het Mandarijn.', 'plos'),
          st('3.440', 'met AI gemaakte video’s van seksueel misbruik van kinderen vond de Internet Watch Foundation in 2025, tegenover 13 in 2024.', 'iwf'),
        ] },
        { h: 'Werk: AI-gebruik en datalekken', stats: [
          st('58%', 'van de werknemers gebruikt bewust en regelmatig AI op het werk (enquête bij 48.340 mensen in 47 landen).', 'kpmg'),
          st('48%', 'van de werknemers zegt bedrijfsinformatie, zoals financiële, verkoop- of klantgegevens, in openbare AI-tools te hebben gezet.', 'kpmg'),
          st('20,0%', 'van de bedrijven in de EU met 10 of meer werknemers gebruikte AI in 2025, tegenover 13,5% in 2024.', 'eu2'),
          st('13%', 'van de organisaties meldde een inbreuk op AI-modellen of AI-toepassingen. Van hen had 97% geen toegangscontrole voor AI.', 'ibm'),
          st('1 op 5', 'organisaties meldde een datalek door schaduw-AI: AI-tools die personeel zonder toestemming gebruikt. Wie veel schaduw-AI had, betaalde gemiddeld 670.000 dollar meer per lek.', 'ibm'),
          st('€15 miljoen', 'boete voor OpenAI van de Italiaanse privacytoezichthouder om ChatGPT, onder meer omdat het met persoonsgegevens trainde zonder geldige rechtsgrond.', 'gar'),
        ] },
        { h: 'Over deze cijfers', p: [
          'We hebben elke bron geopend en elk cijfer gecontroleerd op 22 november 2026. Cijfers die we die dag niet konden nakijken, staan er niet in.',
          'De onderzoeken verschillen in land, leeftijd en methode. Tel ze niet op en vergelijk ze niet alsof het één enquête is. De meeste onderzoeken bij kinderen hier komen uit de Verenigde Staten, het Verenigd Koninkrijk en de EU.',
        ] },
        { h: 'Wat je kunt doen', list: [
          'Ouders: <a href="/nl/ouders/">Mindveto voor ouders</a> en <a href="/nl/blog/is-character-ai-veilig-voor-kinderen/">Is Character.AI veilig voor kinderen?</a>',
          'Scholen: <a href="/nl/scholen/">Mindveto voor scholen</a>, de <a href="/nl/examenknop/">examenknop</a> en <a href="/nl/blog/ai-act-artikel-4-scholen/">AI Act artikel 4 voor scholen</a>.',
          'Deepfakes en oplichting: de <a href="/nl/ai-phishing-quiz/">AI-phishingquiz</a>, <a href="/nl/linkcheck/">Is deze link veilig?</a> en de <a href="/nl/porno-blokkeren/">gratis gezinsfilter</a>.',
          'Kantoren: de <a href="/nl/plakbewaker/">plakbewaker</a> en <a href="/nl/blog/chatgpt-klantgegevens-avg/">ChatGPT en klantgegevens onder de AVG</a>.',
        ] },
      ],
      faq: [
        { q: 'Hoeveel tieners gebruiken AI-chatbots?', a: 'In de Verenigde Staten zegt 64% van de tieners van 13 tot 17 jaar AI-chatbots te gebruiken, en ongeveer drie op tien doen dat elke dag (Pew Research Center, december 2025).' },
        { q: 'Spieken leerlingen met AI?', a: '59% van de Amerikaanse tieners denkt dat leerlingen op hun school minstens vrij vaak spieken met AI (Pew Research Center, 2026). In het Verenigd Koninkrijk gebruikt 94% van de bachelorstudenten generatieve AI bij werk dat meetelt, en dat is niet altijd spieken (HEPI, 2026).' },
        { q: 'Mag ik deze cijfers gebruiken?', a: 'Ja. Citeer ze met een link naar deze pagina en noem de originele bron. Elk cijfer heeft een eigen link: zet #s1 tot #s24 achter het adres van de pagina.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, “Kinderen, scholen en AI: de cijfers (2026)”, https://mindveto.app/nl/ai-statistieken/, laatst gecontroleerd op 22 november 2026. Citeer je één cijfer? Noem dan ook de originele bron, die onder het cijfer staat.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT en klantgegevens: wat zegt de AVG? (2026)',
      desc: 'Mag je kantoor klantgegevens in ChatGPT plakken? Wat OpenAI ermee doet, wat de AVG en de toezichthouder verwachten, en een plan in 5 stappen.',
      h1: 'ChatGPT en klantgegevens: wat de AVG betekent voor je kantoor.',
      lead: 'Kort antwoord: plak geen klantgegevens in een persoonlijk ChatGPT-account. Je kantoor blijft volgens de AVG verantwoordelijk voor die gegevens, en bij Free, Plus en Pro kunnen gesprekken gebruikt worden om de modellen van OpenAI te trainen, tenzij dat is uitgezet. Heeft je team AI nodig? Neem dan een zakelijk abonnement met een verwerkersovereenkomst, maak duidelijke afspraken en zet een controle vóór het plakken.',
      blocks: [
        { h: 'Wat er gebeurt met wat je plakt', list: [
          'ChatGPT Free, Plus en Pro: de instelling “Improve the model for everyone” staat standaard aan, dus gesprekken kunnen gebruikt worden om de modellen van OpenAI te trainen. Elke gebruiker kan dat uitzetten via Settings, Data controls.',
          'Training uitzetten verwijdert opgeslagen gesprekken niet. Ze blijven op de servers van OpenAI.',
          'Tijdelijke chats worden niet gebruikt voor training, maar kunnen tot 30 dagen bewaard worden om veiligheidsredenen.',
          'ChatGPT Business, Enterprise, Edu en de API: OpenAI zegt deze zakelijke gegevens standaard niet te gebruiken voor training, en biedt een verwerkersovereenkomst (Data Processing Addendum) voor Business, Enterprise en de API.',
        ] },
        { h: 'Wat de AVG van je kantoor verwacht', list: [
          'Je kantoor beslist waarom en hoe klantgegevens gebruikt worden, dus het is verantwoordelijk voor die gegevens.',
          'Een dienst die persoonsgegevens voor jou verwerkt, heeft een schriftelijke overeenkomst met je nodig. In de verwerkersovereenkomst van OpenAI staat dat OpenAI dan verwerker is; voor klanten in de EER is de contractpartij OpenAI Ireland.',
          'Deel zo weinig mogelijk. De meeste taken, zoals een opzet, een samenvatting of een vertaling, lukken even goed zonder namen, rekeningnummers of identiteitsnummers.',
          'Komen persoonsgegevens terecht waar ze niet horen? Dan kan dat een datalek zijn. De Autoriteit Persoonsgegevens zegt dat je een datalek binnen 72 uur moet melden nadat je het ontdekt, en dat een lek via een chatbot in veel gevallen gemeld moet worden.',
        ] },
        { h: 'Het gebeurt al', list: [
          'In augustus 2024 meldde de Autoriteit Persoonsgegevens dat ze meerdere datalekken door AI-chatbots had binnengekregen. In één geval had een medewerker van een huisartsenpraktijk medische gegevens van patiënten in een chatbot gezet. In een ander geval zette een medewerker van een telecombedrijf een bestand met adressen van klanten in een chatbot.',
          'Wereldwijd zegt 48% van de werknemers bedrijfsinformatie, zoals financiële, verkoop- of klantgegevens, in openbare AI-tools te hebben gezet (University of Melbourne en KPMG, 2025).',
          'Eén op de vijf organisaties meldde een datalek door schaduw-AI: AI-tools die personeel zonder toestemming gebruikt (IBM, 2025).',
          'In december 2024 gaf de Italiaanse privacytoezichthouder OpenAI een boete van €15 miljoen om ChatGPT, onder meer omdat het met persoonsgegevens trainde zonder geldige rechtsgrond.',
        ], note: 'Meer cijfers met bron: <a href="/nl/ai-statistieken/">Kinderen, scholen en AI: de cijfers (2026)</a>.' },
        { h: 'Een plan in 5 stappen voor een klein kantoor', steps: [
          'Kies welke AI-tool mag, liefst een zakelijk abonnement met een verwerkersovereenkomst, en stop met persoonlijke accounts voor klantenwerk. Schrijf het op met ons gratis <a href="/nl/ai-beleid-sjabloon/">AI-beleidssjabloon</a>.',
          'Zet op een lijst wat nooit in een AI-tool gaat: namen van klanten met hun gegevens, rekening- en identiteitsnummers, medische en personeelsdossiers, contracten, wachtwoorden.',
          'Laat je team zien hoe ze eerst namen en nummers weghalen. Het antwoord is meestal even bruikbaar.',
          'Zet een controle op het moment van plakken. De <a href="/nl/plakbewaker/">plakbewaker</a> van Mindveto waarschuwt voordat IBAN’s, identiteitsnummers, e-maillijsten of tekst met “vertrouwelijk” in een AI-chat gaan, en kan AI-tools blokkeren die je kantoor niet goedkeurde.',
          'Spreek af wat er na een fout gebeurt: dezelfde dag een vaste persoon verwittigen, opschrijven wat er waar geplakt is, het gesprek wissen en nagaan of het gemeld moet worden bij de privacytoezichthouder.',
        ] },
        { h: 'Waar Mindveto helpt, en waar niet', list: [
          'De plakbewaker controleert op de computer zelf. Geplakte tekst wordt nooit bewaard of verstuurd, ook niet naar ons.',
          'Hij werkt in de browser waar de extensie geïnstalleerd is. Hij controleert geen e-mail, documenten of desktop-apps.',
          'Mindveto maakt je kantoor niet op zichzelf AVG-proof. De afspraken, de overeenkomst met je AI-aanbieder en de uitleg aan je team zijn jouw deel.',
        ], note: 'Dit artikel is algemene informatie, geen juridisch advies. Kijk ook naar de uitleg van je nationale privacytoezichthouder.' },
      ],
      faq: [
        { q: 'Mogen we ChatGPT op het werk gebruiken onder de AVG?', a: 'Het is niet verboden op zich. Het hangt af van welke gegevens erin gaan en onder welke voorwaarden. Houd persoonsgegevens uit persoonlijke accounts, en gebruik voor klantenwerk een zakelijk abonnement met een verwerkersovereenkomst en duidelijke afspraken.' },
        { q: 'Leert ChatGPT van wat we plakken?', a: 'Bij Free, Plus en Pro kunnen gesprekken gebruikt worden voor training, tenzij “Improve the model for everyone” is uitgezet. Bij Business, Enterprise, Edu en de API zegt OpenAI je gegevens standaard niet te gebruiken voor training.' },
        { q: 'Een medewerker plakte klantgegevens. Wat nu?', a: 'Schrijf op wat er geplakt is, wanneer en waar, en wis het gesprek. Ga daarna na of het een datalek is dat gemeld moet worden. In Nederland moet dat binnen 72 uur nadat je het ontdekt.' },
        { q: 'Ziet Mindveto wat we plakken?', a: 'Nee. De plakbewaker controleert op de computer zelf. Geplakte tekst wordt nooit bewaard of verstuurd.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};

import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

// Links use the English page paths; the page template rewrites them to the German pages.
export const LK: Linkable = {
  ui: {
    checked: 'Zuletzt geprüft', cite: 'So zitieren Sie diese Seite', src: 'Quelle',
    statsT: 'Kinder, Schulen und KI: die Zahlen', statsD: '24 geprüfte Zahlen mit Quelle, frei zitierbar.',
    gdprT: 'ChatGPT und Kundendaten', gdprD: 'Was die DSGVO für Ihr Büro bedeutet, und ein Plan in 5 Schritten.',
  },
  pages: {
    stats: {
      title: 'Kinder, Schulen und KI: die Zahlen (2026)',
      desc: '24 geprüfte Statistiken zu Kindern, Jugendlichen, Schulen und KI: Chatbots, KI-Begleiter, Schummeln, Deepfakes und Datenlecks. Mit Quelle, Jahr und Link.',
      h1: 'Kinder, Schulen und KI: die Zahlen (2026).',
      lead: '24 Zahlen dazu, wie Kinder, Studierende und Beschäftigte KI nutzen und was schiefgeht. Jede Zahl verlinkt auf die Originalquelle und wurde am selben Tag geprüft. Frei zitierbar.',
      blocks: [
        { h: 'Kinder und Jugendliche: KI-Chatbots und KI-Begleiter', stats: [
          st('64 %', 'der US-Jugendlichen von 13 bis 17 Jahren sagen, dass sie KI-Chatbots nutzen.', 'pew1'),
          st('Etwa 3 von 10', 'US-Jugendlichen nutzen jeden Tag KI-Chatbots, davon 16 % mehrmals täglich oder fast ständig.', 'pew1'),
          st('59 %', 'der US-Jugendlichen nutzen ChatGPT, mit Abstand den beliebtesten Chatbot unter Jugendlichen.', 'pew1'),
          st('72 %', 'der US-Jugendlichen von 13 bis 17 Jahren haben schon einmal einen KI-Begleiter (AI companion) genutzt. Mehr als die Hälfte nutzt sie mindestens ein paar Mal im Monat.', 'csm'),
          st('Etwa 1 von 3', 'US-Jugendlichen findet Gespräche mit KI-Begleitern genauso befriedigend oder befriedigender als mit echten Freunden.', 'csm'),
          st('Etwa 1 von 3', 'US-Jugendlichen, die KI-Begleiter nutzen, hat wichtige oder ernste Dinge lieber mit einem KI-Begleiter besprochen als mit einem echten Menschen.', 'csm'),
          st('12 %', 'der US-Jugendlichen haben Chatbots genutzt, um emotionale Unterstützung oder Rat zu bekommen.', 'pew2'),
          st('63,8 %', 'der 16- bis 24-Jährigen in der EU nutzten 2025 generative KI, fast doppelt so viele wie bei allen Erwachsenen von 16 bis 74 Jahren (32,7 %).', 'eu1'),
        ] },
        { h: 'Schule: Hausaufgaben, Lernen und Schummeln', stats: [
          st('54 %', 'der US-Jugendlichen haben Chatbots genutzt, um Hilfe bei Schularbeiten zu bekommen.', 'pew2'),
          st('59 %', 'der US-Jugendlichen glauben, dass an ihrer Schule mindestens recht oft mit KI geschummelt wird.', 'pew2'),
          st('26 %', 'der US-Jugendlichen nutzten 2024 ChatGPT für Schularbeiten, doppelt so viele wie 2023 (13 %).', 'pew3'),
          st('39,3 %', 'der 16- bis 24-Jährigen in der EU nutzten 2025 generative KI für Schule oder Studium, gegenüber 9,4 % aller Erwachsenen.', 'eu1'),
          st('94 %', 'der Vollzeit-Bachelorstudierenden im Vereinigten Königreich nutzen generative KI bei benoteten Arbeiten.', 'hepi'),
        ] },
        { h: 'Deepfakes, gefälschte Nacktbilder und falsche Stimmen', stats: [
          st('1 von 8', 'jungen Menschen von 13 bis 20 Jahren kennt persönlich jemanden, von dem gefälschte Nacktbilder (Deepfake-Nudes) gemacht wurden.', 'thorn'),
          st('1 von 5', 'Jugendlichen hielt es für legal, gefälschte Nacktbilder von anderen zu erstellen, auch von anderen Minderjährigen.', 'thorn'),
          st('34 %', 'der jungen Betroffenen von gefälschten Nacktbildern haben es einem Elternteil erzählt, obwohl 62 % der Nichtbetroffenen sagten, sie würden es tun.', 'thorn'),
          st('73 %', 'so oft erkannten Zuhörende eine mit KI gefälschte Stimme richtig, in einem Test mit 529 Personen auf Englisch und Mandarin.', 'plos'),
          st('3.440', 'mit KI erzeugte Videos von sexuellem Kindesmissbrauch fand die Internet Watch Foundation 2025, gegenüber 13 im Jahr 2024.', 'iwf'),
        ] },
        { h: 'Arbeit: KI-Nutzung und Datenlecks', stats: [
          st('58 %', 'der Beschäftigten nutzen bei der Arbeit bewusst und regelmäßig KI (Umfrage unter 48.340 Personen in 47 Ländern).', 'kpmg'),
          st('48 %', 'der Beschäftigten sagen, dass sie Firmeninformationen, etwa Finanz-, Vertriebs- oder Kundendaten, in öffentliche KI-Tools hochgeladen haben.', 'kpmg'),
          st('20,0 %', 'der Unternehmen in der EU mit 10 oder mehr Beschäftigten nutzten 2025 KI, gegenüber 13,5 % im Jahr 2024.', 'eu2'),
          st('13 %', 'der Organisationen meldeten eine Verletzung von KI-Modellen oder KI-Anwendungen. Davon hatten 97 % keine Zugriffskontrollen für KI.', 'ibm'),
          st('1 von 5', 'Organisationen meldete eine Datenpanne durch Schatten-KI: KI-Tools, die Beschäftigte ohne Freigabe nutzen. Wer viel Schatten-KI hatte, zahlte pro Datenpanne im Schnitt 670.000 US-Dollar mehr.', 'ibm'),
          st('15 Mio. €', 'Bußgeld der italienischen Datenschutzbehörde gegen OpenAI wegen ChatGPT, unter anderem für das Training mit personenbezogenen Daten ohne ausreichende Rechtsgrundlage.', 'gar'),
        ] },
        { h: 'Über diese Zahlen', p: [
          'Wir haben jede Quelle geöffnet und jede Zahl am 22. November 2026 geprüft. Zahlen, die wir an diesem Tag nicht überprüfen konnten, fehlen hier.',
          'Die Studien unterscheiden sich nach Land, Altersgruppe und Methode. Zählen Sie sie nicht zusammen und vergleichen Sie sie nicht, als wären sie eine Umfrage. Die meisten Umfragen zu Kindern hier stammen aus den USA, dem Vereinigten Königreich und der EU.',
        ] },
        { h: 'Was Sie tun können', list: [
          'Eltern: <a href="/parents/">Mindveto für Eltern</a> und <a href="/blog/is-character-ai-safe-for-kids/">Ist Character.AI sicher für Kinder?</a>',
          'Schulen: <a href="/schools/">Mindveto für Schulen</a>, der <a href="/exam-button/">Prüfungsknopf</a> und <a href="/blog/ai-act-article-4-schools/">Artikel 4 der KI-Verordnung für Schulen</a>.',
          'Deepfakes und Betrug: das <a href="/ai-phishing-quiz/">KI-Phishing-Quiz</a>, <a href="/link-check/">Ist dieser Link sicher?</a> und der <a href="/block-porn/">kostenlose Familienfilter</a>.',
          'Büros: der <a href="/paste-guard/">Einfüge-Schutz</a> und <a href="/blog/chatgpt-customer-data-gdpr/">ChatGPT und Kundendaten nach der DSGVO</a>.',
        ] },
      ],
      faq: [
        { q: 'Wie viele Jugendliche nutzen KI-Chatbots?', a: 'In den USA sagen 64 % der Jugendlichen von 13 bis 17 Jahren, dass sie KI-Chatbots nutzen, und etwa drei von zehn nutzen sie jeden Tag (Pew Research Center, Dezember 2025).' },
        { q: 'Schummeln Schülerinnen und Schüler mit KI?', a: '59 % der US-Jugendlichen glauben, dass an ihrer Schule mindestens recht oft mit KI geschummelt wird (Pew Research Center, 2026). Im Vereinigten Königreich nutzen 94 % der Bachelorstudierenden generative KI bei benoteten Arbeiten, was nicht immer Schummeln ist (HEPI, 2026).' },
        { q: 'Darf ich diese Zahlen verwenden?', a: 'Ja. Zitieren Sie sie mit einem Link auf diese Seite und nennen Sie die Originalquelle. Jede Zahl hat einen eigenen Link: Hängen Sie #s1 bis #s24 an die Adresse der Seite an.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, „Kinder, Schulen und KI: die Zahlen (2026)“, https://mindveto.app/de/ki-statistiken/, zuletzt geprüft am 22. November 2026. Wenn Sie eine einzelne Zahl zitieren, nennen Sie bitte auch ihre Originalquelle, die unter der Zahl steht.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT und Kundendaten: Was sagt die DSGVO? (2026)',
      desc: 'Darf Ihr Büro Kundendaten in ChatGPT einfügen? Was OpenAI damit macht, was DSGVO und Aufsichtsbehörden erwarten, und ein Plan in 5 Schritten für kleine Büros.',
      h1: 'ChatGPT und Kundendaten: Was die DSGVO für Ihr Büro bedeutet.',
      lead: 'Kurze Antwort: Fügen Sie keine Kundendaten in ein persönliches ChatGPT-Konto ein. Nach der DSGVO bleibt Ihr Büro für diese Daten verantwortlich, und bei Free, Plus und Pro können Chats zum Training der Modelle von OpenAI genutzt werden, wenn das nicht ausgeschaltet ist. Braucht Ihr Team KI, nehmen Sie ein Business-Abo mit Auftragsverarbeitungsvertrag, legen Sie klare Regeln fest und prüfen Sie vor dem Einfügen.',
      blocks: [
        { h: 'Was mit dem Eingefügten passiert', list: [
          'ChatGPT Free, Plus und Pro: Die Einstellung „Improve the model for everyone“ ist standardmäßig an, daher können Chats zum Training der Modelle von OpenAI genutzt werden. Jede Person kann das unter Settings, Data controls ausschalten.',
          'Das Ausschalten des Trainings löscht gespeicherte Chats nicht. Sie bleiben auf den Servern von OpenAI.',
          'Temporäre Chats werden nicht zum Training genutzt, können aber aus Sicherheitsgründen bis zu 30 Tage aufbewahrt werden.',
          'ChatGPT Business, Enterprise, Edu und die API: OpenAI sagt, dass es mit diesen Geschäftsdaten standardmäßig nicht trainiert, und bietet einen Auftragsverarbeitungsvertrag (Data Processing Addendum) für Business, Enterprise und die API an.',
        ] },
        { h: 'Was die DSGVO von Ihrem Büro erwartet', list: [
          'Ihr Büro entscheidet, wozu und wie Kundendaten genutzt werden, und ist deshalb für diese Daten verantwortlich.',
          'Ein Dienst, der personenbezogene Daten für Sie verarbeitet, braucht einen schriftlichen Vertrag mit Ihnen. Laut dem Vertrag von OpenAI handelt OpenAI dann als Auftragsverarbeiter; für Kunden im EWR ist der Vertragspartner OpenAI Ireland.',
          'Teilen Sie so wenig wie nötig. Die meisten Aufgaben, etwa ein Entwurf, eine Zusammenfassung oder eine Übersetzung, gelingen genauso gut ohne Namen, Kontonummern oder Ausweisnummern.',
          'Landen personenbezogene Daten dort, wo sie nicht hingehören, kann das eine Datenpanne sein. Die niederländische Aufsichtsbehörde weist darauf hin, dass eine Datenpanne innerhalb von 72 Stunden nach Bekanntwerden gemeldet werden muss und dass ein Leck über einen Chatbot in vielen Fällen meldepflichtig ist.',
        ] },
        { h: 'Es passiert bereits', list: [
          'Im August 2024 berichtete die niederländische Datenschutzbehörde von mehreren Meldungen über Datenpannen durch KI-Chatbots. In einem Fall hatte eine beschäftigte Person einer Hausarztpraxis medizinische Daten von Patienten in einen Chatbot eingegeben. In einem anderen gab eine beschäftigte Person eines Telekommunikationsunternehmens eine Datei mit Kundenadressen ein.',
          'Weltweit sagen 48 % der Beschäftigten, dass sie Firmeninformationen wie Finanz-, Vertriebs- oder Kundendaten in öffentliche KI-Tools hochgeladen haben (University of Melbourne und KPMG, 2025).',
          'Eine von fünf Organisationen meldete eine Datenpanne durch Schatten-KI, also KI-Tools, die Beschäftigte ohne Freigabe nutzen (IBM, 2025).',
          'Im Dezember 2024 verhängte die italienische Datenschutzbehörde gegen OpenAI ein Bußgeld von 15 Millionen Euro wegen ChatGPT, unter anderem für das Training mit personenbezogenen Daten ohne ausreichende Rechtsgrundlage.',
        ], note: 'Mehr Zahlen mit Quellen: <a href="/ai-statistics/">Kinder, Schulen und KI: die Zahlen (2026)</a>.' },
        { h: 'Ein Plan in 5 Schritten für ein kleines Büro', steps: [
          'Legen Sie fest, welches KI-Tool erlaubt ist, am besten ein Business-Abo mit Auftragsverarbeitungsvertrag, und nutzen Sie keine persönlichen Konten mehr für Kundenarbeit. Halten Sie es mit unserer kostenlosen <a href="/ai-policy-template/">KI-Richtlinie-Vorlage</a> fest.',
          'Schreiben Sie auf, was nie in ein KI-Tool kommt: Kundennamen mit ihren Daten, Konto- und Ausweisnummern, Gesundheits- und Personalakten, Verträge, Passwörter.',
          'Zeigen Sie dem Team, wie man Namen und Nummern vorher entfernt. Die Antwort ist meist genauso nützlich.',
          'Prüfen Sie im Moment des Einfügens. Der <a href="/paste-guard/">Einfüge-Schutz</a> von Mindveto warnt, bevor IBANs, Ausweisnummern, E-Mail-Listen oder als vertraulich markierter Text in einen KI-Chat gelangen, und kann KI-Tools sperren, die Ihr Büro nicht freigegeben hat.',
          'Vereinbaren Sie, was nach einem Fehler passiert: am selben Tag eine benannte Person informieren, notieren, was wo eingefügt wurde, den Chat löschen und prüfen, ob eine Meldung an die Datenschutzbehörde nötig ist.',
        ] },
        { h: 'Wo Mindveto hilft und wo nicht', list: [
          'Der Einfüge-Schutz prüft auf dem Computer selbst. Eingefügter Text wird nie gespeichert oder gesendet, auch nicht an uns.',
          'Er arbeitet im Browser, in dem die Erweiterung installiert ist. E-Mails, Dokumente und Desktop-Apps prüft er nicht.',
          'Mindveto macht Ihr Büro nicht allein DSGVO-konform. Die Regeln, der Vertrag mit Ihrem KI-Anbieter und die Schulung des Teams sind Ihr Teil.',
        ], note: 'Dieser Artikel ist eine allgemeine Information, keine Rechtsberatung. Beachten Sie auch die Hinweise Ihrer Datenschutzaufsichtsbehörde.' },
      ],
      faq: [
        { q: 'Dürfen wir ChatGPT bei der Arbeit nach der DSGVO nutzen?', a: 'Es ist nicht grundsätzlich verboten. Entscheidend ist, welche Daten hineingehen und zu welchen Bedingungen. Halten Sie personenbezogene Daten aus persönlichen Konten heraus und nutzen Sie für Kundenarbeit ein Business-Abo mit Auftragsverarbeitungsvertrag und klaren Regeln.' },
        { q: 'Lernt ChatGPT aus dem, was wir einfügen?', a: 'Bei Free, Plus und Pro können Chats zum Training genutzt werden, wenn „Improve the model for everyone“ nicht ausgeschaltet ist. Bei Business, Enterprise, Edu und der API trainiert OpenAI nach eigenen Angaben standardmäßig nicht mit Ihren Daten.' },
        { q: 'Jemand im Team hat Kundendaten eingefügt. Was nun?', a: 'Notieren Sie, was wann und wo eingefügt wurde, und löschen Sie den Chat. Prüfen Sie dann, ob es eine meldepflichtige Datenpanne ist. In den Niederlanden gilt dafür eine Frist von 72 Stunden nach Bekanntwerden.' },
        { q: 'Sieht Mindveto, was wir einfügen?', a: 'Nein. Der Einfüge-Schutz prüft auf dem Computer selbst. Eingefügter Text wird nie gespeichert oder gesendet.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};

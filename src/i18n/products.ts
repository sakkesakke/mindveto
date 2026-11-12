import type { Lang, PageKey } from './routes';

type P = Partial<Record<PageKey, string>>;

export const PRODUCT_NAMES: Record<Lang, P> = {
  en: { browser: 'Browser extension', android: 'Android app', windows: 'Windows', maclinux: 'Mac and Linux', network: 'Whole network (IT)', exam: 'Exam button', paste: 'Paste guard' },
  nl: { browser: 'Browserextensie', android: 'Android-app', windows: 'Windows', maclinux: 'Mac en Linux', network: 'Hele netwerk (IT)', exam: 'Examenknop', paste: 'Plakbewaker' },
  fr: { browser: 'Extension de navigateur', android: 'Appli Android', windows: 'Windows', maclinux: 'Mac et Linux', network: 'Tout le réseau (IT)', exam: 'Bouton examen', paste: 'Garde-collage' },
  es: { browser: 'Extensión de navegador', android: 'App para Android', windows: 'Windows', maclinux: 'Mac y Linux', network: 'Toda la red (IT)', exam: 'Botón de examen', paste: 'Guardia de pegado' },
  de: { browser: 'Browser-Erweiterung', android: 'Android-App', windows: 'Windows', maclinux: 'Mac und Linux', network: 'Ganzes Netzwerk (IT)', exam: 'Prüfungsknopf', paste: 'Einfüge-Schutz' },
  pt: { browser: 'Extensão de navegador', android: 'App para Android', windows: 'Windows', maclinux: 'Mac e Linux', network: 'Rede inteira (TI)', exam: 'Botão de prova', paste: 'Guarda de colagem' },
  it: { browser: 'Estensione per browser', android: 'App Android', windows: 'Windows', maclinux: 'Mac e Linux', network: 'Intera rete (IT)', exam: 'Pulsante esame', paste: 'Guardia incolla' },
  ar: { browser: 'إضافة المتصفح', android: 'تطبيق أندرويد', windows: 'ويندوز', maclinux: 'ماك ولينكس', network: 'الشبكة كاملة (تقنية المعلومات)', exam: 'زر الامتحان', paste: 'حارس اللصق' },
};

export const PRODUCT_LINES: Record<Lang, P> = {
  en: {
    browser: 'One switch and a PIN in Chrome, Edge, Brave or Opera.',
    android: 'Blocks AI in every app on the phone, not just the browser.',
    windows: 'One download blocks AI in every browser and app on the PC.',
    maclinux: 'One command blocks AI system-wide on a Mac or Linux computer.',
    network: 'Ready-made files for DNS, firewalls and browser policy.',
    exam: 'A teacher switches AI off for a whole class during a test.',
    paste: 'A warning before private data is pasted into an AI chat.',
  },
  nl: {
    browser: 'Eén schakelaar en een pincode in Chrome, Edge, Brave of Opera.',
    android: 'Blokkeert AI in elke app op de telefoon, niet alleen in de browser.',
    windows: 'Eén download blokkeert AI in elke browser en app op de pc.',
    maclinux: 'Eén commando blokkeert AI op het hele Mac- of Linux-systeem.',
    network: 'Kant-en-klare bestanden voor DNS, firewalls en browserbeleid.',
    exam: 'Een leraar zet AI uit voor de hele klas tijdens een toets.',
    paste: 'Een waarschuwing voor je privégegevens in een AI-chat plakt.',
  },
  fr: {
    browser: 'Un interrupteur et un PIN dans Chrome, Edge, Brave ou Opera.',
    android: 'Bloque l’IA dans toutes les applis du téléphone, pas seulement le navigateur.',
    windows: 'Un téléchargement bloque l’IA dans tous les navigateurs et applis du PC.',
    maclinux: 'Une commande bloque l’IA dans tout le système Mac ou Linux.',
    network: 'Des fichiers prêts pour le DNS, les pare-feu et les stratégies de navigateur.',
    exam: 'Un enseignant coupe l’IA pour toute la classe pendant un test.',
    paste: 'Un avertissement avant de coller des données privées dans un chat IA.',
  },
  es: {
    browser: 'Un interruptor y un PIN en Chrome, Edge, Brave u Opera.',
    android: 'Bloquea la IA en todas las apps del teléfono, no solo en el navegador.',
    windows: 'Una descarga bloquea la IA en todos los navegadores y apps del PC.',
    maclinux: 'Un comando bloquea la IA en todo el sistema Mac o Linux.',
    network: 'Archivos listos para DNS, cortafuegos y políticas de navegador.',
    exam: 'Un docente apaga la IA para toda la clase durante un examen.',
    paste: 'Un aviso antes de pegar datos privados en un chat de IA.',
  },
  de: {
    browser: 'Ein Schalter und eine PIN in Chrome, Edge, Brave oder Opera.',
    android: 'Blockiert KI in jeder App auf dem Handy, nicht nur im Browser.',
    windows: 'Ein Download blockiert KI in jedem Browser und jeder App auf dem PC.',
    maclinux: 'Ein Befehl blockiert KI im ganzen Mac- oder Linux-System.',
    network: 'Fertige Dateien für DNS, Firewalls und Browser-Richtlinien.',
    exam: 'Eine Lehrkraft schaltet KI während einer Prüfung für die ganze Klasse ab.',
    paste: 'Eine Warnung, bevor private Daten in einen KI-Chat eingefügt werden.',
  },
  pt: {
    browser: 'Um interruptor e um PIN no Chrome, Edge, Brave ou Opera.',
    android: 'Bloqueia a IA em todos os apps do celular, não só no navegador.',
    windows: 'Um download bloqueia a IA em todos os navegadores e apps do PC.',
    maclinux: 'Um comando bloqueia a IA em todo o sistema Mac ou Linux.',
    network: 'Arquivos prontos para DNS, firewalls e políticas de navegador.',
    exam: 'Um professor desliga a IA para a turma inteira durante uma prova.',
    paste: 'Um aviso antes de colar dados privados num chat de IA.',
  },
  it: {
    browser: 'Un interruttore e un PIN in Chrome, Edge, Brave o Opera.',
    android: 'Blocca l’IA in tutte le app del telefono, non solo nel browser.',
    windows: 'Un download blocca l’IA in tutti i browser e le app del PC.',
    maclinux: 'Un comando blocca l’IA in tutto il sistema Mac o Linux.',
    network: 'File pronti per DNS, firewall e criteri del browser.',
    exam: 'Un insegnante spegne l’IA per tutta la classe durante una verifica.',
    paste: 'Un avviso prima di incollare dati privati in una chat IA.',
  },
  ar: {
    browser: 'مفتاح واحد ورمز PIN في Chrome وEdge وBrave وOpera.',
    android: 'يحظر الذكاء الاصطناعي في كل تطبيقات الهاتف، وليس في المتصفح فقط.',
    windows: 'تنزيل واحد يحظر الذكاء الاصطناعي في كل المتصفحات والتطبيقات على الحاسوب.',
    maclinux: 'أمر واحد يحظر الذكاء الاصطناعي في نظام ماك أو لينكس كله.',
    network: 'ملفات جاهزة لخوادم DNS والجدران النارية وسياسات المتصفح.',
    exam: 'يوقف المعلّم الذكاء الاصطناعي للفصل كله أثناء الاختبار.',
    paste: 'تنبيه قبل لصق بيانات خاصة في محادثة ذكاء اصطناعي.',
  },
};

export const PRODUCT_KEYS: PageKey[] = ['browser', 'android', 'windows', 'maclinux', 'network', 'exam', 'paste'];

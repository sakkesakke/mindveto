import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';

// Internal links are written with the English paths; localize.ts rewrites them to /es/ paths at build time.
export const home: Home = {
  title: 'Mindveto: bloquea ChatGPT y más de 150 IA con un interruptor',
  desc: 'Bloquea ChatGPT, Gemini, Copilot y más de 150 herramientas de IA en navegadores, Android, Windows, Mac y redes. PIN, botón de examen. Gratis, sin rastreo.',
  h1: 'Tu mente tiene la última palabra.',
  lead: 'Mindveto apaga ChatGPT, Gemini, Copilot y más de 150 herramientas de IA en un navegador, un teléfono, un ordenador o toda una red. Un PIN decide quién puede volver a encenderlas.',
  switchOn: 'IA', switchOff: 'Veto', switchLabel: 'Pruébalo: apaga la IA en esta página',
  statusOn: 'IA permitida. Pulsa el interruptor.', statusOff: 'Veto. Más de 150 servicios de IA bloqueados.',
  how: 'Cómo funciona',
  doorsH: 'Para quién es',
  doors: [
    { key: 'parents', who: 'Padres', why: 'Compañeros de IA a medianoche, deberes escritos por un chatbot. Bloquéalo en el PC familiar y en el móvil de tu hijo.', go: 'Para padres' },
    { key: 'schools', who: 'Escuelas', why: 'Un botón de examen para docentes, y archivos que IT puede instalar hoy en cada ordenador del centro.', go: 'Para escuelas' },
    { key: 'offices', who: 'Oficinas', why: 'Mantén expedientes, IBAN y contratos fuera de los chatbots públicos. Permite solo la IA que tu empresa aprueba.', go: 'Para oficinas' },
  ],
  productsH: 'Una idea, siete herramientas',
  productsLead: 'Elige lo que encaja con el dispositivo. Hoy todo es gratis.',
  proofH: 'Qué sale de tu dispositivo',
  proofP: 'Mindveto lo comprueba todo en el propio dispositivo. No queremos tus datos, así que lo construimos para no recibirlos nunca.',
  ledger: [
    ['Nada', 'Las páginas que visitas, lo que escribes, lo que pegas.', true],
    ['Nada', 'Tu nombre, tu correo o una cuenta. No hay cuenta.', true],
    ['Una vez al día', 'La extensión descarga la lista pública de direcciones de IA. No envía nada con ella.', false],
    ['Solo si te unes', 'En modo examen, el código de clase se envía una vez por minuto para saber si el examen está activo. Sin nombres.', false],
  ],
  limitsH: 'Límites honestos',
  limits: [
    'Funciona en el navegador, teléfono, ordenador o red donde lo instalas. Un niño aún puede usar el móvil de un amigo.',
    'Quien controla todo el dispositivo puede quitarlo. Usa una cuenta normal (sin administrador) para niños y personal.',
    'Cada semana aparecen nuevas IA. La lista se actualiza a diario, pero alguna puede colarse unos días.',
  ],
  priceH: 'Gratis para empezar',
  priceP: 'Bloquear sigue siendo gratis para todos. Los planes de pago para familias, escuelas y oficinas empiezan con el lanzamiento en Google Play.',
  priceGo: 'Ver los planes',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
  parents: {
    title: 'Bloquear ChatGPT y apps de IA para tu hijo',
    desc: 'Bloquea chatbots de IA, compañeros de IA y la IA para deberes en el navegador, el móvil Android y el PC familiar de tu hijo. PIN y horario. Gratis.',
    h1: 'Bloquea la IA para tu hijo, en cada pantalla que usa.',
    lead: 'Compañeros de IA que chatean a medianoche, redacciones escritas en diez segundos. Mindveto te deja decidir cuándo la IA forma parte del día de tu hijo, y un PIN lo mantiene así.',
    actions: [{ label: 'Descargar gratis', to: 'download', solid: true }, { label: '¿Qué versión necesito?', to: 'help' }],
    blocks: [
      { h: 'Qué puedes hacer', list: [
        'Bloquear más de 150 chatbots, compañeros de IA, ayudantes de deberes y herramientas de imagen con IA con un solo interruptor.',
        'Poner un PIN para que tu hijo no pueda apagarlo ni cambiar la lista.',
        'Usar un horario: bloquear solo en días de clase, o solo por la noche. Las vacaciones escolares de Bélgica, Países Bajos y Francia ya vienen incluidas.',
        'Ver un registro de manipulación: intentos de PIN erróneos y cuándo se apagó el interruptor.',
        'Permitir una IA de confianza, por ejemplo para un trabajo escolar, y mantener bloqueado el resto.',
        'Si quieres, bloquear también redes sociales como TikTok, Instagram y Snapchat en el navegador. Está apagado hasta que lo actives.',
        'Filtro familiar, gratis: bloquea sitios porno y +18 y fuerza SafeSearch en Google, Bing, DuckDuckGo y YouTube. Apagado hasta que tú lo enciendas.',
      ]},
      { h: 'Configúralo en 10 minutos', steps: [
        L('En el ordenador familiar: instala la <a href="/browser-extension/">extensión de navegador</a>, o bloquea la IA en todas las apps con la descarga para <a href="/windows/">Windows</a> o <a href="/mac-linux/">Mac</a>.'),
        L('En el móvil Android de tu hijo: instala la <a href="/android/">app para Android</a> y activa “VPN siempre activada” para que no se pueda saltar.'),
        'Pon el mismo PIN en todas partes y guárdalo para ti.',
        'Da a tu hijo una cuenta normal (sin administrador) en el ordenador. Así no puede quitarlo.',
      ]},
      { h: 'Una buena conversación vale más que cualquier bloqueo', p: [
        'El bloqueo funciona mejor cuando tu hijo sabe por qué. Cuéntale qué hace Mindveto, cuándo se permite la IA y que el registro muestra si alguien intenta apagarlo.',
      ], note: 'Mindveto no lee los mensajes de tu hijo y no nos envía nada. Solo impide que se abran direcciones de IA.', human: true },
    ],
    faq: [
      { q: '¿Funciona en iPhone?', a: L('Todavía no hay app para iPhone. Puedes bloquear la IA en un iPhone con nuestra lista gratuita y un servicio DNS: mira <a href="/network/">toda la red</a>. Tiempo de uso de Apple también puede bloquear sitios concretos.') },
      { q: 'Mi hijo usa un portátil del colegio. ¿Puedo instalarlo ahí?', a: 'Pregunta antes al colegio. Los dispositivos escolares los gestiona el centro, y muchos centros pueden instalar Mindveto para todos los alumnos a la vez.' },
      { q: '¿De verdad es gratis?', a: 'Sí. El bloqueo, el PIN y el horario siguen siendo gratis. Un plan Plus de pago con extras para familias llega con el lanzamiento en Google Play.' },
    ],
    related: ['browser', 'android', 'windows'],
  },

  schools: {
    title: 'Bloquear la IA en ordenadores escolares, con botón de examen',
    desc: 'Bloquea ChatGPT y herramientas de IA en los ordenadores y la red del centro. Botón de examen para docentes y archivos para IT. Sin datos de alumnos.',
    h1: 'IA apagada durante el examen. Encendida cuando la clase la necesita.',
    lead: 'Los docentes tienen un botón de examen. IT recibe archivos listos para cada ordenador y para la red del centro. Nadie lee lo que escriben los alumnos.',
    actions: [{ label: 'Abrir el botón de examen', to: 'exam', solid: true }, { label: 'Archivos para IT', to: 'network' }],
    blocks: [
      { h: 'Para docentes', list: [
        'Crea una clase con un clic. Los alumnos se unen con un código en la extensión.',
        'Inicia el modo examen de 30 a 240 minutos. Toda la IA queda bloqueada en los navegadores de tu clase en menos de un minuto.',
        'Sin cuentas, sin nombres de alumnos, sin correos.',
      ], actions: [{ label: 'Crear una clase', to: 'exam' }] },
      { h: 'Para IT', list: [
        'Instala la extensión de forma obligatoria con políticas de Chrome y Edge (Google Admin, GPO, Intune) para que los alumnos no puedan quitarla.',
        'Bloquea la IA en la red del centro con archivos para Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid y cortafuegos habituales.',
        'Permite solo las herramientas de IA que aprueba tu centro y mantén bloqueado todo lo demás.',
      ], actions: [{ label: 'Descargar el paquete IT', to: 'network' }] },
      { h: 'Privacidad de los alumnos', p: [
        'Mindveto lo comprueba todo en el dispositivo. No registra qué sitios visitan los alumnos ni lee sus mensajes. Para el modo examen, nuestra base de datos guarda solo un código de clase cifrado (hash) y la hora de fin del examen.',
        L('Así es fácil explicarlo a las familias y a tu delegado de protección de datos. Lee la <a href="/privacy/">política de privacidad</a>.'),
      ]},
      { h: 'Pruébalo un trimestre', p: [
        L('Gratis durante el piloto. Escribe a <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> con el nombre del centro y el número de dispositivos, y te ayudamos a configurarlo.'),
      ]},
    ],
    faq: [
      { q: '¿Puede un alumno salir de la clase o apagarlo?', a: 'No, si el centro pone el PIN e instala la extensión con políticas del navegador. En un ordenador donde el alumno es administrador, puede quitarla.' },
      { q: '¿Bloquea los móviles en el aula?', a: 'El modo examen funciona en los navegadores de los ordenadores del centro. Para los móviles en el wifi del centro, usa los archivos DNS para la red escolar.' },
      { q: '¿Cuánto costará después?', a: L('El plan es 1 € por alumno al año, mínimo 149 € por centro. Mira los <a href="/pricing/">precios</a>.') },
    ],
    related: ['exam', 'network', 'browser'],
  },

  offices: {
    title: 'Evita que tu equipo pegue datos de clientes en ChatGPT',
    desc: 'Guardia de pegado para oficinas: un aviso antes de que IBAN, números de identidad, listas de clientes o textos confidenciales lleguen a chats de IA.',
    h1: 'Los datos de clientes se quedan fuera de los chatbots públicos.',
    lead: 'Un contable pega un extracto bancario en un chatbot para “resumirlo”. Mindveto detiene ese momento en la pantalla, antes de que los datos salgan de la oficina.',
    actions: [{ label: 'Ver la guardia de pegado', to: 'paste', solid: true }, { label: 'Precios para equipos', to: 'pricing' }],
    blocks: [
      { h: 'Qué hace por una empresa', list: [
        'Permite solo la IA que aprueba tu empresa (por ejemplo Microsoft Copilot con tu cuenta de empresa) y bloquea las otras 150+.',
        'Avisa antes de pegar en un sitio de IA IBAN, números de tarjeta, números de identidad, listas de correos, claves secretas o textos marcados como “confidencial”.',
        'Añade tus propias palabras privadas: nombres de clientes, códigos de proyecto, números de expediente.',
        'Bloquea los ajustes con un PIN y ve cuándo alguien intentó cambiarlos.',
      ]},
      { h: 'Por qué lo eligen las empresas', p: [
        'Las grandes herramientas contra fugas de datos envían tus datos a su nube para revisarlos, y cuestan miles. Mindveto comprueba en el propio PC, así que el texto nunca sale de la oficina.',
        'Encaja en gestorías, despachos de abogados, notarías, corredurías de seguros, RR. HH. y consultas médicas: equipos pequeños con expedientes confidenciales y sin departamento de IT.',
      ], note: 'En muchos países hay que informar al comité de empresa o a la plantilla antes de introducir una herramienta así. Mindveto no lee nada ni envía nada, y eso facilita esa conversación.', human: true },
      { h: 'Despliégalo', steps: [
        L('Instala la <a href="/browser-extension/">extensión de navegador</a> en cada ordenador de trabajo, o instálala de forma obligatoria con políticas de Edge o Chrome.'),
        'Marca la IA que permite tu empresa y añade tus palabras privadas.',
        'Pon un único PIN para toda la oficina.',
      ]},
    ],
    faq: [
      { q: '¿Puede bloquear la IA dentro de Word u Outlook?', a: L('La extensión funciona en el navegador. En Windows, la <a href="/windows/">descarga para Windows</a> también puede apagar Copilot y Recall integrados en Windows.') },
      { q: '¿Veis lo que pega mi equipo?', a: 'No. La comprobación se hace en el ordenador. El texto pegado nunca se guarda ni se envía.' },
      { q: '¿Cuánto cuesta?', a: L('El plan para equipos es 2,50 € por usuario al mes. Durante el lanzamiento es gratis. Mira los <a href="/pricing/">precios</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'Extensión bloqueadora de IA para Chrome, Edge, Brave y Opera',
    desc: 'Extensión gratuita que bloquea ChatGPT, Gemini, Claude y más de 150 sitios de IA en Chrome, Edge, Brave y Opera. PIN, horario, guardia de pegado. Sin rastreo.',
    h1: 'El interruptor de IA para tu navegador.',
    lead: 'Un interruptor bloquea más de 150 chatbots y herramientas de IA. Un PIN impide que otra persona lo cambie. Funciona en Chrome, Edge, Brave y Opera.',
    actions: [{ label: 'Descargar v1.4.0 (724 KB)', url: DL + 'human-override-1.4.0.zip', solid: true, download: true }, { label: 'Pasos de instalación', url: '#install' }],
    blocks: [
      { h: 'Qué incluye', list: [
        'Bloquea chat de IA, búsqueda con IA, herramientas de imagen, vídeo, voz y música con IA, herramientas de escritura y deberes, de programación y tomadores de notas con IA.',
        'Bloqueo con PIN del interruptor y de todos los ajustes.',
        'Horario con vacaciones escolares de Bélgica, Países Bajos y Francia.',
        L('<a href="/paste-guard/">Guardia de pegado</a> con tus propias palabras privadas.'),
        'IA aprobada: permite solo las herramientas que permite tu escuela o empresa.',
        L('Modo clase y <a href="/exam-button/">modo examen</a> para docentes.'),
        'Registro de manipulación y una marca roja en el icono tras un PIN erróneo.',
        'Tus propias listas de bloqueo y permiso. La lista pública se actualiza una vez al día.',
        'Opcional: bloquear también redes sociales (TikTok, Instagram, Snapchat y más). Apagado hasta que lo actives.',
        'La extensión está en inglés, neerlandés y francés por ahora.',
        'Filtro familiar: bloquea más de 60.000 sitios porno y +18 y fuerza SafeSearch en Google, Bing, DuckDuckGo y YouTube. Apagado hasta que tú lo enciendas; con un PIN, solo tú puedes apagarlo.',
      ]},
      { h: 'Instálala en un minuto', fold: 'Mostrar los pasos de instalación', foldLead: 'Las versiones de las tiendas están en camino. Mientras tanto la instalas a mano en un minuto.', steps: [
        'Descarga el zip de arriba y descomprímelo (clic derecho, “Extraer todo”).',
        L('Abre <code>chrome://extensions</code> (en Edge: <code>edge://extensions</code>).'),
        'Activa el “Modo de desarrollador” (arriba a la derecha).',
        'Haz clic en “Cargar descomprimida” y elige la carpeta descomprimida.',
        'Fija el icono en la barra, ábrelo y pon un PIN.',
      ], note: 'Para padres y escuelas: en la página “Detalles” de la extensión, activa “Permitir en modo incógnito”. Si no, las ventanas privadas no se bloquean.' },
      { h: 'Datos', facts: [
        ['Versión', '1.4.0 (Manifest V3)'], ['Tamaño', '724 KB'], ['Navegadores', 'Chrome, Edge, Brave, Opera. Firefox y las tiendas oficiales: pronto'],
        ['Permisos', 'Reglas de bloqueo, almacenamiento local, un temporizador diario'], ['Datos enviados', 'Ninguno. Solo se descarga la lista pública una vez al día'], ['Precio', 'Gratis'],
      ]},
    ],
    faq: [
      { q: '¿Por qué aún no está en Chrome Web Store?', a: 'Las versiones de las tiendas están en camino. Mientras tanto la instalas a mano en un minuto, con los pasos de arriba.' },
      { q: '¿Por qué una descarga antigua dice “Human Override”?', a: 'Ese era su nombre hasta noviembre de 2026. La versión 1.3.0 y posteriores muestran el nombre Mindveto. Es el mismo producto.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'Bloquear apps de IA en Android',
    desc: 'App para Android que bloquea ChatGPT, Gemini, Character.AI y más de 150 servicios de IA en todas las apps del móvil. PIN y alertas. No envía nada.',
    h1: 'IA apagada en todas las apps del móvil.',
    lead: 'Los navegadores son solo la mitad: las apps de IA viven en el móvil. La app de Mindveto para Android bloquea direcciones de IA para todas las apps, y te avisa si alguien intenta apagarla.',
    actions: [{ label: 'Descargar para Android (45 KB, beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'Cómo funciona', p: [
        'La app ejecuta en el móvil un pequeño filtro local de nombres de internet (DNS). Cuando una app pide una dirección de IA, el filtro responde que no existe. Todo lo demás funciona con normalidad.',
        'Solo esas consultas de nombres pasan por la app. No se nos envía nada.',
        'Filtro familiar opcional: activa “Sitios para adultos” y “SafeSearch” en la app. Los sitios porno no se abren en ninguna app, y Google, Bing, DuckDuckGo y YouTube muestran resultados seguros. Con un PIN, apagarlo pide el PIN.',
      ]},
      { h: 'Instalar', steps: [
        'Abre el enlace de descarga en el móvil.',
        'Cuando Android pregunte, permite “instalar apps desconocidas” para tu navegador.',
        'Abre la app y toca el botón grande.',
        'Activa “VPN siempre activada” y “Bloquear conexiones sin VPN” (la app te muestra cómo). Así no se puede saltar.',
        'Pon un PIN.',
      ], note: 'Beta: para actualizar, desinstala primero la versión antigua. La versión de Google Play llegará con 15 días de prueba gratis de Plus. La app está en inglés, neerlandés y francés por ahora.' },
      { h: 'Datos', facts: [
        ['Versión', 'Beta, Android 16 (SDK 36)'], ['Tamaño', '45 KB'], ['Requiere', 'Android 8 o posterior'],
        ['Alertas de manipulación', 'Sí, un aviso si la protección se detiene'], ['Datos enviados', 'Ninguno'], ['Precio', 'Gratis durante la beta'],
      ]},
    ],
    faq: [
      { q: '¿Ralentiza el móvil o gasta batería?', a: 'Apenas. Solo responde consultas de nombres; no envía tu tráfico a un servidor.' },
      { q: '¿Puedo usar otra VPN a la vez?', a: 'No. Android permite una VPN cada vez. Mindveto usa ese espacio para su filtro local.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'Bloquear la IA en Windows, en todos los navegadores y apps',
    desc: 'Descarga gratuita para Windows que bloquea ChatGPT y más de 150 servicios de IA en todos los navegadores y apps, y puede apagar Copilot y Recall.',
    h1: 'Bloquea la IA en todo el PC con Windows.',
    lead: 'Sin extensión: una descarga bloquea direcciones de IA para todos los navegadores y apps del ordenador. También puede apagar la IA integrada en Windows.',
    actions: [{ label: 'Descargar para Windows (490 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Instalar', fold: 'Mostrar los pasos de instalación', foldLead: 'Las versiones de las tiendas están en camino. Mientras tanto lo instalas a mano en un minuto.', steps: [
        'Descomprime la descarga.',
        'Haz doble clic en “Start-Mindveto.bat” y pulsa Sí.',
        'Escribe 1 para bloquear la IA. Escribe 3 para apagar también Copilot, Recall y la IA de Edge y Chrome.',
        'Da a niños o personal una cuenta normal (sin administrador). Así no pueden deshacerlo.',
        'Escribe 5 para activar el filtro familiar: sitios porno y +18 bloqueados, SafeSearch forzado en Google, Bing y YouTube. Escribe 6 para apagarlo.',
      ], note: 'Puede que Windows diga primero que “protegió tu PC”. Haz clic en “Más información” y luego en “Ejecutar de todas formas”. El script es texto plano: puedes abrirlo con el Bloc de notas y leer cada línea. El script está en inglés.' },
      { h: 'Datos', facts: [
        ['Funciona en', 'Windows 10 y 11'], ['Cómo', 'Añade direcciones de IA al archivo hosts de Windows y fija políticas oficiales de Windows para la IA integrada'],
        ['Deshacer', 'Ejecútalo otra vez y escribe 2 (4 para la IA integrada)'], ['Requiere', 'Derechos de administrador una vez'], ['Precio', 'Gratis'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'Bloquear la IA en Mac y Linux',
    desc: 'Script gratuito que bloquea ChatGPT y más de 150 servicios de IA en todos los navegadores y apps de un Mac o Linux. Un comando para activar, otro para quitar.',
    h1: 'Un comando. IA apagada en todo el Mac o Linux.',
    lead: 'El script añade direcciones de IA al archivo hosts del sistema, así que cubre todos los navegadores y apps del ordenador.',
    actions: [{ label: 'Descargar para Mac y Linux (485 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Instalar', steps: [
        'Descomprime la descarga.',
        'Abre Terminal en la carpeta descomprimida.',
        L('Escribe <code>sudo sh mindveto.sh on</code> y tu contraseña.'),
        L('Para volver a permitir la IA: <code>sudo sh mindveto.sh off</code>.'),
        L('Filtro familiar (sitios porno y +18, SafeSearch): <code>sudo sh mindveto.sh family-on</code>, y <code>family-off</code> para deshacerlo.'),
      ], note: 'Usa una cuenta normal (sin administrador) para los niños. Así no pueden cambiar el archivo hosts.' },
      { h: 'Datos', facts: [
        ['Funciona en', 'macOS, Ubuntu, Debian, Fedora y la mayoría de sistemas Linux'], ['Deshacer', 'Un comando'], ['Precio', 'Gratis'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'Bloquear la IA en toda una red: DNS, cortafuegos, políticas',
    desc: 'Listas gratuitas y un paquete IT para bloquear ChatGPT y más de 150 servicios de IA en toda una red: Pi-hole, AdGuard, Windows DNS, BIND, Squid, GPO, Intune.',
    h1: 'Bloquea la IA para cada dispositivo de la red.',
    lead: 'Para hogares, escuelas, oficinas y servicios públicos. Usa nuestras listas gratuitas con el filtro que ya tienes, o despliega hoy el paquete IT.',
    actions: [{ label: 'Descargar el paquete IT (13 KB)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Listas gratuitas', p: ['Añade una dirección a tu filtro. Las listas mantienen la misma dirección y se actualizan cuando aparecen nuevos servicios de IA.'], facts: [
        ['Lista AdGuard / uBlock', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['Archivo hosts', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Dominios simples', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Dónde usarlas', list: [
        'Router de casa u oficina con Pi-hole o AdGuard Home: añade la lista una vez y cada dispositivo del wifi queda cubierto.',
        'Android y iPhone: una cuenta gratuita de AdGuard DNS con nuestra lista como reglas propias, luego DNS privado (Android) o un perfil (iPhone).',
        'Un ordenador: añade la lista hosts al archivo hosts (requiere administrador).',
      ]},
      { h: 'En el paquete IT', list: [
        'Políticas de Chrome y Edge (GPO, Intune, Google Admin) para instalar la extensión de forma obligatoria y bloquear sitios de IA.',
        'Políticas de Firefox.',
        'Windows Server DNS (PowerShell), zona RPZ de BIND, Unbound, dnsmasq.',
        'ACL para el proxy Squid y una lista para cortafuegos Palo Alto, Fortinet y Check Point.',
      ], note: 'Las listas DNS bloquean dominios completos. Algunos bloqueos a nivel de página, como Bing Chat, solo funcionan en la extensión de navegador.' },
    ],
    faq: [
      { q: '¿Podemos usar las listas comercialmente?', a: L('Sí, dentro de tu propia organización. Revenderlas requiere permiso por escrito. Mira las <a href="/terms/">condiciones</a>.') },
      { q: '¿Ayudáis con un despliegue?', a: L('Sí. Escribe a <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> con el número de dispositivos y tu configuración.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Botón de examen: apaga la IA para tu clase',
    desc: 'Botón de examen gratuito para docentes: un toque bloquea todos los chatbots de IA en los navegadores de tu clase durante un examen. Sin cuentas, sin nombres.',
    h1: 'Nada de IA durante el examen.',
    lead: 'Un toque apaga todos los chatbots de IA en los navegadores de tu clase, mientras dure el examen. Gratis, sin cuentas, sin nombres de alumnos.',
    blocks: [
      { h: 'Cómo funciona', steps: ['Crea aquí una clase. Recibes un código de clase y un enlace privado de docente.', 'Los alumnos abren la extensión Mindveto, van a “Class · exam mode” y escriben el código.', 'Pulsa “Iniciar modo examen”. En menos de un minuto toda la IA queda bloqueada en sus navegadores, hasta que se acabe el tiempo o lo detengas.'] },
    ],
    faq: [
      { q: '¿Qué necesitan los alumnos?', a: L('La <a href="/browser-extension/">extensión Mindveto</a> en su navegador, unida a tu clase con el código. En los ordenadores del centro, el centro la instala una vez.') },
      { q: '¿Qué guarda vuestro servidor?', a: 'Un código de clase cifrado (hash), una clave de docente cifrada y la hora de fin del examen. Sin nombres, sin correos, sin direcciones IP.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Guardia de pegado: datos privados fuera de los chats de IA',
    desc: 'Mindveto avisa antes de que IBAN, números de identidad, listas de correos, claves secretas o textos confidenciales se peguen en ChatGPT y otros sitios de IA.',
    h1: 'Una segunda mirada antes de pegar.',
    lead: 'La gente pega primero y piensa después. En los sitios de IA, la guardia de pegado revisa lo que pegas, en tu propio ordenador, y pregunta antes de que datos privados entren en el chat.',
    actions: [{ label: 'Obtener la extensión', to: 'browser', solid: true }, { label: 'Para oficinas', to: 'offices' }],
    blocks: [
      { h: 'Qué detecta', list: [
        'Números de cuenta bancaria (IBAN) y de tarjeta.',
        'Números de identidad nacional y de seguridad social.',
        'Listas de direcciones de correo.',
        'Claves secretas, contraseñas y tokens de acceso.',
        'Textos marcados como “confidential”, “vertrouwelijk” o “confidentiel”.',
        'Tus propias palabras privadas: nombres de clientes, códigos de proyecto, números de expediente.',
      ]},
      { h: 'Qué puedes elegir', steps: [
        'No pegar.',
        'Pegar sin las partes privadas: se sustituyen por un marcador.',
        'Pegar de todos modos, si estás seguro.',
      ]},
      { h: 'Dónde se hace la comprobación', p: [
        'En tu ordenador, dentro del navegador. El texto pegado nunca se guarda ni se envía, tampoco a nosotros.',
      ], note: 'Funciona en sitios de IA de chat, búsqueda, escritura y programación. No vigila tu correo, tus documentos ni otras webs.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Descargar Mindveto: navegador, Android, Windows, Mac',
    desc: 'Descarga Mindveto gratis: extensión de navegador, app para Android, scripts para Windows y Mac/Linux, listas y el paquete IT. Sin cuenta, sin rastreo.',
    h1: 'Descargar Mindveto.',
    lead: 'Elige el dispositivo que quieres proteger. Todo es gratis y no necesita cuenta. Las apps están en inglés, neerlandés y francés por ahora.',
    blocks: [
      { h: 'Extensión de navegador', p: ['Chrome, Edge, Brave y Opera. Versión 1.4.0, 724 KB.'], actions: [{ label: 'Descargar', url: DL + 'human-override-1.4.0.zip', solid: true, download: true }, { label: 'Pasos de instalación', to: 'browser' }] },
      { h: 'App para Android (beta)', p: ['Bloquea la IA en todas las apps. 45 KB.'], actions: [{ label: 'Descargar', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Pasos de instalación', to: 'android' }] },
      { h: 'Windows', p: ['Todos los navegadores y apps del PC. 490 KB.'], actions: [{ label: 'Descargar', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Pasos de instalación', to: 'windows' }] },
      { h: 'Mac y Linux', p: ['Un comando, en todo el sistema. 485 KB.'], actions: [{ label: 'Descargar', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Pasos de instalación', to: 'maclinux' }] },
      { h: 'Paquete IT y listas', p: ['Archivos para DNS, cortafuegos y políticas de navegador. 13 KB.'], actions: [{ label: 'Descargar', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Todas las listas', to: 'network' }] },
    ],
    related: ['help', 'pricing'],
  },

  pricing: {
    title: 'Precios de Mindveto: Gratis, Plus, Escuela y Business',
    desc: 'Bloquear es gratis. Plus 14,99 € al año para familias, 1 € por alumno para escuelas, 2,50 € por usuario al mes para oficinas. Gratis durante el lanzamiento.',
    h1: 'Bloquear es gratis. Los extras pagan el trabajo.',
    lead: 'Hoy todas las funciones son gratis mientras lanzamos. Los planes de pago empiezan con la versión de Google Play.',
    blocks: [],
    faq: [
      { q: '¿Cuándo tengo que pagar?', a: 'Ahora no. Cuando empiecen los planes de pago, tú decides si mejoras. No se cobra nada automáticamente y el plan gratuito se queda.' },
      { q: '¿Hay oferta de lanzamiento?', a: 'Sí. Las primeras 250 personas que instalen la app de Android desde Google Play tendrán Plus gratis durante un año. Un contador en esta página mostrará cuántas plazas quedan.' },
      { q: '¿Los precios incluyen IVA?', a: 'Sí, los precios para particulares incluyen el IVA belga. Escuelas y empresas reciben una factura.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Ayuda y preguntas frecuentes',
    desc: 'Respuestas sobre Mindveto: qué versión necesitas, PIN, horario, privacidad, desinstalación, y qué puede y qué no puede bloquear Mindveto.',
    h1: 'Ayuda',
    lead: 'Respuestas cortas a las preguntas más habituales. ¿No está la tuya? Escribe a hello@mindveto.app (respondemos en inglés, neerlandés o francés).',
    blocks: [
      { h: '¿Qué versión necesito?', facts: [
        ['El móvil Android de un niño', L('<a href="/android/">App para Android</a>')],
        ['Un ordenador familiar o de oficina', L('<a href="/browser-extension/">Extensión de navegador</a>, más <a href="/windows/">Windows</a> o <a href="/mac-linux/">Mac</a> para todas las apps')],
        ['Ordenadores escolares', L('<a href="/browser-extension/">Extensión</a> mediante políticas del navegador, más el <a href="/exam-button/">botón de examen</a>')],
        ['Todos los dispositivos de casa o del trabajo', L('<a href="/network/">Listas de red</a>')],
      ]},
    ],
    faq: [
      { q: 'He olvidado mi PIN.', a: 'Por seguridad no hay botón de restablecer. Quita la extensión en la página de extensiones del navegador (requiere control del ordenador) e instálala de nuevo.' },
      { q: 'Una web normal está bloqueada por error.', a: 'Abre la extensión y añade el sitio a tu lista de permitidos. Envíanos la dirección y corregimos la lista pública.' },
      { q: 'Una herramienta de IA no está bloqueada.', a: 'Añádela ya a tu propia lista de bloqueo y envíanos la dirección. Añadimos nuevos servicios de IA a la lista pública.' },
      { q: '¿Cómo lo desinstalo?', a: 'Navegador: quítalo en la página de extensiones. Android: apágalo y desinstálalo. Windows: ejecuta el script y escribe 2. Mac y Linux: ejecuta el script con “off”.' },
      { q: '¿Mindveto usa IA?', a: 'No. El bloqueo y la guardia de pegado usan reglas simples en tu dispositivo.' },
      { q: '¿Quién hace Mindveto?', a: L('Amghar Said, un creador independiente. <a href="/about/">Acerca de</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'Acerca de Mindveto',
    desc: 'Mindveto lo hace Amghar Said, un creador independiente. Por qué construimos un interruptor de IA, cómo lo mantenemos privado y qué pasa si algún día paramos.',
    h1: 'Las personas deberían decidir cuándo la IA forma parte de su día.',
    lead: 'Mindveto lo hace Amghar Said, un creador independiente. Empezó como Human Override en 2026 y recibió su propio nombre en noviembre de 2026.',
    blocks: [
      { h: 'Por qué el nombre', p: [
        'En los años 80, el neurocientífico Benjamin Libet describió cómo la mente consciente puede frenar un impulso justo antes de actuar: un veto. Mindveto da esa pausa a quien la quiere frente a la IA.',
      ]},
      { h: 'Lo que prometemos', list: [
        'Sin cuenta, sin rastreo, sin anuncios, sin venta de datos.',
        'Límites honestos, escritos en las páginas de producto, no escondidos en la letra pequeña.',
        'Bloquear sigue siendo gratis.',
        'Web en 8 idiomas; soporte por correo en inglés, neerlandés y francés.',
      ]},
      { h: 'Si algún día paramos', p: [
        'Todo lo que instalaste sigue funcionando: la extensión, la app y los scripts bloquean con la lista que ya está en tu dispositivo. Siempre puedes quitarlos de la forma normal.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Política de privacidad',
    desc: 'Mindveto no recoge datos personales: sin cookies, sin rastreadores, sin cuentas. Qué tratan la web, las apps y el modo examen, y tus derechos según el RGPD.',
    h1: 'Política de privacidad',
    lead: 'Versión corta: no recogemos datos personales. Esta página explica las pocas cosas que sí pasan por un servidor, y tus derechos. Versión 1, 12 de noviembre de 2026. La versión inglesa es la de referencia.',
    blocks: [
      { h: 'Responsable', p: [L('Amghar Said, Bélgica. Contacto: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Esta web', list: [
        'Sin cookies, sin analítica, sin rastreadores, sin publicidad, sin fuentes ni scripts de otras empresas.',
        'La web está alojada en GitHub Pages (GitHub, Inc., EE. UU.). Como cualquier alojamiento, GitHub trata brevemente tu dirección IP en registros del servidor para servir y proteger la web. Nosotros no recibimos esos registros.',
        'La página del botón de examen guarda tu código de clase y tu clave de docente en tu propio navegador (almacenamiento local), solo para que la página funcione. Puedes borrarlos con “Olvidar esta clase”.',
      ]},
      { h: 'Las apps y los scripts', list: [
        'El bloqueo, la guardia de pegado y todos los ajustes funcionan en tu dispositivo. El texto pegado nunca se guarda ni se envía.',
        'La extensión descarga la lista pública de bloqueo una vez al día. No envía datos personales con esa petición.',
        'La app de Android solo filtra consultas de nombres de internet en el móvil. No nos envía nada.',
      ]},
      { h: 'Modo examen', p: [
        'Cuando un docente crea una clase, nuestra base de datos (Supabase, Fráncfort, UE) guarda un código de clase cifrado (hash), una clave de docente cifrada y la hora de fin del examen. Las extensiones de la clase envían solo el código de clase una vez por minuto. Para evitar abusos, se guarda una versión cifrada de la dirección IP durante una hora. Sin nombres, sin correos.',
        'Base jurídica: nuestro interés legítimo en ofrecer el botón de examen de forma segura (artículo 6.1.f del RGPD).',
      ]},
      { h: 'Correo', p: ['Si nos escribes, usamos tu mensaje solo para responderte y lo borramos cuando ya no hace falta.'] },
      { h: 'Tus derechos', p: [
        L('Puedes pedir acceso, rectificación o supresión, y oponerte. Escribe a <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. También puedes reclamar ante la autoridad belga de protección de datos (<a href="https://www.dataprotectionauthority.be" rel="noopener">dataprotectionauthority.be</a>) o ante la autoridad de tu país.'),
      ]},
    ],
  },

  terms: {
    title: 'Condiciones de uso',
    desc: 'Condiciones de uso de Mindveto: qué hace y qué no, tu responsabilidad, sin garantía, responsabilidad limitada, propiedad y ley aplicable.',
    h1: 'Condiciones de uso',
    lead: 'Mindveto es software hecho por Amghar Said. Ayuda a bloquear servicios de IA, pero ninguna herramienta puede bloquear toda la IA. Versión 2, 12 de noviembre de 2026. Se aplica a la extensión, la app de Android, los scripts para Windows, Mac y Linux, las listas y el paquete IT. Esta es una traducción; si hay diferencias, prevalece la versión inglesa.',
    blocks: [
      { h: '1. Quién lo ofrece', p: [L('Mindveto (antes Human Override) ha sido creado por Amghar Said (“el autor”), que es su propietario. Contacto: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Aceptación', p: ['Al instalar, descargar o usar Mindveto aceptas estas condiciones. Si no estás de acuerdo, no lo uses y quítalo.'] },
      { h: '3. Qué hace y qué no', p: ['Mindveto intenta impedir el acceso a servicios de IA bloqueando sus direcciones web. No garantiza que no se pueda llegar a ninguna IA. No puede bloquear la IA integrada en servicios que permites, la IA que funciona sin conexión en un dispositivo, otros navegadores, apps o dispositivos, VPN, proxies, otros servicios DNS, ni servicios de IA nuevos que aún no estén en la lista. Cualquiera con suficiente acceso al dispositivo puede cambiar o quitar los ajustes. Las listas pueden bloquear un sitio por error o no incluir alguno.'] },
      { h: '4. Tu responsabilidad', p: ['Tú decides dónde y cómo usas Mindveto. Escuelas, empresas y otras organizaciones siguen siendo plenamente responsables de sus propias normas, supervisión, seguridad, pruebas y cumplimiento de la ley, incluida la de privacidad y la laboral. Pruébalo antes de confiar en él. No lo uses para infringir la ley ni para vigilar a personas sin base legal.'] },
      { h: '5. Se ofrece “tal cual”', p: ['Mindveto se ofrece “tal cual” y “según disponibilidad”, sin garantía de ningún tipo, expresa o implícita, incluida la idoneidad para un fin concreto, la exactitud, la disponibilidad o la ausencia de errores.'] },
      { h: '6. Limitación de responsabilidad', p: ['En la máxima medida que permita la ley, Amghar Said no responde de ningún daño directo o indirecto, pérdida de datos, pérdida de ingresos, pérdida de acceso, bloqueos fallidos, sitios bloqueados por error ni ninguna otra consecuencia de usar o no poder usar Mindveto. En los planes de pago, la responsabilidad total se limita a lo que pagaste en los últimos doce meses. Nada de esto limita la responsabilidad que la ley no permite limitar, como en caso de dolo o negligencia grave, ni los derechos obligatorios de los consumidores.'] },
      { h: '7. Propiedad', p: ['Mindveto, su código, listas de bloqueo, iconos, textos y nombre son © 2026 Amghar Said, todos los derechos reservados. Puedes usar la versión oficial sin modificar. Copiarlo, modificarlo, redistribuirlo o venderlo requiere permiso por escrito.'] },
      { h: '8. Privacidad', p: [L('Mindveto no recoge datos personales. Mira la <a href="/privacy/">política de privacidad</a>.')] },
      { h: '9. Planes de pago', p: ['Los planes de pago, cuando existan, se describen en la página de precios antes de comprar. Las compras a través de Google Play siguen también las condiciones de Google Play. Los consumidores conservan sus derechos legales, incluido el derecho de desistimiento cuando se aplique.'] },
      { h: '10. Cambios y fin', p: ['El autor puede cambiar Mindveto, las listas o estas condiciones, o dejar de ofrecerlo. La versión vigente de estas condiciones está siempre en esta página.'] },
      { h: '11. Ley aplicable', p: ['Estas condiciones se rigen por la ley belga, sin perjuicio de las normas obligatorias del país donde vive el consumidor.'] },
    ],
  },

  legal: {
    title: 'Aviso legal',
    desc: 'Aviso legal de Mindveto: quién publica la web y el software, cómo contactarnos, alojamiento y propiedad intelectual. Información del editor.',
    h1: 'Aviso legal',
    lead: 'Quién publica esta web y el software Mindveto.',
    blocks: [
      { h: 'Editor', facts: [
        ['Nombre', 'Amghar Said'], ['País', 'Bélgica'], ['Correo', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Número de empresa', COMPANY.kbo || 'Se mostrará aquí antes de que empiece cualquier plan de pago'],
        ...(COMPANY.vat ? [['Número de IVA', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Dirección comercial', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Alojamiento', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, EE. UU.'] },
      { h: 'Propiedad intelectual', p: ['© 2026 Amghar Said. Todos los derechos reservados. Nombres de productos como ChatGPT, Gemini, Claude y Copilot pertenecen a sus dueños y se citan solo para describir lo que bloquea Mindveto. Mindveto no está afiliado a ellos.', 'Fuente: Atkinson Hyperlegible Next, SIL Open Font License, servida desde esta web. Fechas de vacaciones escolares: OpenHolidays API (ODbL).'] },
    ],
  },

  guide: {
    title: 'Cómo bloquear ChatGPT en cualquier dispositivo (guía 2026)',
    desc: 'Bloquea ChatGPT en Chrome, Windows, Mac, Android, iPhone o toda una red wifi. Métodos gratuitos paso a paso, con los límites honestos de cada uno.',
    h1: 'Cómo bloquear ChatGPT, en cada dispositivo.',
    lead: 'La respuesta corta: bloquea la dirección chatgpt.com (y chat.openai.com) en el navegador, en el ordenador, en el móvil o en el router. Esta página muestra la forma gratuita para cada caso, y cuál encaja con tu situación.',
    actions: [{ label: 'Descargar Mindveto gratis', to: 'download', solid: true }, { label: '¿Qué versión necesito?', to: 'help' }],
    blocks: [
      { h: 'Elige el método que encaja', facts: [
        ['Un navegador (Chrome, Edge, Brave, Opera)', L('<a href="/browser-extension/">Extensión de navegador</a>: un interruptor, PIN. Un minuto.')],
        ['Todo un PC con Windows, cada navegador y app', L('<a href="/windows/">Descarga para Windows</a>: añade las direcciones de IA al archivo hosts.')],
        ['Un Mac o un ordenador Linux', L('<a href="/mac-linux/">Un comando</a> en Terminal.')],
        ['Un móvil Android, también dentro de las apps', L('<a href="/android/">App para Android</a> con un filtro local y un PIN.')],
        ['Un iPhone', L('Un servicio DNS con nuestra <a href="/network/">lista gratuita</a>, o Tiempo de uso de Apple para sitios concretos.')],
        ['Todos los dispositivos del wifi', L('<a href="/network/">Listas de red</a> para Pi-hole, AdGuard Home o el DNS de la escuela u oficina.')],
      ]},
      { h: 'Bloquear ChatGPT en Chrome o Edge', steps: [
        L('Descarga la <a href="/browser-extension/">extensión Mindveto</a> y descomprímela.'),
        L('Abre <code>chrome://extensions</code> (en Edge: <code>edge://extensions</code>) y activa el “Modo de desarrollador”.'),
        'Haz clic en “Cargar descomprimida” y elige la carpeta descomprimida.',
        'Abre Mindveto, pulsa el interruptor y pon un PIN. ChatGPT, Gemini, Copilot y más de 150 herramientas de IA muestran ahora una página de bloqueo.',
        'En la página “Detalles” de la extensión, activa “Permitir en modo incógnito”, o las ventanas privadas no se bloquean.',
      ]},
      { h: 'Bloquear ChatGPT sin software', p: [
        L('Puedes hacerlo a mano. En un ordenador, añade estas líneas al archivo hosts (requiere administrador): <code>0.0.0.0 chatgpt.com</code> y <code>0.0.0.0 chat.openai.com</code>. En un router con Pi-hole o AdGuard Home, añade esos dos nombres a la lista de bloqueo.'),
        L('El problema: ChatGPT es solo una entre muchas. Gemini, Copilot, Claude, Character.AI y las demás siguen abiertas, y cada semana aparecen nuevas. Por eso Mindveto mantiene una <a href="/network/">lista pública de más de 150 servicios de IA</a> que se actualiza a diario. Puedes usar esa lista sin instalar nada nuestro.'),
      ]},
      { h: 'Límites honestos de cada método', list: [
        'Un bloqueo solo funciona donde lo instalas. Un niño o un compañero aún puede usar otro móvil u otra red.',
        'Quien es administrador del dispositivo puede quitar un bloqueo. Da a niños y personal una cuenta normal (sin administrador).',
        'Las extensiones de navegador no cubren otros navegadores ni apps. Para eso, bloquea en el ordenador, el móvil o la red.',
        'Las listas que bloquean dominios completos no pueden bloquear una sola página. Algunos bloqueos a nivel de página, como Bing Chat, solo funcionan en la extensión.',
      ], note: 'El bloqueo funciona mejor junto a una norma clara: cuándo se permite la IA, y por qué ahora no. Mindveto no lee nada ni envía nada; solo impide que se abran direcciones de IA.', human: true },
    ],
    faq: [
      { q: '¿Cómo bloqueo ChatGPT en el móvil de mi hijo?', a: L('En Android, instala la <a href="/android/">app Mindveto</a>, activa “VPN siempre activada” y pon un PIN. En un iPhone, usa un servicio DNS con nuestra lista gratuita, o Tiempo de uso de Apple para bloquear chatgpt.com. Mira <a href="/parents/">para padres</a>.') },
      { q: '¿Cómo bloqueo ChatGPT en los ordenadores del colegio?', a: L('Instala la extensión de forma obligatoria con políticas de Chrome o Edge y bloquea la IA en el DNS del centro con el paquete IT. Los docentes también pueden usar el <a href="/exam-button/">botón de examen</a>. Mira <a href="/schools/">para escuelas</a>.') },
      { q: '¿Cómo bloqueo ChatGPT en el trabajo pero permito Copilot?', a: L('En la extensión, marca la IA que aprueba tu empresa y deja bloqueado el resto. La <a href="/paste-guard/">guardia de pegado</a> también avisa antes de pegar datos privados en un sitio de IA. Mira <a href="/offices/">para oficinas</a>.') },
      { q: '¿Bloquear ChatGPT es gratis?', a: 'Sí. El bloqueo, el PIN y el horario son gratis en Mindveto, y las listas de bloqueo son de uso libre.' },
      { q: '¿Puedo bloquear ChatGPT solo durante los deberes o el horario laboral?', a: 'Sí. La extensión tiene un horario, con las vacaciones escolares de Bélgica, Países Bajos y Francia incluidas.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Plantilla gratuita de política de IA para pequeñas oficinas',
    desc: 'Una política de IA de una página para gestorías, abogados y otras pequeñas oficinas: herramientas aprobadas, qué nunca va a la IA y cómo comprobarlo. Gratis.',
    h1: 'Una política de IA que tu equipo lee en dos minutos.',
    lead: 'Una plantilla de una página para gestorías, abogados, notarías y otras pequeñas oficinas. Cópiala, rellena las partes entre corchetes y compártela con tu equipo.',
    actions: [{ label: 'Imprimir o guardar como PDF', url: '#print', solid: true }, { label: 'Para oficinas', to: 'offices' }],
    blocks: [
      { h: 'Por qué tener una', p: ['Desde el 2 de febrero de 2025, el Reglamento europeo de IA pide a las organizaciones que usan herramientas de IA que ayuden a su personal a entenderlas (alfabetización en IA). Una política breve por escrito es un primer paso sencillo, y protege los datos de tus clientes.'] },
      { h: '1. Objetivo', p: ['Usamos la IA donde nos ayuda a trabajar mejor. Los datos de clientes y los expedientes confidenciales siguen protegidos. Esta política dice qué herramientas usamos y qué nunca entra en ellas.'] },
      { h: '2. Herramientas de IA aprobadas', list: ['[Herramienta, por ejemplo Microsoft Copilot con nuestra cuenta de empresa]: permitida para [redactar, resumir nuestros propios textos].', 'Los demás chatbots, buscadores con IA y herramientas de escritura con IA no se usan en dispositivos de trabajo ni para el trabajo.'] },
      { h: '3. Nunca en una herramienta de IA', list: ['Nombres de clientes junto con sus datos.', 'Números de cuenta y de tarjeta.', 'Números de identidad, de seguridad social u otros identificadores.', 'Contratos, declaraciones de impuestos, expedientes médicos o de RR. HH.', 'Contraseñas, códigos de acceso y claves.', 'Cualquier cosa marcada como confidencial.'] },
      { h: '4. Antes de usar un resultado de IA', list: ['Comprueba tú mismo hechos, cifras y fuentes.', 'Una persona valida cada consejo o carta que va a un cliente.', 'Di que la IA ayudó cuando un cliente lo pregunte, o cuando la ley o tus normas profesionales lo exijan.'] },
      { h: '5. Cómo lo cumplimos', list: ['En los ordenadores de trabajo, Mindveto bloquea las herramientas de IA que no aprobamos y avisa antes de pegar datos privados en un chat de IA. La comprobación se hace en el ordenador; no se envía nada.', 'Los ajustes están bloqueados con un PIN que guarda [nombre].'] },
      { h: '6. Errores y preguntas', p: ['¿Has pegado algo por error? Díselo a [nombre] el mismo día. Preferimos saberlo pronto que tarde.', 'Responsable de esta política: [nombre]. Última revisión: [fecha]. Próxima revisión: [fecha más seis meses].'], note: 'Esta plantilla te ayuda a empezar; no es asesoramiento legal. Revisa tus normas profesionales e informa al personal antes de introducir nuevas normas de IT.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },
};

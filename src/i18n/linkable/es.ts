import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

// Links use the English page paths; the page template rewrites them to the Spanish pages.
export const LK: Linkable = {
  ui: {
    checked: 'Última comprobación', cite: 'Cómo citar esta página', src: 'Fuente',
    statsT: 'Niños, colegios e IA: las cifras', statsD: '24 cifras comprobadas con su fuente, libres para citar.',
    gdprT: 'ChatGPT y datos de clientes', gdprD: 'Qué implica el RGPD para tu oficina, y un plan en 5 pasos.',
  },
  pages: {
    stats: {
      title: 'Niños, colegios e IA: las cifras (2026)',
      desc: '24 estadísticas comprobadas sobre niños, adolescentes, colegios e IA: chatbots, compañeros de IA, trampas, deepfakes y fugas de datos. Con fuente, año y enlace.',
      h1: 'Niños, colegios e IA: las cifras (2026).',
      lead: '24 cifras sobre cómo usan la IA los niños, los estudiantes y los empleados, y sobre lo que sale mal. Cada cifra enlaza a su fuente original y se comprobó el mismo día. Libres para citar.',
      blocks: [
        { h: 'Niños y adolescentes: chatbots y compañeros de IA', stats: [
          st('64 %', 'de los adolescentes de EE. UU. de 13 a 17 años dice usar chatbots de IA.', 'pew1'),
          st('Unos 3 de cada 10', 'adolescentes de EE. UU. usan chatbots de IA cada día, incluido un 16 % que lo hace varias veces al día o casi sin parar.', 'pew1'),
          st('59 %', 'de los adolescentes de EE. UU. usa ChatGPT, con mucho el chatbot más usado entre ellos.', 'pew1'),
          st('72 %', 'de los adolescentes de EE. UU. de 13 a 17 años ha usado alguna vez un compañero de IA (AI companion). Más de la mitad los usa al menos unas cuantas veces al mes.', 'csm'),
          st('Cerca de 1 de cada 3', 'adolescentes de EE. UU. considera las conversaciones con un compañero de IA igual o más satisfactorias que las que tiene con amigos reales.', 'csm'),
          st('Cerca de 1 de cada 3', 'adolescentes de EE. UU. que usan compañeros de IA ha preferido hablar de algo importante o serio con un compañero de IA en lugar de con una persona real.', 'csm'),
          st('12 %', 'de los adolescentes de EE. UU. ha usado chatbots para buscar apoyo emocional o consejo.', 'pew2'),
          st('63,8 %', 'de las personas de 16 a 24 años de la UE usó herramientas de IA generativa en 2025, casi el doble que el conjunto de adultos de 16 a 74 años (32,7 %).', 'eu1'),
        ] },
        { h: 'Colegio: deberes, estudio y trampas', stats: [
          st('54 %', 'de los adolescentes de EE. UU. ha usado chatbots para que le ayuden con las tareas escolares.', 'pew2'),
          st('59 %', 'de los adolescentes de EE. UU. cree que en su centro se hacen trampas con IA al menos con bastante frecuencia.', 'pew2'),
          st('26 %', 'de los adolescentes de EE. UU. usó ChatGPT para tareas escolares en 2024, el doble que en 2023 (13 %).', 'pew3'),
          st('39,3 %', 'de las personas de 16 a 24 años de la UE usó IA generativa para estudios reglados en 2025, frente al 9,4 % del conjunto de adultos.', 'eu1'),
          st('94 %', 'de los estudiantes de grado a tiempo completo del Reino Unido usa IA generativa en trabajos evaluados.', 'hepi'),
        ] },
        { h: 'Deepfakes, desnudos falsos y voces falsas', stats: [
          st('1 de cada 8', 'jóvenes de 13 a 20 años conoce en persona a alguien de quien se han hecho desnudos falsos (deepfake nudes).', 'thorn'),
          st('1 de cada 5', 'adolescentes creía que era legal crear desnudos falsos de otra persona, incluso de otro menor.', 'thorn'),
          st('34 %', 'de las víctimas jóvenes de desnudos falsos se lo contó a su madre o a su padre, aunque el 62 % de quienes no eran víctimas decía que lo haría.', 'thorn'),
          st('73 %', 'es la proporción de voces falsas hechas con IA que los oyentes detectaron correctamente, en una prueba con 529 personas en inglés y mandarín.', 'plos'),
          st('3.440', 'vídeos de abuso sexual infantil creados con IA encontró la Internet Watch Foundation en 2025, frente a 13 en 2024.', 'iwf'),
        ] },
        { h: 'Trabajo: uso de IA y fugas de datos', stats: [
          st('58 %', 'de los empleados usa IA en el trabajo de forma intencionada y habitual (encuesta a 48.340 personas de 47 países).', 'kpmg'),
          st('48 %', 'de los empleados dice haber subido información de la empresa, como datos financieros, de ventas o de clientes, a herramientas de IA públicas.', 'kpmg'),
          st('20,0 %', 'de las empresas de la UE con 10 o más empleados usó IA en 2025, frente al 13,5 % en 2024.', 'eu2'),
          st('13 %', 'de las organizaciones notificó una brecha en modelos o aplicaciones de IA. De ellas, el 97 % no tenía controles de acceso para la IA.', 'ibm'),
          st('1 de cada 5', 'organizaciones notificó una brecha causada por la IA en la sombra: herramientas de IA que el personal usa sin aprobación. Las que tenían mucha pagaron de media 670.000 dólares más por brecha.', 'ibm'),
          st('15 millones de €', 'de multa a OpenAI de la autoridad italiana de protección de datos por ChatGPT, entre otras cosas por entrenar con datos personales sin una base jurídica adecuada.', 'gar'),
        ] },
        { h: 'Sobre estas cifras', p: [
          'Abrimos cada fuente y comprobamos cada cifra el 22 de noviembre de 2026. Las cifras que no pudimos verificar ese día no están aquí.',
          'Los estudios difieren en país, edad y método. No los sumes ni los compares como si fueran una sola encuesta. La mayoría de las encuestas sobre niños de esta página son de Estados Unidos, el Reino Unido y la UE.',
        ] },
        { h: 'Qué puedes hacer', list: [
          'Familias: <a href="/parents/">Mindveto para familias</a> y <a href="/blog/is-character-ai-safe-for-kids/">¿Es Character.AI seguro para niños?</a>',
          'Colegios: <a href="/schools/">Mindveto para colegios</a>, el <a href="/exam-button/">botón de examen</a> y <a href="/blog/ai-act-article-4-schools/">el artículo 4 de la Ley de IA para colegios</a>.',
          'Deepfakes y estafas: el <a href="/ai-phishing-quiz/">test de phishing con IA</a>, <a href="/link-check/">¿Es seguro este enlace?</a> y el <a href="/block-porn/">filtro familiar gratuito</a>.',
          'Oficinas: la <a href="/paste-guard/">guardia de pegado</a> y <a href="/blog/chatgpt-customer-data-gdpr/">ChatGPT y los datos de clientes según el RGPD</a>.',
        ] },
      ],
      faq: [
        { q: '¿Cuántos adolescentes usan chatbots de IA?', a: 'En Estados Unidos, el 64 % de los adolescentes de 13 a 17 años dice usar chatbots de IA, y unos tres de cada diez los usan cada día (Pew Research Center, diciembre de 2025).' },
        { q: '¿Hacen trampas los alumnos con IA?', a: 'El 59 % de los adolescentes de EE. UU. cree que en su centro se hacen trampas con IA al menos con bastante frecuencia (Pew Research Center, 2026). En el Reino Unido, el 94 % de los estudiantes de grado usa IA generativa en trabajos evaluados, lo que no siempre es hacer trampas (HEPI, 2026).' },
        { q: '¿Puedo usar estas cifras?', a: 'Sí. Cítalas con un enlace a esta página y nombra la fuente original. Cada cifra tiene su propio enlace: añade #s1 a #s24 a la dirección de la página.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, «Niños, colegios e IA: las cifras (2026)», https://mindveto.app/es/estadisticas-ia/, última comprobación el 22 de noviembre de 2026. Si citas una sola cifra, nombra también su fuente original, que aparece bajo el número.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT y datos de clientes: qué dice el RGPD (2026)',
      desc: '¿Puede tu oficina pegar datos de clientes en ChatGPT? Qué hace OpenAI con ellos, qué esperan el RGPD y las autoridades, y un plan en 5 pasos.',
      h1: 'ChatGPT y datos de clientes: qué implica el RGPD para tu oficina.',
      lead: 'Respuesta corta: no pegues datos de clientes en una cuenta personal de ChatGPT. Según el RGPD, tu oficina sigue siendo responsable de esos datos, y en Free, Plus y Pro las conversaciones pueden usarse para entrenar los modelos de OpenAI salvo que se desactive. Si tu equipo necesita IA, usa un plan de empresa con un acuerdo de tratamiento de datos, fija reglas claras y añade un control antes de pegar.',
      blocks: [
        { h: 'Qué pasa con lo que pegas', list: [
          'ChatGPT Free, Plus y Pro: el ajuste «Improve the model for everyone» está activado por defecto, así que las conversaciones pueden usarse para entrenar los modelos de OpenAI. Cada persona puede desactivarlo en Settings, Data controls.',
          'Desactivar el entrenamiento no borra las conversaciones guardadas. Siguen en los servidores de OpenAI.',
          'Los chats temporales no se usan para entrenar, pero pueden conservarse hasta 30 días por motivos de seguridad.',
          'ChatGPT Business, Enterprise, Edu y la API: OpenAI dice que por defecto no entrena con estos datos de empresa, y ofrece un acuerdo de tratamiento de datos (Data Processing Addendum) para Business, Enterprise y la API.',
        ] },
        { h: 'Qué espera el RGPD de tu oficina', list: [
          'Tu oficina decide para qué y cómo se usan los datos de clientes, así que es responsable de ellos.',
          'Un servicio que trata datos personales por ti necesita un acuerdo por escrito contigo. Según el acuerdo de OpenAI, OpenAI actúa entonces como encargado del tratamiento; para clientes del EEE, el contrato es con OpenAI Ireland.',
          'Comparte lo mínimo. La mayoría de las tareas, como un borrador, un resumen o una traducción, salen igual de bien sin nombres, números de cuenta ni números de identidad.',
          'Si hay datos personales donde no deberían estar, puede ser una brecha de datos. La autoridad neerlandesa recuerda que una brecha debe notificarse en un plazo de 72 horas desde que se tiene conocimiento de ella, y que una fuga a través de un chatbot debe notificarse en muchos casos.',
        ] },
        { h: 'Ya está pasando', list: [
          'En agosto de 2024, la autoridad neerlandesa de protección de datos informó de varias notificaciones de brechas causadas por chatbots de IA. En un caso, una persona que trabajaba en una consulta de medicina general había introducido datos médicos de pacientes en un chatbot. En otro, una persona de una empresa de telecomunicaciones introdujo un archivo con direcciones de clientes.',
          'En todo el mundo, el 48 % de los empleados dice haber subido información de la empresa, como datos financieros, de ventas o de clientes, a herramientas de IA públicas (University of Melbourne y KPMG, 2025).',
          'Una de cada cinco organizaciones notificó una brecha causada por la IA en la sombra, es decir, herramientas de IA que el personal usa sin aprobación (IBM, 2025).',
          'En diciembre de 2024, la autoridad italiana de protección de datos multó a OpenAI con 15 millones de euros por ChatGPT, entre otras cosas por entrenar con datos personales sin una base jurídica adecuada.',
        ], note: 'Más cifras con sus fuentes: <a href="/ai-statistics/">Niños, colegios e IA: las cifras (2026)</a>.' },
        { h: 'Un plan en 5 pasos para una oficina pequeña', steps: [
          'Decide qué herramienta de IA se permite, mejor un plan de empresa con acuerdo de tratamiento de datos, y deja de usar cuentas personales para trabajo con clientes. Ponlo por escrito con nuestra <a href="/ai-policy-template/">plantilla de política de IA</a> gratuita.',
          'Haz una lista de lo que nunca entra en una herramienta de IA: nombres de clientes con sus datos, números de cuenta y de identidad, expedientes médicos y de personal, contratos, contraseñas.',
          'Enseña al equipo a quitar antes nombres y números. La respuesta suele ser igual de útil.',
          'Añade un control en el momento de pegar. La <a href="/paste-guard/">guardia de pegado</a> de Mindveto avisa antes de que IBAN, números de identidad, listas de correos o textos marcados como confidenciales entren en un chat de IA, y puede bloquear las herramientas de IA que tu oficina no aprobó.',
          'Acordad qué pasa tras un error: avisar el mismo día a una persona concreta, anotar qué se pegó y dónde, borrar la conversación y comprobar si hay que notificarlo a la autoridad de protección de datos.',
        ] },
        { h: 'Dónde ayuda Mindveto, y dónde no', list: [
          'La guardia de pegado comprueba en el propio ordenador. El texto pegado nunca se guarda ni se envía, tampoco a nosotros.',
          'Funciona en el navegador donde está instalada la extensión. No revisa correos, documentos ni aplicaciones de escritorio.',
          'Mindveto no hace por sí solo que tu oficina cumpla el RGPD. Las reglas, el acuerdo con tu proveedor de IA y la formación del equipo son tu parte.',
        ], note: 'Este artículo es información general, no asesoramiento jurídico. Consulta también las guías de tu autoridad nacional de protección de datos.' },
      ],
      faq: [
        { q: '¿Podemos usar ChatGPT en el trabajo según el RGPD?', a: 'No está prohibido como tal. Lo que importa es qué datos entran y en qué condiciones. Mantén los datos personales fuera de las cuentas personales y, para el trabajo con clientes, usa un plan de empresa con acuerdo de tratamiento de datos y reglas claras.' },
        { q: '¿Aprende ChatGPT de lo que pegamos?', a: 'En Free, Plus y Pro, las conversaciones pueden usarse para entrenar salvo que se desactive «Improve the model for everyone». En Business, Enterprise, Edu y la API, OpenAI dice que por defecto no entrena con tus datos.' },
        { q: 'Alguien del equipo pegó datos de clientes. ¿Y ahora?', a: 'Anota qué se pegó, cuándo y dónde, y borra la conversación. Después comprueba si es una brecha de datos que hay que notificar. En los Países Bajos, el plazo es de 72 horas desde que se tiene conocimiento.' },
        { q: '¿Ve Mindveto lo que pegamos?', a: 'No. La guardia de pegado comprueba en el propio ordenador. El texto pegado nunca se guarda ni se envía.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};

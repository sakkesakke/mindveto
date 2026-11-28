import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Pregunta al alumno: preguntas sobre su propio texto',
      desc: 'Pega el texto de un alumno y recibe cinco preguntas que solo el verdadero autor responde con facilidad. Sin veredicto de IA: decide una charla. 5 textos gratis.',
      h1: 'Pregunta al alumno sobre su texto.',
      lead: '¿Dudas de que un alumno escribiera su texto? No adivines. Pega el texto aquí y recibe cinco preguntas sobre decisiones concretas del texto. Quien lo escribió responde con facilidad. Quien no, tiene dificultades. Tú decides tras una breve charla.',
      blocks: [
        { h: 'Cómo funciona', steps: [
          'Pide un código gratis por correo a hello@mindveto.app. Te da 5 textos al mes.',
          'Pega el texto del alumno (300 a 6.000 caracteres) y elige el idioma de las preguntas.',
          'Espera de 1 a 2 minutos. Un modelo de IA abierto en el servidor propio de Mindveto escribe cinco preguntas.',
          'Haz las preguntas en una breve charla y escucha cómo explica el alumno sus decisiones.',
        ]},
        { h: 'Cómo son las preguntas', list: [
          'Sobre un ejemplo, palabra o fuente concretos del texto, con una cita breve.',
          'Qué significa una frase, con las palabras del alumno.',
          'Qué cambiaría el alumno, y por qué.',
        ]},
        { h: 'Límites honestos', list: [
          'Las preguntas no son un examen ni un veredicto. Nada en esta página dice si se usó IA.',
          'Un modelo abierto a veces hace una pregunta floja o rara. Sáltala.',
          'Un alumno que estudió bien un texto puede responder sin haberlo escrito. Usa las preguntas junto con el rastro de escritura y lo que sabes del alumno.',
          'Quita nombres y otros datos personales del texto antes de pegarlo.',
        ], note: 'Decide la conversación, no esta página.', human: true },
        { h: 'Privacidad', p: [
          'El texto va solo al servidor propio de Mindveto ({region}) para crear las preguntas, y se borra justo después. No se guarda, no se registra y no se usa para entrenar ningún modelo. Ningún servicio de IA externo lo ve. Solo guardamos tu código, de forma ilegible, y cuántos textos usaste este mes.',
        ]},
      ],
      faq: [
        { q: '¿Es un detector de IA?', a: 'No. No juzga el texto. Te da preguntas para hablar de hechos con el alumno.' },
        { q: '¿Por qué tarda uno o dos minutos?', a: 'El modelo funciona en nuestro propio servidor sin hardware caro, para que tu texto nunca vaya a un servicio de IA externo. Por eso es más lento.' },
        { q: '¿Y si necesito más de 5 textos al mes?', a: 'Escribe a hello@mindveto.app. Los centros pueden tener un plan mayor.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'Tu código', codeHelp: '¿Aún sin código? Pide un código gratis (5 textos al mes):', mailSub: 'Código gratis para Pregunta al alumno',
    textL: 'Texto del alumno', langL: 'Idioma de las preguntas', count: '{n} / {max} caracteres',
    pv: 'El texto se envía solo al servidor propio de Mindveto para crear las preguntas, y se borra justo después.',
    btn: 'Crear preguntas', wait: 'Creando preguntas… tarda de 1 a 2 minutos. Deja esta página abierta.',
    resH: 'Preguntas para la charla', about: 'Sobre:', used: '{used} de {limit} textos usados este mes.',
    copy: 'Copiar preguntas', copied: 'Copiado.', note: 'Sáltate una pregunta que no encaje. Decide la conversación, no esta página.',
    eCode: 'Este código no es válido. Revísalo o escribe a hello@mindveto.app.', eShort: 'El texto es demasiado corto: al menos {min} caracteres.',
    eLong: 'El texto es demasiado largo: como máximo {max} caracteres.', eLimit: 'Has usado los {limit} textos de este mes. Escribe a hello@mindveto.app para más.',
    eBusy: 'El servidor está ocupado. Inténtalo de nuevo en unos minutos.', eTime: 'Ha tardado demasiado. Inténtalo de nuevo o con un texto más corto.',
    eNet: 'Ahora no se puede llegar al servidor. Inténtalo más tarde.', eModel: 'Algo salió mal al crear las preguntas. Inténtalo de nuevo.',
  },
};

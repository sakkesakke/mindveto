import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Rastro de escritura: cómo nació un texto',
      desc: 'Los alumnos escriben en el navegador y entregan un rastro de cómo creció el texto: tecleado, pegado, tiempo. El docente ve hechos, no una conjetura de IA.',
      h1: 'Rastro de escritura: ¿cómo nació este texto?',
      lead: 'Los detectores de IA adivinan y a menudo se equivocan. Un rastro de escritura muestra hechos: cuánto tiempo trabajó el alumno, qué se tecleó y qué se pegó. El alumno escribe en esta página, descarga el rastro y lo entrega. Todo se queda en el dispositivo.',
      blocks: [
        { h: 'Cómo funciona', steps: [
          'El alumno abre esta página y elige «Soy alumno».',
          'Escribe la tarea en el recuadro. La página anota, en su propio dispositivo, cuándo se teclea, se pega o se borra texto.',
          'Al terminar, hace clic en «Terminar y descargar el rastro» y entrega el archivo junto con el texto.',
          'El docente abre esta página, elige «Soy docente» y abre el archivo.',
        ]},
        { h: 'Qué ve el docente', list: [
          'El tiempo total y el tiempo real de escritura.',
          'Cuánto se tecleó y cuánto se pegó, con cada pegado en una lista.',
          'Cuántas veces el alumno salió de la página, y durante cuánto tiempo.',
          'Un gráfico del texto creciendo y una repetición de la escritura.',
        ]},
        { h: 'Límites honestos', list: [
          'Un rastro no prueba el uso de IA, y esta página nunca dice «IA». Muestra cómo nació un texto. La conversación con el alumno decide.',
          'Un alumno puede copiar a mano un texto de IA o editar el archivo. Un rastro hace que copiar cueste más, no que sea imposible.',
          'Pegar suele estar bien: una cita, tus propios apuntes, una frase de un borrador.',
          'Solo anota lo que se escribe en esta página, no el trabajo hecho en otro sitio.',
        ], note: 'Úsalo junto con una breve conversación: pide al alumno que explique una decisión de su texto.', human: true },
        { h: 'Privacidad', p: [
          'Sin cuenta, sin cookies, sin rastreadores. La página no puede enviar nada: el texto y el rastro se quedan en el dispositivo. El borrador se guarda en este navegador, para no perder trabajo al recargar. El archivo solo se comparte cuando el alumno lo entrega.',
        ]},
      ],
      faq: [
        { q: '¿Detecta ChatGPT?', a: 'No. Ninguna herramienta distingue con fiabilidad un texto de IA de uno humano, y los detectores suelen señalar a alumnos que escriben en una segunda lengua. Un rastro muestra cómo nació el texto, para hablar de hechos.' },
        { q: '¿Es gratis?', a: 'Sí. Funciona en el navegador y no necesita cuenta.' },
        { q: '¿Pueden los alumnos ver lo que se anota?', a: 'Sí. Antes de entregar, pueden abrir su propio archivo en la vista del docente y ver exactamente lo mismo.' },
      ],
      related: ['ask', 'exam', 'schools'],
    },
  },
  ui: {
    nav: 'Rastro de escritura',
    group: '¿Quién eres?', modeS: 'Soy alumno: escribir', modeT: 'Soy docente: abrir un rastro',
    pv: 'Tu escritura se anota solo en este dispositivo: cuándo tecleas, pegas o borras. No se envía nada.',
    nameL: 'Tu nombre', taskL: 'Tarea', textL: 'Tu texto',
    info: '{n} caracteres · {m} min · guardado en este dispositivo',
    done: 'Terminar y descargar el rastro', newB: 'Empezar un texto nuevo', confirmNew: '¿Borrar este texto y su rastro de este dispositivo y empezar de nuevo?',
    hand: 'Entrega el archivo descargado junto con tu texto, como te pida tu docente.',
    empty: 'Escribe algo primero.',
    fileL: 'Abrir un archivo de rastro (.json)', pvT: 'El archivo se abre en este dispositivo. No se envía nada.',
    bad: 'Este archivo no es un rastro de escritura de Mindveto.',
    who: '{name} · {task}', started: 'Empezado el {d}',
    sumH: 'Hechos', kTime: 'Tiempo total', kActive: 'Tiempo real de escritura', kChars: 'Caracteres en el texto final',
    kTyped: 'Tecleado', kPasted: 'Pegado', kPastes: 'Veces que se pegó', kAway: 'Salidas de la página', kDel: 'Borrado', kSpeed: 'Ritmo de escritura',
    min: '{n} min', chars: '{n} caracteres', pace: '{n} caracteres por minuto de escritura', away: '{n} veces, {m} min en total',
    sigH: 'Para conversar', sigNone: 'Nada fuera de lo normal en este rastro.',
    sBig: 'Se pegó un trozo grande: {n} caracteres a los {t}.', sShare: 'El {p} % de todos los caracteres añadidos se pegó.',
    sPace: 'Mucho texto para el tiempo: {n} caracteres por minuto de escritura.', sAway: 'Se salió de la página {n} veces ({m} min en total).',
    sWipe: 'Justo antes de un pegado grande se borraron {n} caracteres del texto.', sAwayP: 'El alumno volvió a la página {s} segundos antes de un pegado grande.',
    sNoDel: 'Casi ninguna corrección: {n} caracteres borrados.',
    sigNote: 'Son hechos sobre cómo nació el texto, no una prueba de uso de IA. Pide al alumno que explique su texto.',
    pasteH: 'Pegados', pasteRow: '{t} · {n} caracteres',
    chartH: 'Longitud del texto en el tiempo', chartAlt: 'Gráfico de la longitud del texto durante {m} minutos. Los pegados están marcados con un punto.',
    replayH: 'Repetición', replayL: 'Momento de la escritura', textH: 'Texto final', file: 'rastro-escritura',
  },
};

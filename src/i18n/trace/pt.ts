import type { Trace } from './types';

export const TR: Trace = {
  pages: {
    trace: {
      title: 'Rasto de escrita: veja como um texto nasceu',
      desc: 'Os alunos escrevem no navegador e entregam um rasto de como o texto cresceu: digitado, colado, tempo. O professor vê factos, não um palpite de IA. Grátis.',
      h1: 'Rasto de escrita: como nasceu este texto?',
      lead: 'Os detetores de IA adivinham e muitas vezes erram. Um rasto de escrita mostra factos: quanto tempo o aluno trabalhou, o que foi digitado e o que foi colado. O aluno escreve nesta página, descarrega o rasto e entrega-o. Tudo fica no dispositivo.',
      blocks: [
        { h: 'Como funciona', steps: [
          'O aluno abre esta página e escolhe «Sou aluno».',
          'Escreve o trabalho na caixa. A página regista, no próprio dispositivo, quando o texto é digitado, colado ou apagado.',
          'No fim, clica em «Terminar e descarregar o rasto» e entrega o ficheiro com o texto.',
          'O professor abre esta página, escolhe «Sou professor» e abre o ficheiro.',
        ]},
        { h: 'O que o professor vê', list: [
          'O tempo total e o tempo real de escrita.',
          'Quanto foi digitado e quanto foi colado, com cada colagem numa lista.',
          'Quantas vezes o aluno saiu da página, e durante quanto tempo.',
          'Um gráfico do texto a crescer e uma repetição da escrita.',
        ]},
        { h: 'Limites honestos', list: [
          'Um rasto não prova o uso de IA, e esta página nunca diz «IA». Mostra como um texto nasceu. A conversa com o aluno decide.',
          'Um aluno pode copiar à mão um texto de IA ou editar o ficheiro. Um rasto torna a batota mais trabalhosa, não impossível.',
          'Colar é muitas vezes normal: uma citação, as próprias notas, uma frase de um rascunho.',
          'Só regista o que é escrito nesta página, não o trabalho feito noutro sítio.',
        ], note: 'Use-o com uma conversa curta: peça ao aluno que explique uma escolha no texto.', human: true },
        { h: 'Privacidade', p: [
          'Sem conta, sem cookies, sem rastreadores. A página não consegue enviar nada: o texto e o rasto ficam no dispositivo. O rascunho fica guardado neste navegador, para não perder trabalho ao recarregar. O ficheiro só é partilhado quando o aluno o entrega.',
        ]},
      ],
      faq: [
        { q: 'Isto deteta o ChatGPT?', a: 'Não. Nenhuma ferramenta distingue com fiabilidade texto de IA de texto humano, e os detetores assinalam muitas vezes alunos que escrevem numa segunda língua. Um rasto mostra como o texto nasceu, para falar de factos.' },
        { q: 'É grátis?', a: 'Sim. Funciona no navegador e não precisa de conta.' },
        { q: 'Os alunos veem o que é registado?', a: 'Sim. Antes de entregar, podem abrir o próprio ficheiro na vista do professor e ver exatamente o mesmo.' },
      ],
      related: ['exam', 'schools', 'paste'],
    },
  },
  ui: {
    nav: 'Rasto de escrita',
    group: 'Quem és?', modeS: 'Sou aluno: escrever', modeT: 'Sou professor: abrir um rasto',
    pv: 'A tua escrita é registada só neste dispositivo: quando digitas, colas ou apagas. Nada é enviado.',
    nameL: 'O teu nome', taskL: 'Trabalho', textL: 'O teu texto',
    info: '{n} caracteres · {m} min · guardado neste dispositivo',
    done: 'Terminar e descarregar o rasto', newB: 'Começar um texto novo', confirmNew: 'Apagar este texto e o seu rasto deste dispositivo e começar de novo?',
    hand: 'Entrega o ficheiro descarregado com o teu texto, como o teu professor pedir.',
    empty: 'Escreve primeiro alguma coisa.',
    fileL: 'Abrir um ficheiro de rasto (.json)', pvT: 'O ficheiro é aberto neste dispositivo. Nada é enviado.',
    bad: 'Este ficheiro não é um rasto de escrita da Mindveto.',
    who: '{name} · {task}', started: 'Começado em {d}',
    sumH: 'Factos', kTime: 'Tempo total', kActive: 'Tempo real de escrita', kChars: 'Caracteres no texto final',
    kTyped: 'Digitado', kPasted: 'Colado', kPastes: 'Vezes colado', kAway: 'Saídas da página', kDel: 'Apagado', kSpeed: 'Ritmo de escrita',
    min: '{n} min', chars: '{n} caracteres', pace: '{n} caracteres por minuto de escrita', away: '{n} vezes, {m} min no total',
    sigH: 'Para conversar', sigNone: 'Nada de invulgar neste rasto.',
    sBig: 'Foi colado um pedaço grande: {n} caracteres aos {t}.', sShare: '{p} % de todos os caracteres adicionados foram colados.',
    sPace: 'Muito texto para o tempo: {n} caracteres por minuto de escrita.', sAway: 'A página foi deixada {n} vezes ({m} min no total).',
    sNoDel: 'Quase nenhuma correção: {n} caracteres apagados.',
    sigNote: 'São factos sobre como o texto nasceu, não uma prova de uso de IA. Peça ao aluno que explique o texto.',
    pasteH: 'Colagens', pasteRow: '{t} · {n} caracteres',
    chartH: 'Tamanho do texto ao longo do tempo', chartAlt: 'Gráfico do tamanho do texto ao longo de {m} minutos. As colagens estão marcadas com um ponto.',
    replayH: 'Repetição', replayL: 'Momento da escrita', textH: 'Texto final', file: 'rasto-escrita',
  },
};

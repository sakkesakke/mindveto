import type { Ask } from './types';

export const AS: Ask = {
  pages: {
    ask: {
      title: 'Pergunte ao aluno: perguntas sobre o próprio texto',
      desc: 'Cole o texto de um aluno e receba cinco perguntas que só o verdadeiro autor responde com facilidade. Sem veredicto de IA: decide uma conversa. 5 textos grátis.',
      h1: 'Pergunte ao aluno sobre o texto.',
      lead: 'Tem dúvidas de que um aluno escreveu o texto sozinho? Não adivinhe. Cole o texto aqui e receba cinco perguntas sobre escolhas concretas do texto. Quem o escreveu responde com facilidade. Quem não o escreveu tem dificuldade. Decide depois de uma conversa curta.',
      blocks: [
        { h: 'Como funciona', steps: [
          'Peça um código grátis por e-mail para hello@mindveto.app. Dá direito a 5 textos por mês.',
          'Cole o texto do aluno (300 a 6.000 caracteres) e escolha a língua das perguntas.',
          'Espere 2 a 4 minutos. Um modelo de IA aberto no servidor próprio da Mindveto escreve cinco perguntas.',
          'Faça as perguntas numa conversa curta e ouça como o aluno explica as suas escolhas.',
        ]},
        { h: 'Como são as perguntas', list: [
          'Sobre um exemplo, palavra ou fonte concretos do texto, com uma citação curta.',
          'O que uma frase significa, nas palavras do aluno.',
          'O que o aluno mudaria, e porquê.',
        ]},
        { h: 'Limites honestos', list: [
          'As perguntas não são um teste nem um veredicto. Nada nesta página diz se foi usada IA.',
          'Um modelo aberto às vezes faz uma pergunta fraca ou estranha. Salte-a.',
          'Um aluno que estudou bem um texto pode responder sem o ter escrito. Use as perguntas com o rasto de escrita e o que sabe do aluno.',
          'Retire nomes e outros dados pessoais do texto antes de o colar.',
        ], note: 'Decide a conversa, não esta página.', human: true },
        { h: 'Privacidade', p: [
          'O texto vai apenas para o servidor próprio da Mindveto ({region}) para criar as perguntas, e é apagado logo a seguir. Não é guardado, não é registado e não é usado para treinar nenhum modelo. Nenhum serviço de IA externo o vê. Guardamos só o seu código, de forma ilegível, e quantos textos usou este mês.',
        ]},
      ],
      faq: [
        { q: 'Isto é um detetor de IA?', a: 'Não. Não julga o texto. Dá-lhe perguntas para falar de factos com o aluno.' },
        { q: 'Porque demora alguns minutos?', a: 'O modelo funciona no nosso próprio servidor sem hardware caro, para que o seu texto nunca vá para um serviço de IA externo. Por isso é mais lento.' },
        { q: 'E se precisar de mais de 5 textos por mês?', a: 'Escreva para hello@mindveto.app. As escolas podem ter um plano maior.' },
      ],
      related: ['trace', 'exam', 'schools'],
    },
  },
  ui: {
    codeL: 'O seu código', codeHelp: 'Ainda sem código? Peça um código grátis (5 textos por mês):', mailSub: 'Código grátis para Pergunte ao aluno',
    textL: 'Texto do aluno', langL: 'Língua das perguntas', count: '{n} / {max} caracteres',
    pv: 'O texto é enviado apenas para o servidor próprio da Mindveto para criar as perguntas, e é apagado logo a seguir.',
    btn: 'Criar perguntas', wait: 'A criar perguntas… demora 2 a 4 minutos. Mantenha esta página aberta.',
    resH: 'Perguntas para a conversa', about: 'Sobre:', used: '{used} de {limit} textos usados este mês.',
    copy: 'Copiar perguntas', copied: 'Copiado.', note: 'Salte uma pergunta que não sirva. Decide a conversa, não esta página.',
    eCode: 'Este código não é válido. Verifique-o ou escreva para hello@mindveto.app.', eShort: 'O texto é demasiado curto: pelo menos {min} caracteres.',
    eLong: 'O texto é demasiado longo: no máximo {max} caracteres.', eLimit: 'Usou os {limit} textos deste mês. Escreva para hello@mindveto.app para ter mais.',
    eBusy: 'O servidor está ocupado. Tente de novo dentro de alguns minutos.', eTime: 'Demorou demasiado. Tente de novo ou com um texto mais curto.',
    eNet: 'O servidor não está acessível agora. Tente mais tarde.', eModel: 'Algo correu mal ao criar as perguntas. Tente de novo.',
  },
};

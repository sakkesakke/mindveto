import type { Linkable } from './types';
import { CHECKED, st, list, STATS_SOURCES, GDPR_SOURCES } from './sources';

// Links use the English page paths; the page template rewrites them to the Portuguese pages.
export const LK: Linkable = {
  ui: {
    checked: 'Última verificação', cite: 'Como citar esta página', src: 'Fonte',
    statsT: 'Crianças, escolas e IA: os números', statsD: '24 números verificados com fonte, livres para citar.',
    gdprT: 'ChatGPT e dados de clientes', gdprD: 'O que o RGPD significa para o seu escritório, e um plano em 5 passos.',
  },
  pages: {
    stats: {
      title: 'Crianças, escolas e IA: os números (2026)',
      desc: '24 estatísticas verificadas sobre crianças, adolescentes, escolas e IA: chatbots, companheiros de IA, cola, deepfakes e vazamento de dados. Com fonte e link.',
      h1: 'Crianças, escolas e IA: os números (2026).',
      lead: '24 números sobre como crianças, estudantes e funcionários usam a IA, e sobre o que dá errado. Cada número leva à fonte original e foi verificado no mesmo dia. Livres para citar.',
      blocks: [
        { h: 'Crianças e adolescentes: chatbots e companheiros de IA', stats: [
          st('64%', 'dos adolescentes dos EUA de 13 a 17 anos dizem usar chatbots de IA.', 'pew1'),
          st('Cerca de 3 em cada 10', 'adolescentes dos EUA usam chatbots de IA todos os dias, incluindo 16% que fazem isso várias vezes por dia ou quase o tempo todo.', 'pew1'),
          st('59%', 'dos adolescentes dos EUA usam o ChatGPT, de longe o chatbot mais usado por eles.', 'pew1'),
          st('72%', 'dos adolescentes dos EUA de 13 a 17 anos já usaram um companheiro de IA (AI companion). Mais da metade usa pelo menos algumas vezes por mês.', 'csm'),
          st('Cerca de 1 em cada 3', 'adolescentes dos EUA acha as conversas com um companheiro de IA tão satisfatórias quanto, ou mais do que, as conversas com amigos reais.', 'csm'),
          st('Cerca de 1 em cada 3', 'adolescentes dos EUA que usam companheiros de IA preferiu falar de algo importante ou sério com um companheiro de IA em vez de uma pessoa real.', 'csm'),
          st('12%', 'dos adolescentes dos EUA já usaram chatbots para buscar apoio emocional ou conselhos.', 'pew2'),
          st('63,8%', 'das pessoas de 16 a 24 anos na UE usaram ferramentas de IA generativa em 2025, quase o dobro do total de adultos de 16 a 74 anos (32,7%).', 'eu1'),
        ] },
        { h: 'Escola: lição de casa, estudo e cola', stats: [
          st('54%', 'dos adolescentes dos EUA já usaram chatbots para ter ajuda com trabalhos escolares.', 'pew2'),
          st('59%', 'dos adolescentes dos EUA acham que os alunos da sua escola colam com IA pelo menos com bastante frequência.', 'pew2'),
          st('26%', 'dos adolescentes dos EUA usaram o ChatGPT para trabalhos escolares em 2024, o dobro dos 13% de 2023.', 'pew3'),
          st('39,3%', 'das pessoas de 16 a 24 anos na UE usaram IA generativa para a educação formal em 2025, contra 9,4% do total de adultos.', 'eu1'),
          st('94%', 'dos estudantes de graduação em tempo integral do Reino Unido usam IA generativa em trabalhos avaliados.', 'hepi'),
        ] },
        { h: 'Deepfakes, nudes falsos e vozes falsas', stats: [
          st('1 em cada 8', 'jovens de 13 a 20 anos conhece pessoalmente alguém que foi alvo de nudes falsos (deepfake nudes).', 'thorn'),
          st('1 em cada 5', 'adolescentes achava que era legal criar nudes falsos de outra pessoa, inclusive de outro menor.', 'thorn'),
          st('34%', 'das vítimas jovens de nudes falsos contaram a um dos pais, embora 62% de quem não foi vítima dissesse que contaria.', 'thorn'),
          st('73%', 'foi a taxa de vozes falsas feitas com IA que os ouvintes identificaram corretamente, num teste com 529 pessoas em inglês e mandarim.', 'plos'),
          st('3.440', 'vídeos de abuso sexual infantil feitos com IA foram encontrados pela Internet Watch Foundation em 2025, contra 13 em 2024.', 'iwf'),
        ] },
        { h: 'Trabalho: uso de IA e vazamento de dados', stats: [
          st('58%', 'dos funcionários usam IA no trabalho de forma intencional e regular (pesquisa com 48.340 pessoas em 47 países).', 'kpmg'),
          st('48%', 'dos funcionários dizem ter colocado informações da empresa, como dados financeiros, de vendas ou de clientes, em ferramentas públicas de IA.', 'kpmg'),
          st('20,0%', 'das empresas da UE com 10 ou mais funcionários usaram IA em 2025, contra 13,5% em 2024.', 'eu2'),
          st('13%', 'das organizações relataram uma violação de modelos ou aplicações de IA. Destas, 97% não tinham controles de acesso para IA.', 'ibm'),
          st('1 em cada 5', 'organizações relatou uma violação causada por IA paralela (shadow AI): ferramentas de IA que a equipe usa sem aprovação. As que tinham muita pagaram em média US$ 670 mil a mais por violação.', 'ibm'),
          st('€ 15 milhões', 'de multa à OpenAI aplicada pela autoridade italiana de proteção de dados por causa do ChatGPT, entre outros motivos por treinar com dados pessoais sem base legal adequada.', 'gar'),
        ] },
        { h: 'Sobre estes números', p: [
          'Abrimos cada fonte e verificamos cada número em 22 de novembro de 2026. Os números que não conseguimos verificar nesse dia ficaram de fora.',
          'Os estudos diferem em país, faixa etária e método. Não some nem compare os números como se fossem uma só pesquisa. A maioria das pesquisas com crianças aqui vem dos Estados Unidos, do Reino Unido e da UE.',
        ] },
        { h: 'O que você pode fazer', list: [
          'Pais: <a href="/parents/">Mindveto para pais</a> e <a href="/blog/is-character-ai-safe-for-kids/">O Character.AI é seguro para crianças?</a>',
          'Escolas: <a href="/schools/">Mindveto para escolas</a>, o <a href="/exam-button/">botão de prova</a> e <a href="/blog/ai-act-article-4-schools/">o artigo 4 do AI Act para escolas</a>.',
          'Deepfakes e golpes: o <a href="/ai-phishing-quiz/">quiz de phishing com IA</a>, <a href="/link-check/">Este link é seguro?</a> e o <a href="/block-porn/">filtro familiar gratuito</a>.',
          'Escritórios: a <a href="/paste-guard/">guarda de colagem</a> e <a href="/blog/chatgpt-customer-data-gdpr/">ChatGPT e dados de clientes segundo o RGPD</a>.',
        ] },
      ],
      faq: [
        { q: 'Quantos adolescentes usam chatbots de IA?', a: 'Nos Estados Unidos, 64% dos adolescentes de 13 a 17 anos dizem usar chatbots de IA, e cerca de três em cada dez usam todos os dias (Pew Research Center, dezembro de 2025).' },
        { q: 'Os alunos colam com IA?', a: '59% dos adolescentes dos EUA acham que os alunos da sua escola colam com IA pelo menos com bastante frequência (Pew Research Center, 2026). No Reino Unido, 94% dos estudantes de graduação usam IA generativa em trabalhos avaliados, o que nem sempre é cola (HEPI, 2026).' },
        { q: 'Posso usar estes números?', a: 'Sim. Cite-os com um link para esta página e indique a fonte original. Cada número tem o seu próprio link: acrescente #s1 a #s24 ao endereço da página.' },
      ],
      related: ['parents', 'schools', 'offices'],
      checked: CHECKED,
      cite: 'Mindveto, “Crianças, escolas e IA: os números (2026)”, https://mindveto.app/pt/estatisticas-ia/, última verificação em 22 de novembro de 2026. Se citar um único número, indique também a fonte original, que aparece abaixo dele.',
      article: { date: CHECKED, updated: CHECKED, sources: list(...STATS_SOURCES) },
    },

    gdpr: {
      title: 'ChatGPT e dados de clientes: o que diz o RGPD (2026)',
      desc: 'O seu escritório pode colar dados de clientes no ChatGPT? O que a OpenAI faz com eles, o que o RGPD e as autoridades esperam, e um plano em 5 passos.',
      h1: 'ChatGPT e dados de clientes: o que o RGPD significa para o seu escritório.',
      lead: 'Resposta curta: não cole dados de clientes numa conta pessoal do ChatGPT. Pelo RGPD, o seu escritório continua responsável por esses dados, e no Free, Plus e Pro as conversas podem ser usadas para treinar os modelos da OpenAI, a menos que isso seja desativado. Se a equipe precisa de IA, use um plano empresarial com um acordo de tratamento de dados, defina regras claras e acrescente uma verificação antes de colar.',
      blocks: [
        { h: 'O que acontece com o que você cola', list: [
          'ChatGPT Free, Plus e Pro: a opção “Improve the model for everyone” vem ativada por padrão, então as conversas podem ser usadas para treinar os modelos da OpenAI. Cada pessoa pode desativá-la em Settings, Data controls.',
          'Desativar o treino não apaga as conversas salvas. Elas continuam nos servidores da OpenAI.',
          'Os chats temporários não são usados para treino, mas podem ser guardados por até 30 dias por motivos de segurança.',
          'ChatGPT Business, Enterprise, Edu e a API: a OpenAI diz que, por padrão, não treina com esses dados empresariais, e oferece um acordo de tratamento de dados (Data Processing Addendum) para Business, Enterprise e a API.',
        ] },
        { h: 'O que o RGPD espera do seu escritório', list: [
          'O seu escritório decide para que e como os dados de clientes são usados, por isso é responsável por eles.',
          'Um serviço que trata dados pessoais por você precisa de um acordo por escrito com você. Segundo o acordo da OpenAI, ela atua então como operadora (subcontratante); para clientes do EEE, o contrato é com a OpenAI Ireland.',
          'Compartilhe o mínimo. A maioria das tarefas, como um rascunho, um resumo ou uma tradução, funciona igualmente bem sem nomes, números de conta ou números de identidade.',
          'Se dados pessoais forem parar onde não deviam, pode ser uma violação de dados. A autoridade holandesa lembra que uma violação deve ser notificada em até 72 horas depois de se tomar conhecimento dela, e que um vazamento por chatbot deve ser notificado em muitos casos.',
        ] },
        { h: 'Já está acontecendo', list: [
          'Em agosto de 2024, a autoridade holandesa de proteção de dados relatou várias notificações de violações de dados causadas por chatbots de IA. Num caso, uma pessoa que trabalhava num consultório de clínica geral tinha colocado dados médicos de pacientes num chatbot. Noutro, uma pessoa de uma empresa de telecomunicações colocou um arquivo com endereços de clientes.',
          'No mundo, 48% dos funcionários dizem ter colocado informações da empresa, como dados financeiros, de vendas ou de clientes, em ferramentas públicas de IA (University of Melbourne e KPMG, 2025).',
          'Uma em cada cinco organizações relatou uma violação causada por IA paralela, ou seja, ferramentas de IA que a equipe usa sem aprovação (IBM, 2025).',
          'Em dezembro de 2024, a autoridade italiana de proteção de dados multou a OpenAI em 15 milhões de euros por causa do ChatGPT, entre outros motivos por treinar com dados pessoais sem base legal adequada.',
        ], note: 'Mais números com fontes: <a href="/ai-statistics/">Crianças, escolas e IA: os números (2026)</a>.' },
        { h: 'Um plano em 5 passos para um escritório pequeno', steps: [
          'Defina qual ferramenta de IA é permitida, de preferência um plano empresarial com acordo de tratamento de dados, e deixe de usar contas pessoais para trabalho com clientes. Coloque isso por escrito com o nosso <a href="/ai-policy-template/">modelo de política de IA</a> gratuito.',
          'Liste o que nunca entra numa ferramenta de IA: nomes de clientes com os seus dados, números de conta e de identidade, prontuários médicos e fichas de RH, contratos, senhas.',
          'Mostre à equipe como tirar antes os nomes e os números. A resposta costuma ser igualmente útil.',
          'Acrescente uma verificação no momento de colar. A <a href="/paste-guard/">guarda de colagem</a> do Mindveto avisa antes que IBAN, números de identidade, listas de e-mails ou textos marcados como confidenciais entrem num chat de IA, e pode bloquear as ferramentas de IA que o seu escritório não aprovou.',
          'Combinem o que acontece depois de um erro: avisar no mesmo dia uma pessoa definida, anotar o que foi colado e onde, apagar a conversa e verificar se é preciso notificar a autoridade de proteção de dados.',
        ] },
        { h: 'Onde o Mindveto ajuda, e onde não', list: [
          'A guarda de colagem verifica no próprio computador. O texto colado nunca é guardado nem enviado, nem para nós.',
          'Funciona no navegador onde a extensão está instalada. Não verifica e-mails, documentos nem aplicativos de desktop.',
          'O Mindveto sozinho não deixa o seu escritório em conformidade com o RGPD. As regras, o acordo com o seu fornecedor de IA e o treinamento da equipe são a sua parte.',
        ], note: 'Este artigo é informação geral, não aconselhamento jurídico. Consulte também as orientações da sua autoridade nacional de proteção de dados.' },
      ],
      faq: [
        { q: 'Podemos usar o ChatGPT no trabalho segundo o RGPD?', a: 'Não é proibido em si. O que importa é quais dados entram e em que condições. Mantenha dados pessoais fora de contas pessoais e, para trabalho com clientes, use um plano empresarial com acordo de tratamento de dados e regras claras.' },
        { q: 'O ChatGPT aprende com o que colamos?', a: 'No Free, Plus e Pro, as conversas podem ser usadas para treino, a menos que “Improve the model for everyone” esteja desativado. No Business, Enterprise, Edu e na API, a OpenAI diz que, por padrão, não treina com os seus dados.' },
        { q: 'Alguém da equipe colou dados de clientes. E agora?', a: 'Anote o que foi colado, quando e onde, e apague a conversa. Depois verifique se é uma violação de dados que precisa ser notificada. Nos Países Baixos, o prazo é de 72 horas depois de se tomar conhecimento.' },
        { q: 'O Mindveto vê o que colamos?', a: 'Não. A guarda de colagem verifica no próprio computador. O texto colado nunca é guardado nem enviado.' },
      ],
      related: ['offices', 'paste', 'policy'],
      article: { date: CHECKED, sources: list(...GDPR_SOURCES) },
    },
  },
};

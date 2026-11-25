import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';
import { P as PR } from './protect/pt';
import { LK } from './linkable/pt';

// Internal links use the English paths; localize.ts rewrites them to /pt/ paths at build time.
export const home: Home = {
  title: 'Mindveto: bloqueie o ChatGPT e mais de 150 IAs com um botão',
  desc: 'Bloqueie ChatGPT, Gemini, Copilot e mais de 150 ferramentas de IA em navegadores, Android, Windows, Mac e redes. PIN, botão de prova. Grátis, sem rastreio.',
  h1: 'Bloqueie o ChatGPT e mais de 150 ferramentas de IA.',
  motto: 'A sua mente tem a última palavra.', trust: 'Grátis. Sem conta, sem rastreamento. Feito por Amghar Said.', mockOn: 'O chat de IA está aberto', mockOff: 'Bloqueado pelo Mindveto',
  lead: 'Para pais, escolas e escritórios. O Mindveto funciona no navegador, no telefone, no computador ou em toda a rede, e um PIN decide quem pode religar a IA.',
  switchOn: 'IA', switchOff: 'Veto', switchLabel: 'Experimente: desligue a IA nesta página',
  statusOn: 'IA permitida. Vire o botão.', statusOff: 'Veto. Mais de 150 serviços de IA bloqueados.',
  how: 'Como funciona',
  doorsH: 'Para quem é',
  doors: [
    { key: 'parents', who: 'Pais', why: 'Companheiros de IA à meia-noite, lição de casa escrita por um chatbot. Bloqueie no PC da família e no celular do seu filho. Novo: um filtro familiar grátis para sites pornô, de apostas e de namoro.', go: 'Para pais' },
    { key: 'schools', who: 'Escolas', why: 'Um botão de prova para professores, e arquivos que a TI pode instalar hoje em cada computador da escola.', go: 'Para escolas' },
    { key: 'offices', who: 'Escritórios', why: 'Processos de clientes, IBAN e contratos ficam fora dos chatbots públicos. Só a IA que o seu escritório aprova.', go: 'Para escritórios' },
  ],
  productsH: 'Uma ideia, sete ferramentas',
  productsLead: 'Escolha o que serve para o dispositivo. Hoje tudo é grátis.',
  proofH: 'O que sai do seu dispositivo',
  proofP: 'O Mindveto verifica tudo no próprio dispositivo. Não queremos os seus dados, então o construímos para nunca recebê-los.',
  ledger: [
    ['Nada', 'As páginas que você visita, o que digita, o que cola.', true],
    ['Nada', 'Seu nome, seu e-mail ou uma conta. Não existe conta.', true],
    ['Uma vez por dia', 'A extensão baixa a lista pública de endereços de IA. Não envia configurações nem dados de navegação. Como em qualquer download, o servidor vê o seu endereço IP.', false],
    ['Só se você entrar', 'No modo prova, o código da turma é enviado uma vez por minuto para saber se a prova está ativa. Sem nomes.', false],
  ],
  limitsH: 'Limites honestos',
  limits: [
    'Funciona no navegador, celular, computador ou rede onde você instala. Uma criança ainda pode usar o celular de um amigo.',
    'Quem controla o dispositivo inteiro pode removê-lo. Use uma conta normal (sem administrador) para crianças e funcionários.',
    'Novas IAs surgem toda semana. A lista é atualizada diariamente, mas alguma pode escapar por alguns dias.',
  ],
  priceH: 'Grátis para começar',
  priceP: 'Bloquear continua grátis para todos. Os planos pagos para famílias, escolas e escritórios chegam mais tarde.',
  priceGo: 'Ver os planos',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
  check: {"title": "O Mindveto funciona? Teste o bloqueio de IA", "desc": "Teste em segundos se o ChatGPT, o Gemini, o Claude e outros sites de IA estão mesmo bloqueados neste aparelho. Grátis, sem conta, nada nos é enviado.", "h1": "Funciona? Teste aqui.", "lead": "Abra esta página no aparelho que quer verificar, carregue no botão e veja para cada site de IA se está bloqueado. Teste em cada aparelho e navegador.", "blocks": [{"h": "O que o teste verifica", "list": ["Oito sites de IA conhecidos, um a um.", "Bloqueado quer dizer que o Mindveto (ou o seu filtro de rede) parou a ligação neste aparelho.", "Aberto quer dizer que o site de IA pode ser alcançado daqui neste momento."]}, {"h": "Se um site está aberto", "list": ["O Mindveto está ligado? No navegador, clique no ícone do Mindveto.", "O horário está a pausá-lo agora? Então a IA é permitida de propósito.", "Aprovou essa IA nas definições? A IA aprovada fica aberta.", "Está noutro navegador ou numa janela privada? Cada navegador precisa da sua própria extensão."], "note": "O teste mostra só este aparelho, este navegador e este momento. Repita-o no telemóvel ou portátil do seu filho.", "human": true}], "faq": [{"q": "O teste envia os meus dados ao Mindveto?", "a": "Não. A página só tenta chegar aos sites de IA a partir do seu próprio aparelho. Nada do resultado nos é enviado."}, {"q": "Porque é que um site diz «Sem resposta»?", "a": "O site não respondeu em seis segundos. Pode ser uma ligação lenta ou um bloqueio que espera em vez de recusar. Tente de novo."}], "related": ["bypass", "download", "help"]},
  bypass: {"title": "Como as crianças contornam bloqueios de IA", "desc": "Os truques das crianças para contornar bloqueios de IA e, para cada um: o Mindveto para-o, o que configurar e o que nenhum filtro para.", "h1": "Truques para contornar, com honestidade.", "lead": "As crianças tentam. Aqui está o que o Mindveto para sozinho, o que para depois de configurado e o que nenhum filtro para. Leia antes de confiar num bloqueador.", "actions": [{"label": "Funciona? Teste", "to": "check", "solid": true}], "blocks": [{"h": "O Mindveto para estes", "list": ["Escrever o endereço de outro site de IA: mais de 150 sites de IA e os seus subsites estão bloqueados.", "Abrir um site de IA pelo Google Tradutor: essas cópias também estão bloqueadas.", "Usar o «Modo IA» da pesquisa Google: bloqueado.", "Desligar o Mindveto ou mudar definições: precisa do PIN, e a tentativa fica no registo de sabotagem.", "Adivinhar o PIN: após 5 tentativas erradas bloqueia por um tempo, e isso fica registado."]}, {"h": "Parados depois de configurar", "list": ["Sites de VPN e proxy: ligue «Bloquear sites de VPN, proxy e DNS seguro» no filtro familiar.", "Uma janela privada (anónima): no Chrome ou Edge, abra os detalhes da extensão e permita-a em janelas privadas.", "Outro navegador no mesmo computador: instale lá também a extensão, ou use a transferência para Windows ou Mac, que funciona em todos os navegadores e apps.", "Remover a extensão: use a transferência para Windows ou Mac e dê ao seu filho uma conta normal (não administrador), para que não a possa desfazer.", "Desligar a app Android: ligue «VPN sempre ativa» e «Bloquear ligações sem VPN» nas definições do Android. A app também o avisa.", "Mudar a hora para fugir ao horário: uma conta normal (não administrador) não pode mudar a hora do computador."]}, {"h": "Nenhum filtro para estes", "list": ["Dados móveis ou o hotspot de um amigo: um filtro Wi-Fi fica à porta de casa. As versões de navegador, telemóvel e computador funcionam em qualquer rede.", "O telemóvel de um amigo ou um computador da escola: nenhum filtro de casa chega lá.", "IA dentro de apps como Snapchat ou WhatsApp: corre muitas vezes nos servidores da própria app, por isso bloqueá-la estragaria a app. Desligue-a nas definições da app, se possível.", "Um iPhone: ainda não há app Mindveto para iPhone. Use o Tempo de Uso no iPhone ou bloqueie a IA em todo o Wi-Fi."], "note": "Nenhum bloqueador substitui uma conversa. Diga ao seu filho porque existe a regra e quando a IA está bem.", "human": true}], "related": ["check", "family", "parents"]},
  parents: {
    title: 'Bloquear o ChatGPT e apps de IA para o seu filho',
    desc: 'Bloqueie chatbots de IA, companheiros de IA e IA de lição de casa no navegador, no celular Android e no PC da família do seu filho. PIN e horário. Grátis.',
    h1: 'Bloqueie a IA para o seu filho, em cada tela que ele usa.',
    lead: 'Companheiros de IA que conversam à meia-noite, redações escritas em dez segundos. O Mindveto deixa você decidir quando a IA faz parte do dia do seu filho, e um PIN mantém assim.',
    actions: [{ label: 'Baixar grátis', to: 'download', solid: true }, { label: 'Qual versão eu preciso?', to: 'help' }],
    blocks: [
      { h: 'O que você pode fazer', list: [
        'Bloquear mais de 150 chatbots, companheiros de IA, ajudantes de lição de casa e ferramentas de imagem com IA com um só botão.',
        'Definir um PIN para que seu filho não possa desligar nem mudar a lista.',
        'Usar um horário: bloquear só em dias de aula, ou só à noite. As férias escolares da Bélgica, Holanda e França já vêm incluídas.',
        'Ver um registro de violação: tentativas de PIN erradas e quando o botão foi desligado.',
        'Novo: aviso de “amigo IA”. Apps de companhia como Character.AI, Replika e Talkie são bloqueados, e uma tentativa coloca “App de amigo IA tentado” no registro de violação com uma marca vermelha no ícone. Só a hora é guardada, não o site nem a conversa. Na extensão de navegador; o app Android e os downloads para PC também bloqueiam esses apps, sem o aviso. Saiba mais: <a href="/pt/blog/character-ai-e-seguro-para-criancas/">O Character.AI é seguro para crianças?</a>',
        'Modo noturno: um botão bloqueia a IA todas as noites das 22:00 às 07:00 (extensão de navegador).',
        'Permitir uma IA de confiança, por exemplo para um trabalho da escola, e manter o resto bloqueado.',
        'Se quiser, bloquear também redes sociais como TikTok, Instagram e Snapchat no navegador. Fica desligado até você ativar.',
        'Filtro familiar, grátis: bloqueie sites pornô e +18 e force o SafeSearch no Google, Bing, DuckDuckGo e YouTube. Desligado até você ligar. Opcional: bloqueie também sites de VPN, proxy e DNS seguro, para que o filtro não seja fácil de contornar. Também opcional: bloquear sites de apostas e jogos de azar, e apps de namoro e videochat aleatório.',
      ]},
      { h: 'Configure em 10 minutos', steps: [
        L('No computador da família: instale a <a href="/browser-extension/">extensão de navegador</a>, ou bloqueie a IA em todos os apps com o download para <a href="/windows/">Windows</a> ou <a href="/mac-linux/">Mac</a>.'),
        L('No celular Android do seu filho: instale o <a href="/android/">app para Android</a> e ative “VPN sempre ativa” para que seja muito mais difícil de contornar.'),
        'Use o mesmo PIN em todo lugar e guarde-o para você.',
        'Dê ao seu filho uma conta normal (sem administrador) no computador. Assim ele não consegue removê-lo.',
      ]},
      { h: 'Uma boa conversa vale mais que qualquer bloqueio', p: [
        'O bloqueio funciona melhor quando seu filho sabe o porquê. Conte o que o Mindveto faz, quando a IA é permitida e que o registro mostra se alguém tenta desligá-lo.',
      ], note: 'O Mindveto não lê as mensagens do seu filho e não nos envia nada. Só impede que endereços de IA abram.', human: true },
    ],
    faq: [
      { q: 'Funciona no iPhone?', a: L('Ainda não há app para iPhone. Você pode bloquear a IA num iPhone com nossa lista gratuita e um serviço de DNS: veja <a href="/network/">rede inteira</a>. O Tempo de Uso da Apple também bloqueia sites específicos.') },
      { q: 'Meu filho usa um notebook da escola. Posso instalar nele?', a: 'Pergunte primeiro à escola. Os dispositivos escolares são geridos pela escola, e muitas escolas podem instalar o Mindveto para todos os alunos de uma vez.' },
      { q: 'É grátis mesmo?', a: 'Sim. Bloqueio, PIN e horário continuam grátis. Um plano Plus pago com extras para famílias chega mais tarde.' },
    ],
    related: ['family', 'browser', 'android'],
  },

  schools: {
    title: 'Bloquear a IA nos computadores da escola, com botão de prova',
    desc: 'Bloqueie ChatGPT e ferramentas de IA nos computadores e na rede da escola. Botão de prova para professores e arquivos para a TI. Sem dados de alunos.',
    h1: 'IA desligada durante a prova. Ligada quando a aula precisa.',
    lead: 'Professores ganham um botão de prova. A TI recebe arquivos prontos para cada computador e para a rede da escola. Ninguém lê o que os alunos digitam.',
    actions: [{ label: 'Abrir o botão de prova', to: 'exam', solid: true }, { label: 'Arquivos para a TI', to: 'network' }],
    blocks: [
      { h: 'Para professores', list: [
        'Lei europeia da IA: o que o artigo 4 sobre literacia em IA pede à tua escola, com um plano de 6 passos: <a href="/pt/blog/ai-act-artigo-4-escolas/">ler o guia</a>.',
        'Crie uma turma com um clique. Os alunos entram com um código na extensão.',
        'Inicie o modo prova de 30 a 240 minutos. Toda IA fica bloqueada nos navegadores da sua turma em menos de um minuto.',
        'Sem contas, sem nomes de alunos, sem e-mails.',
      ], actions: [{ label: 'Criar uma turma', to: 'exam' }] },
      { h: 'Para a TI', list: [
        'Instale a extensão de forma obrigatória com políticas do Chrome e do Edge (Google Admin, GPO, Intune) para que os alunos não possam removê-la.',
        'Bloqueie a IA na rede da escola com arquivos para Windows Server DNS, BIND, Unbound, dnsmasq, Pi-hole, Squid e firewalls comuns.',
        'Permita só as ferramentas de IA que sua escola aprova e mantenha todo o resto bloqueado.',
      ], actions: [{ label: 'Baixar o pacote de TI', to: 'network' }] },
      { h: 'Privacidade dos alunos', p: [
        'O Mindveto verifica tudo no dispositivo. Não registra quais sites os alunos visitam nem lê o que escrevem. Para o modo prova, nosso banco de dados guarda só um código de turma em hash e o horário de fim da prova.',
        L('Isso facilita explicar às famílias e ao encarregado de proteção de dados. Leia a <a href="/privacy/">política de privacidade</a>.'),
      ]},
      { h: 'Teste por um trimestre', p: [
        L('Grátis durante o piloto. Escreva para <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> com o nome da escola e o número de dispositivos, e ajudamos a configurar.'),
      ]},
    ],
    faq: [
      { q: 'Um aluno pode sair da turma ou desligar?', a: 'Não, se a escola define o PIN e instala a extensão por política do navegador. Num computador onde o aluno é administrador, ele pode removê-la.' },
      { q: 'Bloqueia celulares na sala de aula?', a: 'O modo prova funciona nos navegadores dos computadores da escola. Para celulares no Wi-Fi da escola, use os arquivos de DNS para a rede escolar.' },
      { q: 'Quanto vai custar depois?', a: L('O plano é 1 € por aluno por ano, mínimo 149 € por escola. Veja os <a href="/pricing/">preços</a>.') },
    ],
    related: ['exam', 'network', 'browser'],
  },

  offices: {
    title: 'Impeça a equipe de colar dados de clientes no ChatGPT',
    desc: 'Guarda de colagem para escritórios: um aviso antes que IBAN, números de identidade, listas de clientes ou textos confidenciais cheguem a chats de IA.',
    h1: 'Um aviso antes que dados de clientes acabem num chatbot.',
    lead: 'Um contador cola um extrato bancário num chatbot para “resumir”. O Mindveto para esse momento na tela, antes que os dados saiam do escritório.',
    actions: [{ label: 'Proteger dados privados no ChatGPT', to: 'paste', solid: true }, { label: 'Preços para equipes', to: 'pricing' }],
    blocks: [
      { h: 'O que faz por um escritório', list: [
        'Permite só a IA que seu escritório aprova (por exemplo Microsoft Copilot com a conta da empresa) e bloqueia as outras 150+.',
        'Avisa antes de colar num site de IA IBAN, números de cartão, números de identidade, listas de e-mails, chaves secretas ou textos marcados como “confidencial”.',
        'Adicione suas próprias palavras privadas: nomes de clientes, códigos de projeto, números de processo.',
        'Bloqueie as configurações com um PIN e veja quando alguém tentou mudá-las.',
      ]},
      { h: 'Por que escritórios escolhem', p: [
        'Grandes ferramentas contra vazamento de dados enviam seus dados para a nuvem delas para verificar, e custam milhares. O Mindveto verifica no próprio PC, então o texto nunca sai do escritório.',
        'Serve para contadores, advogados, cartórios, corretores de seguros, RH e consultórios médicos: equipes pequenas com processos confidenciais e sem departamento de TI.',
      ], note: 'Em muitos países, os funcionários ou seus representantes devem ser informados antes de introduzir uma ferramenta assim. O Mindveto verifica o texto colado só no dispositivo e não nos envia nada, o que facilita essa conversa.', human: true },
      { h: 'Implante', steps: [
        L('Instale a <a href="/browser-extension/">extensão de navegador</a> em cada computador de trabalho, ou instale-a de forma obrigatória com políticas do Edge ou do Chrome.'),
        'Marque a IA que seu escritório permite e adicione suas palavras privadas.',
        'Defina um único PIN para o escritório todo.',
      ]},
    ],
    faq: [
      { q: 'Pode bloquear a IA dentro do Word ou Outlook?', a: L('A extensão funciona no navegador. No Windows, o <a href="/windows/">download para Windows</a> também pode desligar o Copilot e o Recall integrados ao Windows.') },
      { q: 'Vocês veem o que minha equipe cola?', a: 'Não. A verificação acontece no computador. O texto colado nunca é guardado nem enviado.' },
      { q: 'Quanto custa?', a: L('O plano para equipes é 2,50 € por usuário por mês. Durante o lançamento é grátis. Veja os <a href="/pricing/">preços</a>.') },
    ],
    related: ['paste', 'policy', 'browser'],
  },

  browser: {
    title: 'Extensão bloqueadora de IA para Chrome, Edge, Brave e Opera',
    desc: 'Extensão gratuita que bloqueia ChatGPT, Gemini, Claude e mais de 150 sites de IA no Chrome, Edge, Brave e Opera. PIN, horário, guarda de colagem. Sem rastreio.',
    h1: 'O botão de IA do seu navegador.',
    lead: 'Um botão bloqueia mais de 150 chatbots e ferramentas de IA. Um PIN impede que outra pessoa o mude. Funciona no Chrome, Edge, Brave e Opera.',
    actions: [{ label: 'Baixar v1.8.1 (738 KB)', url: DL + 'human-override-1.8.1.zip', solid: true, download: true }, { label: 'Passos de instalação', url: '#install' }],
    blocks: [
      { h: 'O que vem dentro', list: [
        'Bloqueia chat de IA, busca com IA, ferramentas de imagem, vídeo, voz e música com IA, ferramentas de escrita e lição de casa, de programação e de anotações com IA.',
        'Bloqueio por PIN do botão e de todas as configurações.',
        'Horário com férias escolares da Bélgica, Holanda e França.',
        L('<a href="/paste-guard/">Guarda de colagem</a> com suas próprias palavras privadas.'),
        'IA aprovada: permita só as ferramentas que sua escola ou empresa permite.',
        L('Modo turma e <a href="/exam-button/">modo prova</a> para professores.'),
        'Registro de violação e uma marca vermelha no ícone após um PIN errado.',
        'Apps de amigo IA (Character.AI, Replika, Talkie e outros) têm o seu próprio botão, ligado por padrão. Uma tentativa bloqueada coloca “App de amigo IA tentado” no registro de violação e uma marca vermelha no ícone. Só a hora é guardada.',
        'Modo noturno: um botão bloqueia a IA todas as noites, 22:00-07:00.',
        'Suas próprias listas de bloqueio e permissão. A lista pública é atualizada uma vez por dia.',
        'Opcional: bloquear também redes sociais (TikTok, Instagram, Snapchat e mais). Desligado até você ativar.',
        'Por enquanto a extensão está em inglês, holandês e francês.',
        'Filtro familiar: bloqueia mais de 60.000 sites pornô e +18 e força o SafeSearch no Google, Bing, DuckDuckGo e YouTube. Desligado até você ligar; com um PIN, só você pode desligá-lo. Opcional: bloqueia também sites de VPN, proxy, Tor e DNS seguro, para que o filtro não seja contornado facilmente. Também opcional: bloquear sites de apostas e jogos de azar, e apps de namoro e videochat aleatório.',
      ]},
      { h: 'Instale em um minuto', fold: 'Mostrar os passos de instalação', foldLead: 'As versões das lojas estão a caminho. Até lá, você instala à mão em um minuto.', steps: [
        'Baixe o zip acima e descompacte (botão direito, “Extrair tudo”).',
        L('Abra <code>chrome://extensions</code> (no Edge: <code>edge://extensions</code>).'),
        'Ative o “Modo do desenvolvedor” (canto superior direito).',
        'Clique em “Carregar sem compactação” e escolha a pasta descompactada.',
        'Fixe o ícone na barra, abra-o e defina um PIN.',
      ], note: 'Para pais e escolas: na página “Detalhes” da extensão, ative “Permitir no modo anônimo”. Senão as janelas anônimas não são bloqueadas.' },
      { h: 'Dados', facts: [
        ['Versão', '1.8.1 (Manifest V3)'], ['Tamanho', '738 KB'], ['Navegadores', 'Chrome, Edge, Brave, Opera. Firefox e lojas oficiais: em breve'],
        ['Permissões', 'Regras de bloqueio, armazenamento local, um temporizador diário e acesso a todos os sites: necessário para enviar qualquer endereço de IA para a página do Mindveto. A guarda de colagem só funciona em sites de IA'], ['Dados enviados', 'Nenhum dado de navegação. A lista pública é baixada uma vez por dia; o modo prova envia só um código de turma, uma vez por minuto'], ['Preço', 'Grátis'],
      ]},
    ],
    faq: [
      { q: 'Por que ainda não está na Chrome Web Store?', a: 'As versões das lojas estão a caminho. Até lá, você instala à mão em um minuto, com os passos acima.' },
      { q: 'Por que um download antigo diz “Human Override”?', a: 'Esse era o nome até novembro de 2026. A versão 1.3.0 e posteriores mostram o nome Mindveto. É o mesmo produto.' },
    ],
    related: ['paste', 'exam', 'android'],
  },

  android: {
    title: 'Bloquear apps de IA no Android',
    desc: 'App para Android que bloqueia ChatGPT, Gemini, Character.AI e mais de 150 serviços de IA em todos os apps do celular. PIN e alertas de violação. Não envia nada.',
    h1: 'IA desligada em todos os apps do celular.',
    lead: 'Navegadores são só metade da história: os apps de IA vivem no celular. O app Mindveto para Android bloqueia endereços de IA para todos os apps, e avisa se alguém tentar desligá-lo.',
    actions: [{ label: 'Baixar para Android (389 KB, beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'Como funciona', p: [
        'O app roda no celular um pequeno filtro local de nomes da internet (DNS). Quando um app pede um endereço de IA, o filtro responde que ele não existe. Todo o resto funciona normalmente.',
        'Só essas consultas de nomes passam pelo app. Nada é enviado para nós.',
        'Filtro familiar opcional: ligue “Sites adultos” e “SafeSearch” no app. Os sites pornô não abrem em nenhum app, e Google, Bing, DuckDuckGo e YouTube mostram resultados seguros. Com um PIN, desligar pede o PIN. Um terceiro interruptor bloqueia serviços de VPN, proxy e DNS seguro, para que o filtro não seja fácil de contornar. Também opcional: bloquear sites de apostas e jogos de azar, e apps de namoro e videochat aleatório.',
      ]},
      { h: 'Instalar', steps: [
        'Abra o link de download no celular.',
        'Quando o Android perguntar, permita “instalar apps desconhecidos” para o seu navegador.',
        'Abra o app e toque no botão grande.',
        'Ative “VPN sempre ativa” e “Bloquear conexões sem VPN” (o app mostra como). Assim fica muito mais difícil de contornar.',
        'Defina um PIN.',
      ], note: 'Beta: para atualizar, desinstale primeiro a versão antiga. Uma versão no Google Play está a caminho. Por enquanto o app está em inglês, holandês e francês.' },
      { h: 'Dados', facts: [
        ['Versão', 'Beta, Android 16 (SDK 36)'], ['Tamanho', '389 KB'], ['Requer', 'Android 8 ou mais recente'],
        ['Alertas de violação', 'Sim, uma notificação se a proteção parar'], ['Dados enviados', 'Nada para nós. Consultas não bloqueadas vão para um servidor DNS, como sempre'], ['Preço', 'Grátis durante a beta'],
      ]},
    ],
    faq: [
      { q: 'Deixa o celular lento ou gasta bateria?', a: 'Quase nada. Ele só responde consultas de nomes; não manda seu tráfego por um servidor.' },
      { q: 'Posso usar outra VPN ao mesmo tempo?', a: 'Não. O Android permite uma VPN por vez. O Mindveto usa esse espaço para o filtro local.' },
    ],
    related: ['parents', 'network', 'browser'],
  },

  windows: {
    title: 'Bloquear a IA no Windows, em todos os navegadores e apps',
    desc: 'Download gratuito para Windows que bloqueia ChatGPT e mais de 150 serviços de IA em todos os navegadores e apps, e pode desligar o Copilot e o Recall.',
    h1: 'Bloqueie a IA no PC com Windows inteiro.',
    lead: 'Sem extensão: um download bloqueia endereços de IA para todos os navegadores e apps do computador. Também pode desligar a IA integrada ao Windows.',
    actions: [{ label: 'Baixar para Windows (501 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Instalar', fold: 'Mostrar os passos de instalação', foldLead: 'As versões das lojas estão a caminho. Até lá, você instala à mão em um minuto.', steps: [
        'Descompacte o download.',
        'Clique duas vezes em “Start-Mindveto.bat” e clique em Sim.',
        'Digite 1 para bloquear a IA. Digite 3 para desligar também o Copilot, o Recall e a IA do Edge e do Chrome.',
        'Dê a crianças ou funcionários uma conta normal (sem administrador). Assim não conseguem desfazer.',
        'Digite 5 para ligar o filtro familiar: sites pornô e +18 bloqueados, SafeSearch forçado no Google, Bing e YouTube. Digite 6 para desligar. Também bloqueia sites de VPN, proxy e DNS seguro e desliga o DNS seguro no Chrome, Edge e Firefox. A opção 5 também pergunta sobre sites de apostas e de namoro.',
      ], note: 'O Windows pode dizer primeiro que “protegeu o computador”. Clique em “Mais informações” e depois em “Executar assim mesmo”. O script é texto puro: você pode abri-lo no Bloco de Notas e ler cada linha. O script está em inglês.' },
      { h: 'Dados', facts: [
        ['Funciona em', 'Windows 10 e 11'], ['Como', 'Adiciona endereços de IA ao arquivo hosts do Windows e define políticas oficiais do Windows para a IA integrada'],
        ['Desfazer', 'Execute de novo e digite 2 (4 para a IA integrada)'], ['Requer', 'Direitos de administrador uma vez'], ['Preço', 'Grátis'],
      ]},
    ],
    related: ['browser', 'offices', 'network'],
  },

  maclinux: {
    title: 'Bloquear a IA no Mac e no Linux',
    desc: 'Script gratuito que bloqueia ChatGPT e mais de 150 serviços de IA em todos os navegadores e apps de um Mac ou computador Linux. Um comando liga, outro desliga.',
    h1: 'Um comando. IA desligada no Mac ou Linux inteiro.',
    lead: 'O script adiciona endereços de IA ao arquivo hosts do sistema, então todos os navegadores e apps do computador ficam cobertos.',
    actions: [{ label: 'Baixar para Mac e Linux (498 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Instalar', steps: [
        'Descompacte o download.',
        'Abra o Terminal na pasta descompactada.',
        L('Digite <code>sudo sh mindveto.sh on</code> e sua senha.'),
        L('Para permitir a IA de novo: <code>sudo sh mindveto.sh off</code>.'),
        L('Filtro familiar (sites pornô e +18, SafeSearch): <code>sudo sh mindveto.sh family-on</code>, e <code>family-off</code> para desfazer. Também bloqueia sites de VPN, proxy e DNS seguro. Adicione <code>gambling dating</code> para bloquear também esses sites.'),
      ], note: 'Use uma conta normal (sem administrador) para as crianças. Assim elas não podem mudar o arquivo hosts.' },
      { h: 'Dados', facts: [
        ['Funciona em', 'macOS, Ubuntu, Debian, Fedora e a maioria dos sistemas Linux'], ['Desfazer', 'Um comando'], ['Preço', 'Grátis'],
      ]},
    ],
    related: ['browser', 'network', 'parents'],
  },

  network: {
    title: 'Bloquear a IA numa rede inteira: DNS, firewall, políticas',
    desc: 'Listas gratuitas e um pacote de TI para bloquear ChatGPT e mais de 150 serviços de IA numa rede: Pi-hole, AdGuard, Windows DNS, BIND, Squid, GPO, Intune.',
    h1: 'Bloqueie a IA para cada dispositivo da rede.',
    lead: 'Para casas, escolas, escritórios e serviços públicos. Use nossas listas gratuitas com o filtro que você já tem, ou implante hoje o pacote de TI.',
    actions: [{ label: 'Baixar o pacote de TI (13 KB)', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }],
    blocks: [
      { h: 'Listas gratuitas', p: ['Adicione um endereço ao seu filtro. As listas ficam no mesmo endereço e são atualizadas quando surgem novos serviços de IA.'], facts: [
        ['Lista AdGuard / uBlock', L('<a href="/downloads/adblock.txt">mindveto.app/downloads/adblock.txt</a>')],
        ['Arquivo hosts', L('<a href="/downloads/hosts.txt">mindveto.app/downloads/hosts.txt</a>')],
        ['Domínios simples', L('<a href="/downloads/domains.txt">mindveto.app/downloads/domains.txt</a>')],
      ]},
      { h: 'Onde usar', list: [
        'Roteador de casa ou do escritório com Pi-hole ou AdGuard Home: adicione a lista uma vez e todos os dispositivos do Wi-Fi ficam cobertos.',
        'Android e iPhone: uma conta gratuita do AdGuard DNS com nossa lista como regras próprias, depois DNS privado (Android) ou um perfil (iPhone).',
        'Um computador: adicione a lista hosts ao arquivo hosts (requer administrador).',
      ]},
      { h: 'No pacote de TI', list: [
        'Políticas do Chrome e do Edge (GPO, Intune, Google Admin) para instalar a extensão de forma obrigatória e bloquear sites de IA.',
        'Políticas do Firefox.',
        'Windows Server DNS (PowerShell), zona RPZ do BIND, Unbound, dnsmasq.',
        'ACL para o proxy Squid e uma lista para firewalls Palo Alto, Fortinet e Check Point.',
      ], note: 'Listas de DNS bloqueiam domínios inteiros. Alguns bloqueios em nível de página, como o Bing Chat, só funcionam na extensão de navegador.' },
    ],
    faq: [
      { q: 'Podemos usar as listas comercialmente?', a: L('Sim, dentro da sua própria organização. Revender exige permissão por escrito. Veja os <a href="/terms/">termos</a>.') },
      { q: 'Vocês ajudam com a implantação?', a: L('Sim. Escreva para <a href="mailto:hello@mindveto.app">hello@mindveto.app</a> com o número de dispositivos e sua configuração.') },
    ],
    related: ['schools', 'offices', 'windows'],
  },

  exam: {
    title: 'Botão de prova: desligue a IA para a sua turma',
    desc: 'Botão de prova gratuito para professores: um toque bloqueia todos os chatbots de IA nos navegadores da turma durante uma prova. Sem contas, sem nomes de alunos.',
    h1: 'Nada de IA durante a prova.',
    lead: 'Um toque desliga todos os chatbots de IA nos navegadores da sua turma, enquanto durar a prova. Grátis, sem contas, sem nomes de alunos.',
    blocks: [
      { h: 'Como funciona', steps: ['Crie uma turma aqui. Você recebe um código de turma e um link privado de professor.', 'Os alunos abrem a extensão Mindveto, vão em “Class · exam mode” e digitam o código.', 'Toque em “Iniciar modo prova”. Em menos de um minuto toda IA fica bloqueada nos navegadores deles, até o tempo acabar ou você parar.'] },
    ],
    faq: [
      { q: 'Do que os alunos precisam?', a: L('Da <a href="/browser-extension/">extensão Mindveto</a> no navegador, ligada à sua turma com o código. Nos computadores da escola, a escola instala uma vez.') },
      { q: 'O que o servidor de vocês guarda?', a: 'Um código de turma em hash, uma chave de professor em hash e o horário de fim da prova. Sem nomes, sem e-mails. Para evitar abusos, um IP em hash é guardado por uma hora.' },
    ],
    related: ['schools', 'browser', 'network'],
  },

  paste: {
    title: 'Guarda de colagem: dados privados fora dos chats de IA',
    desc: 'O Mindveto avisa antes que IBAN, números de identidade, listas de e-mails, chaves secretas ou textos confidenciais sejam colados no ChatGPT e em sites de IA.',
    h1: 'Um segundo olhar antes de colar.',
    lead: 'As pessoas colam primeiro e pensam depois. Em sites de IA, a guarda de colagem verifica o que você cola, no seu próprio computador, e pergunta antes que dados privados entrem no chat.',
    actions: [{ label: 'Obter a extensão', to: 'browser', solid: true }, { label: 'Para escritórios', to: 'offices' }],
    blocks: [
      { h: 'O que ela detecta', list: [
        'Números de conta bancária (IBAN) e de cartão.',
        'Números de identidade nacional e de previdência social.',
        'Listas de endereços de e-mail.',
        'Chaves secretas, senhas e tokens de acesso.',
        'Textos marcados como “confidential”, “vertrouwelijk” ou “confidentiel”.',
        'Suas próprias palavras privadas: nomes de clientes, códigos de projeto, números de processo.',
      ]},
      { h: 'O que você pode escolher', steps: [
        'Não colar.',
        'Colar sem as partes privadas: elas são trocadas por um marcador.',
        'Colar mesmo assim, se tiver certeza.',
      ]},
      { h: 'Onde a verificação acontece', p: [
        'No seu computador, dentro do navegador. O texto colado nunca é guardado nem enviado, nem para nós.',
      ], note: 'Funciona em sites de IA de chat, busca, escrita e programação. Não observa seu e-mail, documentos ou outros sites.', human: true },
    ],
    related: ['offices', 'browser', 'pricing'],
  },

  download: {
    title: 'Baixar o Mindveto: navegador, Android, Windows, Mac',
    desc: 'Baixe o Mindveto grátis: extensão de navegador, app para Android, scripts para Windows e Mac/Linux, listas e o pacote de TI. Sem conta, sem rastreio.',
    h1: 'Baixar o Mindveto.',
    lead: 'Escolha o dispositivo que quer proteger. Tudo é grátis e não precisa de conta. Por enquanto os apps estão em inglês, holandês e francês.',
    blocks: [
      { h: 'Navegador num portátil ou PC', p: ['Extensão de navegador. Chrome, Edge, Brave e Opera. Versão 1.8.1, 738 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-1.8.1.zip', solid: true, download: true }, { label: 'Passos de instalação', to: 'browser' }] },
      { h: 'Telefone ou tablet Android', p: ['App para Android (beta). Bloqueia a IA em todos os apps. 389 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Passos de instalação', to: 'android' }] },
      { h: 'PC com Windows: todos os apps', p: ['Windows. Todos os navegadores e apps do PC. 501 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Passos de instalação', to: 'windows' }] },
      { h: 'Computador Mac ou Linux', p: ['Mac e Linux. Um comando, no sistema todo. 498 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Passos de instalação', to: 'maclinux' }] },
      { h: 'Todo o Wi-Fi de casa ou do escritório (IT)', p: ['Pacote de TI e listas. Arquivos para DNS, firewall e políticas de navegador. 13 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Todas as listas', to: 'network' }] },
      { h: 'iPhone ou iPad', p: ['Ainda não há app para iPhone. Bloqueie a IA em todos os aparelhos do seu Wi-Fi com o pacote IT, ou bloqueie sites pelo Tempo de Uso no iPhone.'] },
    ],
    related: ['check', 'help', 'pricing'],
  },

  pricing: {
    title: 'Preços do Mindveto: Grátis, Plus, Escola e Business',
    desc: 'Bloquear é grátis. Plus 14,99 € por ano para famílias, 1 € por aluno para escolas, 2,50 € por usuário por mês para escritórios. Grátis durante o lançamento.',
    h1: 'Bloquear é grátis. Os extras pagam o trabalho.',
    lead: 'Hoje todas as funções são grátis enquanto lançamos. Os planos pagos chegam mais tarde; vamos avisar aqui primeiro.',
    blocks: [],
    faq: [
      { q: 'Quando eu tenho que pagar?', a: 'Agora não. Quando os planos pagos começarem, você decide se quer mudar. Nada é cobrado automaticamente e o plano grátis continua.' },
      { q: 'Os preços incluem impostos?', a: 'Sim, os preços para consumidores incluem o IVA belga. Escolas e empresas recebem uma fatura.' },
    ],
    related: ['parents', 'schools', 'offices'],
  },

  help: {
    title: 'Ajuda e perguntas frequentes',
    desc: 'Respostas sobre o Mindveto: qual versão você precisa, PIN, horário, privacidade, desinstalação, e o que o Mindveto pode e não pode bloquear.',
    h1: 'Ajuda',
    lead: 'Respostas curtas às perguntas mais comuns. Não encontrou a sua? Escreva para hello@mindveto.app (respondemos em inglês, holandês ou francês).',
    blocks: [
      { h: 'Qual versão eu preciso?', facts: [
        ['O celular Android de uma criança', L('<a href="/android/">App para Android</a>')],
        ['Um computador da família ou do escritório', L('<a href="/browser-extension/">Extensão de navegador</a>, mais <a href="/windows/">Windows</a> ou <a href="/mac-linux/">Mac</a> para todos os apps')],
        ['Computadores da escola', L('<a href="/browser-extension/">Extensão</a> por política do navegador, mais o <a href="/exam-button/">botão de prova</a>')],
        ['Todos os dispositivos de casa ou do trabalho', L('<a href="/network/">Listas de rede</a>')],
      ]},
    ],
    faq: [
      { q: 'Esqueci meu PIN.', a: 'Por segurança não há botão de redefinir. Remova a extensão na página de extensões do navegador (isso exige controle do computador) e instale de novo.' },
      { q: 'Um site normal foi bloqueado por engano.', a: 'Abra a extensão e adicione o site à sua lista de permitidos. Envie-nos o endereço e corrigimos a lista pública.' },
      { q: 'Uma ferramenta de IA não está bloqueada.', a: 'Adicione-a agora à sua própria lista de bloqueio e envie-nos o endereço. Adicionamos novos serviços de IA à lista pública.' },
      { q: 'Como desinstalo?', a: 'Navegador: remova na página de extensões. Android: desligue e depois desinstale. Windows: execute o script e digite 2. Mac e Linux: execute o script com “off”.' },
      { q: 'O Mindveto usa IA?', a: 'Não. O bloqueio e a guarda de colagem usam regras simples no seu dispositivo.' },
      { q: 'Quem faz o Mindveto?', a: L('Amghar Said, um criador independente. <a href="/about/">Sobre</a>.') },
    ],
    related: ['guide', 'download', 'privacy'],
  },

  about: {
    title: 'Sobre o Mindveto',
    desc: 'O Mindveto é feito por Amghar Said, um criador independente. Por que um botão para desligar a IA, como o mantemos privado e o que acontece se pararmos.',
    h1: 'As pessoas devem decidir quando a IA faz parte do seu dia.',
    lead: 'O Mindveto é feito por Amghar Said, um criador independente. Começou como Human Override em 2026 e ganhou nome próprio em novembro de 2026.',
    blocks: [
      { h: 'Quem faz', p: [
        'No trabalho, Amghar Said coordena estadias educativas para adolescentes. A tecnologia é sua paixão há 30 anos, e o Mindveto é um projeto que ele constrói ao lado do trabalho.',
        L('Ele também criou o <a href="https://dyskids.app/" rel="me">Dys Kids</a>, uma app gratuita de ajuda com os trabalhos de casa para crianças com dislexia: ouvir uma pergunta, dividi-la em passos, mostrar o raciocínio.'),
        L('Siga-o ou envie uma mensagem no <a href="https://www.linkedin.com/in/amghar-said-67a95a22/" rel="me">LinkedIn</a>.'),
      ]},
      { h: 'Por que o nome', p: [
        'Nos anos 1980, o neurocientista Benjamin Libet descreveu como a mente consciente pode frear um impulso pouco antes de agir: um veto. O Mindveto dá essa pausa a quem a quer diante da IA.',
      ]},
      { h: 'O que prometemos', list: [
        'Sem conta, sem rastreio, sem anúncios, sem venda de dados.',
        'Limites honestos, escritos nas páginas de produto, não escondidos nas letras miúdas.',
        'Bloquear continua grátis.',
        'Site em 8 idiomas; suporte por e-mail em inglês, holandês e francês.',
      ]},
      { h: 'Se um dia pararmos', p: [
        'Tudo o que você instalou continua funcionando: a extensão, o app e os scripts bloqueiam com a lista que já está no seu dispositivo. Você sempre pode removê-los do jeito normal.',
      ]},
    ],
    related: ['help', 'privacy', 'legal'],
  },

  privacy: {
    title: 'Política de privacidade',
    desc: 'O Mindveto não coleta dados pessoais: sem cookies, sem rastreadores, sem contas. O que o site, os apps e o modo prova tratam, e seus direitos (RGPD/LGPD).',
    h1: 'Política de privacidade',
    lead: 'Versão curta: não coletamos dados pessoais. Esta página explica as poucas coisas que passam por um servidor, e seus direitos. Versão 2, 13 de novembro de 2026. A versão em inglês prevalece.',
    blocks: [
      { h: 'Responsável', p: [L('Amghar Said, Bélgica. Contato: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Este site', list: [
        'Sem cookies, sem análises, sem rastreadores, sem publicidade, sem fontes ou scripts de outras empresas.',
        'O site está hospedado no GitHub Pages (GitHub, Inc., EUA). Como qualquer hospedagem, o GitHub trata brevemente seu endereço IP em registros do servidor para entregar e proteger o site. Nós não recebemos esses registros.',
        'A página do botão de prova guarda seu código de turma e sua chave de professor no seu próprio navegador (armazenamento local), só para a página funcionar. Você pode apagá-los com “Esquecer esta turma”.',
        "A página de teste «Funciona?» só contacta sites de IA, e a Wikipédia como controlo, quando carrega no botão. Esses sites veem então o seu endereço IP, como numa visita normal. O resultado fica no seu navegador.",
      ]},
      { h: 'Os apps e scripts', list: [
        'O bloqueio, a guarda de colagem e todas as configurações funcionam no seu dispositivo. O texto colado nunca é guardado nem enviado.',
        'A extensão pede acesso a todos os sites só para que as regras de bloqueio possam enviar qualquer endereço de IA para a página do Mindveto. A guarda de colagem só funciona nos sites de IA listados na extensão e não envia o que lê.',
        'A extensão baixa a lista pública de bloqueio uma vez por dia. Não envia dados pessoais nesse pedido.',
        'O app de Android só filtra consultas de nomes da internet no celular. Não nos envia nada.',
        'Para procurar nomes de sites, o app de Android passa as consultas não bloqueadas ao servidor DNS que o seu telefone já usa. Se ele não responder, usa a Cloudflare (1.1.1.1) ou a Quad9 (9.9.9.9). Esses serviços veem o nome do site e o seu endereço IP, como em qualquer consulta DNS.',
      ]},
      { h: 'Modo prova', p: [
        'Quando um professor cria uma turma, nosso banco de dados (Supabase, Frankfurt, UE) guarda um código de turma em hash, uma chave de professor em hash e o horário de fim da prova. As extensões da turma enviam só o código de turma, uma vez por minuto. Para evitar abusos, uma versão em hash do endereço IP é guardada por uma hora. Sem nomes, sem e-mails.',
        'Base legal: nosso interesse legítimo em oferecer o botão de prova com segurança (artigo 6.º, n.º 1, alínea f) do RGPD).',
      ]},
      { h: 'E-mail', p: ['Se você nos escrever, usamos sua mensagem só para responder e a apagamos quando não for mais necessária.'] },
      { h: 'Seus direitos', p: [
        L('Você pode pedir acesso, correção ou exclusão, e se opor. Escreva para <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>. Também pode reclamar à autoridade belga de proteção de dados (<a href="https://www.dataprotectionauthority.be" rel="noopener">dataprotectionauthority.be</a>) ou à autoridade do seu país.'),
      ]},
    ],
  },

  terms: {
    title: 'Termos de uso',
    desc: 'Termos de uso do Mindveto: o que faz e o que não faz, sua responsabilidade, sem garantia, responsabilidade limitada, propriedade e lei aplicável.',
    h1: 'Termos de uso',
    lead: 'O Mindveto é um software feito por Amghar Said. Ajuda a bloquear serviços de IA, mas nenhuma ferramenta consegue bloquear toda a IA. Versão 2, 12 de novembro de 2026. Vale para a extensão, o app de Android, os scripts para Windows, Mac e Linux, as listas e o pacote de TI. Esta é uma tradução; em caso de diferença, prevalece a versão em inglês.',
    blocks: [
      { h: '1. Quem fornece', p: [L('O Mindveto (antes Human Override) foi criado por Amghar Said (“o autor”), que é o seu proprietário. Contato: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: '2. Aceitação', p: ['Ao instalar, baixar ou usar o Mindveto, você aceita estes termos. Se não concordar, não o use e remova-o.'] },
      { h: '3. O que faz e o que não faz', p: ['O Mindveto tenta impedir o acesso a serviços de IA bloqueando seus endereços web. Não garante que nenhuma IA possa ser acessada. Não consegue bloquear IA integrada em serviços que você permite, IA que roda offline num dispositivo, outros navegadores, apps ou dispositivos, VPNs, proxies, outros serviços de DNS, nem novos serviços de IA que ainda não estão na lista. Qualquer pessoa com acesso suficiente ao dispositivo pode mudar ou remover as configurações. As listas podem bloquear um site por engano ou deixar outro de fora.'] },
      { h: '4. Sua responsabilidade', p: ['Você decide onde e como usa o Mindveto. Escolas, empresas e outras organizações continuam totalmente responsáveis por suas próprias regras, supervisão, segurança, testes e cumprimento da lei, inclusive de privacidade e trabalhista. Teste antes de confiar nele. Não o use para violar a lei nem para monitorar pessoas sem base legal.'] },
      { h: '5. Fornecido “como está”', p: ['O Mindveto é fornecido “como está” e “conforme disponível”, sem garantia de qualquer tipo, expressa ou implícita, incluindo adequação a um fim específico, exatidão, disponibilidade ou ausência de erros.'] },
      { h: '6. Limitação de responsabilidade', p: ['Na máxima medida permitida pela lei, Amghar Said não responde por nenhum dano direto ou indireto, perda de dados, perda de renda, perda de acesso, bloqueios que falharam, sites bloqueados por engano ou qualquer outra consequência de usar ou não poder usar o Mindveto. Nos planos pagos, a responsabilidade total se limita ao valor pago nos últimos doze meses. Nada aqui limita a responsabilidade que a lei não permite limitar, como em caso de dolo ou culpa grave, nem os direitos obrigatórios do consumidor.'] },
      { h: '7. Propriedade', p: ['O Mindveto, seu código, listas de bloqueio, ícones, textos e nome são © 2026 Amghar Said, todos os direitos reservados. Você pode usar a versão oficial sem modificações. Copiar, modificar, redistribuir ou vender exige permissão por escrito.'] },
      { h: '8. Privacidade', p: [L('O Mindveto não coleta dados pessoais. Veja a <a href="/privacy/">política de privacidade</a>.')] },
      { h: '9. Planos pagos', p: ['Os planos pagos, quando existirem, são descritos na página de preços antes da compra. Compras pelo Google Play seguem também os termos do Google Play. Os consumidores mantêm seus direitos legais, incluindo o direito de arrependimento quando aplicável.'] },
      { h: '10. Mudanças e fim', p: ['O autor pode mudar o Mindveto, as listas ou estes termos, ou deixar de oferecê-lo. A versão atual destes termos está sempre nesta página.'] },
      { h: '11. Lei aplicável', p: ['Estes termos são regidos pela lei belga, sem prejuízo das regras obrigatórias do país onde o consumidor vive.'] },
    ],
  },

  legal: {
    title: 'Informações legais',
    desc: 'Informações legais do Mindveto: quem publica o site e o software, como nos contatar, hospedagem e propriedade intelectual. Dados do editor.',
    h1: 'Informações legais',
    lead: 'Quem publica este site e o software Mindveto.',
    blocks: [
      { h: 'Editor', facts: [
        ['Nome', 'Amghar Said'], ['País', 'Bélgica'], ['E-mail', L('<a href="mailto:hello@mindveto.app">hello@mindveto.app</a>')],
        ['Número da empresa', COMPANY.kbo || 'Será mostrado aqui antes de qualquer plano pago começar'],
        ...(COMPANY.vat ? [['Número de IVA', COMPANY.vat] as [string, string]] : []),
        ...(COMPANY.address ? [['Endereço comercial', COMPANY.address] as [string, string]] : []),
      ]},
      { h: 'Hospedagem', p: ['GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, EUA.'] },
      { h: 'Propriedade intelectual', p: ['© 2026 Amghar Said. Todos os direitos reservados. Nomes de produtos como ChatGPT, Gemini, Claude e Copilot pertencem aos seus donos e são citados só para descrever o que o Mindveto bloqueia. O Mindveto não é afiliado a eles.', 'Fonte: Atkinson Hyperlegible Next, SIL Open Font License, servida por este site. Datas de férias escolares: OpenHolidays API (ODbL).'] },
      { h: 'Fontes e licenças', p: [L('Férias escolares: dados da API OpenHolidays, <a href="https://www.openholidaysapi.org/">openholidaysapi.org</a>, ODbL 1.0. Listas de bloqueio de adultos e apostas: Sinfonietta/hostfiles, StevenBlack/hosts (clefspeare13) e bigdargon/hostsVN, licença MIT; os avisos completos vão em cada download. Fonte: Atkinson Hyperlegible Next, Braille Institute, SIL Open Font License 1.1.')] },
    ],
  },

  guide: {
    title: 'Como bloquear o ChatGPT em qualquer dispositivo (2026)',
    desc: 'Bloqueie o ChatGPT no Chrome, Windows, Mac, Android, iPhone ou numa rede Wi-Fi inteira. Métodos gratuitos passo a passo, com os limites honestos de cada um.',
    h1: 'Como bloquear o ChatGPT, em cada dispositivo.',
    lead: 'A resposta curta: bloqueie o endereço chatgpt.com (e chat.openai.com) no navegador, no computador, no celular ou no roteador. Esta página mostra o jeito gratuito para cada caso, e qual serve para a sua situação.',
    actions: [{ label: 'Baixar o Mindveto grátis', to: 'download', solid: true }, { label: 'Qual versão eu preciso?', to: 'help' }],
    blocks: [
      { h: 'Escolha o método certo', facts: [
        ['Um navegador (Chrome, Edge, Brave, Opera)', L('<a href="/browser-extension/">Extensão de navegador</a>: um botão, PIN. Cerca de 1 minuto.')],
        ['Um PC com Windows inteiro, todos os navegadores e apps', L('<a href="/windows/">Download para Windows</a>: adiciona os endereços de IA ao arquivo hosts.')],
        ['Um Mac ou computador Linux', L('<a href="/mac-linux/">Um comando</a> no Terminal.')],
        ['Um celular Android, também dentro dos apps', L('<a href="/android/">App para Android</a> com filtro local e PIN.')],
        ['Um iPhone', L('Um serviço de DNS com nossa <a href="/network/">lista gratuita</a>, ou o Tempo de Uso da Apple para sites específicos.')],
        ['Todos os dispositivos do Wi-Fi', L('<a href="/network/">Listas de rede</a> para Pi-hole, AdGuard Home ou o DNS da escola ou do escritório.')],
      ]},
      { h: 'Bloquear o ChatGPT no Chrome ou Edge', steps: [
        L('Baixe a <a href="/browser-extension/">extensão Mindveto</a> e descompacte.'),
        L('Abra <code>chrome://extensions</code> (no Edge: <code>edge://extensions</code>) e ative o “Modo do desenvolvedor”.'),
        'Clique em “Carregar sem compactação” e escolha a pasta descompactada.',
        'Abra o Mindveto, vire o botão e defina um PIN. ChatGPT, Gemini, Copilot e mais de 150 ferramentas de IA agora mostram uma página de bloqueio.',
        'Na página “Detalhes” da extensão, ative “Permitir no modo anônimo”, senão as janelas anônimas não são bloqueadas.',
      ]},
      { h: 'Bloquear o ChatGPT sem software', p: [
        L('Dá para fazer à mão. Num computador, adicione estas linhas ao arquivo hosts (requer administrador): <code>0.0.0.0 chatgpt.com</code> e <code>0.0.0.0 chat.openai.com</code>. Num roteador com Pi-hole ou AdGuard Home, adicione esses dois nomes à lista de bloqueio.'),
        L('O problema: o ChatGPT é só um entre muitos. Gemini, Copilot, Claude, Character.AI e os demais continuam abertos, e novos surgem toda semana. Por isso o Mindveto mantém uma <a href="/network/">lista pública de mais de 150 serviços de IA</a>, atualizada diariamente. Você pode usar essa lista sem instalar nada nosso.'),
      ]},
      { h: 'Limites honestos de cada método', list: [
        'Um bloqueio só funciona onde você o instala. Uma criança ou um colega ainda pode usar outro celular ou outra rede.',
        'Quem é administrador do dispositivo pode remover um bloqueio. Dê a crianças e funcionários uma conta normal (sem administrador).',
        'Extensões de navegador não cobrem outros navegadores nem apps. Para isso, bloqueie no computador, no celular ou na rede.',
        'Listas que bloqueiam domínios inteiros não conseguem bloquear uma só página. Alguns bloqueios em nível de página, como o Bing Chat, só funcionam na extensão.',
      ], note: 'O bloqueio funciona melhor junto com uma regra clara: quando a IA é permitida, e por que agora não. O Mindveto verifica tudo no dispositivo e não nos envia nada; só impede que endereços de IA abram.', human: true },
    ],
    faq: [
      { q: 'Como bloqueio o ChatGPT no celular do meu filho?', a: L('No Android, instale o <a href="/android/">app Mindveto</a>, ative “VPN sempre ativa” e defina um PIN. No iPhone, use um serviço de DNS com nossa lista gratuita, ou o Tempo de Uso da Apple para bloquear chatgpt.com. Veja <a href="/parents/">para pais</a>.') },
      { q: 'Como bloqueio o ChatGPT nos computadores da escola?', a: L('Instale a extensão de forma obrigatória com políticas do Chrome ou do Edge e bloqueie a IA no DNS da escola com o pacote de TI. Professores também podem usar o <a href="/exam-button/">botão de prova</a>. Veja <a href="/schools/">para escolas</a>.') },
      { q: 'Como bloqueio o ChatGPT no trabalho mas permito o Copilot?', a: L('Na extensão, marque a IA que sua empresa aprova e deixe o resto bloqueado. A <a href="/paste-guard/">guarda de colagem</a> também avisa antes de colar dados privados num site de IA. Veja <a href="/offices/">para escritórios</a>.') },
      { q: 'Bloquear o ChatGPT é grátis?', a: 'Sim. Bloqueio, PIN e horário são grátis no Mindveto, e as listas de bloqueio são de uso livre.' },
      { q: 'Posso bloquear o ChatGPT só durante a lição de casa ou o expediente?', a: 'Sim. A extensão tem um horário, com as férias escolares da Bélgica, Holanda e França incluídas.' },
    ],
    related: ['browser', 'android', 'network'],
  },

  policy: {
    title: 'Modelo gratuito de política de IA para pequenos escritórios',
    desc: 'Uma política de IA de uma página para contadores, advogados e outros pequenos escritórios: ferramentas aprovadas, o que nunca vai para a IA e como verificar.',
    h1: 'Uma política de IA que sua equipe lê em dois minutos.',
    lead: 'Um modelo de uma página para contadores, advogados, cartórios e outros pequenos escritórios. Copie, preencha as partes entre colchetes e compartilhe com a equipe.',
    actions: [{ label: 'Imprimir ou salvar como PDF', url: '#print', solid: true }, { label: 'Para escritórios', to: 'offices' }],
    blocks: [
      { h: 'Por que ter uma', p: ['Desde 2 de fevereiro de 2025, o Regulamento Europeu de IA pede às organizações que usam ferramentas de IA que ajudem seus funcionários a entendê-las (literacia em IA). Uma política curta por escrito é um primeiro passo simples, e protege os dados dos seus clientes.'] },
      { h: '1. Objetivo', p: ['Usamos IA onde ela nos ajuda a trabalhar melhor. Dados de clientes e processos confidenciais continuam protegidos. Esta política diz quais ferramentas usamos e o que nunca entra nelas.'] },
      { h: '2. Ferramentas de IA aprovadas', list: ['[Ferramenta, por exemplo Microsoft Copilot com a conta da empresa]: permitida para [redigir, resumir nossos próprios textos].', 'Os demais chatbots, buscadores com IA e ferramentas de escrita com IA não são usados em dispositivos de trabalho nem para o trabalho.'] },
      { h: '3. Nunca numa ferramenta de IA', list: ['Nomes de clientes junto com seus dados.', 'Números de conta e de cartão.', 'Números de identidade, de previdência ou outros identificadores.', 'Contratos, declarações de impostos, prontuários médicos ou de RH.', 'Senhas, códigos de acesso e chaves.', 'Qualquer coisa marcada como confidencial.'] },
      { h: '4. Antes de usar um resultado de IA', list: ['Confira você mesmo fatos, números e fontes.', 'Uma pessoa aprova cada parecer ou carta que vai para um cliente.', 'Diga que a IA ajudou quando um cliente perguntar, ou quando a lei ou suas regras profissionais exigirem.'] },
      { h: '5. Como cumprimos', list: ['Nos computadores de trabalho, o Mindveto bloqueia as ferramentas de IA que não aprovamos e avisa antes de colar dados privados num chat de IA. A verificação acontece no computador; nada é enviado.', 'As configurações estão bloqueadas com um PIN guardado por [nome].'] },
      { h: '6. Erros e dúvidas', p: ['Colou algo por engano? Avise [nome] no mesmo dia. Preferimos saber cedo do que tarde.', 'Responsável por esta política: [nome]. Última revisão: [data]. Próxima revisão: [data mais seis meses].'], note: 'Este modelo ajuda a começar; não é aconselhamento jurídico. Verifique suas regras profissionais e informe os funcionários antes de introduzir novas regras de TI.', human: true },
    ],
    related: ['offices', 'paste', 'pricing'],
  },

  family: {"title": "Bloquear sites pornô, de apostas e de namoro grátis", "desc": "Filtro familiar grátis: bloqueie sites pornô e +18, apostas e namoro, force o SafeSearch e barre truques com VPN. Navegador, Android, Windows e Mac.", "h1": "Bloqueie sites pornô, de apostas e de namoro.", "lead": "O Mindveto tem um filtro familiar ao lado do interruptor de IA. Você escolhe o que ele bloqueia, e um PIN mantém a sua escolha. Fica desligado até você ligar.", "actions": [{"label": "Baixar grátis", "to": "download", "solid": true}, {"label": "Para pais", "to": "parents"}], "blocks": [{"h": "O que você pode ligar", "list": ["Sites adultos: mais de 60.000 sites pornô e +18.", "Apps de IA que «despem» e criam fotos de nus falsos de pessoas reais: bloqueadas junto com os sites para adultos.", "SafeSearch: Google, Bing, DuckDuckGo e YouTube mostram só resultados seguros, não importa o que digam as configurações de busca.", "Apostas: 1.600 sites de apostas, cassino e pôquer.", "Namoro: 65 apps de namoro e sites de videochat aleatório.", "Antievasão: sites conhecidos de VPN, proxy e Tor, para o filtro não ser pulado com um clique.", "Cada parte tem o seu próprio interruptor. Funciona separado do interruptor de IA."]}, {"h": "Como ligar", "steps": ["Navegador: instale a <a href=\"/browser-extension/\">extensão de navegador</a>, abra e marque o que quiser no filtro familiar (“Family filter”).", "Android: instale o <a href=\"/android/\">app para Android</a> e use os interruptores do filtro familiar. Aí ele funciona em todos os apps do telefone.", "Windows: execute o <a href=\"/windows/\">download para Windows</a> e digite 5. Ele pergunta sobre apostas e namoro.", "Mac e Linux: use o <a href=\"/mac-linux/\">download para Mac e Linux</a> e digite <code>sudo sh mindveto.sh family-on gambling dating</code>.", "Na extensão e no app, defina um PIN: desligar o filtro passa a pedir o PIN. No computador, dê ao seu filho uma conta normal (não administrador)."]}, {"h": "Limites honestos", "list": ["Nenhum filtro pega tudo. Todo dia surgem sites novos, e imagens ainda podem aparecer em chats, apps e redes sociais.", "As listas barram sites conhecidos. Uma criança com o telefone de um amigo ou uma conta de administrador consegue contornar.", "No Android o filtro funciona enquanto o Mindveto está ligado. Ative “VPN sempre ativa” para ele continuar ligado."], "note": "O Mindveto não registra quais sites são visitados e não envia nada para nós. Um filtro ajuda; conversar com seu filho ajuda mais.", "human": true}, {"h": "Fatos", "facts": [["Preço", "Grátis"], ["Sites adultos", "60.000+"], ["Sites de apostas", "1.600"], ["Namoro e videochat", "65"], ["Listas", "Listas abertas (licença MIT) e nossas próprias listas"], ["Dados enviados", "Nenhum"]]}], "faq": [{"q": "O filtro familiar é grátis?", "a": "Sim. Hoje ele faz parte dos downloads gratuitos do Mindveto."}, {"q": "Ele também bloqueia IA?", "a": "Só se você quiser. O interruptor de IA e o filtro familiar funcionam separados: dá para usar um sem o outro."}, {"q": "Funciona no iPhone ou no Wi-Fi inteiro?", "a": "Ainda não há app para iPhone. Você pode usar as mesmas listas gratuitas em um filtro DNS como AdGuard Home ou Pi-hole: veja <a href=\"/network/\">rede inteira</a>."}, {"q": "Ele pode bloquear um site normal por engano?", "a": "Isso pode acontecer com qualquer lista. Na extensão você pode permitir um site de confiança; a sua escolha vale mais que o filtro."}], "related": ["parents", "browser", "android"]},
  blog: {"title": "Blog Mindveto: IA, crianças e escolas", "desc": "Respostas claras para pais, escolas e escritórios sobre apps de IA, amigos IA e a Lei europeia da IA. Factos verificados e limites honestos.", "h1": "Blog Mindveto.", "lead": "Respostas curtas e verificadas às perguntas que pais, professores e escritórios nos fazem sobre IA. Cada artigo indica as suas fontes.", "blocks": [{"h": "Artigos", "list": ["<a href=\"/blog/chatgpt-customer-data-gdpr/\"><strong>ChatGPT e dados de clientes segundo o RGPD</strong></a> O que a OpenAI faz com o que você cola, o que o RGPD espera do seu escritório, e um plano em 5 passos.", "<a href=\"/pt/blog/character-ai-e-seguro-para-criancas/\"><strong>O Character.AI é seguro para crianças?</strong></a> As regras de idade em 2026, os riscos reais e como bloquear o Character.AI e apps de amigo IA semelhantes.", "<a href=\"/pt/blog/ai-act-artigo-4-escolas/\"><strong>AI Act, artigo 4, para escolas</strong></a> O que a regra de literacia em IA pede a uma escola em 2026, com um plano de 6 passos para começar esta semana."]}, {"h": "Números", "list": ["<a href=\"/ai-statistics/\"><strong>Crianças, escolas e IA: os números (2026)</strong></a> 24 estatísticas verificadas sobre chatbots, companheiros de IA, cola, deepfakes e vazamento de dados, cada uma com sua fonte. Livres para citar."]}], "related": ["parents", "schools", "guide"]},
  charai: {"title": "O Character.AI é seguro para crianças? Guia para pais", "desc": "O Character.AI é seguro para crianças? A idade mínima, o fim dos chats livres para menores de 18 em 2025, os riscos reais e como bloquear o Character.AI.", "h1": "O Character.AI é seguro para crianças?", "lead": "Resposta curta: não para crianças. O Character.AI é para maiores de 13 anos (16 na UE) e, desde novembro de 2025, as contas de menores de 18 já não podem conversar livremente com as personagens. Mas os controlos de idade podem ser enganados, e muitas apps de «amigo IA» semelhantes têm regras mais fracas.", "blocks": [{"h": "O que é o Character.AI", "p": ["O Character.AI é um site e uma app onde se conversa com personagens de IA: pessoas inventadas, heróis de filmes e jogos, bots de «namorado» ou «namorada» e famosos. A maioria das personagens é criada por outros utilizadores.", "As personagens respondem logo, a qualquer hora, lembram-se do que contaste e são sempre simpáticas. É isso que as faz parecer um amigo, e por isso as crianças podem passar horas com elas."]}, {"h": "As regras de idade em 2026", "list": ["Idade mínima: 13 anos, e 16 na União Europeia.", "Desde o fim de novembro de 2025, as contas de menores de 18 já não podem ter conversas abertas com personagens. Os adolescentes mantêm outras funções, como as histórias interativas (Stories).", "O Character.AI estima a idade de cada conta com sinais como o comportamento e pode pedir uma selfie ou um documento se achar que alguém tem menos de 18 anos.", "Nenhum controlo de idade é perfeito. Uma criança que usa a conta de um dos pais ou de um amigo mais velho ainda chega aos chats para adultos."]}, {"h": "Os riscos reais para as crianças", "list": ["Apego emocional: uma personagem sempre disponível pode substituir amigos reais e o sono. Atenção ao uso à noite.", "Conteúdo impróprio: personagens criadas por utilizadores podem levar a conversa para sexo, violência ou automutilação, mesmo com filtros.", "Casos graves: em outubro de 2024, uma mãe na Florida processou o Character.AI após a morte do filho de 14 anos, que conversava há meses com uma personagem. A empresa mudou as regras para adolescentes no ano seguinte.", "Privacidade: tudo o que uma criança escreve fica guardado nos servidores da empresa.", "Imitadores: dezenas de outras apps de amigo IA (Talkie, Chai, Janitor AI, Replika e outras) oferecem o mesmo tipo de chat, muitas vezes com controlos de idade mais fracos."]}, {"h": "Sinais a observar", "list": ["Muito uso do telemóvel ou portátil tarde da noite, muitas vezes com auscultadores.", "Falar de um «amigo IA» ou de uma personagem como se fosse uma pessoa real.", "Esconder o ecrã, irritar-se quando lhe tiram o aparelho, perder interesse pelos amigos."]}, {"h": "Como bloquear o Character.AI e apps semelhantes", "steps": ["No navegador (Chrome, Edge, Brave, Opera): instala a <a href=\"/pt/extensao-navegador/\">extensão Mindveto</a> gratuita. O botão «Apps de amigo IA» vem ligado e bloqueia Character.AI, Replika, Talkie, Chai, Janitor AI e mais de 20 outras. Uma tentativa aparece no registro de violação com uma marca vermelha no ícone: ficas a saber sem ler nenhum chat.", "No Android: instala a <a href=\"/pt/android/\">app Mindveto</a> (bloqueia estes sites em todas as apps) e, no Google Family Link, bloqueia a app Character.AI e ativa a aprovação de novas transferências.", "No iPhone ou iPad: abre Definições, depois Tempo de ecrã, Restrições de conteúdo e privacidade, Restrições de conteúdo, Conteúdo web. Escolhe «Limitar sites para adultos» e adiciona character.ai em «Nunca permitir». Bloqueia também a app nas compras da App Store.", "Para todos os aparelhos de casa: usa as nossas listas gratuitas num filtro DNS no Wi-Fi, ver <a href=\"/pt/rede/\">toda a rede</a>.", "Define um PIN no Mindveto e dá ao teu filho uma conta normal (não de administrador), para que o bloqueio continue ativo."]}, {"h": "Primeiro conversar, depois bloquear", "p": ["Pergunta ao teu filho do que gosta na personagem. Muitas vezes é atenção: alguém que ouve. Explica que um chatbot é feito para continuares a falar e combinem as regras juntos. Um bloqueio funciona melhor quando a criança sabe porque existe."], "note": "O Mindveto não lê mensagens e não nos envia nada. O aviso de amigo IA só guarda a hora de uma tentativa, nunca o site nem a conversa.", "human": true}], "faq": [{"q": "O Character.AI é para que idade?", "a": "A partir dos 13 anos, e dos 16 na União Europeia. Desde novembro de 2025, os menores de 18 não podem ter conversas abertas com personagens."}, {"q": "O Character.AI tem controlo parental?", "a": "Oferece o «Parental Insights»: um e-mail semanal a um dos pais com o tempo de uso e as personagens mais usadas, não as conversas. O adolescente tem de adicionar o e-mail do pai ou da mãe, por isso só funciona com a sua colaboração."}, {"q": "O meu filho pode contornar um bloqueio?", "a": "Às vezes: com outro telemóvel, o Wi-Fi de um amigo ou uma conta de administrador. Por isso um PIN, uma conta normal e uma conversa contam tanto como o bloqueio. Vê a nossa lista honesta de <a href=\"/pt/truques-contorno/\">truques de contorno</a>."}, {"q": "O Mindveto é gratuito?", "a": "Sim. A extensão do navegador, a app Android e as transferências para computador são gratuitas."}], "related": ["parents", "browser", "android"], "article": {"date": "2026-11-18", "sources": [["TechCrunch: Character.AI ends open-ended chat for under-18s (29 Oct 2025)", "https://techcrunch.com/2025/10/29/character-ai-is-killing-the-chatbot-experience-for-minors/"], ["eSafety Commissioner (Australia): Character.AI guide", "https://www.esafety.gov.au/key-topics/esafety-guide/characterai"], ["Internet Matters: What is Character.AI? Parent guide", "https://www.internetmatters.org/hub/news-blogs/what-is-character-ai-parent-guide/"], ["Google Family Link Help: manage your child's apps", "https://support.google.com/families/answer/7101025"]]}},
  aiact: {"title": "AI Act artigo 4: o que as escolas devem fazer (2026)", "desc": "A Lei europeia da IA aplica-se às escolas? O que pede em 2026 o artigo 4 sobre literacia em IA após o Digital Omnibus, com um plano de 6 passos.", "h1": "AI Act artigo 4: o que as escolas devem fazer.", "lead": "Resposta curta: sim, aplica-se à tua escola se o pessoal usa ferramentas de IA. O artigo 4 pede à escola que tome medidas para desenvolver a literacia em IA do seu pessoal. Não há exame nem certificado, mas deves conseguir mostrar o que fizeste.", "blocks": [{"h": "A Lei da IA aplica-se à minha escola?", "p": ["A Lei da IA (AI Act) chama «responsável pela implantação» à organização que usa um sistema de IA sob a sua própria autoridade. Uma escola cujos professores usam ChatGPT ou Copilot, uma ferramenta de correção com IA ou a função de IA de uma plataforma de aprendizagem é responsável pela implantação.", "O artigo 4 trata do pessoal e de outras pessoas que usam IA em nome da escola. Os alunos não estão abrangidos pelo artigo 4 em si, mas ensiná-los sobre IA é o passo lógico seguinte."]}, {"h": "O que diz o artigo 4 em 2026", "list": ["Aplica-se desde 2 de fevereiro de 2025, em todos os países da UE.", "A alteração «Digital Omnibus» de 2026, em vigor desde 27 de julho de 2026, reescreveu-o: a escola deve tomar medidas para apoiar a literacia em IA do pessoal, sem ter de garantir um nível fixo para cada pessoa.", "As autoridades nacionais de fiscalização do mercado supervisionam a lei a partir de agosto de 2026.", "A lei não prevê uma coima própria só para o artigo 4. Mas, se algo correr mal, por exemplo dados de alunos colados num chatbot gratuito, a falta de formação pode pesar contra a escola, também perante o RGPD.", "Alguns usos de IA na escola são de «risco elevado» (anexo III): IA que decide a admissão, avalia trabalhos, coloca alunos num nível ou os vigia durante testes. Para esses aplicam-se regras mais rigorosas, numa data posterior após o adiamento de 2026."]}, {"h": "Um plano de 6 passos para este ano letivo", "steps": ["Faz uma lista das ferramentas de IA em uso: também as gratuitas que os professores usam por conta própria e as funções de IA dentro de ferramentas que já têm.", "Decide que ferramentas são permitidas e escreve uma política de IA curta. Começa com o nosso <a href=\"/pt/modelo-politica-ia/\">modelo de política de IA</a> gratuito.", "Dá uma formação curta por função: para todo o pessoal, o que é a IA, porque erra e porque os dados dos alunos nunca vão para um chatbot gratuito; mais para informática, apoio e direção.", "Explica as regras aos pais e alunos, por exemplo com uma carta no início do período.", "Define regras para testes e exames. O <a href=\"/pt/botao-exame/\">botão de exame</a> gratuito desliga a IA para uma turma inteira durante um teste.", "Mantém um registo simples: data, participantes, conteúdo. É a tua prova."]}, {"h": "O que podes mostrar a uma inspeção", "list": ["A tua política de IA e a lista de ferramentas aprovadas.", "Datas de formação, temas e participantes.", "A carta aos pais e as regras para os testes.", "As definições usadas nos aparelhos da escola."]}, {"h": "Onde o Mindveto ajuda, e onde não", "list": ["IA aprovada: permite só as ferramentas da tua política e mantém o resto bloqueado.", "A <a href=\"/pt/guarda-colagem/\">guarda de colagem</a> avisa antes de dados de alunos, números de identificação ou textos confidenciais chegarem a um site de IA.", "O botão de exame bloqueia a IA para uma turma inteira durante um teste.", "O Mindveto não é uma formação e não torna uma escola conforme sozinho. A formação e a política são a tua parte."], "note": "Esta página é informação geral, não aconselhamento jurídico. Confirma o texto oficial no EUR-Lex e as orientações do teu ministério da educação."}], "faq": [{"q": "Os professores precisam de um certificado de literacia em IA?", "a": "Não. O artigo 4 não pede certificado nem teste. Pede que a escola tome medidas adequadas, como formação, e ajuda registar o que fizeste."}, {"q": "Há coima por ignorar o artigo 4?", "a": "A lei não prevê uma coima própria só para o artigo 4. As autoridades nacionais supervisionam-no, e a falta de formação pode pesar contra uma escola se outra regra for violada, por exemplo o RGPD."}, {"q": "Também abrange os alunos?", "a": "O artigo 4 trata do pessoal e de outras pessoas que usam IA em nome da escola. Os alunos não são referidos, mas a maioria das escolas também os ensina sobre IA."}, {"q": "A Lei da IA aplica-se fora da UE?", "a": "Aplica-se às escolas da UE que usam IA e às empresas que oferecem IA na UE, estejam onde estiverem."}], "related": ["schools", "policy", "exam"], "article": {"date": "2026-11-18", "sources": [["EUR-Lex: AI Act, Regulation (EU) 2024/1689", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"], ["European Commission: AI talent, skills and literacy", "https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy"], ["KI-Campus: AI Omnibus recalibrates Article 4, AI literacy remains mandatory", "https://ki-campus.org/en/blog/eu-ai-act-ai-omnibus-recalibrates-article-4-ai-literacy-remains-mandatory"], ["CMS: Compulsory or optional? AI literacy and the AI Act", "https://cms.law/en/bel/legal-updates/compulsory-or-optional-ai-literacy-a-central-component-of-compliance-with-ai-act"]]}},
  ...PR.pages,
  ...LK.pages,
};

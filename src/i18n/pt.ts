import type { Home, Page } from './types';
import { DL } from './routes';
import { COMPANY } from './company';

// Internal links use the English paths; localize.ts rewrites them to /pt/ paths at build time.
export const home: Home = {
  title: 'Mindveto: bloqueie o ChatGPT e mais de 150 IAs com um botão',
  desc: 'Bloqueie ChatGPT, Gemini, Copilot e mais de 150 ferramentas de IA em navegadores, Android, Windows, Mac e redes. PIN, botão de prova. Grátis, sem rastreio.',
  h1: 'A sua mente tem a última palavra.',
  lead: 'O Mindveto desliga ChatGPT, Gemini, Copilot e mais de 150 ferramentas de IA num navegador, num celular, num computador ou numa rede inteira. Um PIN decide quem pode ligá-las de novo.',
  switchOn: 'IA', switchOff: 'Veto', switchLabel: 'Experimente: desligue a IA nesta página',
  statusOn: 'IA permitida. Vire o botão.', statusOff: 'Veto. Mais de 150 serviços de IA bloqueados.',
  how: 'Como funciona',
  doorsH: 'Para quem é',
  doors: [
    { key: 'parents', who: 'Pais', why: 'Companheiros de IA à meia-noite, lição de casa escrita por um chatbot. Bloqueie no PC da família e no celular do seu filho.', go: 'Para pais' },
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
    ['Uma vez por dia', 'A extensão baixa a lista pública de endereços de IA. Não envia nada junto.', false],
    ['Só se você entrar', 'No modo prova, o código da turma é enviado uma vez por minuto para saber se a prova está ativa. Sem nomes.', false],
  ],
  limitsH: 'Limites honestos',
  limits: [
    'Funciona no navegador, celular, computador ou rede onde você instala. Uma criança ainda pode usar o celular de um amigo.',
    'Quem controla o dispositivo inteiro pode removê-lo. Use uma conta normal (sem administrador) para crianças e funcionários.',
    'Novas IAs surgem toda semana. A lista é atualizada diariamente, mas alguma pode escapar por alguns dias.',
  ],
  priceH: 'Grátis para começar',
  priceP: 'Bloquear continua grátis para todos. Os planos pagos para famílias, escolas e escritórios começam com o lançamento no Google Play.',
  priceGo: 'Ver os planos',
};

const L = (s: string) => s;

export const pages: Record<string, Page> = {
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
        'Permitir uma IA de confiança, por exemplo para um trabalho da escola, e manter o resto bloqueado.',
        'Se quiser, bloquear também redes sociais como TikTok, Instagram e Snapchat no navegador. Fica desligado até você ativar.',
      ]},
      { h: 'Configure em 10 minutos', steps: [
        L('No computador da família: instale a <a href="/browser-extension/">extensão de navegador</a>, ou bloqueie a IA em todos os apps com o download para <a href="/windows/">Windows</a> ou <a href="/mac-linux/">Mac</a>.'),
        L('No celular Android do seu filho: instale o <a href="/android/">app para Android</a> e ative “VPN sempre ativa” para que não possa ser contornado.'),
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
      { q: 'É grátis mesmo?', a: 'Sim. Bloqueio, PIN e horário continuam grátis. Um plano Plus pago com extras para famílias chega com o lançamento no Google Play.' },
    ],
    related: ['browser', 'android', 'windows'],
  },

  schools: {
    title: 'Bloquear a IA nos computadores da escola, com botão de prova',
    desc: 'Bloqueie ChatGPT e ferramentas de IA nos computadores e na rede da escola. Botão de prova para professores e arquivos para a TI. Sem dados de alunos.',
    h1: 'IA desligada durante a prova. Ligada quando a aula precisa.',
    lead: 'Professores ganham um botão de prova. A TI recebe arquivos prontos para cada computador e para a rede da escola. Ninguém lê o que os alunos digitam.',
    actions: [{ label: 'Abrir o botão de prova', to: 'exam', solid: true }, { label: 'Arquivos para a TI', to: 'network' }],
    blocks: [
      { h: 'Para professores', list: [
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
    h1: 'Dados de clientes ficam fora dos chatbots públicos.',
    lead: 'Um contador cola um extrato bancário num chatbot para “resumir”. O Mindveto para esse momento na tela, antes que os dados saiam do escritório.',
    actions: [{ label: 'Ver a guarda de colagem', to: 'paste', solid: true }, { label: 'Preços para equipes', to: 'pricing' }],
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
      ], note: 'Em muitos países, os funcionários ou seus representantes devem ser informados antes de introduzir uma ferramenta assim. O Mindveto não lê nada e não envia nada, o que facilita essa conversa.', human: true },
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
    actions: [{ label: 'Baixar v1.3.0 (93 KB)', url: DL + 'human-override-1.3.0.zip', solid: true, download: true }, { label: 'Passos de instalação', url: '#install' }],
    blocks: [
      { h: 'O que vem dentro', list: [
        'Bloqueia chat de IA, busca com IA, ferramentas de imagem, vídeo, voz e música com IA, ferramentas de escrita e lição de casa, de programação e de anotações com IA.',
        'Bloqueio por PIN do botão e de todas as configurações.',
        'Horário com férias escolares da Bélgica, Holanda e França.',
        L('<a href="/paste-guard/">Guarda de colagem</a> com suas próprias palavras privadas.'),
        'IA aprovada: permita só as ferramentas que sua escola ou empresa permite.',
        L('Modo turma e <a href="/exam-button/">modo prova</a> para professores.'),
        'Registro de violação e uma marca vermelha no ícone após um PIN errado.',
        'Suas próprias listas de bloqueio e permissão. A lista pública é atualizada uma vez por dia.',
        'Opcional: bloquear também redes sociais (TikTok, Instagram, Snapchat e mais). Desligado até você ativar.',
        'Por enquanto a extensão está em inglês, holandês e francês.',
      ]},
      { h: 'Instale em um minuto', fold: 'Mostrar os passos de instalação', foldLead: 'As versões das lojas estão a caminho. Até lá, você instala à mão em um minuto.', steps: [
        'Baixe o zip acima e descompacte (botão direito, “Extrair tudo”).',
        L('Abra <code>chrome://extensions</code> (no Edge: <code>edge://extensions</code>).'),
        'Ative o “Modo do desenvolvedor” (canto superior direito).',
        'Clique em “Carregar sem compactação” e escolha a pasta descompactada.',
        'Fixe o ícone na barra, abra-o e defina um PIN.',
      ], note: 'Para pais e escolas: na página “Detalhes” da extensão, ative “Permitir no modo anônimo”. Senão as janelas anônimas não são bloqueadas.' },
      { h: 'Dados', facts: [
        ['Versão', '1.3.0 (Manifest V3)'], ['Tamanho', '93 KB'], ['Navegadores', 'Chrome, Edge, Brave, Opera. Firefox e lojas oficiais: em breve'],
        ['Permissões', 'Regras de bloqueio, armazenamento local, um temporizador diário'], ['Dados enviados', 'Nenhum. Só a lista pública é baixada uma vez por dia'], ['Preço', 'Grátis'],
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
    actions: [{ label: 'Baixar para Android (45 KB, beta)', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'SHA-256', url: DL + 'human-override-android.sha256' }],
    blocks: [
      { h: 'Como funciona', p: [
        'O app roda no celular um pequeno filtro local de nomes da internet (DNS). Quando um app pede um endereço de IA, o filtro responde que ele não existe. Todo o resto funciona normalmente.',
        'Só essas consultas de nomes passam pelo app. Nada é enviado para nós.',
      ]},
      { h: 'Instalar', steps: [
        'Abra o link de download no celular.',
        'Quando o Android perguntar, permita “instalar apps desconhecidos” para o seu navegador.',
        'Abra o app e toque no botão grande.',
        'Ative “VPN sempre ativa” e “Bloquear conexões sem VPN” (o app mostra como). Assim não pode ser contornado.',
        'Defina um PIN.',
      ], note: 'Beta: para atualizar, desinstale primeiro a versão antiga. A versão do Google Play virá com 15 dias grátis do Plus. Por enquanto o app está em inglês, holandês e francês.' },
      { h: 'Dados', facts: [
        ['Versão', 'Beta, Android 16 (SDK 36)'], ['Tamanho', '45 KB'], ['Requer', 'Android 8 ou mais recente'],
        ['Alertas de violação', 'Sim, uma notificação se a proteção parar'], ['Dados enviados', 'Nenhum'], ['Preço', 'Grátis durante a beta'],
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
    actions: [{ label: 'Baixar para Windows (7 KB)', url: DL + 'human-override-windows.zip', solid: true, download: true }],
    blocks: [
      { h: 'Instalar', fold: 'Mostrar os passos de instalação', foldLead: 'As versões das lojas estão a caminho. Até lá, você instala à mão em um minuto.', steps: [
        'Descompacte o download.',
        'Clique duas vezes em “Start-Mindveto.bat” e clique em Sim.',
        'Digite 1 para bloquear a IA. Digite 3 para desligar também o Copilot, o Recall e a IA do Edge e do Chrome.',
        'Dê a crianças ou funcionários uma conta normal (sem administrador). Assim não conseguem desfazer.',
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
    actions: [{ label: 'Baixar para Mac e Linux (5 KB)', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }],
    blocks: [
      { h: 'Instalar', steps: [
        'Descompacte o download.',
        'Abra o Terminal na pasta descompactada.',
        L('Digite <code>sudo sh mindveto.sh on</code> e sua senha.'),
        L('Para permitir a IA de novo: <code>sudo sh mindveto.sh off</code>.'),
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
      { q: 'O que o servidor de vocês guarda?', a: 'Um código de turma em hash, uma chave de professor em hash e o horário de fim da prova. Sem nomes, sem e-mails, sem endereços IP.' },
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
      { h: 'Extensão de navegador', p: ['Chrome, Edge, Brave e Opera. Versão 1.3.0, 93 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-1.3.0.zip', solid: true, download: true }, { label: 'Passos de instalação', to: 'browser' }] },
      { h: 'App para Android (beta)', p: ['Bloqueia a IA em todos os apps. 45 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-android.apk', solid: true, download: true }, { label: 'Passos de instalação', to: 'android' }] },
      { h: 'Windows', p: ['Todos os navegadores e apps do PC. 7 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-windows.zip', solid: true, download: true }, { label: 'Passos de instalação', to: 'windows' }] },
      { h: 'Mac e Linux', p: ['Um comando, no sistema todo. 5 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-mac-linux.zip', solid: true, download: true }, { label: 'Passos de instalação', to: 'maclinux' }] },
      { h: 'Pacote de TI e listas', p: ['Arquivos para DNS, firewall e políticas de navegador. 13 KB.'], actions: [{ label: 'Baixar', url: DL + 'human-override-pro-pack.zip', solid: true, download: true }, { label: 'Todas as listas', to: 'network' }] },
    ],
    related: ['help', 'pricing'],
  },

  pricing: {
    title: 'Preços do Mindveto: Grátis, Plus, Escola e Business',
    desc: 'Bloquear é grátis. Plus 14,99 € por ano para famílias, 1 € por aluno para escolas, 2,50 € por usuário por mês para escritórios. Grátis durante o lançamento.',
    h1: 'Bloquear é grátis. Os extras pagam o trabalho.',
    lead: 'Hoje todas as funções são grátis enquanto lançamos. Os planos pagos começam com a versão do Google Play.',
    blocks: [],
    faq: [
      { q: 'Quando eu tenho que pagar?', a: 'Agora não. Quando os planos pagos começarem, você decide se quer mudar. Nada é cobrado automaticamente e o plano grátis continua.' },
      { q: 'Há oferta de lançamento?', a: 'Sim. As primeiras 250 pessoas que instalarem o app de Android pelo Google Play ganham o Plus grátis por um ano. Um contador nesta página vai mostrar quantas vagas restam.' },
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
    lead: 'Versão curta: não coletamos dados pessoais. Esta página explica as poucas coisas que passam por um servidor, e seus direitos. Versão 1, 12 de novembro de 2026. A versão em inglês prevalece.',
    blocks: [
      { h: 'Responsável', p: [L('Amghar Said, Bélgica. Contato: <a href="mailto:hello@mindveto.app">hello@mindveto.app</a>.')] },
      { h: 'Este site', list: [
        'Sem cookies, sem análises, sem rastreadores, sem publicidade, sem fontes ou scripts de outras empresas.',
        'O site está hospedado no GitHub Pages (GitHub, Inc., EUA). Como qualquer hospedagem, o GitHub trata brevemente seu endereço IP em registros do servidor para entregar e proteger o site. Nós não recebemos esses registros.',
        'A página do botão de prova guarda seu código de turma e sua chave de professor no seu próprio navegador (armazenamento local), só para a página funcionar. Você pode apagá-los com “Esquecer esta turma”.',
      ]},
      { h: 'Os apps e scripts', list: [
        'O bloqueio, a guarda de colagem e todas as configurações funcionam no seu dispositivo. O texto colado nunca é guardado nem enviado.',
        'A extensão baixa a lista pública de bloqueio uma vez por dia. Não envia dados pessoais nesse pedido.',
        'O app de Android só filtra consultas de nomes da internet no celular. Não nos envia nada.',
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
      ], note: 'O bloqueio funciona melhor junto com uma regra clara: quando a IA é permitida, e por que agora não. O Mindveto não lê nada e não envia nada; só impede que endereços de IA abram.', human: true },
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
};

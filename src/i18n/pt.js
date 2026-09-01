export default {
  code: 'pt',
  htmlLang: 'pt-BR',
  name: 'Português',
  short: 'PT',

  a11y: {
    skip: 'Ir para o conteúdo',
    sections: 'Seções',
    footer: 'Rodapé',
    toLight: 'Mudar para o tema claro',
    toDark: 'Mudar para o tema escuro',
    backToTop: 'Voltar ao topo',
    language: 'Idioma',
    filter: 'Filtrar projetos por categoria',
  },

  nav: {
    about: 'Sobre',
    services: 'Serviços',
    skills: 'Habilidades',
    work: 'Projetos',
    experience: 'Experiência',
    contact: 'Contato',
    cta: 'Contrate-me',
  },

  hero: {
    status: 'Disponível para novos projetos',
    title: 'Desenvolvedor Full Stack e Mobile',
    tagline:
      'Aplicações web, aplicativos mobile e lojas online — do primeiro requisito até o deploy.',
    note: 'Trabalho remotamente com clientes na América Latina, no Brasil e nos Estados Unidos',
    cta: 'Ver os projetos',
    facts: [
      { label: 'Baseado em', value: 'Polônia' },
      { label: 'Valor', value: 'USD 25 / hora' },
      { label: 'Idiomas', value: 'Inglês · Português · Espanhol' },
      { label: 'Atuação', value: 'Remoto, no mundo todo' },
    ],
    caption: 'Desenvolvedor freelancer',
    captionValue: 'Desde 2019',
    stats: {
      years: 'Anos desenvolvendo software',
      projects: 'Projetos em destaque',
      languages: 'Idiomas com clientes',
      since: 'Freelancer desde',
    },
  },

  about: {
    eyebrow: 'Sobre',
    heading: 'Sete anos entregando, do início ao fim',
    paragraphs: [
      'Sou desenvolvedor full stack e mobile com mais de sete anos de experiência, trabalhando remotamente com clientes na América Latina, no Brasil e nos Estados Unidos.',
      'Construo aplicações web com React, Next.js, Node.js e TypeScript, e back ends e automações com Python e Django, sobre PostgreSQL, MySQL e MongoDB. Também desenvolvo aplicativos Android, ferramentas desktop, sites em WordPress e lojas Shopify.',
      'Levo o projeto do levantamento de requisitos até o deploy e trabalho em etapas claras, para você acompanhar o progresso em vez de receber tudo de uma vez no final. Faço perguntas antes de começar e aponto os riscos cedo, não tarde.',
      'Atendo os clientes diretamente em espanhol, português e inglês — a maioria volta com um segundo projeto.',
    ],
    languagesTitle: 'Idiomas',
    certTitle: 'Certificação',
    languages: {
      english: { name: 'Inglês', level: 'Avançado' },
      portuguese: { name: 'Português', level: 'Intermediário alto' },
      spanish: { name: 'Espanhol', level: 'Intermediário alto' },
    },
    certifications: {
      workanaEnglish: { name: 'Teste de inglês — Workana', detail: 'Nota 76% · Concluído' },
    },
  },

  services: {
    eyebrow: 'Serviços',
    heading: 'O que eu desenvolvo',
    note: 'Requisitos → desenvolvimento → deploy, em etapas claras',
    items: {
      web: {
        title: 'Aplicações web',
        body: 'Front ends em React e Next.js sobre back ends em Node.js, Python ou PHP, com APIs REST e o banco de dados adequado ao projeto.',
      },
      mobile: {
        title: 'Aplicativos mobile',
        body: 'Apps em React Native e Flutter para Android e iOS, desenvolvimento Android nativo e jogos em Unity 3D publicados nas duas lojas.',
      },
      ecommerce: {
        title: 'E-commerce',
        body: 'Lojas Shopify e WooCommerce, catálogos de produtos, trabalho de tema e as integrações que mantêm a loja funcionando.',
      },
      automation: {
        title: 'Chatbots e automação',
        body: 'Assistentes em Rasa com transferência para atendimento humano, além de automações em Python que tiram o trabalho repetitivo da sua equipe.',
      },
    },
  },

  skills: {
    eyebrow: 'Habilidades',
    heading: 'As tecnologias que uso',
    note: (count, areas) => `${count} tecnologias em ${areas} áreas`,
    groups: {
      frontend: 'Front end',
      backend: 'Back end e dados',
      mobile: 'Mobile e jogos',
      ecommerce: 'E-commerce e CMS',
      other: 'Outros',
    },
  },

  projects: {
    eyebrow: 'Projetos',
    heading: 'Projetos selecionados',
    note: (count) => (count === 1 ? 'Um projeto' : `${count} projetos`),
    all: 'Todos',
    categories: {
      chatbot: 'Chatbot / IA',
      saas: 'SaaS corporativo',
      mobileCommerce: 'Mobile / E-commerce',
      mobile: 'Mobile',
      games: 'Mobile / Jogos',
      blockchain: 'Blockchain',
      ecommerce: 'E-commerce',
      automation: 'Automação / Dados',
      wordpress: 'WordPress',
    },
    items: {
      rasaHandoff: [
        'Este é um exemplo de chatbot em Rasa que demonstra como construir um assistente de IA para um helpdesk de TI. Inclui uma integração com a API do Service Now para abrir chamados de incidente e consultar o status desses chamados. Abaixo há um exemplo de conversa, mostrando o bot ajudando o usuário a abrir um chamado de suporte e a consultar o seu status.',
        'Você pode usar este chatbot como ponto de partida para construir assistentes de atendimento ao cliente ou como modelo para coletar do usuário as informações necessárias antes de fazer uma chamada de API. O bot inclui uma habilidade simples para transferir a conversa para outro bot ou para um atendente humano.',
        'Com esta demonstração, podemos transferir a conversa de um bot para outro bot ou repassá-la a um atendente humano.',
      ],
      arabianRange: [
        'Design e desenvolvimento do site da Arabian Ranges — um site em WordPress para uma empresa de estandes de tiro comerciais e esportivos, cobrindo produtos, serviços, programas de treinamento, galeria e parceiros.',
        'O site é totalmente responsivo e otimizado, e continua sob a minha manutenção. Foi entregue com orçamento enxuto e prazo curto, e o cliente deixou uma avaliação de cinco estrelas.',
      ],
      artisanBeauty: [
        'Projetei e desenvolvi um site completo em WordPress para a Artisan Beauty Clinic, uma clínica de beleza e cuidados com a pele em Scarborough. O projeto incluiu todo o design do layout, as páginas de serviços, a estrutura de preços, o fluxo de agendamento, a responsividade para celular e uma interface moderna e limpa alinhada à marca.',
        'O objetivo era criar um site profissional e fácil de navegar, que apresentasse os serviços com clareza e transmitisse confiança aos clientes da região.',
      ],
      ayiko: [
        'A Ayiko é uma plataforma de e-commerce multivendedor criada para reunir vendedores, clientes, entregadores e agentes em um só sistema. A ideia era construir um marketplace em que cada vendedor toca a própria operação enquanto o cliente tem uma experiência de compra e entrega sem atrito.',
        'Os clientes navegam por produtos de vários vendedores e fazem pedidos com facilidade. Do outro lado, os vendedores gerenciam seus próprios anúncios, tratam os pedidos e atribuem as entregas aos seus próprios entregadores. Os entregadores recebem os dados necessários e cuidam da última milha, mantendo o processo rápido e sob controle do vendedor.',
        'A plataforma também inclui um modelo de agentes para apoiar o crescimento. Os agentes divulgam a plataforma com códigos próprios e, sempre que um novo cliente se cadastra por meio deles, ganham comissão. Assim o negócio cresce por indicação, sem gasto pesado em marketing.',
        'No conjunto, a Ayiko foi construída como um sistema completo que integra operação, entrega e crescimento em um só lugar.',
      ],
      collectMyJudgement: [
        'A Collect My Judgement é especializada em cobrança de dívidas e execução de sentenças, com cobertura nacional e uma equipe de advogados, negociadores e investigadores experientes. Com mais de 30 anos de resultados comprovados, atende até os casos mais complexos, garantindo uma recuperação eficiente e eficaz para os clientes.',
        'Criei para eles uma landing page de alto impacto, que evidencia essa experiência e a credibilidade da empresa no setor.',
      ],
      enterpriseErp: [
        'O EnterpriseERP é uma plataforma de gestão empresarial (ERP) em nuvem, criada para centralizar e automatizar as operações essenciais do negócio em um único sistema integrado. A solução dá à organização visibilidade em tempo real do desempenho financeiro, das vendas, dos níveis de estoque, das compras, do relacionamento com clientes e da gestão de pessoas, sustentando decisões baseadas em dados e ganho de eficiência.',
        'A plataforma reúne vários módulos interligados: Financeiro, Vendas, Compras, Estoque, Produção, CRM, Recursos Humanos, Projetos, Ativos, Relatórios e Gestão de Documentos. Todos compartilham a mesma base de dados, o que garante consistência e elimina o retrabalho de digitar a mesma informação em departamentos diferentes.',
        'O módulo Financeiro cuida de contas a pagar, contas a receber, razão geral, orçamento, gestão tributária, bancos e relatórios financeiros.',
      ],
      eMuvas: [
        'O E-Muvas é um aplicativo de serviço de entregas que permite solicitar uma entrega em dois modos: imediata ou agendada. Nos dois casos há atualizações em tempo real e rastreamento ao vivo.',
        'Depois da entrega, o usuário também pode avaliar e comentar sobre o entregador, o que garante transparência e qualidade no serviço. O pagamento é processado por um gateway seguro e exige um cartão vinculado à conta.',
      ],
      homeEnergy: [
        'Desenvolvi uma loja Shopify dinâmica e fácil de usar para a BioLite, apresentando produtos de energia sustentável com uma experiência de compra fluida e otimizada para celular.',
      ],
      hulkCharts: [
        'Um dApp de gráficos em tempo real para tokens da Binance Smart Chain (BSC), construído em torno do Hulk Token — na mesma linha do PooCoin.',
        'As telas cobrem a busca de mercado ordenada por volume e liquidez, gráficos de token ao vivo com histórico de negociações, swaps na PancakeSwap e na ApeSwap, um sniper de token acionado por endereço de contrato e valor de gatilho, e páginas de perfil por token com transferências e detentores.',
      ],
      mmorpg: [
        'Um MMORPG mobile em Unity 3D para Android e iOS, no gênero de estratégia e construção de base para muitos jogadores: cada um monta o próprio exército, evolui o castelo e a economia e enfrenta outros jogadores em batalhas em tempo real.',
        'O jogo cobre todo o ciclo de um título ao vivo — treinamento de tropas e melhorias do quartel, árvore de pesquisa para plantio, pedra, madeira, ouro e velocidade de construção, cerco em tempo real com recompensas de vitória, rankings de poder e de tropas abatidas, escolha de herói e de líder, recompensas de login de sete dias e uma loja de compras no app com pacotes de baús, de gemas, assinaturas e planos. A versão mostrada roda com a interface em espanhol.',
      ],
      vassalli: [
        'Montei uma listagem de produtos limpa e bem organizada no Shopify para a Vassalli, apresentando o vestuário com descrições detalhadas, opções de tamanho e imagens caprichadas para uma experiência de compra melhor.',
      ],
      madsen: [
        'Desenvolvi uma loja Shopify elegante e responsiva para a MADSEN, marca de bicicletas, com vitrines de produto dinâmicas e uma experiência de compra fluida.',
      ],
      richmond: [
        'A Richmond oferece soluções de rolamento, incluindo rodas e rodízios, na Austrália e na Nova Zelândia, fornecendo produtos confiáveis e de alta qualidade para movimentação de materiais, além de soluções de rolamento sob medida para os mais variados setores.',
        'O site é uma loja em WordPress e WooCommerce, com o catálogo organizado em categorias que vão de rodízios, rodas e pneus a paleteiras, transportadores, contentores com rodas e ferragens para portões, além de busca de produtos em todo o site e localizador de lojas.',
      ],
      aiArt: [
        'O AI Art Generator é um aplicativo que permite criar obras impressionantes sem esforço, com poucos toques. Movido por inteligência artificial avançada, transforma os seus prompts de texto em imagens de alta qualidade e de tirar o fôlego.',
        'Seja você artista, designer ou alguém com vontade de explorar o lado criativo, o AI Art Generator oferece uma plataforma fluida para dar vida às suas ideias. A interface intuitiva permite gerar obras únicas e personalizadas, com possibilidades criativas sem fim. Ao apoiar-se em IA de ponta, o app redefine a forma como criamos e vivemos a arte, tornando-a acessível a qualquer pessoa, independentemente do nível de habilidade.',
      ],
      musicPlayer: [
        'Um player de música para Android cheio de recursos, feito para um cliente, com interface moderna e reprodução fluida. Esta foi a primeira fase de desenvolvimento de um app de música popular.',
        'Inclui um equalizador personalizado — cinco bandas, além de reverb, graves, virtualizador e loudness — junto com criação de playlists, busca avançada, edição de metadados, filtros personalizados para organizar a biblioteca e exclusão rápida de arquivos de áudio indesejados. O app foi construído para velocidade, usabilidade e qualidade de áudio.',
      ],
      n8nChatbot: [
        'Construí e coloquei no ar, em 3 semanas, um fluxo robusto de chatbot no WhatsApp para gestão predial, simplificando a forma como as equipes de suporte recebem solicitações e abrem chamados.',
        'O sistema trata mensagens recebidas, anexos de mídia e verificação de usuários combinando automação no n8n com persistência em PostgreSQL. A conversa é gerenciada com estado, o que conduz o usuário com naturalidade por formulários de várias etapas — tipo de chamado, título e descrição — sem perder o controle da sessão.',
        'Resultados: verificação de usuários automatizada, tempo de abertura de chamado reduzido de horas para minutos, atendimento disponível 24 horas por dia e consistência confiável dos dados em todas as interações.',
        'Stack: n8n, WhatsApp API, PostgreSQL, arquitetura de banco relacional, fluxos orientados a eventos, lógica de máquina de estados e integrações de notificação automatizadas.',
      ],
      currencyConverter: [
        'Este conversor de moedas para celular foi feito em Flutter e entrega conversão rápida, precisa e em tempo real. Integrei uma API de alta velocidade para garantir taxas de câmbio confiáveis e sempre atualizadas.',
        'Principais recursos e tecnologias: dados de câmbio rápidos e precisos vindos de uma API de alto desempenho, GetX para gerenciamento de estado e fluidez do app, Firebase Authentication para acesso seguro, GetStorage como banco local para preferências e dados do usuário, persistência de dados por meio de gerenciamento de estado eficiente e um design totalmente responsivo, que fica bem em qualquer aparelho.',
        'O app oferece uma experiência fluida, com arquitetura moderna, alto desempenho e uma interface limpa em telas de todos os tamanhos.',
      ],
      dineamic: [
        'Uma loja Shopify para a Dineamic, marca de entrega de refeições frescas. O site cobre o cardápio e as opções alimentares, a entrega e os pedidos pelo NDIS, com uma checagem de CEP no topo de todas as páginas, para o visitante saber de imediato se a entrega chega até ele.',
        'Feito para funcionar igualmente bem no desktop, no notebook, no tablet e no celular.',
      ],
      excelDashboard: [
        'O projeto consistiu em desenvolver um painel de orçamento totalmente automatizado no Excel, usando automação do Microsoft Excel, fórmulas avançadas, tabelas e gráficos dinâmicos, validação de dados, formatação condicional e dashboards interativos.',
        'Criei várias planilhas para acompanhamento de receitas, controle de despesas, poupança, monitoramento de dívidas, análise de patrimônio, projeção de investimentos e resumos anuais. Gráficos dinâmicos, cartões de indicadores, quebras por categoria e cálculos automáticos entregam uma leitura financeira em tempo real com o mínimo de digitação manual.',
        'A pasta de trabalho foi otimizada para precisão, usabilidade e desempenho, viabilizando gestão de finanças pessoais, análise de orçamento, relatórios financeiros e tomada de decisão em um painel de Excel profissional e fácil de usar.',
      ],
      zohoStripe: [
        'Desenhei e implementei um fluxo de automação no Zapier para integrar o Stripe e o Zoho CRM sem atrito.',
        'A automação dispara assim que um pagamento é concluído no Stripe, cria ou atualiza um contato no Zoho CRM a partir dos dados do cliente no Stripe, configura gatilhos no Zoho CRM para ações como e-mails de boas-vindas ou atribuição de tarefas e evita registros duplicados verificando o que já existe antes de criar algo novo.',
        'A solução eliminou a digitação manual, permitiu atualizar os registros de clientes em tempo real e garantiu a sincronia entre a plataforma de pagamento e o CRM. O ganho em eficiência e em tempo de resposta foi expressivo.',
      ],
      keepNote: [
        'O KeepNote é um app de anotações rápido, simples e com a privacidade em primeiro lugar: todos os dados ficam guardados localmente no aparelho. Sem configuração complicada e sem conta online, as suas notas continuam sendo só suas.',
        'Principais recursos: armazenamento local, sem nuvem, interface simples para criar notas rapidamente, design pensado para a privacidade e funcionamento completo offline. Feito com Flutter e SQLite.',
      ],
      monstersClan: [
        'O site da Monsters Clan apresenta os recursos centrais do jogo, incluindo a troca de NFTs e o staking.',
        'É um jogo NFT em que cada jogador controla monstros únicos, treinando-os e personalizando-os para batalhas épicas. Com a tecnologia blockchain integrada, a posse dos ativos do jogo é segura e transparente, e os jogadores realmente são donos dos seus monstros e podem negociá-los.',
        'Com jogabilidade estratégica e recursos envolventes, a Monsters Clan entrega uma experiência imersiva e interativa, na qual o jogador molda as habilidades dos seus monstros e disputa recompensas em um ambiente descentralizado e dinâmico.',
      ],
      weatherParallax: [
        'Um site com efeito parallax para um provedor de notícias meteorológicas, construído do zero.',
        'Começou como uma versão em HTML e CSS, depois recebeu a adaptação responsiva para tablet e celular e, por fim, foi convertido em um tema WordPress.',
      ],
      rabbitRoyale: [
        'O Rabbit Royale é um mini-app de Telegram que entrega uma experiência de jogo tap-to-earn. Pensado para manter o jogador envolvido, combina diversão e recompensas em uma plataforma interativa e sem atrito.',
        'À medida que toca na tela e avança no jogo, o jogador acumula recompensas e vê os ganhos crescerem dia após dia. Com uma interface simples e uma jogabilidade envolvente, o Rabbit Royale oferece uma forma divertida de ganhar enquanto joga.',
      ],
      ratehub: [
        'O Ratehub é um site canadense de comparação de produtos financeiros, cobrindo hipotecas, cartões de crédito, contas, investimentos e seguros.',
        'O que fiz nele: instalei o certificado SSL, configurei o Cloudflare, implementei o gateway de pagamento, redesenhei as páginas de hipotecas e de cartões de crédito, deixei o site responsivo no celular e implementei o suporte a vários idiomas.',
      ],
      travelDaily: [
        'O Travel Daily Media é um veículo de notícias do trade de viagens, organizado por mercados, setores e reportagens, com vagas, eventos e publicidade ao lado do noticiário.',
        'Construí o site do zero, e o blog dele é o maior em que já trabalhei: mais de 70 mil assinantes e mais de 100 mil e-mails enviados por dia via Interspire, conforme os critérios de cada assinante. O site também tem uma seção de vagas.',
        'Ainda neste projeto: integração com o HubSpot, customização do tema Publisher, trabalho de SEO conforme os requisitos do cliente e implementação do plugin Yoast.',
      ],
    },
      links: { demo: 'Ver a demonstração', store: 'Ver no Google Play', site: 'Ver o site' },
    mediaAlt: (name) => `Prévia de ${name}`,
  },

  experience: {
    eyebrow: 'Experiência',
    heading: 'Histórico profissional',
    role: 'Desenvolvedor Full Stack e Mobile',
    company: 'Desenvolvimento remoto — Freelancer',
    period: 'Agosto de 2019 — Atualmente',
    points: [
      'Colaboração remota com clientes na América Latina, no Brasil e nos Estados Unidos.',
      'Desenvolvimento de aplicações web com React, Next.js, Node.js e TypeScript, e back ends com Python, Django, PHP e Laravel.',
      'Publicação de aplicativos Android e iOS com React Native, Flutter e Unity 3D.',
      'Entrega de sites em WordPress e lojas Shopify, do design até o lançamento.',
    ],
  },

  contact: {
    eyebrow: 'Contato',
    heading: 'Tem um projeto em mente?',
    body: 'Me conte o que você precisa e eu volto com perguntas, um plano e um prazo realista — antes de escrever qualquer linha de código.',
    cta: 'Contrate-me no Workana',
    facts: [
      { label: 'Baseado em', value: 'Polônia' },
      { label: 'Atendendo', value: 'América Latina · Brasil · Estados Unidos' },
      { label: 'Valor', value: 'USD 25 / hora' },
      { label: 'Idiomas', value: 'Inglês · Português · Espanhol' },
    ],
  },

  footer: {
    role: 'Desenvolvedor Full Stack e Mobile · Polônia',
  },
}

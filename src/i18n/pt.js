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
    },
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

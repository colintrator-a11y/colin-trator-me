export default {
  code: 'es',
  htmlLang: 'es',
  name: 'Español',
  short: 'ES',

  a11y: {
    skip: 'Ir al contenido',
    sections: 'Secciones',
    footer: 'Pie de página',
    toLight: 'Cambiar al tema claro',
    toDark: 'Cambiar al tema oscuro',
    backToTop: 'Volver arriba',
    language: 'Idioma',
    filter: 'Filtrar proyectos por categoría',
  },

  nav: {
    about: 'Perfil',
    services: 'Servicios',
    skills: 'Tecnologías',
    work: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
    cta: 'Contrátame',
  },

  hero: {
    status: 'Disponible para nuevos proyectos',
    title: 'Desarrollador Full Stack y Móvil',
    tagline:
      'Aplicaciones web, apps móviles y tiendas online — desde el primer requisito hasta el despliegue.',
    note: 'Trabajo en remoto con clientes de América Latina, Brasil y Estados Unidos',
    cta: 'Ver los proyectos',
    facts: [
      { label: 'Ubicación', value: 'Polonia' },
      { label: 'Tarifa', value: 'USD 25 / hora' },
      { label: 'Idiomas', value: 'Inglés · Portugués · Español' },
      { label: 'Modalidad', value: 'Remoto, en todo el mundo' },
    ],
    caption: 'Desarrollador freelance',
    captionValue: 'Desde 2019',
    stats: {
      years: 'Años desarrollando software',
      projects: 'Proyectos destacados',
      languages: 'Idiomas con clientes',
      since: 'Freelance desde',
    },
  },

  about: {
    eyebrow: 'Perfil',
    heading: 'Siete años entregando, de principio a fin',
    paragraphs: [
      'Soy desarrollador full stack y móvil con más de siete años de experiencia, trabajando en remoto con clientes de América Latina, Brasil y Estados Unidos.',
      'Construyo aplicaciones web con React, Next.js, Node.js y TypeScript, y back ends y automatizaciones con Python y Django, sobre PostgreSQL, MySQL y MongoDB. También desarrollo aplicaciones Android, herramientas de escritorio, sitios en WordPress y tiendas Shopify.',
      'Llevo el proyecto desde los requisitos hasta el despliegue y trabajo por etapas claras, para que veas el avance en lugar de recibir una única entrega al final. Pregunto antes de empezar y señalo los riesgos pronto, no tarde.',
      'Trato directamente con los clientes en español, portugués e inglés — la mayoría vuelve con un segundo proyecto.',
    ],
    languagesTitle: 'Idiomas',
    certTitle: 'Certificación',
    languages: {
      english: { name: 'Inglés', level: 'Avanzado' },
      portuguese: { name: 'Portugués', level: 'Intermedio alto' },
      spanish: { name: 'Español', level: 'Intermedio alto' },
    },
    certifications: {
      workanaEnglish: { name: 'Test de inglés — Workana', detail: 'Nota 76% · Completado' },
    },
  },

  services: {
    eyebrow: 'Servicios',
    heading: 'Lo que desarrollo',
    note: 'Requisitos → desarrollo → despliegue, por etapas claras',
    items: {
      web: {
        title: 'Aplicaciones web',
        body: 'Front ends en React y Next.js sobre back ends en Node.js, Python o PHP, con APIs REST y la base de datos que encaje con el proyecto.',
      },
      mobile: {
        title: 'Aplicaciones móviles',
        body: 'Apps en React Native y Flutter para Android e iOS, desarrollo Android nativo y juegos en Unity 3D publicados en ambas tiendas.',
      },
      ecommerce: {
        title: 'E-commerce',
        body: 'Tiendas Shopify y WooCommerce, catálogos de productos, trabajo de tema y las integraciones que mantienen la tienda en marcha.',
      },
      automation: {
        title: 'Chatbots y automatización',
        body: 'Asistentes en Rasa con derivación a un agente humano, además de automatizaciones en Python que quitan el trabajo repetitivo a tu equipo.',
      },
    },
  },

  skills: {
    eyebrow: 'Tecnologías',
    heading: 'El stack con el que trabajo',
    note: (count, areas) => `${count} tecnologías en ${areas} áreas`,
    groups: {
      frontend: 'Front end',
      backend: 'Back end y datos',
      mobile: 'Móvil y juegos',
      ecommerce: 'E-commerce y CMS',
      other: 'Otros',
    },
  },

  projects: {
    eyebrow: 'Proyectos',
    heading: 'Proyectos seleccionados',
    note: (count) => (count === 1 ? 'Un proyecto' : `${count} proyectos`),
    all: 'Todos',
    categories: {
      chatbot: 'Chatbot / IA',
      saas: 'SaaS empresarial',
      mobileCommerce: 'Móvil / E-commerce',
      mobile: 'Móvil',
      games: 'Móvil / Juegos',
      blockchain: 'Blockchain',
      ecommerce: 'E-commerce',
      wordpress: 'WordPress',
    },
    items: {
      rasaHandoff: [
        'Este es un ejemplo de chatbot en Rasa que muestra cómo construir un asistente de IA para un helpdesk de TI. Incluye una integración con la API de Service Now para abrir incidencias y consultar su estado. Abajo hay una conversación de ejemplo, con el bot ayudando al usuario a abrir un ticket de soporte y a consultar su estado.',
        'Puedes usar este chatbot como punto de partida para construir asistentes de atención al cliente o como plantilla para recoger del usuario la información necesaria antes de hacer una llamada a la API. El bot incluye una habilidad sencilla para derivar la conversación a otro bot o a una persona.',
        'Con esta demo podemos transferir la conversación de un bot a otro bot, o derivarla a un agente humano.',
      ],
      arabianRange: [
        'Diseño y desarrollo del sitio de Arabian Ranges — un sitio en WordPress para una empresa de galerías de tiro comerciales y deportivas, con sus productos, servicios, programas de formación, galería y socios.',
        'El sitio es totalmente responsive y está optimizado, y sigo encargándome de su mantenimiento. Se entregó con un presupuesto ajustado y un plazo corto, y el cliente dejó una reseña de cinco estrellas.',
      ],
      artisanBeauty: [
        'Diseñé y desarrollé un sitio completo en WordPress para Artisan Beauty Clinic, una clínica de belleza y cuidado de la piel en Scarborough. El proyecto incluyó todo el diseño de la maqueta, las páginas de servicios, la estructura de precios, el flujo de reserva, la adaptación a móvil y una interfaz moderna y limpia acorde con su marca.',
        'El objetivo era crear un sitio profesional y fácil de recorrer, que presentara los servicios con claridad y generara confianza entre los clientes de la zona.',
      ],
      ayiko: [
        'Ayiko es una plataforma de comercio electrónico multivendedor creada para reunir a vendedores, clientes, repartidores y agentes en un solo sistema. La idea era construir un marketplace donde cada vendedor lleve su propia operación mientras el cliente disfruta de una compra y una entrega sin fricción.',
        'Los clientes navegan por productos de varios vendedores y hacen pedidos con facilidad. Del otro lado, los vendedores gestionan sus propios anuncios, atienden los pedidos y asignan las entregas a sus propios repartidores. Los repartidores reciben los datos necesarios y se ocupan de la última milla, manteniendo el proceso rápido y bajo control del vendedor.',
        'La plataforma incluye además un modelo de agentes para impulsar el crecimiento. Los agentes promocionan la plataforma con sus propios códigos y, cada vez que un cliente nuevo se registra a través de ellos, ganan una comisión. Así el negocio crece por recomendación, sin un gasto fuerte en marketing.',
        'En conjunto, Ayiko se construyó como un sistema completo que integra operación, entrega y crecimiento en un mismo lugar.',
      ],
      collectMyJudgement: [
        'Collect My Judgement está especializada en cobro de deudas y ejecución de sentencias, con cobertura nacional y un equipo de abogados, negociadores e investigadores expertos. Con más de 30 años de resultados demostrados, atienden incluso los casos más complejos y aseguran una recuperación eficiente y eficaz para sus clientes.',
        'Diseñé para ellos una landing page de alto impacto, que pone por delante esa experiencia y su credibilidad en el sector.',
      ],
      enterpriseErp: [
        'EnterpriseERP es una plataforma de planificación de recursos empresariales (ERP) en la nube, creada para centralizar y automatizar las operaciones esenciales del negocio en un único sistema integrado. La solución ofrece visibilidad en tiempo real del desempeño financiero, la actividad comercial, los niveles de inventario, las compras, la relación con los clientes y la gestión del personal, lo que permite decidir con datos y ganar eficiencia.',
        'La plataforma reúne varios módulos interconectados: Finanzas, Ventas, Compras, Inventario, Producción, CRM, Recursos Humanos, Proyectos, Activos, Informes y Gestión Documental. Todos comparten una misma base de datos, lo que asegura la consistencia y elimina tener que cargar la misma información en distintos departamentos.',
        'El módulo de Finanzas gestiona cuentas por pagar, cuentas por cobrar, libro mayor, presupuestos, impuestos, banca e informes financieros.',
      ],
      eMuvas: [
        'E-Muvas es una app de servicio de entregas que permite solicitar un envío en dos modalidades: inmediata o programada. En ambos casos ofrece actualizaciones en tiempo real y seguimiento en vivo.',
        'Al terminar la entrega, el usuario también puede valorar y comentar sobre el repartidor, lo que aporta transparencia y calidad al servicio. El pago se procesa mediante una pasarela segura y requiere una tarjeta vinculada a la cuenta.',
      ],
      homeEnergy: [
        'Desarrollé una tienda Shopify dinámica y fácil de usar para BioLite, que presenta sus productos de energía ecológica con una compra fluida y optimizada para móvil.',
      ],
      hulkCharts: [
        'Una dApp de gráficos en tiempo real para tokens de Binance Smart Chain (BSC), construida en torno a Hulk Token — en la línea de PooCoin.',
        'Las pantallas cubren la búsqueda de mercado ordenada por volumen y liquidez, gráficos de token en vivo con historial de operaciones, swaps en PancakeSwap y ApeSwap, un sniper de tokens accionado por dirección de contrato e importe de disparo, y páginas de perfil por token con transferencias y holders.',
      ],
    },
    mediaAlt: (name) => `Vista previa de ${name}`,
  },

  experience: {
    eyebrow: 'Experiencia',
    heading: 'Trayectoria',
    role: 'Desarrollador Full Stack y Móvil',
    company: 'Desarrollo remoto — Freelance',
    period: 'Agosto de 2019 — Actualidad',
    points: [
      'Colaboración remota con clientes de América Latina, Brasil y Estados Unidos.',
      'Desarrollo de aplicaciones web con React, Next.js, Node.js y TypeScript, y back ends con Python, Django, PHP y Laravel.',
      'Publicación de apps Android e iOS con React Native, Flutter y Unity 3D.',
      'Entrega de sitios en WordPress y tiendas Shopify, del diseño al lanzamiento.',
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    heading: '¿Tienes un proyecto en mente?',
    body: 'Cuéntame qué necesitas y vuelvo con preguntas, un plan y un plazo realista — antes de escribir una sola línea de código.',
    cta: 'Contrátame en Workana',
    facts: [
      { label: 'Ubicación', value: 'Polonia' },
      { label: 'Trabajo con', value: 'América Latina · Brasil · Estados Unidos' },
      { label: 'Tarifa', value: 'USD 25 / hora' },
      { label: 'Idiomas', value: 'Inglés · Portugués · Español' },
    ],
  },

  footer: {
    role: 'Desarrollador Full Stack y Móvil · Polonia',
  },
}

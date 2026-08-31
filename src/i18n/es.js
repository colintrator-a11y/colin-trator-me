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
    note: (count) => `${count} proyectos · web, móvil, e-commerce e IA`,
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
      rasa: 'Asistente en Rasa que traspasa la conversación del bot a un agente humano cuando llega al límite de lo que debe responder solo.',
      erp: 'Desarrollo de un ERP multiempresa entregado como producto SaaS, cubriendo el back end en PHP y los módulos operativos a su alrededor.',
      ayiko: 'Plataforma de e-commerce con back end en Laravel y una app de compras en React Native para Android e iOS.',
      emuvas: 'App de servicio de entregas en React Native sobre un back end en Node.js, desde el pedido hasta el seguimiento del repartidor.',
      ubicabs: 'App Android de transporte con conductor, del diseño de experiencia de usuario hasta la versión publicada.',
      mmorpg: 'MMORPG en Unity 3D publicado en Android e iOS, cubriendo jugabilidad, build del cliente y salida en tiendas.',
      dapp: 'Aplicación descentralizada con gráficos de tokens en tiempo real sobre Binance Smart Chain.',
      homeenergy: 'Tienda Shopify para una empresa de energía doméstica, con un chatbot atendiendo la primera línea de consultas.',
      bicycle: 'Tienda Shopify para un comercio de bicicletas, construida en torno a un catálogo de productos amplio.',
      vassalli: 'Montaje de catálogo y alta masiva de productos en una tienda Shopify, llevado como proyecto gestionado de principio a fin.',
      wheels: 'Sitio catálogo en WordPress para un proveedor de ruedas y ruedas giratorias, con JavaScript propio en las páginas de producto.',
      beauty: 'Sitio web y diseño para una clínica de estética, hecho en WordPress para que el equipo lo mantenga al día por su cuenta.',
      judgement: 'Landing page responsive para una marca de servicios jurídicos, escrita para convertir visitantes en consultas.',
      arabian: 'Sitio web responsive en WordPress, construido para leerse igual de bien en el móvil que en el escritorio.',
      sports: 'Tienda en WordPress para un comercio deportivo, con trabajo de diseño web en todo el sitio.',
    },
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

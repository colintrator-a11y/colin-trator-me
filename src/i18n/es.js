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

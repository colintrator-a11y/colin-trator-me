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
    close: 'Cerrar',
    prevImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    openPreview: 'Abrir la imagen ampliada',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetZoom: 'Volver al tamaño original',
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
    lead: 'Desarrollo productos web y mobile que de verdad salen a producción — y hablo tu idioma, literalmente. Español, portugués e inglés: comunicación directa, sin traducciones de por medio.',
    reach: (count) =>
      `7 años de experiencia, ${count} proyectos entregados, trabajando en remoto con clientes de América Latina, Brasil, Europa y Estados Unidos.`,
    bestTitle: 'En lo que soy mejor',
    best: [
      { area: 'E-commerce', detail: 'tiendas en Shopify y WordPress/WooCommerce, temas a medida, integraciones de pago' },
      { area: 'Aplicaciones web', detail: 'React, Node.js, Laravel/PHP, desde landing pages hasta plataformas ERP empresariales' },
      { area: 'Mobile', detail: 'React Native, Kotlin y Java para Android e iOS' },
      { area: 'IA y automatización', detail: 'chatbots con Rasa, automatización de flujos con n8n y Python' },
    ],
    approachTitle: 'Cómo trabajo',
    approach:
      'Un único punto de contacto, desde la primera llamada hasta el lanzamiento. Plazos realistas, no optimistas. Avances semanales que no tienes que pedir. Código limpio y documentado, que tú u otro desarrollador puede mantener cuando yo ya no esté.',
    closing:
      'Baja para ver el portafolio. Después escríbeme con tu idea — te diré con honestidad si soy la persona adecuada, qué suele implicar y cómo lo abordaría.',
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
      shopify: 'Shopify',
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
      shopify: 'Shopify',
      ecommerce: 'E-commerce y CMS',
      other: 'Otros',
    },
  },

  projects: {
    eyebrow: 'Proyectos',
    heading: 'Proyectos seleccionados',
    note: (count) => (count === 1 ? 'Un proyecto' : `${count} proyectos`),
    bySkill: 'Tecnología',
    allSkills: 'Todas las tecnologías',
    reset: 'Quitar filtros',
    empty: 'Ningún proyecto coincide con estos filtros.',
      skillsCommon: 'Más usadas',
      skillsOther: 'Resto de tecnologías',
    all: 'Todos',
    categories: {
      chatbot: 'Chatbot / IA',
      saas: 'SaaS empresarial',
      mobileCommerce: 'Móvil / E-commerce',
      mobile: 'Móvil',
      games: 'Móvil / Juegos',
      blockchain: 'Blockchain',
      shopify: 'Shopify',
      ecommerce: 'E-commerce',
      automation: 'Automatización / Datos',
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
      mmorpg: [
        'Un MMORPG móvil en Unity 3D para Android e iOS, dentro del género de estrategia y construcción de base para muchos jugadores: cada uno levanta su ejército, mejora el castillo y su economía y libra batallas en tiempo real contra otros jugadores.',
        'El desarrollo cubre el ciclo completo de un juego en vivo: entrenamiento de tropas y mejoras del cuartel, árbol de investigación para granja, piedra, madera, oro y velocidad de construcción, asedios en tiempo real con recompensas por victoria, clasificaciones de poder y de tropas abatidas, selección de héroe y de líder, recompensas por siete días de inicio de sesión y una tienda de compras integradas con paquetes de cofres, de gemas, membresías y suscripciones. La versión mostrada corre con la interfaz en español.',
      ],
      vassalli: [
        'Monté un catálogo de productos limpio y bien organizado en Shopify para Vassalli, con la ropa presentada con descripciones detalladas, opciones de talla e imágenes cuidadas para una mejor experiencia de compra.',
      ],
      madsen: [
        'Desarrollé una tienda Shopify elegante y responsive para MADSEN, una marca de bicicletas, con escaparates de producto dinámicos y una experiencia de compra fluida.',
      ],
      richmond: [
        'Richmond ofrece soluciones de rodadura, entre ellas ruedas y ruedas giratorias, en Australia y Nueva Zelanda, con productos fiables y de alta calidad para manipulación de materiales y soluciones de rodadura fabricadas a medida para sectores muy distintos.',
        'El sitio es una tienda en WordPress y WooCommerce, con el catálogo organizado en categorías que van de ruedas giratorias, ruedas y neumáticos a transpaletas, transportadores, jaulas rodantes y herrajes para portones, además de buscador de productos en todo el sitio y localizador de tiendas.',
      ],
      aiArt: [
        'AI Art Generator es una aplicación móvil que permite crear obras impresionantes sin esfuerzo, con solo unos toques. Impulsada por inteligencia artificial avanzada, convierte tus indicaciones de texto en imágenes de alta calidad que quitan el aliento.',
        'Ya seas artista, diseñador o alguien con ganas de explorar su lado creativo, AI Art Generator ofrece una plataforma fluida para dar vida a tus ideas. Su interfaz intuitiva permite generar obras únicas y personalizadas, con posibilidades creativas sin fin. Apoyándose en IA de última generación, la app redefine la forma en que creamos y vivimos el arte, y la hace accesible a cualquiera, sea cual sea su nivel.',
      ],
      musicPlayer: [
        'Un reproductor de música para Android lleno de funciones, hecho para un cliente, con una interfaz moderna y una reproducción fluida. Fue la primera fase de desarrollo de una app de música popular.',
        'Incluye un ecualizador personalizado — cinco bandas, más reverberación, graves, virtualizador y sonoridad — junto con creación de listas, búsqueda avanzada, edición de metadatos, filtros propios para organizar la biblioteca y borrado rápido de archivos de audio que sobran. La app está pensada para la velocidad, la usabilidad y el rendimiento del audio.',
      ],
      n8nChatbot: [
        'Construí y puse en marcha en 3 semanas un flujo sólido de chatbot de WhatsApp para administración de inmuebles, que simplifica cómo los equipos de soporte reciben solicitudes y abren tickets.',
        'El sistema gestiona los mensajes entrantes, los archivos adjuntos y la verificación de usuarios combinando automatización en n8n con persistencia en PostgreSQL. La conversación se maneja con estado, lo que guía al usuario con naturalidad por formularios de varios pasos — tipo de ticket, título y descripción — sin perder el hilo de la sesión.',
        'Resultados: verificación de usuarios automatizada, tiempo de apertura de tickets reducido de horas a minutos, atención disponible las 24 horas y consistencia fiable de los datos en todas las interacciones.',
        'Stack: n8n, WhatsApp API, PostgreSQL, arquitectura de base de datos relacional, flujos orientados a eventos, lógica de máquina de estados e integraciones de notificación automatizadas.',
      ],
      currencyConverter: [
        'Este conversor de divisas para móvil está hecho en Flutter y ofrece conversión rápida, precisa y en tiempo real. Integré una API de alta velocidad para asegurar tipos de cambio fiables y siempre al día.',
        'Funciones y tecnologías principales: datos de divisas rápidos y precisos desde una API de alto rendimiento, GetX para la gestión del estado y la fluidez de la app, Firebase Authentication para un acceso seguro, GetStorage como base de datos local para preferencias y datos del usuario, persistencia de datos mediante una gestión de estado eficiente y un diseño totalmente responsive que se ve bien en cualquier dispositivo.',
        'La app ofrece una experiencia fluida, con arquitectura moderna, alto rendimiento y una interfaz limpia en pantallas de cualquier tamaño.',
      ],
      dineamic: [
        'Una tienda Shopify para Dineamic, una marca de reparto de comida fresca. El sitio cubre el menú y las opciones dietéticas, el reparto y los pedidos por NDIS, con una comprobación de código postal en la cabecera de cada página, para que el visitante sepa de inmediato si le llega el reparto.',
        'Construido para responder igual de bien en escritorio, portátil, tableta y móvil.',
      ],
      excelDashboard: [
        'El proyecto consistió en desarrollar un panel de presupuesto totalmente automatizado en Excel, con automatización de Microsoft Excel, fórmulas avanzadas, tablas y gráficos dinámicos, validación de datos, formato condicional y cuadros de mando interactivos.',
        'Diseñé varias hojas para el seguimiento de ingresos, el control de gastos, el ahorro, el seguimiento de deudas, el análisis de patrimonio, la proyección de inversiones y los resúmenes anuales. Gráficos dinámicos, tarjetas de indicadores, desgloses por categoría y cálculos automáticos ofrecen una lectura financiera en tiempo real con la mínima carga manual.',
        'El libro se optimizó para la exactitud, la usabilidad y el rendimiento, y permite gestionar las finanzas personales, analizar el presupuesto, elaborar informes y decidir con criterio desde un panel de Excel profesional y fácil de usar.',
      ],
      zohoStripe: [
        'Diseñé e implementé un flujo de automatización en Zapier para integrar Stripe y Zoho CRM sin fricción.',
        'La automatización se dispara en cuanto se completa un pago en Stripe, crea o actualiza un contacto en Zoho CRM a partir de los datos del cliente en Stripe, configura disparadores en Zoho CRM para acciones como correos de bienvenida o asignación de tareas, y evita registros duplicados comprobando lo existente antes de crear algo nuevo.',
        'La solución eliminó la carga manual de datos, permitió actualizar las fichas de cliente en tiempo real y aseguró la sincronía entre la plataforma de pagos y el CRM. La mejora en eficiencia y capacidad de respuesta fue notable.',
      ],
      keepNote: [
        'KeepNote es una app de notas rápida, sencilla y con la privacidad por delante: todos los datos se guardan localmente en el dispositivo. Sin configuración complicada y sin cuenta en línea, tus notas siguen siendo tuyas.',
        'Funciones principales: almacenamiento local, sin nube, una interfaz sencilla para crear notas al vuelo, un diseño pensado para la privacidad y funcionamiento completo sin conexión. Hecha con Flutter y SQLite.',
      ],
      monstersClan: [
        'El sitio de Monsters Clan presenta las funciones centrales del juego, entre ellas el intercambio de NFT y el staking.',
        'Es un juego NFT en el que cada jugador controla monstruos únicos, los entrena y los personaliza para batallas épicas. Con la tecnología blockchain integrada, la propiedad de los activos del juego es segura y transparente, y los jugadores son dueños reales de sus monstruos y pueden comerciar con ellos.',
        'Con una jugabilidad estratégica y funciones que enganchan, Monsters Clan ofrece una experiencia inmersiva e interactiva, donde el jugador moldea las habilidades de sus monstruos y compite por recompensas en un entorno descentralizado y dinámico.',
      ],
      weatherParallax: [
        'Un sitio con efecto parallax para un proveedor de noticias meteorológicas, construido desde cero.',
        'Empezó como una versión en HTML y CSS, después se adaptó para tableta y móvil y, por último, se convirtió en un tema de WordPress.',
      ],
      rabbitRoyale: [
        'Rabbit Royale es una mini-app de Telegram que ofrece una experiencia de juego tap-to-earn. Pensada para mantener al jugador enganchado, combina diversión y recompensas en una plataforma interactiva y sin fricción.',
        'A medida que el jugador toca la pantalla y avanza, acumula recompensas y ve crecer sus ganancias día a día. Con una interfaz sencilla y una jugabilidad que engancha, Rabbit Royale ofrece una forma entretenida de ganar mientras se juega.',
      ],
      ratehub: [
        'Ratehub es un sitio canadiense de comparación de productos financieros: hipotecas, tarjetas de crédito, cuentas, inversiones y seguros.',
        'Mi trabajo en él: instalé el certificado SSL, configuré Cloudflare, implementé la pasarela de pago, rediseñé las páginas de hipotecas y de tarjetas de crédito, adapté el sitio a móvil e implementé el soporte multiidioma.',
      ],
      travelDaily: [
        'Travel Daily Media es un medio de noticias del sector turístico, organizado por mercados, sectores y reportajes, con empleo, eventos y publicidad junto a la actualidad.',
        'Construí el sitio desde cero, y su blog es el mayor en el que he trabajado: más de 70.000 suscriptores y más de 100.000 correos diarios enviados con Interspire según los criterios de cada suscriptor. El sitio incluye además una sección de empleo.',
        'También en este proyecto: integración con HubSpot, personalización del tema Publisher, trabajo de SEO según los requisitos del cliente e implementación del plugin Yoast.',
      ],
      tapio: [
        'Tapio es un juego tap-to-earn en Telegram. Con cada toque, el jugador entra en un mundo de recompensas inmediatas, donde cada acción abre una oportunidad nueva.',
        'A medida que avanza, no solo acumula recompensas sino también ventajas exclusivas, y desbloquea más beneficios conforme sube en la clasificación. Tapio hace que ganar sea divertido e interactivo, con una experiencia dinámica que invita a volver.',
      ],
      familj: [
        'Una app de salud durante el embarazo, hecha como proyecto para un cliente y pensada para acompañar a la mujer a lo largo de todo el embarazo. Reúne orientación, consejos de salud y comunidad en una plataforma sencilla de usar.',
        'Funciones: sugerencias y consejos de salud semana a semana, una lista de lo que toca hacer en cada etapa, un sistema de comunidad con comentarios en el blog para conversar y apoyarse, una aplicación web de acceso fácil y apps para iOS y Android.',
        'Stack: Node.js en el back end, React.js en el front end web y Flutter para las apps de iOS y Android. El resultado es una solución escalable y cómoda de usar, que responde bien en cualquier dispositivo y mantiene a la futura madre informada y acompañada.',
      ],
      qalorie: [
        'Qalorie es una app de coaching en salud, publicada en ambas tiendas como Qalorie: Weight Loss & Health. El usuario habla con coaches para consultas, planes de alimentación, entrenamientos y consejos de biohacking, y sigue calorías, macros, agua y ejercicio frente a los objetivos del día.',
        'Trabajé tanto en la aplicación móvil como en el back end. La app es React Native con Redux, hooks y sagas; el back end es Node.js sobre MongoDB, con los archivos en AWS S3.',
        'Entre lo construido: inicio de sesión social con Firebase para Facebook, Apple, Google y correo; videollamadas, llamadas de voz y chat en vivo con CometChat; notificaciones push; Google Analytics y AppsFlyer; un feed social con publicaciones de varias imágenes y vídeos, comentarios, me gusta y seguidores; y pagos con PayPal y Stripe. La publicación en la App Store y en Play Store también fue mía.',
        'Lo difícil fue editar y recortar vídeo dentro de la propia app para publicarlo en el feed. Los diseños llegaron en Figma e InVision.',
      ],
      wooBulkDiscount: [
        'Un plugin de WordPress hecho a medida para mostrar precios con descuento de forma dinámica. Construido en PHP, HTML y CSS sobre WordPress y las propias funciones de WooCommerce.',
      ],
      keyzar: [
        'Una tienda Shopify para Keyzar, marca de alta joyería que vende anillos de compromiso, alianzas, diamantes y piedras preciosas.',
        'La tienda está pensada para una compra meditada, no impulsiva: diamantes que se recorren por forma, una sección educativa, reserva de asesoría en el showroom de Nueva York o en línea, y las garantías que busca quien va a gastar en un anillo — ajuste de talla gratuito, certificación y tasación, piedras libres de conflicto y garantía de por vida.',
      ],
      tools4trade: [
        'Una tienda Shopify para Tools4Trade, minorista británico de herramientas eléctricas y manuales, ropa de trabajo y equipamiento de obra.',
        'Aquí el reto es el catálogo. Miles de referencias en una docena de categorías, con todas las marcas del sector una junto a otra, búsqueda por categoría, marca o número de pieza, y un escaparate que debe sostener liquidación, ofertas de almacén, novedades, canjes de marca y un programa de puntos sin enterrar los productos debajo.',
      ],
      illumivein: [
        'Una tienda Shopify para Illumivein, un localizador de venas de mano que se vende a enfermeras, flebotomistas y estudiantes.',
        'Es una tienda de un solo producto, así que toda la página es un único argumento: el problema en el titular, el precio por delante, la prueba al lado — profesionales que lo llevan, reseñas verificadas, registro ante la FDA — y después las características, un vídeo de demostración y las instrucciones en tres pasos.',
      ],
      videoMilkshake: [
        'Una tienda Shopify para Video Milkshake, que vende recursos de edición de vídeo: presets, superposiciones, texturas de película, mattes, títulos y looks de color.',
        'Todo es descarga digital, así que no hay envío, ni stock, ni devoluciones que diseñar. Lo que la tienda sí debe resolver es mostrar movimiento en un catálogo estático: los recursos se previsualizan en vídeo, se ordenan por lo que hacen y no por lo que son, y se venden en packs además de por separado.',
      ],
      consciousInk: [
        'Una tienda Shopify para Conscious Ink, que vende tatuajes temporales de afirmación: recordatorios que se llevan puestos y buscan cortar el diálogo interno negativo.',
        'La tienda vende un hábito más que un objeto, así que explica antes de vender: la propuesta, el razonamiento detrás, los beneficios uno a uno, las garantías del producto y un largo muro de reseñas de clientes. Junto a la compra suelta corre una suscripción.',
      ],
    },
      links: { demo: 'Ver la demo', store: 'Ver en Google Play', site: 'Ver el sitio', appStore: 'Ver en la App Store' },
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

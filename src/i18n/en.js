export default {
  code: 'en',
  htmlLang: 'en',
  name: 'English',
  short: 'EN',

  a11y: {
    skip: 'Skip to content',
    sections: 'Sections',
    footer: 'Footer',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    backToTop: 'Back to top',
    language: 'Language',
    filter: 'Filter projects by category',
  },

  nav: {
    about: 'About',
    services: 'Services',
    skills: 'Skills',
    work: 'Work',
    experience: 'Experience',
    contact: 'Contact',
    cta: 'Get in touch',
  },

  hero: {
    status: 'Available for new projects',
    title: 'Full Stack & Mobile Developer',
    tagline:
      'Web applications, mobile apps and online stores — taken from the first requirement through to deployment.',
    note: 'Working remotely with clients in Latin America, Brazil and the United States',
    cta: 'See the work',
    facts: [
      { label: 'Based in', value: 'Poland' },
      { label: 'Rate', value: 'USD 25 / hour' },
      { label: 'Languages', value: 'English · Portuguese · Spanish' },
      { label: 'Working', value: 'Remote, worldwide' },
    ],
    caption: 'Freelance developer',
    captionValue: 'Since 2019',
    stats: {
      years: 'Years building software',
      projects: 'Featured projects',
      languages: 'Client languages',
      since: 'Freelancing since',
    },
  },

  about: {
    eyebrow: 'About',
    heading: 'Seven years of shipping, start to finish',
    paragraphs: [
      'I am a full stack and mobile developer with more than seven years of experience, working remotely with clients in Latin America, Brazil and the United States.',
      'I build web applications with React, Next.js, Node.js and TypeScript, and backends and automations with Python and Django, on PostgreSQL, MySQL and MongoDB. I also develop Android apps, desktop tools, WordPress sites and Shopify stores.',
      'I take a project from requirements through to deployment and work in clear stages, so you see progress as it happens instead of one delivery at the end. I ask questions before starting and flag risks early rather than late.',
      'I work directly with clients in Spanish, Portuguese and English — most of them come back with a second project.',
    ],
    languagesTitle: 'Languages',
    certTitle: 'Certification',
    languages: {
      english: { name: 'English', level: 'Advanced' },
      portuguese: { name: 'Portuguese', level: 'High intermediate' },
      spanish: { name: 'Spanish', level: 'High intermediate' },
    },
    certifications: {
      workanaEnglish: { name: 'English test — Workana', detail: 'Score 76% · Completed' },
    },
  },

  services: {
    eyebrow: 'Services',
    heading: 'What I build',
    note: 'Requirements → build → deployment, in clear stages',
    items: {
      web: {
        title: 'Web applications',
        body: 'React and Next.js front ends on Node.js, Python or PHP back ends, with REST APIs and a database that fits the project.',
      },
      mobile: {
        title: 'Mobile apps',
        body: 'React Native and Flutter apps for Android and iOS, native Android work, and Unity 3D games shipped to both stores.',
      },
      ecommerce: {
        title: 'E-commerce',
        body: 'Shopify and WooCommerce stores, product catalogues, theme work and the integrations that keep a shop running.',
      },
      automation: {
        title: 'Chatbots & automation',
        body: 'Rasa assistants with human handoff, plus Python automations that take the repetitive work off your team.',
      },
    },
  },

  skills: {
    eyebrow: 'Skills',
    heading: 'The stack I work in',
    note: (count, areas) => `${count} technologies across ${areas} areas`,
    groups: {
      frontend: 'Front end',
      backend: 'Back end & data',
      mobile: 'Mobile & games',
      ecommerce: 'E-commerce & CMS',
      other: 'Other',
    },
  },

  projects: {
    eyebrow: 'Work',
    heading: 'Selected projects',
    note: (count) => `${count} projects · web, mobile, e-commerce and AI`,
    all: 'All work',
    categories: {
      chatbot: 'Chatbot / AI',
      saas: 'Enterprise SaaS',
      mobileCommerce: 'Mobile / E-commerce',
      mobile: 'Mobile',
      games: 'Mobile / Games',
      blockchain: 'Blockchain',
      ecommerce: 'E-commerce',
      wordpress: 'WordPress',
    },
    items: {
      rasa: 'A Rasa assistant that hands a live conversation over from the bot to a human agent when it reaches the limit of what it should answer alone.',
      erp: 'Development work on a multi-tenant ERP delivered as a SaaS product, covering the PHP back end and the operational modules around it.',
      ayiko: 'An e-commerce platform with a Laravel back end and a React Native shopping app for Android and iOS.',
      emuvas: 'A delivery service app built in React Native on a Node.js back end, from order placement through to driver tracking.',
      ubicabs: 'An Android ride-hailing app taken from user experience design through to the shipped build.',
      mmorpg: 'A Unity 3D MMORPG released on both Android and iOS, covering gameplay, client build and store release.',
      dapp: 'A decentralised application streaming live token charts from the Binance Smart Chain.',
      homeenergy: 'A Shopify store for a home energy retailer, with a chatbot handling the first line of customer questions.',
      bicycle: 'A Shopify storefront for a bicycle retailer, built around a large product catalogue.',
      vassalli: 'Catalogue setup and bulk product listing for a Shopify store, run as a managed project from start to handover.',
      wheels: 'A WordPress catalogue site for a wheels and castors supplier, with custom JavaScript on the product pages.',
      beauty: 'Website and web design for a beauty clinic, built on WordPress so the team can keep it up to date themselves.',
      judgement: 'A responsive landing page for a legal services brand, written to convert visitors into enquiries.',
      arabian: 'A responsive WordPress website built to read as well on a phone as it does on a desktop.',
      sports: 'A WordPress store front for a sports retailer, with web design work across the whole site.',
    },
  },

  experience: {
    eyebrow: 'Experience',
    heading: 'Work history',
    role: 'Full Stack & Mobile Developer',
    company: 'Remote Development — Freelance',
    period: 'August 2019 — Present',
    points: [
      'Collaborating remotely with clients across Latin America, Brazil and the United States.',
      'Building web applications with React, Next.js, Node.js and TypeScript, and back ends with Python, Django, PHP and Laravel.',
      'Shipping Android and iOS apps with React Native, Flutter and Unity 3D.',
      'Delivering WordPress sites and Shopify stores, from design through to launch.',
    ],
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Have a project in mind?',
    body: 'Tell me what you need and I will come back with questions, a plan and a realistic timeline — before any code is written.',
    cta: 'Send a message',
    facts: [
      { label: 'Based in', value: 'Poland' },
      { label: 'Working with', value: 'Latin America · Brazil · United States' },
      { label: 'Rate', value: 'USD 25 / hour' },
      { label: 'Speaking', value: 'English · Portuguese · Spanish' },
    ],
  },

  footer: {
    role: 'Full Stack & Mobile Developer · Poland',
  },
}

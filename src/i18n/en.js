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
    cta: 'Hire me',
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
    note: (count) => (count === 1 ? 'One project' : `${count} projects`),
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
      rasaHandoff: [
        'This is a Rasa chatbot example demonstrating how to build an AI assistant for an IT Helpdesk. It includes an integration with the Service Now API to open incident reports and check on incident report statuses. Below is an example conversation, showing the bot helping a user open a support ticket and query its status.',
        'You can use this chatbot as a starting point for building customer service assistants or as a template for collecting required pieces of information from a user before making an API call. This bot includes a simple skill for handing off the conversation to another bot or a human.',
        'Using this demo, we can transfer the conversation from one bot to another bot, or hand off to a human.',
      ],
      arabianRange: [
        'Design and development of the Arabian Ranges website — a WordPress site for a commercial and sport shooting-range business, covering its products, services, training programmes, gallery and partners.',
        'The site is fully responsive and optimised, and I still maintain it. It was delivered on a modest budget and a tight timeline, and the client left a five-star review.',
      ],
      artisanBeauty: [
        'I designed and developed a complete WordPress website for Artisan Beauty Clinic, a beauty and skincare clinic in Scarborough. The project included full layout design, service pages, pricing structure, booking flow, mobile responsiveness, and a clean modern UI to match their brand.',
        'The goal was to create a professional, easy-to-navigate website that clearly presents their services and builds trust with local clients.',
      ],
      ayiko: [
        'Ayiko is a multi-vendor eCommerce platform built to bring sellers, customers, drivers, and agents into one system. The idea was to create a marketplace where sellers can run their own operations while customers enjoy a smooth shopping and delivery experience.',
        'Customers can browse products from multiple sellers and place orders easily. On the other side, sellers can manage their own listings, handle orders, and assign deliveries to their own drivers. Drivers receive the required details and handle last-mile delivery, keeping the process fast and controlled at the seller level.',
        'The platform also includes an agent model to support growth. Agents can promote the platform using their own codes, and whenever a new customer signs up through them, the agent earns a commission. This helps the business grow through referrals, without heavy marketing spend.',
        'Overall, Ayiko was built as a complete system that integrates operations, delivery, and growth in one place.',
      ],
      collectMyJudgement: [
        'Collect My Judgement specializes in debt collection and judgment enforcement, providing nationwide coverage with a team of expert attorneys, negotiators, and investigators. With over 30 years of proven success, they handle even the most complex cases, ensuring efficient and effective recovery for their clients.',
        'I designed a high-impact landing page for them, showcasing their expertise and credibility in the industry.',
      ],
      enterpriseErp: [
        'EnterpriseERP is a cloud-based Enterprise Resource Planning platform designed to centralize and automate core business operations within a single integrated system. The solution provides organizations with real-time visibility into financial performance, sales activities, inventory levels, procurement processes, customer relationships, and workforce management, enabling data-driven decision-making and operational efficiency.',
        'The platform consists of multiple interconnected modules, including Finance, Sales, Purchasing, Inventory, Production, CRM, Human Resources, Projects, Assets, Reports, and Document Management. Each module shares a unified database, ensuring data consistency and eliminating duplicate data entry across departments.',
        'The Finance module manages accounts payable, accounts receivable, general ledger, budgeting, tax management, banking, and financial reporting.',
      ],
      eMuvas: [
        'E-Muvas is a delivery service mobile app that allows users to request deliveries in two modes: Instant Requests and Scheduled Requests. It provides real-time updates and live tracking for both modes.',
        'Users can also rate and review drivers after completing deliveries, ensuring transparency and quality service. Payment is processed via a secure gateway, requiring a linked card for transactions.',
      ],
    },
    mediaAlt: (name) => `Preview of ${name}`,
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
    cta: 'Hire me on Workana',
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

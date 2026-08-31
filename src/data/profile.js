// Single source of truth for every piece of content on the page. Editing the
// portfolio should mean editing this file, not hunting through components.

export const profile = {
  name: 'Dawid Salwecki',
  title: 'Full Stack & Mobile Developer',
  tagline:
    'Web applications, mobile apps and online stores — taken from the first requirement through to deployment.',
  location: 'Poland',
  locationNote: 'Working remotely with clients in Latin America, Brazil and the United States',
  rate: 'USD 25 / hour',
  phone: '+48 883 734 833',
  phoneHref: 'tel:+48883734833',
  availability: 'Available for new projects',
}

export const stats = [
  { value: '7+', label: 'Years building software' },
  { value: '15', label: 'Featured projects' },
  { value: '3', label: 'Client languages' },
  { value: '2019', label: 'Freelancing since' },
]

export const about = [
  'I am a full stack and mobile developer with more than seven years of experience, working remotely with clients in Latin America, Brazil and the United States.',
  'I build web applications with React, Next.js, Node.js and TypeScript, and backends and automations with Python and Django, on PostgreSQL, MySQL and MongoDB. I also develop Android apps, desktop tools, WordPress sites and Shopify stores.',
  'I take a project from requirements through to deployment and work in clear stages, so you see progress as it happens instead of one delivery at the end. I ask questions before starting and flag risks early rather than late.',
  'I work directly with clients in Spanish, Portuguese and English — most of them come back with a second project.',
]

export const services = [
  {
    title: 'Web applications',
    body: 'React and Next.js front ends on Node.js, Python or PHP back ends, with REST APIs and a database that fits the project.',
  },
  {
    title: 'Mobile apps',
    body: 'React Native and Flutter apps for Android and iOS, native Android work, and Unity 3D games shipped to both stores.',
  },
  {
    title: 'E-commerce',
    body: 'Shopify and WooCommerce stores, product catalogues, theme work and the integrations that keep a shop running.',
  },
  {
    title: 'Chatbots & automation',
    body: 'Rasa assistants with human handoff, plus Python automations that take the repetitive work off your team.',
  },
]

export const skillGroups = [
  {
    group: 'Front end',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Responsive Web Design', 'User Interface'],
  },
  {
    group: 'Back end & data',
    items: ['Node.js', 'Python', 'Django', 'PHP', 'Laravel', 'REST API', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    group: 'Mobile & games',
    items: ['React Native', 'Flutter', 'Android', 'iOS', 'Unity 3D'],
  },
  {
    group: 'E-commerce & CMS',
    items: ['Shopify', 'WooCommerce', 'WordPress', 'E-commerce', 'SaaS'],
  },
  {
    group: 'Other',
    items: ['Chatbot / Rasa', 'Blockchain', 'Git', 'Linux'],
  },
]

// `accent` picks the card's colour band; see the palette in Projects.css.
export const projects = [
  {
    name: 'Human Handoff Demo Using Rasa',
    category: 'Chatbot / AI',
    accent: 'violet',
    body: 'A Rasa assistant that hands a live conversation over from the bot to a human agent when it reaches the limit of what it should answer alone.',
    tags: ['Python', 'Rasa', 'Git'],
  },
  {
    name: 'Enterprise ERP SaaS',
    category: 'Enterprise SaaS',
    accent: 'slate',
    body: 'Development work on a multi-tenant ERP delivered as a SaaS product, covering the PHP back end and the operational modules around it.',
    tags: ['SaaS', 'PHP', 'MySQL'],
  },
  {
    name: 'Ayiko: E-commerce Platform',
    category: 'Mobile / E-commerce',
    accent: 'teal',
    body: 'An e-commerce platform with a Laravel back end and a React Native shopping app for Android and iOS.',
    tags: ['Laravel', 'React Native', 'REST API'],
  },
  {
    name: 'E-Muvas Delivery Service',
    category: 'Mobile',
    accent: 'teal',
    body: 'A delivery service app built in React Native on a Node.js back end, from order placement through to driver tracking.',
    tags: ['React Native', 'Node.js'],
  },
  {
    name: 'Ubi Cabs',
    category: 'Mobile',
    accent: 'amber',
    body: 'An Android ride-hailing app taken from user experience design through to the shipped build.',
    tags: ['Android', 'UX Design'],
  },
  {
    name: 'MMORPG Mobile Game',
    category: 'Mobile / Games',
    accent: 'violet',
    body: 'A Unity 3D MMORPG released on both Android and iOS, covering gameplay, client build and store release.',
    tags: ['Unity 3D', 'Android', 'iOS'],
  },
  {
    name: 'Live Streaming Charts DApp',
    category: 'Blockchain',
    accent: 'slate',
    body: 'A decentralised application streaming live token charts from the Binance Smart Chain.',
    tags: ['Blockchain', 'BSC', 'JavaScript'],
  },
  {
    name: 'Home Energy Shopify',
    category: 'E-commerce',
    accent: 'emerald',
    body: 'A Shopify store for a home energy retailer, with a chatbot handling the first line of customer questions.',
    tags: ['Shopify', 'Chatbot'],
  },
  {
    name: 'Shopify Bicycle Store',
    category: 'E-commerce',
    accent: 'emerald',
    body: 'A Shopify storefront for a bicycle retailer, built around a large product catalogue.',
    tags: ['Shopify', 'E-commerce'],
  },
  {
    name: 'Product Listing Vassalli',
    category: 'E-commerce',
    accent: 'emerald',
    body: 'Catalogue setup and bulk product listing for a Shopify store, run as a managed project from start to handover.',
    tags: ['Shopify', 'Project Management'],
  },
  {
    name: 'Wheels and Castors',
    category: 'WordPress',
    accent: 'amber',
    body: 'A WordPress catalogue site for a wheels and castors supplier, with custom JavaScript on the product pages.',
    tags: ['WordPress', 'JavaScript'],
  },
  {
    name: 'Artisan Beauty Clinic',
    category: 'WordPress',
    accent: 'rose',
    body: 'Website and web design for a beauty clinic, built on WordPress so the team can keep it up to date themselves.',
    tags: ['WordPress', 'Web design'],
  },
  {
    name: 'Collect My Judgement',
    category: 'WordPress',
    accent: 'rose',
    body: 'A responsive landing page for a legal services brand, written to convert visitors into enquiries.',
    tags: ['WordPress', 'Responsive Web Design'],
  },
  {
    name: 'Arabian Range Website',
    category: 'WordPress',
    accent: 'amber',
    body: 'A responsive WordPress website built to read as well on a phone as it does on a desktop.',
    tags: ['WordPress', 'Responsive Web Design'],
  },
  {
    name: 'Sports Store',
    category: 'WordPress',
    accent: 'rose',
    body: 'A WordPress store front for a sports retailer, with web design work across the whole site.',
    tags: ['WordPress', 'Web design'],
  },
]

export const experience = [
  {
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
]

export const languages = [
  { name: 'English', level: 'Advanced', value: 85 },
  { name: 'Portuguese', level: 'High intermediate', value: 70 },
  { name: 'Spanish', level: 'High intermediate', value: 70 },
]

export const certifications = [
  { name: 'Test de inglés — Workana', year: '2026', detail: 'Score 76% · Completed' },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

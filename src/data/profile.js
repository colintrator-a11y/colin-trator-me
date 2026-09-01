// Language-independent structure only. Everything a translator would touch
// lives in src/i18n/<locale>.js and is keyed by the ids below.

export const profile = {
  name: 'Dawid Salwecki',
  // Where every "Hire me" button goes. Swap it for a mailto:, a WhatsApp link
  // or another platform and the buttons follow; leave it empty and they simply
  // do not render, rather than pointing nowhere.
  contactHref: 'https://www.workana.com/freelancer/19077338b5a3c8d89f6a37f74835f159',
}

export const navSections = ['about', 'services', 'skills', 'work', 'experience', 'contact']

export const serviceIds = ['web', 'mobile', 'ecommerce', 'automation']

export const skillGroups = [
  {
    id: 'frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Responsive Web Design', 'User Interface'],
  },
  {
    id: 'backend',
    items: ['Node.js', 'Python', 'Django', 'PHP', 'Laravel', 'REST API', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'mobile',
    items: ['React Native', 'Flutter', 'Android', 'iOS', 'Unity 3D'],
  },
  {
    id: 'ecommerce',
    items: ['Shopify', 'WooCommerce', 'WordPress', 'E-commerce', 'SaaS'],
  },
  {
    id: 'other',
    items: ['Chatbot / Rasa', 'Blockchain', 'Git', 'Linux'],
  },
]

// One entry per project. `media` lists files in src/assets/projects/ with their
// intrinsic size — the dimensions go on the <img> so the row does not jump as
// images load, and the first one's orientation decides the row's proportions.
// `accent` picks the colour band (see the palette in Projects.css) and the
// description lives in the locale files keyed by `id`.
export const projects = [
  {
    id: 'rasaHandoff',
    name: 'Human Handoff Demo Using Rasa',
    category: 'chatbot',
    accent: 'violet',
    media: [{ file: 'rasa-handoff.gif', width: 480, height: 810 }],
    tags: ['Python', 'Git', 'Chatbot', 'Docker', 'REST API'],
  },
  {
    id: 'arabianRange',
    name: 'Arabian Range Website',
    category: 'wordpress',
    accent: 'amber',
    media: [
      { file: 'arabian-hero.jpg', width: 1016, height: 464 },
      { file: 'arabian-pages.jpg', width: 155, height: 645 },
    ],
    tags: ['WordPress', 'Responsive Web Design', 'Web Development'],
  },
  {
    id: 'artisanBeauty',
    name: 'Artisan Beauty Clinic Website',
    category: 'wordpress',
    accent: 'rose',
    media: [
      { file: 'artisan-mockup.jpg', width: 1600, height: 1200 },
      { file: 'artisan-home.jpg', width: 1200, height: 820 },
      { file: 'artisan-about.jpg', width: 1200, height: 820 },
      { file: 'artisan-services.jpg', width: 1200, height: 820 },
      { file: 'artisan-pages.jpg', width: 1200, height: 820 },
      { file: 'artisan-events.jpg', width: 1200, height: 820 },
    ],
    tags: ['WordPress', 'Web design'],
  },
  {
    id: 'ayiko',
    name: 'Ayiko: Ecommerce Platform',
    category: 'mobileCommerce',
    accent: 'teal',
    media: [
      { file: 'ayiko-app.jpg', width: 1000, height: 1303 },
      { file: 'ayiko-home.jpg', width: 800, height: 870 },
      { file: 'ayiko-about.jpg', width: 800, height: 870 },
      { file: 'ayiko-dashboard.jpg', width: 800, height: 607 },
      { file: 'ayiko-contact.jpg', width: 800, height: 777 },
      { file: 'ayiko-login.jpg', width: 800, height: 493 },
    ],
    tags: ['Laravel', 'React Native', 'HTML', 'CSS'],
  },
  {
    id: 'collectMyJudgement',
    name: 'Collect My Judgement Landing Page',
    category: 'wordpress',
    accent: 'slate',
    media: [
      { file: 'cmj-laptop.jpg', width: 1400, height: 933 },
      { file: 'cmj-pages.jpg', width: 800, height: 533 },
      { file: 'cmj-desktop.jpg', width: 800, height: 533 },
      { file: 'cmj-analytics.jpg', width: 800, height: 533 },
    ],
    tags: ['WordPress', 'Responsive Web Design', 'Web Development'],
  },
  {
    id: 'enterpriseErp',
    name: 'EnterpriseERP',
    category: 'saas',
    accent: 'violet',
    media: [
      { file: 'erp-dashboard.jpg', width: 1400, height: 933 },
      { file: 'erp-finance.jpg', width: 800, height: 533 },
      { file: 'erp-sales.jpg', width: 800, height: 533 },
    ],
    tags: ['PHP', 'Laravel', 'AJAX', 'SaaS'],
  },
  {
    id: 'eMuvas',
    name: 'E-Muvas Delivery Service',
    category: 'mobile',
    accent: 'emerald',
    media: [
      { file: 'emuvas-customer.jpg', width: 1000, height: 750 },
      { file: 'emuvas-driver.jpg', width: 800, height: 600 },
      { file: 'emuvas-overview.jpg', width: 800, height: 600 },
    ],
    tags: ['React Native', 'Android', 'iOS', 'Node.js', 'MongoDB'],
  },
  {
    id: 'homeEnergy',
    name: 'Home Energy Shopify',
    category: 'ecommerce',
    accent: 'teal',
    media: [
      { file: 'biolite-home.jpg', width: 1400, height: 634 },
      { file: 'biolite-products.jpg', width: 800, height: 450 },
      { file: 'biolite-product.jpg', width: 800, height: 450 },
    ],
    tags: ['Shopify', 'AJAX', 'Chatbot'],
  },
  {
    id: 'hulkCharts',
    name: 'Live Streaming Charts DApp',
    category: 'blockchain',
    accent: 'violet',
    media: [
      { file: 'hulk-chart.jpg', width: 1400, height: 875 },
      { file: 'hulk-search.jpg', width: 800, height: 500 },
      { file: 'hulk-token.jpg', width: 800, height: 500 },
      { file: 'hulk-swap.jpg', width: 800, height: 500 },
      { file: 'hulk-sniper.jpg', width: 800, height: 500 },
      { file: 'hulk-trigger.jpg', width: 800, height: 500 },
    ],
    tags: ['Blockchain', 'BSC'],
  },
]

// Declared after `projects` so the headline count follows the list itself.
export const stats = [
  { id: 'years', value: '7+' },
  { id: 'projects', value: String(projects.length) },
  { id: 'languages', value: '3' },
  { id: 'since', value: '2019' },
]

export const spokenLanguages = [
  { id: 'english', value: 85 },
  { id: 'portuguese', value: 70 },
  { id: 'spanish', value: 70 },
]

export const certifications = [{ id: 'workanaEnglish', year: '2026' }]

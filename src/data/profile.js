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

export const stats = [
  { id: 'years', value: '7+' },
  { id: 'projects', value: '15' },
  { id: 'languages', value: '3' },
  { id: 'since', value: '2019' },
]

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

// Project names are the titles as published, so they stay in every locale;
// `accent` picks the card's colour band (see the palette in Projects.css).
export const projects = [
  { id: 'rasa', name: 'Human Handoff Demo Using Rasa', category: 'chatbot', accent: 'violet', tags: ['Python', 'Rasa', 'Git'] },
  { id: 'erp', name: 'Enterprise ERP SaaS', category: 'saas', accent: 'slate', tags: ['SaaS', 'PHP', 'MySQL'] },
  { id: 'ayiko', name: 'Ayiko: E-commerce Platform', category: 'mobileCommerce', accent: 'teal', tags: ['Laravel', 'React Native', 'REST API'] },
  { id: 'emuvas', name: 'E-Muvas Delivery Service', category: 'mobile', accent: 'teal', tags: ['React Native', 'Node.js'] },
  { id: 'ubicabs', name: 'Ubi Cabs', category: 'mobile', accent: 'amber', tags: ['Android', 'UX Design'] },
  { id: 'mmorpg', name: 'MMORPG Mobile Game', category: 'games', accent: 'violet', tags: ['Unity 3D', 'Android', 'iOS'] },
  { id: 'dapp', name: 'Live Streaming Charts DApp', category: 'blockchain', accent: 'slate', tags: ['Blockchain', 'BSC', 'JavaScript'] },
  { id: 'homeenergy', name: 'Home Energy Shopify', category: 'ecommerce', accent: 'emerald', tags: ['Shopify', 'Chatbot'] },
  { id: 'bicycle', name: 'Shopify Bicycle Store', category: 'ecommerce', accent: 'emerald', tags: ['Shopify', 'E-commerce'] },
  { id: 'vassalli', name: 'Product Listing Vassalli', category: 'ecommerce', accent: 'emerald', tags: ['Shopify', 'Project Management'] },
  { id: 'wheels', name: 'Wheels and Castors', category: 'wordpress', accent: 'amber', tags: ['WordPress', 'JavaScript'] },
  { id: 'beauty', name: 'Artisan Beauty Clinic', category: 'wordpress', accent: 'rose', tags: ['WordPress', 'Web design'] },
  { id: 'judgement', name: 'Collect My Judgement', category: 'wordpress', accent: 'rose', tags: ['WordPress', 'Responsive Web Design'] },
  { id: 'arabian', name: 'Arabian Range Website', category: 'wordpress', accent: 'amber', tags: ['WordPress', 'Responsive Web Design'] },
  { id: 'sports', name: 'Sports Store', category: 'wordpress', accent: 'rose', tags: ['WordPress', 'Web design'] },
]

export const spokenLanguages = [
  { id: 'english', value: 85 },
  { id: 'portuguese', value: 70 },
  { id: 'spanish', value: 70 },
]

export const certifications = [{ id: 'workanaEnglish', year: '2026' }]

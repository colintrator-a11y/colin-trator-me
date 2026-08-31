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

// One entry per project. `media` names a file in src/assets/projects/, `accent`
// picks the card's colour band (see the palette in Projects.css), and the
// description lives in the locale files keyed by `id`.
export const projects = [
  {
    id: 'rasaHandoff',
    name: 'Human Handoff Demo Using Rasa',
    category: 'chatbot',
    accent: 'violet',
    media: 'rasa-handoff.gif',
    tags: ['Python', 'Git', 'Chatbot', 'Docker', 'REST API'],
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

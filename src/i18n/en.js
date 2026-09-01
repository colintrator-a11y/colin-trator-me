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
      automation: 'Automation / Data',
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
      homeEnergy: [
        'Built a dynamic and user-friendly Shopify store for BioLite, showcasing eco-friendly energy products with seamless shopping and mobile optimization.',
      ],
      hulkCharts: [
        'A live streaming charts dApp for Binance Smart Chain (BSC) tokens, built around Hulk Token — in the same vein as PooCoin.',
        'The screens cover market search ranked by volume and liquidity, live token charts with trading history, swaps across PancakeSwap and ApeSwap, a token sniper driven by contract address and trigger amount, and per-token profile pages with transfers and holders.',
      ],
      mmorpg: [
        'A Unity 3D mobile MMORPG for Android and iOS, in the massively multiplayer base-building strategy genre: players raise an army, upgrade a castle and its economy, and fight real-time battles against other players.',
        'The build covers the whole live-game loop — troop training and barracks upgrades, a research tree for farming, stone, timber, gold and build speed, real-time siege combat with victory rewards, power and troops-killed leaderboards, hero and leader selection, seven-day login rewards, and an in-app purchase shop of chest packs, gem packs, memberships and subscriptions. The build shown runs with a Spanish-language interface.',
      ],
      vassalli: [
        'Created a clean and organized Shopify product listing for Vassalli, showcasing apparel with detailed descriptions, size options, and stylish visuals for an enhanced shopping experience.',
      ],
      madsen: [
        'Developed a sleek and responsive MADSEN Shopify store for a bicycle brand, featuring dynamic product displays and a smooth shopping experience.',
      ],
      richmond: [
        'Richmond offers rolling solutions, including wheels and castors, across Australia and New Zealand, supplying reliable, high-quality material handling and custom-engineered rolling products for a wide range of industries.',
        'The site is a WordPress and WooCommerce store, with the range organised into product categories from castors, wheels and tyres through to pallet jacks, conveyors, roll cages and gate hardware, alongside site-wide product search and a store finder.',
      ],
      aiArt: [
        'AI Art Generator is a revolutionary mobile app that enables users to create stunning artwork effortlessly with just a few taps. Powered by advanced artificial intelligence, this innovative app transforms your text prompts into breathtaking, high-quality visuals.',
        "Whether you're an artist, designer, or someone looking to explore their creative side, AI Art Generator provides a seamless platform to bring your ideas to life. Its intuitive interface allows you to generate unique and personalized artwork, offering endless creative possibilities. By leveraging cutting-edge AI technology, the app redefines the way we create and experience art, making it accessible to everyone, regardless of skill level.",
      ],
      musicPlayer: [
        'A feature-rich Android music player built for a client, with a modern interface and a smooth playback experience. This was the first phase of development for a popular music app.',
        'It covers a custom equalizer — five bands plus reverb, bass, virtualizer and loudness — along with custom playlist creation, advanced search, metadata editing, custom filters for organising a library, and easy deletion of unwanted audio files. The app is built for speed, usability and audio performance.',
      ],
      n8nChatbot: [
        'I built and launched a robust WhatsApp chatbot workflow for property management in 3 weeks, streamlining how support teams handle incoming requests and ticket creation.',
        'The system handles incoming messages, media attachments, and user verification by combining n8n automation with PostgreSQL persistence. It uses stateful conversation management to guide users smoothly through multi-step forms like ticket types, titles, and descriptions while keeping track of user sessions.',
        'Results: automated user verification, reduced ticket creation time from hours to minutes, round-the-clock customer support availability, and reliable data consistency across all user interactions.',
        'Tech stack: n8n, WhatsApp API, PostgreSQL, relational database architecture, event-driven workflows, state machine logic, and automated notification integrations.',
      ],
      currencyConverter: [
        'This Currency Converter mobile app is built using Flutter, delivering fast, accurate, and real-time currency conversion. I integrated a high-speed API to ensure reliable and up-to-date exchange rates.',
        'Key features and technologies: fast and accurate currency data via a high-performance API, GetX for state management and smooth app performance, Firebase Authentication for secure user access, GetStorage as a local database for user preferences and data, user data persistence through efficient state management, and a fully responsive design that looks great on all devices.',
        'The app provides a seamless user experience with modern architecture, high performance, and a clean UI across all screen sizes.',
      ],
      dineamic: [
        'A Shopify e-commerce site for Dineamic, a fresh-meal delivery brand. The store covers the menu and dietary options, delivery and NDIS ordering, with a postcode check at the top of every page so a visitor knows straight away whether they can be delivered to.',
        'Built to hold up the same on desktop, laptop, tablet and phone.',
      ],
      excelDashboard: [
        'This project involved developing a fully automated Excel Budget Planner Dashboard using Microsoft Excel Automation, advanced Excel formulas, Pivot Tables, Pivot Charts, Data Validation, Conditional Formatting, and interactive dashboards.',
        'I designed multiple worksheets for income tracking, expense management, savings, debt monitoring, net worth analysis, investment forecasting, and annual summaries. Dynamic charts, KPI cards, category breakdowns, and automated calculations provided real-time financial insights with minimal manual input.',
        'The workbook was optimized for accuracy, usability, and performance, enabling efficient personal finance management, budget analysis, financial reporting, and decision-making through a professional, user-friendly Excel dashboard and financial automation solution.',
      ],
      zohoStripe: [
        'Designed and implemented an automation workflow using Zapier to seamlessly integrate Stripe and Zoho CRM.',
        'The automation triggers as soon as a payment completes in Stripe, creates or updates a Contact in Zoho CRM from the Stripe customer data, configures workflow triggers in Zoho CRM to initiate actions like welcome emails or task assignments, and ensures no duplicate records are created by checking existing entries before creating new ones.',
        'This solution eliminated manual data entry, enabled real-time customer record updates, and ensured smooth synchronization between the payment platform and the CRM. It significantly improved operational efficiency and responsiveness.',
      ],
      keepNote: [
        'KeepNote is a fast, simple, and privacy-first note-taking app that stores all your data locally on your device. With no complicated setup or online account required, the app ensures your notes stay private.',
        'Key features: local storage with no cloud, a simple interface for quick note creation, a privacy-focused design, and full offline functionality. Built with Flutter and SQLite.',
      ],
      monstersClan: [
        "Monsters Clan's website showcases the game's core features, including NFT swapping and staking.",
        "It's a revolutionary NFT game where players control unique monsters, training and customizing them for epic battles. By integrating blockchain technology, the game ensures secure, transparent ownership of in-game assets, allowing players to truly own and trade their monsters.",
        "With strategic gameplay and engaging features, Monsters Clan offers an immersive, interactive experience where players can shape their monsters' abilities and compete for rewards in a dynamic, decentralized environment.",
      ],
      weatherParallax: [
        'A parallax website for a weather news provider, built from scratch.',
        'It started as an HTML and CSS build, was then made responsive for tablet and mobile, and was finally converted into a WordPress theme.',
      ],
      rabbitRoyale: [
        'Rabbit Royale is an innovative Telegram mini-app that offers users an exciting tap-to-earn game experience. Designed to keep players engaged, Rabbit Royale combines fun and rewards in a seamless, interactive platform.',
        'As users tap their way through the game, they have the opportunity to earn rewards and watch their profits grow daily. With its easy-to-use interface and engaging gameplay, Rabbit Royale provides a thrilling way to earn while enjoying a dynamic, rewarding experience.',
      ],
      ratehub: [
        'Ratehub is a Canadian financial product comparison website, covering mortgages, credit cards, banking, investing and insurance.',
        'My work on it: installed the SSL certificate, set up Cloudflare, implemented the payment gateway, redesigned the Mortgages and Credit Cards pages, made the site mobile-responsive, and implemented multi-language functionality.',
      ],
      travelDaily: [
        'Travel Daily Media is a travel trade news publication, organised by markets, sectors and features, with jobs, events and advertising alongside the news.',
        'I built the site from scratch, and its blog is the largest I have worked on: over 70,000 subscribers, with more than 100,000 emails going out daily through Interspire according to each subscriber\u2019s criteria. It carries a jobs section as well.',
        'Also on this site: HubSpot integration, customisation of the Publisher theme, SEO work to the client\u2019s requirements, and the Yoast plugin.',
      ],
      tapio: [
        'Introducing Tapio, the best tap-to-earn game available on Telegram. With every tap, users dive into a world of instant rewards, where each action brings new opportunities.',
        'As players engage in the game, they not only earn rewards but also gather exclusive perks, unlocking more benefits as they rise up the rankings. Tapio makes earning fun, interactive, and rewarding, providing a dynamic experience that keeps users coming back for more.',
      ],
      familj: [
        'A pregnancy health app built as a client project, designed to support pregnant women throughout their pregnancy journey. It brings guidance, health tips and community interaction together in one easy-to-use platform.',
        'Features: weekly pregnancy suggestions and health tips, a checklist of what needs to be done at each stage, a community system with blog comments for discussion and support, a web application for easy access, and mobile apps on iOS and Android.',
        'Tech stack: Node.js on the back end, React.js on the web front end, and Flutter for the iOS and Android apps. The result is a scalable, user-friendly solution that holds up across every device while helping expectant mothers stay informed and connected.',
      ],
    },
      links: { demo: 'Watch the demo', store: 'View on Google Play', site: 'Visit the site', appStore: 'View on the App Store' },
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

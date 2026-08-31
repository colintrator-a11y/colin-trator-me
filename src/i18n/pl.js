export default {
  code: 'pl',
  htmlLang: 'pl',
  name: 'Polski',
  short: 'PL',

  a11y: {
    skip: 'Przejdź do treści',
    sections: 'Sekcje',
    footer: 'Stopka',
    toLight: 'Przełącz na jasny motyw',
    toDark: 'Przełącz na ciemny motyw',
    backToTop: 'Wróć na górę',
    language: 'Język',
    filter: 'Filtruj projekty według kategorii',
  },

  nav: {
    about: 'O mnie',
    services: 'Usługi',
    skills: 'Technologie',
    work: 'Projekty',
    experience: 'Doświadczenie',
    contact: 'Kontakt',
    cta: 'Zatrudnij mnie',
  },

  hero: {
    status: 'Dostępny dla nowych projektów',
    title: 'Full Stack Developer i programista mobilny',
    tagline:
      'Aplikacje webowe, aplikacje mobilne i sklepy internetowe — od pierwszego wymagania po wdrożenie.',
    note: 'Pracuję zdalnie z klientami z Ameryki Łacińskiej, Brazylii i Stanów Zjednoczonych',
    cta: 'Zobacz projekty',
    facts: [
      { label: 'Lokalizacja', value: 'Polska' },
      { label: 'Stawka', value: 'USD 25 / godz.' },
      { label: 'Języki', value: 'angielski · portugalski · hiszpański' },
      { label: 'Tryb pracy', value: 'Zdalnie, na całym świecie' },
    ],
    caption: 'Programista freelancer',
    captionValue: 'Od 2019',
    stats: {
      years: 'Lata tworzenia oprogramowania',
      projects: 'Wyróżnione projekty',
      languages: 'Języki obsługi klienta',
      since: 'Freelancer od',
    },
  },

  about: {
    eyebrow: 'O mnie',
    heading: 'Siedem lat wdrożeń, od początku do końca',
    paragraphs: [
      'Jestem programistą full stack i mobilnym z ponad siedmioletnim doświadczeniem, pracuję zdalnie z klientami z Ameryki Łacińskiej, Brazylii i Stanów Zjednoczonych.',
      'Tworzę aplikacje webowe w React, Next.js, Node.js i TypeScript, a backendy i automatyzacje w Pythonie i Django, na PostgreSQL, MySQL i MongoDB. Buduję też aplikacje na Androida, narzędzia desktopowe, strony na WordPressie i sklepy na Shopify.',
      'Prowadzę projekt od wymagań aż po wdrożenie i pracuję w wyraźnych etapach, żeby postępy były widoczne na bieżąco, a nie dopiero przy jednej dostawie na końcu. Pytam, zanim zacznę, i sygnalizuję ryzyka wcześnie, nie na końcu.',
      'Z klientami rozmawiam bezpośrednio po hiszpańsku, portugalsku i angielsku — większość wraca z drugim projektem.',
    ],
    languagesTitle: 'Języki',
    certTitle: 'Certyfikat',
    languages: {
      english: { name: 'Angielski', level: 'Zaawansowany' },
      portuguese: { name: 'Portugalski', level: 'Średnio zaawansowany wyższy' },
      spanish: { name: 'Hiszpański', level: 'Średnio zaawansowany wyższy' },
    },
    certifications: {
      workanaEnglish: { name: 'Test z angielskiego — Workana', detail: 'Wynik 76% · Ukończony' },
    },
  },

  services: {
    eyebrow: 'Usługi',
    heading: 'Co buduję',
    note: 'Wymagania → budowa → wdrożenie, w wyraźnych etapach',
    items: {
      web: {
        title: 'Aplikacje webowe',
        body: 'Front end w React i Next.js na backendzie w Node.js, Pythonie lub PHP, z API REST i bazą danych dobraną do projektu.',
      },
      mobile: {
        title: 'Aplikacje mobilne',
        body: 'Aplikacje w React Native i Flutter na Androida i iOS, natywny Android oraz gry w Unity 3D wydane w obu sklepach.',
      },
      ecommerce: {
        title: 'E-commerce',
        body: 'Sklepy na Shopify i WooCommerce, katalogi produktów, praca nad szablonem i integracje, które utrzymują sklep w ruchu.',
      },
      automation: {
        title: 'Chatboty i automatyzacja',
        body: 'Asystenci w Rasa z przekazaniem rozmowy do konsultanta oraz automatyzacje w Pythonie, które zdejmują z zespołu powtarzalną pracę.',
      },
    },
  },

  skills: {
    eyebrow: 'Technologie',
    heading: 'Stack, w którym pracuję',
    note: (count, areas) => `${count} technologii w ${areas} obszarach`,
    groups: {
      frontend: 'Front end',
      backend: 'Backend i dane',
      mobile: 'Mobile i gry',
      ecommerce: 'E-commerce i CMS',
      other: 'Pozostałe',
    },
  },

  projects: {
    eyebrow: 'Projekty',
    heading: 'Wybrane projekty',
    // Polish counts in three forms: 1, 2-4 (but not the teens), and the rest.
    note: (count) => {
      if (count === 1) return 'Jeden projekt'
      const unit = count % 10
      const teen = count % 100
      const word = unit >= 2 && unit <= 4 && (teen < 12 || teen > 14) ? 'projekty' : 'projektów'
      return `${count} ${word}`
    },
    all: 'Wszystkie',
    categories: {
      chatbot: 'Chatbot / AI',
      saas: 'SaaS dla firm',
      mobileCommerce: 'Mobile / E-commerce',
      mobile: 'Mobile',
      games: 'Mobile / Gry',
      blockchain: 'Blockchain',
      ecommerce: 'E-commerce',
      wordpress: 'WordPress',
    },
    items: {
      rasaHandoff: [
        'To przykładowy chatbot w Rasa pokazujący, jak zbudować asystenta AI dla helpdesku IT. Zawiera integrację z API Service Now, która pozwala zgłaszać incydenty i sprawdzać status zgłoszeń. Poniżej widać przykładową rozmowę: bot pomaga użytkownikowi założyć zgłoszenie i sprawdzić, na jakim jest etapie.',
        'Tego chatbota można potraktować jako punkt wyjścia do budowy asystentów obsługi klienta albo jako szablon zbierania od użytkownika wszystkich potrzebnych informacji przed wywołaniem API. Bot ma prostą umiejętność przekazywania rozmowy do innego bota lub do człowieka.',
        'Dzięki tej demonstracji rozmowę można przekazać z jednego bota do drugiego albo skierować do konsultanta.',
      ],
      arabianRange: [
        'Projekt i wykonanie strony Arabian Ranges — witryny na WordPressie dla firmy prowadzącej komercyjne i sportowe strzelnice, obejmującej produkty, usługi, programy szkoleniowe, galerię i partnerów.',
        'Strona jest w pełni responsywna i zoptymalizowana, a ja nadal się nią opiekuję. Powstała przy skromnym budżecie i krótkim terminie, a klient wystawił pięciogwiazdkową opinię.',
      ],
    },
    mediaAlt: (name) => `Podgląd projektu ${name}`,
  },

  experience: {
    eyebrow: 'Doświadczenie',
    heading: 'Przebieg pracy',
    role: 'Full Stack Developer i programista mobilny',
    company: 'Praca zdalna — freelance',
    period: 'Sierpień 2019 — obecnie',
    points: [
      'Zdalna współpraca z klientami z Ameryki Łacińskiej, Brazylii i Stanów Zjednoczonych.',
      'Tworzenie aplikacji webowych w React, Next.js, Node.js i TypeScript oraz backendów w Pythonie, Django, PHP i Laravelu.',
      'Wydawanie aplikacji na Androida i iOS w React Native, Flutterze i Unity 3D.',
      'Realizacja stron na WordPressie i sklepów na Shopify, od projektu po start.',
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    heading: 'Masz projekt na oku?',
    body: 'Napisz, czego potrzebujesz, a wrócę z pytaniami, planem i realnym terminem — zanim powstanie choć linijka kodu.',
    cta: 'Zatrudnij mnie na Workanie',
    facts: [
      { label: 'Lokalizacja', value: 'Polska' },
      { label: 'Pracuję z', value: 'Ameryka Łacińska · Brazylia · Stany Zjednoczone' },
      { label: 'Stawka', value: 'USD 25 / godz.' },
      { label: 'Języki', value: 'angielski · portugalski · hiszpański' },
    ],
  },

  footer: {
    role: 'Full Stack Developer i programista mobilny · Polska',
  },
}

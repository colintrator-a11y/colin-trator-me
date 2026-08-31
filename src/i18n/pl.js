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
    note: (count) => `${count} projektów · web, mobile, e-commerce i AI`,
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
      rasa: 'Asystent w Rasa, który przekazuje trwającą rozmowę od bota do konsultanta, gdy dochodzi do granicy tego, na co powinien odpowiadać sam.',
      erp: 'Prace nad wielofirmowym systemem ERP dostarczanym jako produkt SaaS — backend w PHP i moduły operacyjne wokół niego.',
      ayiko: 'Platforma e-commerce z backendem w Laravelu i aplikacją zakupową w React Native na Androida i iOS.',
      emuvas: 'Aplikacja do obsługi dostaw w React Native na backendzie w Node.js, od złożenia zamówienia po śledzenie kuriera.',
      ubicabs: 'Aplikacja przewozowa na Androida, od projektu doświadczeń użytkownika po wydaną wersję.',
      mmorpg: 'MMORPG w Unity 3D wydany na Androida i iOS — rozgrywka, build klienta i publikacja w sklepach.',
      dapp: 'Zdecentralizowana aplikacja z wykresami tokenów na żywo w sieci Binance Smart Chain.',
      homeenergy: 'Sklep na Shopify dla sprzedawcy energii domowej, z chatbotem obsługującym pierwszą linię pytań klientów.',
      bicycle: 'Sklep na Shopify dla sprzedawcy rowerów, zbudowany wokół obszernego katalogu produktów.',
      vassalli: 'Konfiguracja katalogu i masowe dodawanie produktów w sklepie Shopify, prowadzone jako projekt od startu do przekazania.',
      wheels: 'Katalogowa strona na WordPressie dla dostawcy kół i kółek samonastawnych, z własnym JavaScriptem na kartach produktów.',
      beauty: 'Strona i projekt graficzny dla kliniki kosmetycznej, na WordPressie, żeby zespół sam utrzymywał treści.',
      judgement: 'Responsywny landing page dla marki usług prawnych, napisany tak, by zamieniać odwiedzających w zapytania.',
      arabian: 'Responsywna strona na WordPressie, zbudowana tak, by czytało się ją na telefonie równie dobrze jak na komputerze.',
      sports: 'Sklep na WordPressie dla sprzedawcy artykułów sportowych, z projektem graficznym całej witryny.',
    },
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

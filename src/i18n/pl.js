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
      automation: 'Automatyzacja / Dane',
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
      artisanBeauty: [
        'Zaprojektowałem i zbudowałem kompletną stronę na WordPressie dla Artisan Beauty Clinic, kliniki urody i pielęgnacji skóry w Scarborough. Projekt objął cały układ strony, podstrony usług, strukturę cennika, ścieżkę rezerwacji, responsywność na telefonach i czysty, nowoczesny interfejs dopasowany do marki.',
        'Celem była profesjonalna i przejrzysta w nawigacji witryna, która jasno przedstawia usługi i buduje zaufanie lokalnych klientów.',
      ],
      ayiko: [
        'Ayiko to wielosprzedawcowa platforma e-commerce, która łączy sprzedawców, klientów, kurierów i agentów w jednym systemie. Chodziło o marketplace, w którym każdy sprzedawca prowadzi własną działalność, a klient dostaje wygodne zakupy i sprawną dostawę.',
        'Klienci przeglądają produkty wielu sprzedawców i bez trudu składają zamówienia. Po drugiej stronie sprzedawcy zarządzają własnymi ofertami, obsługują zamówienia i przydzielają dostawy swoim kurierom. Kurierzy dostają potrzebne dane i realizują ostatni odcinek trasy, dzięki czemu proces jest szybki i pozostaje pod kontrolą sprzedawcy.',
        'Platforma ma też model agencyjny wspierający rozwój. Agenci promują ją własnymi kodami i za każdego nowego klienta, który zarejestruje się z ich polecenia, dostają prowizję. Biznes rośnie więc z polecenia, bez dużych wydatków na marketing.',
        'W całości Ayiko powstało jako kompletny system, który łączy operacje, dostawy i rozwój w jednym miejscu.',
      ],
      collectMyJudgement: [
        'Collect My Judgement specjalizuje się w windykacji długów i egzekucji wyroków, działa na terenie całego kraju i ma zespół doświadczonych prawników, negocjatorów i śledczych. Z ponad 30-letnim dorobkiem prowadzi nawet najbardziej złożone sprawy, zapewniając klientom sprawne i skuteczne odzyskanie należności.',
        'Zaprojektowałem dla nich mocny landing page, który pokazuje to doświadczenie i wiarygodność firmy w branży.',
      ],
      enterpriseErp: [
        'EnterpriseERP to chmurowa platforma do zarządzania zasobami przedsiębiorstwa (ERP), która centralizuje i automatyzuje kluczowe procesy firmy w jednym zintegrowanym systemie. Daje bieżący wgląd w wyniki finansowe, sprzedaż, stany magazynowe, zakupy, relacje z klientami i zarządzanie zespołem, co pozwala podejmować decyzje na podstawie danych i pracować wydajniej.',
        'Platformę tworzy kilka powiązanych modułów: Finanse, Sprzedaż, Zakupy, Magazyn, Produkcja, CRM, Kadry, Projekty, Środki trwałe, Raporty i Zarządzanie dokumentami. Wszystkie korzystają ze wspólnej bazy danych, dzięki czemu dane pozostają spójne, a tej samej informacji nie trzeba wprowadzać w każdym dziale osobno.',
        'Moduł finansowy obsługuje zobowiązania, należności, księgę główną, budżetowanie, podatki, bankowość i sprawozdawczość finansową.',
      ],
      eMuvas: [
        'E-Muvas to aplikacja kurierska, w której przesyłkę można zamówić na dwa sposoby: od razu albo z wyprzedzeniem, na wybrany termin. W obu trybach dostępne są aktualizacje na bieżąco i śledzenie na żywo.',
        'Po zakończonej dostawie użytkownik może też ocenić kuriera i zostawić opinię, co dba o przejrzystość i jakość usługi. Płatność przechodzi przez bezpieczną bramkę i wymaga karty powiązanej z kontem.',
      ],
      homeEnergy: [
        'Zbudowałem dynamiczny i wygodny w obsłudze sklep na Shopify dla marki BioLite, prezentujący produkty ekologicznej energii, z płynnym procesem zakupu i optymalizacją pod telefony.',
      ],
      hulkCharts: [
        'dApp z wykresami na żywo dla tokenów Binance Smart Chain (BSC), zbudowany wokół Hulk Token — w duchu PooCoin.',
        'Ekrany obejmują wyszukiwarkę rynku sortowaną według wolumenu i płynności, wykresy tokenów na żywo wraz z historią transakcji, swapy na PancakeSwap i ApeSwap, snipera tokenów uruchamianego adresem kontraktu i kwotą progową oraz strony profilu tokena z transferami i listą posiadaczy.',
      ],
      mmorpg: [
        'Mobilny MMORPG w Unity 3D na Androida i iOS, w gatunku strategii z budową bazy dla wielu graczy: każdy rozwija własną armię, rozbudowuje zamek i jego gospodarkę oraz toczy walki z innymi graczami w czasie rzeczywistym.',
        'Gra obejmuje pełny cykl żywego tytułu — szkolenie wojsk i rozbudowę koszar, drzewko badań dla farmy, kamienia, drewna, złota i szybkości budowy, oblężenia w czasie rzeczywistym z nagrodami za zwycięstwo, rankingi siły i pokonanych oddziałów, wybór bohatera i dowódcy, siedmiodniowe nagrody za logowanie oraz sklep z zakupami w aplikacji: pakiety skrzyń, klejnotów, członkostwa i subskrypcje. Pokazana wersja działa z interfejsem w języku hiszpańskim.',
      ],
      vassalli: [
        'Przygotowałem przejrzysty i uporządkowany katalog produktów na Shopify dla marki Vassalli — odzież ze szczegółowymi opisami, wyborem rozmiaru i zadbanymi zdjęciami, dla wygodniejszych zakupów.',
      ],
      madsen: [
        'Zbudowałem elegancki i responsywny sklep na Shopify dla marki rowerowej MADSEN, z dynamiczną prezentacją produktów i płynnym procesem zakupu.',
      ],
      richmond: [
        'Richmond dostarcza rozwiązania jezdne — w tym koła i kółka samonastawne — w Australii i Nowej Zelandii, oferując niezawodne produkty wysokiej jakości do transportu wewnętrznego oraz konstrukcje jezdne projektowane na zamówienie dla bardzo różnych branż.',
        'Witryna to sklep na WordPressie i WooCommerce, z asortymentem podzielonym na kategorie — od kółek, kół i opon po wózki paletowe, przenośniki, wózki klatkowe i okucia do bram — wraz z wyszukiwarką produktów w obrębie całego serwisu i wyszukiwarką sklepów.',
      ],
      aiArt: [
        'AI Art Generator to aplikacja mobilna, w której efektowną grafikę tworzy się bez wysiłku, kilkoma dotknięciami. Napędza ją zaawansowana sztuczna inteligencja, która zamienia opis tekstowy w dopracowane obrazy wysokiej jakości.',
        'Niezależnie od tego, czy jesteś artystą, projektantem, czy po prostu chcesz sprawdzić swoją kreatywną stronę, AI Art Generator daje wygodną przestrzeń, by przenieść pomysł w obraz. Intuicyjny interfejs pozwala tworzyć unikatowe, spersonalizowane prace, a możliwości praktycznie się nie kończą. Dzięki najnowszej technologii AI aplikacja zmienia sposób, w jaki tworzymy i odbieramy sztukę, i otwiera ją na każdego, bez względu na poziom umiejętności.',
      ],
      musicPlayer: [
        'Rozbudowany odtwarzacz muzyki na Androida, zbudowany dla klienta — nowoczesny interfejs i płynne odtwarzanie. To pierwszy etap prac nad popularną aplikacją muzyczną.',
        'Obejmuje własny korektor dźwięku — pięć pasm oraz pogłos, basy, wirtualizator i wyrównanie głośności — a do tego tworzenie playlist, zaawansowane wyszukiwanie, edycję metadanych, własne filtry porządkujące bibliotekę i szybkie usuwanie zbędnych plików audio. Aplikacja jest robiona pod szybkość, wygodę obsługi i jakość dźwięku.',
      ],
      n8nChatbot: [
        'W 3 tygodnie zbudowałem i uruchomiłem solidny przepływ chatbota na WhatsAppie dla zarządcy nieruchomości, upraszczając zespołom wsparcia przyjmowanie zgłoszeń i zakładanie ticketów.',
        'System obsługuje przychodzące wiadomości, załączniki i weryfikację użytkowników, łącząc automatyzację w n8n z trwałym zapisem w PostgreSQL. Rozmowa prowadzona jest ze stanem, więc użytkownik płynnie przechodzi przez wieloetapowe formularze — rodzaj zgłoszenia, tytuł, opis — a sesja przez cały czas pozostaje pod kontrolą.',
        'Efekty: zautomatyzowana weryfikacja użytkowników, czas założenia zgłoszenia skrócony z godzin do minut, wsparcie dostępne całą dobę i spójność danych we wszystkich interakcjach.',
        'Stack: n8n, WhatsApp API, PostgreSQL, architektura relacyjnej bazy danych, przepływy sterowane zdarzeniami, logika maszyny stanów i zautomatyzowane integracje powiadomień.',
      ],
      currencyConverter: [
        'Ten mobilny przelicznik walut powstał we Flutterze i przelicza szybko, dokładnie i w czasie rzeczywistym. Podpiąłem szybkie API, żeby kursy były wiarygodne i zawsze aktualne.',
        'Najważniejsze funkcje i technologie: szybkie i dokładne dane walutowe z wydajnego API, GetX do zarządzania stanem i płynności aplikacji, Firebase Authentication dla bezpiecznego logowania, GetStorage jako lokalna baza na ustawienia i dane użytkownika, trwałe przechowywanie danych dzięki sprawnemu zarządzaniu stanem oraz w pełni responsywny wygląd, który dobrze wypada na każdym urządzeniu.',
        'Aplikacja daje płynne działanie, nowoczesną architekturę, wysoką wydajność i czysty interfejs na ekranach każdej wielkości.',
      ],
      dineamic: [
        'Sklep na Shopify dla marki Dineamic, która dowozi świeże posiłki. Witryna obejmuje menu i opcje dietetyczne, dostawę oraz zamówienia w ramach programu NDIS, a na górze każdej strony sprawdza kod pocztowy, żeby odwiedzający od razu wiedział, czy dostawa do niego dojedzie.',
        'Zbudowany tak, by działał tak samo dobrze na komputerze, laptopie, tablecie i telefonie.',
      ],
      excelDashboard: [
        'Projekt polegał na zbudowaniu w pełni zautomatyzowanego arkusza budżetowego w Excelu — z automatyzacją Microsoft Excel, zaawansowanymi formułami, tabelami i wykresami przestawnymi, walidacją danych, formatowaniem warunkowym i interaktywnymi pulpitami.',
        'Zaprojektowałem kilka arkuszy: śledzenie przychodów, kontrolę wydatków, oszczędności, monitoring zadłużenia, analizę majątku, prognozę inwestycji i podsumowania roczne. Dynamiczne wykresy, kafelki wskaźników, podziały na kategorie i automatyczne przeliczenia dają bieżący obraz finansów przy minimalnym wprowadzaniu danych ręcznie.',
        'Skoroszyt zoptymalizowałem pod dokładność, wygodę pracy i wydajność, tak aby prowadzenie domowego budżetu, analiza wydatków, raportowanie i podejmowanie decyzji odbywały się w jednym profesjonalnym, przyjaznym pulpicie Excela.',
      ],
      zohoStripe: [
        'Zaprojektowałem i wdrożyłem przepływ automatyzacji w Zapierze, który bezproblemowo łączy Stripe z Zoho CRM.',
        'Automatyzacja uruchamia się w chwili zakończenia płatności w Stripe, tworzy lub aktualizuje kontakt w Zoho CRM na podstawie danych klienta ze Stripe, konfiguruje wyzwalacze w Zoho CRM dla akcji takich jak e-maile powitalne czy przydzielanie zadań i pilnuje, by nie powstawały duplikaty — sprawdza istniejące wpisy, zanim utworzy nowy.',
        'Rozwiązanie wyeliminowało ręczne wprowadzanie danych, pozwoliło aktualizować kartoteki klientów na bieżąco i zapewniło spójność między platformą płatności a CRM-em. Wyraźnie poprawiło to sprawność i czas reakcji zespołu.',
      ],
      keepNote: [
        'KeepNote to szybka i prosta aplikacja do notatek, w której prywatność jest na pierwszym miejscu — wszystkie dane zostają lokalnie na urządzeniu. Bez skomplikowanej konfiguracji i bez konta online notatki pozostają prywatne.',
        'Najważniejsze funkcje: zapis lokalny, bez chmury, prosty interfejs do szybkiego tworzenia notatek, projekt nastawiony na prywatność i pełne działanie offline. Zbudowana we Flutterze i SQLite.',
      ],
      monstersClan: [
        'Witryna Monsters Clan prezentuje najważniejsze mechaniki gry, w tym wymianę NFT i staking.',
        'To gra NFT, w której gracz kieruje unikatowymi potworami, trenuje je i dostosowuje do epickich starć. Dzięki technologii blockchain własność przedmiotów w grze jest bezpieczna i przejrzysta, a gracze naprawdę posiadają swoje potwory i mogą nimi handlować.',
        'Strategiczna rozgrywka i wciągające mechaniki składają się na doświadczenie, w którym gracz kształtuje zdolności swoich potworów i rywalizuje o nagrody w dynamicznym, zdecentralizowanym środowisku.',
      ],
      weatherParallax: [
        'Strona z efektem parallax dla dostawcy informacji pogodowych, zbudowana od zera.',
        'Powstała najpierw jako wersja w HTML i CSS, potem dostała responsywność na tablety i telefony, a na końcu została przerobiona na motyw WordPressa.',
      ],
      rabbitRoyale: [
        'Rabbit Royale to mini-aplikacja na Telegramie z rozgrywką tap-to-earn. Zaprojektowana tak, by zatrzymać gracza na dłużej, łączy zabawę z nagrodami w płynnej, interaktywnej platformie.',
        'W miarę stukania w ekran i postępów w grze gracz zbiera nagrody i z dnia na dzień widzi rosnący zysk. Prosty interfejs i wciągająca rozgrywka sprawiają, że zarabianie jest tu częścią zabawy.',
      ],
      ratehub: [
        'Ratehub to kanadyjski serwis porównujący produkty finansowe — kredyty hipoteczne, karty kredytowe, konta, inwestycje i ubezpieczenia.',
        'Moja praca przy nim: instalacja certyfikatu SSL, konfiguracja Cloudflare, wdrożenie bramki płatniczej, przeprojektowanie stron kredytów hipotecznych i kart kredytowych, dostosowanie serwisu do telefonów oraz wdrożenie obsługi wielu języków.',
      ],
    },
      links: { demo: 'Zobacz demo', store: 'Zobacz w Google Play', site: 'Zobacz stronę' },
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

# Dawid Salwecki — Portfolio

A single-page portfolio: everything a client needs to judge the work is on one
screen-scroll — who you are, what you build, the stack, all 15 projects, work
history, languages and how to reach you.

Built with Vite + React 18, in four languages, with no UI framework and no
runtime dependencies beyond React.

## Run it

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # production build into dist/
npm run preview        # serve the built site on :4173
npm run check:locales  # verify every locale has every string
```

## Languages

The site ships in **English, Portuguese, Spanish and Polish**, switchable from
the button group in the header. On a first visit the language is picked from the
browser's preferences (matching on the primary subtag, so `pt-BR` and `pt-PT`
both land on Portuguese) and falls back to English; after that the visitor's
choice is remembered in `localStorage`. Switching also updates `<html lang>`.

Each locale is one file in [`src/i18n/`](src/i18n/) with an identical shape.
`npm run check:locales` fails if a locale is missing a key, has one the others
don't, or is missing a string for an id defined in `src/data/profile.js` — run it
after any translation edit, because a missing key would quietly render as
`undefined` rather than throwing.

To add a language: copy `src/i18n/en.js`, translate the values, and add it to
`localeList` in [`src/i18n/index.js`](src/i18n/index.js).

## Editing the content

Content is split in two on purpose:

- [`src/data/profile.js`](src/data/profile.js) — everything language independent:
  project ids, tags, card accents, skill lists, the language-bar percentages.
  Technology names are proper nouns and live here, not in the locales.
- [`src/i18n/<locale>.js`](src/i18n/) — every string a translator would touch,
  keyed by the ids above.

Project cards take an `accent` (`violet`, `teal`, `emerald`, `amber`, `rose`,
`slate`) which colours the band at the top of the card and its category label.

## Contact channel

The page deliberately carries no phone number or email. The contact section
shows the invitation and the facts (location, region, rate, languages), and the
call-to-action button only appears once `profile.contactHref` in
[`src/data/profile.js`](src/data/profile.js) is set — a mailto:, a WhatsApp link,
a Workana profile, whatever you want clients to use. Until then there is no way
for a visitor to start a conversation from the site, so this is worth filling in
before the site goes anywhere public.

## The photo

The portrait is [`public/avatar.jpg`](public/avatar.jpg) — a plain file in
`public/`, not a bundled asset, so it can be replaced without touching the code.
The frame is 4:5; the current file is 900×1125. If it is ever missing, the hero
falls back to a "DS" monogram rather than a broken image.

## Structure

```
index.html              meta tags, JSON-LD, fonts, pre-paint theme script
src/data/profile.js     language-independent structure
src/i18n/               en, pt, es, pl + locale detection and React context
src/styles/global.css   design tokens (light + dark) and shared primitives
src/components/         one component + one stylesheet per section
scripts/                locale consistency check
public/                 avatar, favicon, robots.txt, sitemap.xml
```

`src/styles/global.css` is imported before `App.jsx` in `main.jsx` so that
component stylesheets come after it in the bundle and can override the shared
primitives — a component rule and a `.btn` rule have equal specificity, so the
order is what decides.

## Before deploying

- Set `profile.contactHref` so the contact button appears.
- Replace `https://dawid-salwecki.vercel.app/` in `index.html` (canonical + Open
  Graph) and `public/sitemap.xml` with the real domain.

The build is fully static — `dist/` can go on Vercel, Netlify or any static host.

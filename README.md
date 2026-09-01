# Dawid Salwecki — Portfolio

A single-page portfolio: everything a client needs to judge the work is on one
screen-scroll — who you are, what you build, the stack, the projects, work
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

## Adding a project

1. Put the screenshots, GIFs or video stills in `src/assets/projects/`. Any size
   or aspect ratio: the lead image of a project is always shown whole and never
   upscaled past its own resolution. In a set of three or more, the images after
   the lead become uniform tiles anchored to the top of each — a set can mix a
   phone montage with a 6500px-tall page capture, and letting every one keep its
   own height leaves the row ragged. Put the image that has to be seen entire
   first. Vite hashes the files on build, so replacing an image cannot leave
   visitors on a cached old one.
2. Add an entry to `projects` in [`src/data/profile.js`](src/data/profile.js) —
   `id`, `name`, `category` (one of the keys in `projects.categories` in the
   locales), `accent` (`violet`, `teal`, `emerald`, `amber`, `rose`, `slate`,
   which colours the band at the top of the row), `tags`, and `media`: a list of
   `{ file, width, height }` from step 1. The intrinsic size goes on the `<img>`
   so the row does not jump as images load, and how many images there are picks
   the layout:

   | Images | Layout |
   |---|---|
   | 1 | Beside the text. A landscape screenshot takes the wider half of the row, a phone-shaped one the narrower. |
   | 2 | Beside the text, the two sharing one height — a hero shot next to a full-page strip. |
   | 3+ | Above the text at full width: the first image large and whole, the rest as top-anchored tiles three across beneath it. |
3. Add the description under `projects.items.<id>` in **all four** locale files,
   as an array of paragraphs.
4. Run `npm run check:locales`. It fails if a locale is missing the description
   or has a different number of paragraphs from the English one.

The headline "projects" count in the hero follows `projects.length`.

## Browsing the work

Two filters, which combine: category chips across the top, and a **skill**
dropdown listing every tag in use with its count. Every tag on a project row is
also a button — clicking one filters to that skill, clicking it again clears it.
Both filters are keyed by category id and by the tag text, neither of which is
translated, so switching language keeps the selection. "Clear filters" appears
whenever either is set.

Clicking any image opens it full size in a preview, with the project name and,
in a set, a counter and arrows. This is where the top-anchored tiles pay off: a
page capture cropped to a 365x250 tile in the row is shown whole here.

It zooms to 5x, in 25% steps, with the wheel, the buttons, `+` / `-`, or a
double-click. Zoomed, the image can be dragged, and panning is bounded so it
cannot be pushed out of view. `0` or the percentage button resets it; changing
image resets it too. Escape closes, the arrow keys move through the set, and
the page behind is held still.

Clicking anywhere that is not the image or a control closes the preview - the
dimmed surround, the space beside a portrait image, the caption bar. A click
that ends a pan does not count.

Large GIFs are worth optimising before they go in.
[`scripts/optimize-gif.py`](scripts/optimize-gif.py) does it — the Rasa demo went
from 4.0 MB to 2.2 MB at 480px wide and every second frame, with the running time
unchanged:

```bash
python3 scripts/optimize-gif.py demo.gif src/assets/projects/demo.gif
```

It needs Pillow and a `gifsicle` binary (`GIFSICLE=/path/to/gifsicle` if it is
not on PATH). The order it uses matters: letting gifsicle do the resize itself
dithers flat backgrounds into visible yellow-green noise, and giving each frame
its own palette defeats gifsicle's frame differencing and makes the file bigger.

Screenshots are worth converting to JPEG and capping at around 800px wide for
tiles, 1000-1600px for a lead — Ayiko's six page captures went from 1.7 MB of PNG
to 0.5 MB that way. A full-page capture only ever shows its top as a tile, so
crop it there rather than carrying thousands of pixels nobody downloads for a
reason.

## Contact channel

The page deliberately carries no phone number or email. The contact section
shows the invitation and the facts (location, region, rate, languages), and
every **Hire me** button — in the header, the hero and the contact panel — opens
`profile.contactHref` from [`src/data/profile.js`](src/data/profile.js) in a new
tab. It currently points at the Workana profile; swap it for a mailto:, a
WhatsApp link or another platform and all three buttons follow. Leave it empty
and they render nothing rather than pointing nowhere.

All three go through [`src/components/HireButton.jsx`](src/components/HireButton.jsx),
so the destination, the new tab and the empty-link guard are decided in one
place.

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

- Replace `https://dawid-salwecki.vercel.app/` in `index.html` (canonical + Open
  Graph) and `public/sitemap.xml` with the real domain.

The build is fully static — `dist/` can go on Vercel, Netlify or any static host.

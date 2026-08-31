# Dawid Salwecki — Portfolio

A single-page portfolio: everything a client needs to judge the work is on one
screen-scroll — who you are, what you build, the stack, all 15 projects, work
history, languages and how to reach you.

Built with Vite + React 18. No UI framework, no runtime dependencies beyond React.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built site on :4173
```

## Add your photo

Save your portrait as **`public/avatar.jpg`**. A portrait crop (roughly 4:5,
around 800×1000 px) works best — the frame is 4:5 and focuses slightly above
centre. Until the file exists the hero shows a "DS" monogram instead of a
broken image, so the site never looks broken.

## Editing the content

All copy lives in [`src/data/profile.js`](src/data/profile.js) — contact details,
about paragraphs, services, skill groups, projects, work history, languages and
certifications. Components only render it, so text changes never mean touching
JSX.

Project cards take an `accent` (`violet`, `teal`, `emerald`, `amber`, `rose`,
`slate`) which colours the band at the top of the card and its category label.

## Structure

```
index.html              meta tags, JSON-LD, fonts, pre-paint theme script
src/data/profile.js     all content
src/styles/global.css   design tokens (light + dark) and shared primitives
src/components/         one component + one stylesheet per section
public/                 favicon, robots.txt, sitemap.xml, avatar.jpg
```

## Before deploying

- Replace `https://dawid-salwecki.vercel.app/` in `index.html` (canonical + Open
  Graph) and `public/sitemap.xml` with the real domain.
- Drop in `public/avatar.jpg`.

The build is fully static — `dist/` can go on Vercel, Netlify or any static host.

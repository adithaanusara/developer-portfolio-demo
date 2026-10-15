# Developer Portfolio — Demo

A showcase portfolio for a **fictional** developer, "Alex Morgan". It demonstrates the kind of interactive portfolio site that can be built for clients. Every name, company, project, credential and contact detail is sample content:

- `hello@example.com` uses a reserved domain, and `+44 20 7946 0958` is in an Ofcom range reserved for drama, so neither reaches a real person.
- The contact form is in **demo mode**. It plays a success animation and sends nothing.
- The contribution graph shows generated data and reads no real GitHub account.
- Project screenshots, certificates, avatar, favicon and social image were generated for this demo from HTML/SVG. Certificates are watermarked *SAMPLE*.
- The site is marked `noindex` so search engines leave it out.

Dark, high-contrast, terminal-green design set in JetBrains Mono, with scroll-driven animation throughout.

## Tech

- React 19 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- [Motion](https://motion.dev) for scroll-driven and layout animation
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [cobe](https://github.com/shuding/cobe) for the WebGL globe (lazy-loaded)
- Vercel Analytics

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run lint      # ESLint
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing content

All text lives in [`src/data/portfolio.js`](src/data/portfolio.js): profile, stack, projects, journey, certifications and ribbon text. Components read from it, so most updates don't need JSX changes.

| To change… | Do this |
| --- | --- |
| Project screenshots | Add `src/assets/projects/<prefix>-1.webp`, `<prefix>-2.webp`, … and set `screenshots: '<prefix>'` on the project (about 1600×1000 WebP). Without screenshots, the card shows a code-style preview built from `preview`. |
| Certificate image | Add `src/assets/certificates/<name>-card.webp` (~900px) and `<name>-full.webp` (~2200px) and set `image: '<name>'` on the certification. |
| Certificate gallery | Add `<name>-thumb.webp` (~240px) and `<name>-full.webp` (~1600px) per certificate and list them under `certificates` on the achievement. |
| Avatar | Replace `src/assets/profile/avatar.webp` (512×512). |
| Project links | Set `repo` (or `repos: [{ label, href }]`) and/or `demo` on the project. |
| Tech logos | SVGs live in `src/assets/tech/` (from [devicon](https://devicon.dev), MIT). Set `icon` on a skill to use one; items without an icon get a monogram tile. |

Theme colors, fonts and utilities (`text-gradient`, `bg-grid`, marquee) are defined in [`src/index.css`](src/index.css).

## Accessibility & performance

- Respects `prefers-reduced-motion`: smooth scroll, marquees and animations switch off, and all content stays visible.
- Canvas and WebGL animations stop when off screen or in a background tab.
- The globe is created at an idle moment after load, redraws at 30 fps and renders below screen resolution.
- Keyboard support: skip link, visible focus rings, a ⌘K / Ctrl+K command palette, and arrow keys in the project carousel.

## Deployment

Deployed on Vercel as its own project (`developer-portfolio-demo`). Build command `npm run build`, output directory `dist`. No environment variables are needed.

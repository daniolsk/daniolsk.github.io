# Daniel Skowron — Portfolio

My personal portfolio: a single-page site with a short bio, the technologies I work with, a few personal projects and ways to get in touch.

**Live at [danielskowron.com](https://danielskowron.com)**

[![Deploy Next.js site to Pages](https://github.com/daniolsk/daniolsk.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/daniolsk/daniolsk.github.io/actions/workflows/nextjs.yml)

## Features

- **Fully static** — built with `next build` as a static export, so there is no server to run.
- **Scroll-aware navigation** — the sidebar highlights the section in view using an `IntersectionObserver`, and collapses into a full-screen menu on mobile.
- **Custom cursor trailer** — a blend-mode cursor that follows the pointer and expands into a label when hovering a technology icon. It is disabled on touch devices.
- **Animated background** — a gradient and dot pattern that shift as you hover the navigation items.
- **Optimized images** — statically imported WebP assets with blur placeholders and content-hashed file names.

## Tech stack

| | |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| UI | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) and CSS Modules |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Tooling | ESLint, Prettier (with `prettier-plugin-tailwindcss`) |
| Hosting | GitHub Pages behind Cloudflare |

## Getting started

Requires Node.js 24 (the version used in CI) and npm.

```bash
git clone https://github.com/daniolsk/daniolsk.github.io.git
cd daniolsk.github.io
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site into `out/` |
| `npm run lint` | Run ESLint |

`npm run start` does not apply to a static export. To preview a production build, serve the `out/` directory with any static file server, e.g. `npx serve out`.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, font and metadata
│   ├── page.tsx          # The single page
│   └── globals.css       # Tailwind import, base styles and keyframes
├── assets/               # Portrait and project screenshots (WebP)
└── components/
    ├── Main/
    │   ├── Main.tsx           # Page shell: backgrounds, sidebar content, sections
    │   ├── Nav.tsx            # Sidebar / mobile menu with active-section tracking
    │   ├── HeroComponent.tsx  # Hero portrait
    │   ├── Trailer.tsx        # Custom cursor trailer
    │   ├── ScrollTo.tsx       # Inline smooth-scroll link
    │   └── main.module.css
    ├── Projects/Projects.tsx  # Project cards
    └── Contact/Contact.tsx    # Contact links
```

`Main.tsx`, `Projects.tsx` and `Contact.tsx` are server components; only the interactive pieces (`Nav`, `Trailer`, `HeroComponent`, `ScrollTo`) are client components.

## Deployment

Every push to `master` runs the [`nextjs.yml`](.github/workflows/nextjs.yml) workflow, which:

1. installs dependencies with `npm ci`,
2. lints and builds the site,
3. publishes `out/` to GitHub Pages,
4. purges the Cloudflare cache so the new version is served right away.

The cache purge needs two repository secrets: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ZONE_ID`. Changes that only touch `README.md` do not trigger a deploy.

## Featured projects

| Project | Description |
| --- | --- |
| [Color Palette Generator](https://color-palette-generator.danielskowron.com/) | Pick a base color and get complementary and accent colors, shown in three visual representations |
| [Share Screens Fast](https://share-screens-fast.danielskowron.com/) | SaaS app for quickly transferring photos between devices or storing them in the cloud |
| [Guess The Song](https://guessthesong.danielskowron.com/) | Browser game: guess a song or album from its lyrics, author or track listing |
| [Muscler](https://muscler.danielskowron.com/) | Gym tracker for planning and recording workout sessions |

## Contact

- Email: [contact@danielskowron.com](mailto:contact@danielskowron.com)
- GitHub: [@daniolsk](https://github.com/daniolsk)
- LinkedIn: [daniel-sk](https://www.linkedin.com/in/daniel-sk/)

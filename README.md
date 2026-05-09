# aisafety.paris

The website for the **AI Safety Paris** community — a resource for anyone interested in working on AI Safety, AI Governance, or AI Alignment in Paris, or in meeting the local community.

Live site: [aisafety.paris](https://aisafety.paris)

## 🙋 This project is looking for a maintainer

The current maintainer (Lucie Philippon) is moving away from Paris and stepping back from the point-of-contact role for the local AI safety community. The site is in **maintenance mode** and will not be kept up to date until someone takes it over.

If you'd like to step in — to own this website, keep its content current, and serve as a contact for people interested in AI Safety in Paris — please reach out to **`lucie.philippon@proton.me`**.

## What's on the site

- Public events calendars and community meetups
- AI Safety organizations based in Paris (CeSIA, Safer AI, ML4Good, Pause IA, Foreview)
- The shared Paris AI Safety office space
- Communication channels (Slack, Discord)
- Career-path resources for technical AI safety and AI policy in France

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev) + TypeScript (strict)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Biome](https://biomejs.dev) for linting and formatting
- [Vercel Analytics](https://vercel.com/docs/analytics)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

The home page lives in [`app/page.tsx`](app/page.tsx) and the root layout in [`app/layout.tsx`](app/layout.tsx). Edits hot-reload.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Production build (Turbopack) |
| `npm start` | Run the production build |
| `npm run lint` | Biome check (lint + import sort) |
| `npm run format` | Biome format with `--write` |

## Project layout

```
app/              # Next.js App Router pages and layout
public/           # Static assets (logos, banner image)
content.md       # Source content for the site copy
biome.json        # Biome lint/format config
next.config.ts    # Next.js config
```

## Contributing

Issues and pull requests are welcome — especially content updates (new events, orgs, resources) and fixes for stale links. For larger changes, open an issue first to discuss.

**The project is actively looking for a new maintainer.** If you're interested, see the section above or email `lucie.philippon@proton.me`.

## License

[MIT](LICENSE) © 2025 Lucie Philippon

# Foundry North Platform Overview

Standalone site that explains, in non-technical language, what Compass, Flux, Forge, and the Star Tribune Document Center do — and how they work with HubSpot and NinjaCat. Built for a broad audience (sales, marketing, operations, legal, leadership) with a clear table of contents and topic index.

## Quick links (on the live site)

The deployed page includes links to:

- **Compass** — https://foundrycompass.com
- **Flux** — https://foundrynorthflux.com
- **Forge** — https://foundrynorthforge.com
- **Star Tribune Document Center** — https://stribdoccenter.com
- **fn-docs** (technical documentation) — https://fn-docs.vercel.app

## Tech

- Next.js 14 with static export (`output: 'export'`)
- Styling aligned with Foundry North / Compass branding (fn-legacy CSS variables)
- Single page, anchor-linked TOC for deep linking

## Commands

```bash
npm install
npm run build   # outputs to out/
npm run dev     # local dev server
```

## Deploy to Vercel

1. Push this repo (or add it to your monorepo and set root to `fn-platform-overview`).
2. In Vercel, New Project → Import → select the repo.
3. Framework preset: Next.js. Root directory: `fn-platform-overview` (if not at repo root).
4. Build command: `npm run build`. Output directory: `out` (for static export).
5. Optional: add password protection via your existing layer (env var); this project has no auth.

After deploy, share the single URL so stakeholders can read the overview and use the quick links to open any app or fn-docs.

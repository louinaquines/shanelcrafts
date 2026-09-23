# Shanel Crafts PH — Build Roadmap (Next.js)

## Stack
- **Next.js 14/15 (App Router)** — single route effectively (`app/page.tsx`), since this is a one-page landing site. Static export (`next export` / `output: "export"`) is a strong fit — no backend, no dynamic data, so it can be hosted for free on Vercel, Netlify, or GitHub Pages.
- **React 18** (via Next).
- **Tailwind CSS** — but with a **custom theme config** driven by the tokens in `design.md` (no default Tailwind grays/blues left in place) so it doesn't drift toward generic Tailwind-template look.
- **next/image** for all bouquet photos — automatic responsive sizing/lazy-loading matters a lot here since the asset set is 18 photos, several large.
- **next/font** with Fraunces (or chosen display serif) + Inter/Figtree, self-hosted via Google Fonts through next/font (no render-blocking font CDN call).
- No CMS, no database. Product data lives in a typed local file (`data/products.ts`) — easy for you to edit prices/captions without touching components.
- Form/CTA: a plain `<a href="https://m.me/<page>">` Messenger deep link and a `<a href="https://facebook.com/...">` link — **no contact form, no backend needed** (matches the goal: push people to Messenger, not collect leads on-site).

## Suggested file structure
```
shanel-crafts-ph/
├── app/
│   ├── layout.tsx           # fonts, metadata, favicon
│   ├── page.tsx             # the whole landing page, composed of sections
│   └── globals.css          # Tailwind base + CSS custom properties for tokens
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── ValueProps.tsx       # "flowers that never wilt" 3-up
│   ├── ProductShowcase/
│   │   ├── index.tsx
│   │   ├── CategoryTabs.tsx
│   │   └── PhotoMasonry.tsx
│   ├── HowToOrder.tsx
│   ├── FindUs.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts          # category → items → {image, name, priceFrom, tags}
├── public/
│   └── images/               # s1–s17, s-logo, renamed descriptively
├── tailwind.config.ts        # custom color tokens, font families, type scale
└── next.config.js
```

## Phase 0 — Setup (½ day)
- `create-next-app` with TypeScript + Tailwind + App Router.
- Import and rename the 18 assets into `public/images/` with descriptive names (e.g. `hero-money-garland.jpg`, `bouquet-blue-white.jpg`, `market-stall.jpg`) instead of `s1.jpg`–`s17.jpg` — helps alt-text and future maintenance.
- Wire up `tailwind.config.ts` with the color tokens and fonts from `design.md`. Confirm no default Tailwind gray/blue/indigo classes are used anywhere going forward.

## Phase 1 — Structure & content (1 day)
- Build `data/products.ts` from the four categories (fuzzy-wire bouquets, money bouquets, money garlands, lei/graduation garlands) using the images as source.
- Static copy pass: hero headline/subhead, value-prop lines, how-to-order steps, footer — written in the shop's voice (see design.md §7).
- Lay out all sections with real content but unstyled/minimally styled, to confirm structure and scroll order before design polish.

## Phase 2 — Visual design pass (1–2 days)
- Hero: `s1.jpg` full-bleed + scrim + entrance animation (single orchestrated moment).
- Product showcase: masonry/asymmetric grid per category, category switcher (tabs or simple anchor sub-nav).
- Nav: slim sticky bar, logo mark, smooth-scroll anchor links, Messenger CTA button always visible.
- Responsive pass mobile-first (375px → 768px → 1280px).

## Phase 3 — Polish & QA (½–1 day)
- Lighthouse pass: image optimization, font loading, CLS check (especially the hero).
- Accessibility: focus states, alt text on every product image (should describe the actual bouquet, not just "s3.jpg"), reduced-motion fallback for hero entrance.
- Cross-check against the design.md restraint checklist before calling it done.
- Real device test on a mid-range Android phone (majority of the FB-traffic audience).

## Phase 4 — Deploy
- Vercel (simplest for Next.js) or static export to Netlify/GitHub Pages if you want a free/simple host.
- Set OpenGraph image (probably `s1.jpg` or the logo) + title/description so the link looks good when shared/pasted into Facebook Messenger or posts — this matters a lot since your traffic *is* Facebook.
- Point your existing FB page / bio link to the deployed URL.

## Not in scope for v1 (possible v2 ideas, not built now)
- CMS (e.g. Sanity/Contentful) if you want to update products yourself without a dev — worth it once the catalog grows past what's comfortable to hand-edit in `products.ts`.
- On-site order form with GCash reference number capture, if Messenger-only starts feeling limiting.
- Seasonal theming (e.g. a "Grad Season" banner/hero swap around March–April PH graduation season).

## Still open — need your call
See the questions at the end of my reply before I start scaffolding.
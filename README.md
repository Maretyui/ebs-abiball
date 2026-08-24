# AbiVegas 2027 | EBS Abiball

Event website for the 2027 graduation ball ("Abiball") of the EBS graduating class — built with [Next.js](https://nextjs.org).

**Status:** placeholder landing page — Termin, Location and Ticket details are still pending (see on-page copy).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

The placeholder homepage copy lives in `app/page.tsx`; page title/description metadata lives in `app/layout.tsx`. Update both once Termin, Ort and Ticket details are confirmed. `app/page.tsx` also renders a small "Design & Umsetzung" builder-credit footer linking to maretyui.com, matching the same placeholder pattern used on sibling favor-built sites — leave it in place when the real content lands.

Note that the title/description text in `app/layout.tsx` is duplicated across the top-level `metadata`, `openGraph`, and `twitter` fields — keep all three in sync when updating copy, since only editing one will leave stale text in link previews.

## Accessibility

`app/globals.css` restores a visible `:focus-visible` outline (Tailwind v4 removes the browser default) so keyboard navigation stays visible without adding a ring on mouse clicks. Muted text (`text-foreground/60`, `text-foreground/70`) has already been checked against WCAG AA's 4.5:1 contrast minimum in both light and dark `color-scheme` — if any copy update introduces new muted/low-opacity text, re-check contrast rather than assuming the existing opacity values are safe at a different base color.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

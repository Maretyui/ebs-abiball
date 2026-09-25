# AbiVegas 2027 | EBS Abiball

Event website for the 2027 graduation ball ("Abiball") of the EBS graduating class — built with [Next.js](https://nextjs.org).

**Status:** placeholder landing page — Termin, Location and Ticket details are still pending (see on-page copy).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

The placeholder homepage copy lives in `app/page.tsx`; page title/description metadata lives in `app/layout.tsx`. Update both once Termin, Ort and Ticket details are confirmed. `app/page.tsx` also renders a small "Design & Umsetzung" builder-credit footer linking to maretyui.com, matching the same placeholder pattern used on sibling favor-built sites — leave it in place when the real content lands.

Note that the title/description text in `app/layout.tsx` is duplicated across the top-level `metadata`, `openGraph`, and `twitter` fields — keep all three in sync when updating copy, since only editing one will leave stale text in link previews.

`app/layout.tsx`'s `alternates` also declares a `de-DE` hreflang entry alongside the canonical URL, telling search engines the page's language explicitly rather than leaving it to guesswork.

`app/manifest.ts` backs up `layout.tsx`'s `applicationName` metadata with a real web manifest (Next.js auto-serves it at `/manifest.webmanifest` and links it in `<head>`) — update its `name`/`short_name`/`description` alongside the other metadata fields if the event copy changes.

`app/layout.tsx`'s `appleWebApp.title` covers iOS Safari specifically, which ignores the web manifest's `name`/`short_name` for the "Add to Home Screen" pinned title — keep it in sync with `manifest.ts`'s `short_name` if either changes.

`app/layout.tsx` also injects a `WebSite` JSON-LD structured data block so search engines have an explicit entity to work with even before the real event content ships — it's `WebSite` rather than `Event` because the latter requires a `startDate` that doesn't exist yet. Keep its `name`/`description` in sync with `SITE_TITLE`/`SITE_DESCRIPTION` if those change.

This project is pinned to Next.js 15.2.6 rather than latest — `next.config.ts`'s Turbopack root setting has to live under `experimental.turbo` at this version (the top-level `turbopack` key only exists from 15.3+), so check that config key still matches whichever version is installed before upgrading.

`app/opengraph-image.tsx` generates the 1200x630 share image used by `layout.tsx`'s `openGraph`/`twitter` metadata — without it, links shared in group chats/Discord would unfurl with no image at all. Update its copy alongside `SITE_TITLE`/`SITE_DESCRIPTION` if the event details change. `app/robots.ts` explicitly allows crawling of the placeholder site and intentionally has no `sitemap` entry yet — add one once a confirmed live domain exists.

## Accessibility

`app/globals.css` restores a visible `:focus-visible` outline (Tailwind v4 removes the browser default) so keyboard navigation stays visible without adding a ring on mouse clicks, and honors `prefers-reduced-motion` by collapsing animation/transition durations to near-zero for visitors who've requested reduced motion at the OS level. Muted text (`text-foreground/60`, `text-foreground/70`) has already been checked against WCAG AA's 4.5:1 contrast minimum in both light and dark `color-scheme` — if any copy update introduces new muted/low-opacity text, re-check contrast rather than assuming the existing opacity values are safe at a different base color.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

# AbiVegas 2027 | EBS Abiball

Event website for the 2027 graduation ball ("Abiball") of the EBS graduating class — built with [Next.js](https://nextjs.org).

**Status:** placeholder landing page — Termin, Location and Ticket details are still pending (see on-page copy).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

The placeholder homepage copy lives in `app/page.tsx`; page title/description metadata lives in `app/layout.tsx`. Update both once Termin, Ort and Ticket details are confirmed.

Note that the title/description text in `app/layout.tsx` is duplicated across the top-level `metadata`, `openGraph`, and `twitter` fields — keep all three in sync when updating copy, since only editing one will leave stale text in link previews.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

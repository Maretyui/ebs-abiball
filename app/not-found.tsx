import type { Metadata } from "next";
import Link from "next/link";

// Without this, the 404 page silently inherited the homepage's title
// ("AbiVegas 2027 | EBS Abiball") from the root layout — indistinguishable
// from the real homepage in a browser tab or search result snippet.
export const metadata: Metadata = {
  title: "Seite nicht gefunden | AbiVegas 2027",
  robots: { index: false, follow: true },
};

// Next.js falls back to its own generic 404 UI without this file — this
// keeps a mismatched/old link on the mixed-in-limbo placeholder site at
// least visually consistent with the homepage instead of a blank default.
export default function NotFound() {
  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Fehler 404
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            Seite nicht gefunden
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Diese Seite gibt es nicht (mehr). Termin, Ort und Tickets findest du
          auf der Startseite, sobald sie feststehen.
        </p>
        <Link
          href="/"
          className="text-sm underline decoration-dotted underline-offset-2 hover:text-foreground text-foreground/80"
        >
          Zurück zur Startseite
        </Link>
      </main>
      {/* Mirrors page.tsx's builder credit so it isn't only visible on the
          homepage — /70 not /40 to keep WCAG AA contrast (4.5:1). */}
      <footer className="pb-6 text-center text-xs text-foreground/70">
        Design &amp; Umsetzung:{" "}
        <a
          href="https://maretyui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-foreground"
        >
          Maik Reinhardt
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </footer>
    </div>
  );
}

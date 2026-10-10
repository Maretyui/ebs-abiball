"use client";

import { useEffect } from "react";

// Next.js falls back to its own generic error UI without this file — this
// keeps a runtime error at least visually consistent with the homepage and
// not-found.tsx instead of a blank default, matching the pattern already
// used on sibling placeholder sites (ju-jutsu, kirchliche-pilgerplaetze).
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Fehler
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            Etwas ist schiefgelaufen
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="text-sm underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground text-foreground/80"
        >
          Erneut versuchen
        </button>
      </main>
      {/* Mirrors page.tsx's builder credit so it isn't only visible on the
          homepage — /70 not /40 to keep WCAG AA contrast (4.5:1). */}
      <footer className="pb-6 text-center text-xs text-foreground/70">
        <address className="not-italic">
          Design &amp; Umsetzung:{" "}
          <a
            href="https://maretyui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground"
          >
            Maik Reinhardt
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </address>
      </footer>
    </div>
  );
}

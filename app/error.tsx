"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import BuilderCredit from "@/components/builder-credit";

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
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.error(error);
    // Unlike not-found.tsx, this boundary swaps in without a route change
    // or title update, so there's no normal cue for assistive tech that
    // something happened — move focus to the heading so it gets announced,
    // matching the fix already applied on ju-jutsu.
    headingRef.current?.focus();
  }, [error]);

  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header role="alert">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Fehler
          </p>
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-5xl sm:text-6xl font-bold tracking-tight text-balance outline-none"
          >
            Etwas ist schiefgelaufen
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="text-sm underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground text-foreground/80"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="text-sm underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground text-foreground/80"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <BuilderCredit />
    </div>
  );
}

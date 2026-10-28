"use client";

import { useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// error.tsx only wraps page.tsx and nested layouts, not the RootLayout
// itself — a failure while rendering app/layout.tsx (e.g. the font loader
// or the JSON-LD script) falls through to Next's bare default error screen
// instead. This is the dedicated boundary for that case, so it has to
// recreate the <html>/<body> shell layout.tsx normally provides, matching
// the pattern already used on kirchliche-pilgerplaetze.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Mirrors error.tsx: this boundary swaps in the whole document without a
  // route change or title update, so there's no normal cue for assistive
  // tech that something happened - move focus to the heading so it gets
  // announced.
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <html
      lang="de"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 antialiased">
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
            Bitte lade die Seite erneut oder versuche es später noch einmal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="text-sm underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground text-foreground/80"
            >
              Erneut versuchen
            </button>
            {/* A plain <a>, not next/link's Link — the app router state Link
                depends on is exactly what may have failed to initialize here,
                since this boundary only fires when app/layout.tsx itself
                throws (e.g. the font loader). */}
            <a
              href="/"
              className="text-sm underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground text-foreground/80"
            >
              Zurück zur Startseite
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}

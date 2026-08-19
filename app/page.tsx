// Placeholder copy — replace once Termin, Ort and Ticket details are
// confirmed (keep app/layout.tsx's metadata/openGraph/twitter text in sync).
export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Abschlussjahrgang 2027
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            AbiVegas 2027
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Das ultimative Abiball-Erlebnis für den Abschlussjahrgang 2027 –
          Feiere mit Stil, Spaß und unvergesslichen Momenten!
        </p>
        <p className="text-sm text-foreground/60 text-pretty">
          Weitere Infos zu Termin, Ort und Tickets folgen in Kürze.
        </p>
      </main>
      <footer className="pb-6 text-center text-xs text-foreground/40">
        Design &amp; Umsetzung:{" "}
        <a
          href="https://maretyui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-foreground/70"
        >
          Maik Reinhardt
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </footer>
    </div>
  );
}

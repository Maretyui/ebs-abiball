// /70 not /40 to keep WCAG AA contrast (4.5:1) against the page's
// background in both light and dark color schemes.
export default function BuilderCredit() {
  return (
    <footer className="pb-6 text-center text-xs text-foreground/70">
      <address className="not-italic">
        Design &amp; Umsetzung:{" "}
        <a
          href="https://maretyui.com"
          target="_blank"
          rel="noopener noreferrer author"
          className="underline decoration-dotted underline-offset-2 transition-colors hover:text-foreground"
        >
          Maik Reinhardt
          <span className="sr-only" lang="en"> (opens in a new tab)</span>
        </a>
      </address>
    </footer>
  );
}

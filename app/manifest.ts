import type { MetadataRoute } from "next";

// Backs up layout.tsx's `applicationName` metadata ("Add to Home Screen"
// display name) with an actual web manifest, so mobile browsers have real
// icon/theme-color data to use instead of falling back to a generic one.
// Next.js auto-serves this at /manifest.webmanifest and links it in <head>
// via this file-convention route, no changes needed elsewhere.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AbiVegas 2027 | EBS Abiball",
    short_name: "AbiVegas 2027",
    description:
      "Das ultimative Abiball-Erlebnis für den Abschlussjahrgang 2027 – Feiere mit Stil, Spaß und unvergesslichen Momenten!",
    // Matches the de-DE hreflang already declared in layout.tsx's
    // `alternates` — spelled out here too since the manifest is fetched
    // independently of the page and has no other way to know the language.
    lang: "de",
    dir: "ltr",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

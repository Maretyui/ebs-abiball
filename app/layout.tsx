import type { Metadata, Viewport } from "next";
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

// Kept as constants so the title/description can't drift out of sync
// across the base, OpenGraph and Twitter metadata blocks below.
const SITE_TITLE = "AbiVegas 2027 | EBS Abiball";
const SITE_DESCRIPTION =
  "Das ultimative Abiball-Erlebnis für den Abschlussjahrgang 2027 – Feiere mit Stil, Spaß und unvergesslichen Momenten!";

// No metadataBase here — this event site has no confirmed live domain yet
// (see the README's placeholder-status note), so `alternates.canonical`
// below stays relative rather than being resolved against a guessed host.
// Add it once a real domain exists.
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  // Used by browsers/OSes as the short display name when a user pins or
  // bookmarks the page (e.g. "Add to Home Screen"), separate from the
  // longer <title> text above.
  applicationName: "AbiVegas 2027",
  keywords: [
    "Abiball 2027",
    "AbiVegas 2027",
    "EBS Abiball",
    "Abschlussjahrgang 2027",
    "Abiturfeier",
  ],
  authors: [{ name: "Maik Reinhardt", url: "https://maretyui.com" }],
  creator: "Maik Reinhardt",
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "AbiVegas 2027",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  // Mirrors globals.css's `color-scheme: light dark` as an actual meta tag,
  // so the browser can pick native UI colors (scrollbars, form controls)
  // before the stylesheet has even loaded.
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

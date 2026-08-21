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

export const metadata: Metadata = {
  title: "AbiVegas 2027 | EBS Abiball",
  description:
    "Das ultimative Abiball-Erlebnis für den Abschlussjahrgang 2027 – Feiere mit Stil, Spaß und unvergesslichen Momenten!",
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
  authors: [{ name: "Maik Reinhardt" }],
  creator: "Maik Reinhardt",
  robots: { index: true, follow: true },
  openGraph: {
    title: "AbiVegas 2027 | EBS Abiball",
    description:
      "Das ultimative Abiball-Erlebnis für den Abschlussjahrgang 2027 – Feiere mit Stil, Spaß und unvergesslichen Momenten!",
    siteName: "AbiVegas 2027",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: "AbiVegas 2027 | EBS Abiball",
    description:
      "Das ultimative Abiball-Erlebnis für den Abschlussjahrgang 2027 – Feiere mit Stil, Spaß und unvergesslichen Momenten!",
  },
  alternates: {
    canonical: "/",
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

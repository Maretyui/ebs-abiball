import type { MetadataRoute } from "next";

// No metadataBase/sitemap here yet (see layout.tsx's note) — once a
// confirmed live domain exists, add a sitemap.ts and reference it here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}

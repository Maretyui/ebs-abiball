import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS "Add to Home Screen" looks for this file-convention route (or a static
// apple-touch-icon) rather than favicon.ico or the manifest icons that
// layout.tsx's appleWebApp metadata otherwise implies exist - without it,
// pinning the site fell back to a screenshot thumbnail instead of a mark.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "sans-serif",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        AV
      </div>
    ),
    { ...size }
  );
}

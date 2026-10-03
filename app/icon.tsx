import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// manifest.ts's only icon entry was favicon.ico — Chrome's install-prompt
// criteria want a real PNG icon (192x192 minimum) before it'll treat the
// site as installable, which an .ico alone doesn't satisfy. This mirrors
// apple-icon.tsx's existing generated-mark pattern at PWA icon size instead.
export default function Icon() {
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
          fontSize: 180,
          fontWeight: 700,
        }}
      >
        AV
      </div>
    ),
    { ...size }
  );
}

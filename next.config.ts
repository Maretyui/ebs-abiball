import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["temp.maretyui.com"],
  // This project is pinned to Next 15.2.6, where Turbopack root config still
  // lives under `experimental.turbo` — the top-level `turbopack` key isn't
  // recognized until 15.3+, so the previous config silently did nothing
  // (visible as an "Unrecognized key(s): 'turbopack'" warning on every build).
  experimental: {
    turbo: { root: __dirname },
  },
};

export default nextConfig;

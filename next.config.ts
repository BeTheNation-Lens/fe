import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "**",
      },
    ],
    domains: ["i.pravatar.cc", "flagcdn.com"],
  },
  eslint: {
    // Nonaktifkan pemeriksaan ESLint selama build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Nonaktifkan pemeriksaan tipe TypeScript selama build (opsional)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

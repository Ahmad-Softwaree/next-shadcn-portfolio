import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "logo.svgcdn.com",
      },
      {
        protocol: "https",
        hostname: "termius.com",
      },
      {
        protocol: "https",
        hostname: "magicui.design",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
      },
      {
        protocol: "https",
        hostname: "www.namecheap.com",
      },
      {
        protocol: "https",
        hostname: "www.hostinger.com",
      },
      {
        protocol: "https",
        hostname: "contabo.com",
      },
      {
        protocol: "https",
        hostname: "www.bluehost.com",
      },
    ],
  },
};

export default nextConfig;

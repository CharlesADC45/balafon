import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p1.aprimocdn.net",
      },
      {
        protocol: "https",
        hostname: "www.solarwinds.com",
      },
    ],
  },
};

export default nextConfig;

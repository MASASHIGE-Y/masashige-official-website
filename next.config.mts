import type { NextConfig } from "next";
import { securityHeaders } from "./lib/security-headers.mts";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders(process.env.NODE_ENV === "development")
      },
      {
        source: "/studio/:path*",
        headers: [
          ...securityHeaders(process.env.NODE_ENV === "development", true),
          { key: "X-Robots-Tag", value: "noindex, nofollow" }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      loaders: {
        // Add any loaders you need here
      }
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "pino-pretty"],
  images: {
    domains: [
      "images.pexels.com",
      "img.freepik.com",
      "images.unsplash.com",
      "avatars.githubusercontent.com",
    ],
  },

};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "y4pdgnepgswqffpt.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

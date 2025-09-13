import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   reactStrictMode: true,
  images: {
    domains: ["your-image-host.com"], // agar external images use ho rahi ho
  },
};

export default nextConfig;

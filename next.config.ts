import type { NextConfig } from "next";
import nextra from "nextra";

// Initialize OpenNext Cloudflare for dev
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

// Configure Nextra
const withNextra = nextra({
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  // Temporarily disable basePath for testing
  // basePath: "/docs",
  // assetPrefix: "/docs",

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs', 'module' on the client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
      };
    }
    return config;
  },
};

export default withNextra(nextConfig);

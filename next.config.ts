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

  // Optimize for edge runtime
  experimental: {
    serverComponentsExternalPackages: ['@nodelib/fs.scandir', '@nodelib/fs.stat', 'fast-glob'],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs', 'module', 'path' on the client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
        os: false,
      };
    }

    // Mark nextra server code as external for edge runtime
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'nextra/dist/server': 'commonjs nextra/dist/server',
      });
    }

    return config;
  },
};

export default withNextra(nextConfig);

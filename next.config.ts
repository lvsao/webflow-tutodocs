import type { NextConfig } from "next";
import nextra from "nextra";

// Initialize OpenNext Cloudflare for dev
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

// Configure Nextra
const withNextra = nextra({
  defaultShowCopyCode: true,
  // Disable git timestamp features for Webflow Cloud deployment
  readingTime: false,
});

const nextConfig: NextConfig = {
  // Optimize for edge runtime - moved from experimental to root level
  serverExternalPackages: ['@nodelib/fs.scandir', '@nodelib/fs.stat', 'fast-glob'],

  // Disable TypeScript errors during build for Webflow injected code
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
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

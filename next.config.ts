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
};

export default withNextra(nextConfig);

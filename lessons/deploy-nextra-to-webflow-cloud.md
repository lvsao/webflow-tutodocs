# How to Deploy Nextra on Webflow Cloud

I recently deployed a Nextra documentation site to Webflow Cloud. It wasn't straightforward, but after solving several edge runtime issues, it works. Here's what I learned.

## What is Nextra?

[Nextra](https://nextra.site/) is a framework built on Next.js for creating documentation sites. It uses MDX (Markdown + React) and comes with a docs theme, search, and syntax highlighting out of the box.

## What is Webflow Cloud?

[Webflow Cloud](https://developers.webflow.com/webflow-cloud) is Webflow's hosting platform that runs on Cloudflare Workers. It supports Next.js 15+ and provides global edge deployment.

## Prerequisites

Before starting, you need:

- Node.js 20.0.0 or higher ([download](https://nodejs.org/))
- npm (comes with Node.js)
- A [Webflow](https://webflow.com/) account
- A [GitHub](https://github.com/) account
- Webflow CLI installed: `npm install -g @webflow/cli`

## Step 1: Create a Nextra Project

First, create a new Next.js project with Nextra:

```bash
npx create-next-app@latest my-docs --typescript
cd my-docs
```

Install Nextra dependencies:

```bash
npm install nextra nextra-theme-docs
```

## Step 2: Configure Next.js for Nextra

Create `next.config.ts` in your project root:

```typescript
import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  // Required for Webflow Cloud edge runtime
  serverExternalPackages: ['@nodelib/fs.scandir', '@nodelib/fs.stat', 'fast-glob'],

  // Skip type checking during build (Webflow injects code that causes TS errors)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent Node.js modules from being bundled for client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

export default withNextra(nextConfig);
```

## Step 3: Create the Critical File - mdx-components.tsx

This file is required and was the key to making the sidebar work. Create `mdx-components.tsx` in your project root:

```typescript
import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const themeComponents = getThemeComponents();

  return {
    ...themeComponents,
    ...components,
  };
}
```

**Important**: Without importing theme components, your sidebar won't render. This took me hours to figure out.

## Step 4: Set Up Nextra Theme Configuration

Create `theme.config.tsx`:

```typescript
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>My Documentation</span>,
  project: {
    link: "https://github.com/yourusername/your-repo",
  },
  docsRepositoryBase: "https://github.com/yourusername/your-repo/tree/main",
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} © My Documentation
      </span>
    ),
  },
};

export default config;
```

## Step 5: Create App Layout

Create `src/app/layout.tsx`:

```typescript
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: "My Documentation",
  description: "Documentation powered by Nextra",
}

const banner = (
  <Banner storageKey="announcement">
    Welcome to my docs
  </Banner>
)

const navbar = (
  <Navbar
    logo={<strong>My Docs</strong>}
    projectLink="https://github.com/yourusername/your-repo"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © My Documentation
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/yourusername/your-repo/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

## Step 6: Create Navigation Structure

Create `src/app/_meta.tsx` to define your sidebar navigation:

```typescript
export default {
  index: "Home",
  "getting-started": "Getting Started",
  about: "About",
};
```

## Step 7: Create Your First Page

Create `src/app/page.mdx`:

```mdx
# Welcome to My Documentation

This is built with Nextra and deployed on Webflow Cloud.

## Getting Started

Check out the sidebar to explore the documentation.
```

## Step 8: Install Webflow Cloud Dependencies

Install required packages for Webflow Cloud deployment:

```bash
npm install @opennextjs/cloudflare
npm install -D wrangler @cloudflare/workers-types
```

Initialize OpenNext Cloudflare in your `next.config.ts` (add at the top):

```typescript
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
```

## Step 9: Create Webflow Configuration

Create `webflow.json`:

```json
{
  "cloud": {
    "framework": "nextjs"
  }
}
```

Create `wrangler.json`:

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "my-docs",
  "main": ".open-next/worker.js",
  "compatibility_date": "2025-03-01",
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "binding": "ASSETS",
    "directory": ".open-next/assets"
  }
}
```

The `nodejs_compat` flag is critical - it enables Node.js APIs in Cloudflare Workers runtime.

## Step 10: Create OpenNext Configuration

Create `open-next.config.ts`:

```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
```

## Step 11: Test Locally

Before deploying, test your build locally:

```bash
npm run build
```

If the build fails with "Module not found: fs", double-check your `next.config.ts` webpack configuration and `mdx-components.tsx` file.

## Step 12: Push to GitHub

Initialize git and push your project:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## Step 13: Deploy to Webflow Cloud

Run the Webflow CLI deploy command:

```bash
webflow cloud deploy
```

The CLI will:
1. Run `npm ci` to install dependencies
2. Build your Next.js app
3. Package it with OpenNext Cloudflare adapter
4. Deploy to Cloudflare Workers via Webflow Cloud

## Common Issues I Encountered

### Issue 1: Sidebar Not Showing

**Problem**: The sidebar navigation wasn't rendering at all.

**Solution**: Import theme components in `mdx-components.tsx`:

```typescript
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
```

Without this, Nextra's wrapper component doesn't apply and the sidebar won't render.

### Issue 2: "Module not found: fs"

**Problem**: Build failed with "Can't resolve 'fs'" errors.

**Solution**: Add webpack fallbacks in `next.config.ts` and use `serverExternalPackages` to mark file system libraries as external:

```typescript
serverExternalPackages: ['@nodelib/fs.scandir', '@nodelib/fs.stat', 'fast-glob']
```

### Issue 3: TypeScript Errors During Build

**Problem**: Webflow injects configuration code during deployment that causes TypeScript errors.

**Solution**: Disable TypeScript checks during build:

```typescript
typescript: {
  ignoreBuildErrors: true,
}
```

## Why This Configuration Works

Nextra uses file system operations at build time to scan your MDX files and generate the page map. Cloudflare Workers (which Webflow Cloud uses) doesn't support Node.js `fs` module at runtime, but it's fine during the build phase.

The key is:
1. **Build time**: Nextra reads files to create the page map (allowed)
2. **Runtime**: Only the generated page map is used (no file system access needed)

By marking file system libraries as external and adding webpack fallbacks, we prevent them from being bundled into the client code while still allowing them during the build process.

## Official Documentation References

- [Nextra Documentation](https://nextra.site/docs)
- [Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud)
- [Node.js Compatibility on Webflow Cloud](https://developers.webflow.com/webflow-cloud/environment/nodejs-compatibility)
- [OpenNext Cloudflare Adapter](https://opennext.js.org/cloudflare)

## Repository

The complete example is available on GitHub: [lvsao/webflow-tutodocs](https://github.com/lvsao/webflow-tutodocs)

---

**Meta Description**: Learn how to deploy Nextra documentation sites on Webflow Cloud. Step-by-step guide covering edge runtime configuration, common issues, and solutions for Next.js 15 with Cloudflare Workers.

## Frequently Asked Questions

### 1. Does Nextra work on Webflow Cloud?

Yes, Nextra 4.0 works on Webflow Cloud with proper configuration. The key requirements are:
- Enable `nodejs_compat` flag in `wrangler.json`
- Mark file system libraries as external in `next.config.ts`
- Import theme components in `mdx-components.tsx`

See the [Webflow Cloud environment documentation](https://developers.webflow.com/webflow-cloud/environment) for details on the edge runtime.

### 2. Why isn't my sidebar showing?

The most common reason is missing theme component imports in `mdx-components.tsx`. You must import and return theme components from `nextra-theme-docs`:

```typescript
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const themeComponents = getThemeComponents();
  return { ...themeComponents, ...components };
}
```

This file is documented in [Nextra's file conventions guide](https://nextra.site/docs/guide/organize-files).

### 3. What Node.js version do I need?

Webflow Cloud requires Node.js 20.0.0 or higher and npm as the package manager. Nextra 4.0 works with Next.js 15+, which requires Node.js 18.18 or later. To be safe, use Node.js 20+.

Reference: [Webflow Cloud requirements](https://developers.webflow.com/webflow-cloud/bring-your-own-app)

### 4. Can I use the Pages Router instead of App Router?

No. Nextra 4.0 only supports Next.js App Router. If you need Pages Router, use Nextra 3.x or earlier. Webflow Cloud supports Next.js 15+, which primarily focuses on App Router.

From [Nextra documentation](https://nextra.site/docs): "Nextra 4 only works with the App Router. Use versions 1/2/3 for Pages Router."

### 5. Why do I need to disable TypeScript checks during build?

Webflow Cloud injects its own configuration code during deployment. This injected code sometimes triggers TypeScript errors due to type narrowing issues. Since you can't modify Webflow's injected code, the solution is to set `typescript.ignoreBuildErrors: true` in your `next.config.ts`.

This is safe because you can still type-check locally before pushing to GitHub. The deployed code remains the same - only the build process skips type checking.

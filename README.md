# Nextra on Webflow Cloud

A production-ready example of deploying [Nextra 4.0](https://nextra.site/) documentation site to [Webflow Cloud](https://developers.webflow.com/webflow-cloud), running on Cloudflare Workers edge runtime.

**Live Demo**: https://xiaos-marvelous-site-960b4b.webflow.io/docs

## What This Example Demonstrates

- ✅ **Nextra 4.0** with Next.js 15 App Router
- ✅ **Webflow Cloud** deployment on Cloudflare Workers
- ✅ **Edge Runtime Compatibility** - Handling Node.js API limitations
- ✅ **MDX Components** - Proper theme component integration
- ✅ **File System Scanning** - Build-time file operations for page navigation
- ✅ **Production Deployment** - Real-world configuration that works

## Why This Example Matters

Deploying Nextra to Webflow Cloud isn't straightforward. The main challenges:

1. **Edge Runtime Limitations**: Cloudflare Workers doesn't support Node.js `fs` module at runtime
2. **File System Dependencies**: Nextra uses fast-glob and @nodelib packages for file scanning
3. **MDX Component Integration**: Theme components must be properly imported
4. **Build Configuration**: Specific webpack and Next.js config required

This example shows how to solve all these issues.

## Quick Start

### Prerequisites

- Node.js 20.0.0 or higher
- npm package manager
- Webflow account
- Webflow CLI: `npm install -g @webflow/cli`

### Installation

```bash
# Clone the repository
git clone https://github.com/lvsao/webflow-tutodocs.git
cd webflow-tutodocs

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3002

### Deploy to Webflow Cloud

```bash
# Initialize Webflow Cloud (if not already done)
webflow cloud init

# Deploy
webflow cloud deploy
```

## Project Structure

```
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with Nextra components
│       ├── _meta.tsx            # Sidebar navigation structure
│       └── page.mdx             # Home page
├── lessons/                     # Tutorial content
│   └── deploy-nextra-to-webflow-cloud.md
├── mdx-components.tsx           # Critical: Theme component imports
├── next.config.ts               # Next.js + Nextra + Edge runtime config
├── theme.config.tsx             # Nextra theme settings
├── wrangler.json                # Cloudflare Workers config
├── webflow.json                 # Webflow Cloud config
└── open-next.config.ts          # OpenNext adapter config
```

## Critical Configuration Files

### 1. mdx-components.tsx

**Most Important File** - Without this, your sidebar won't render:

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

### 2. next.config.ts

Handles edge runtime compatibility:

```typescript
const nextConfig: NextConfig = {
  // Mark file system libraries as external
  serverExternalPackages: ['@nodelib/fs.scandir', '@nodelib/fs.stat', 'fast-glob'],

  // Webflow injects code that causes TS errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // Prevent fs module from bundling on client
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};
```

### 3. wrangler.json

Enables Node.js compatibility in Cloudflare Workers:

```json
{
  "compatibility_flags": ["nodejs_compat"]
}
```

This flag is **critical** - it enables partial Node.js API support at runtime.

## How It Works

### Build Time vs Runtime

The key to making Nextra work on Webflow Cloud:

1. **Build Time**: Nextra scans MDX files using fast-glob and generates a page map (✅ allowed)
2. **Runtime**: Only the generated page map is used (✅ no file system access needed)

By marking file system libraries as external and adding webpack fallbacks, we:
- Prevent them from bundling into client code
- Allow them during the build process
- Use the generated page map at runtime

### Architecture

```
┌─────────────┐
│  MDX Files  │
└──────┬──────┘
       │ Build Time
       ↓
┌─────────────────┐
│  Nextra Scan    │ ← Uses fs, fast-glob
│  (Build Only)   │
└──────┬──────────┘
       │
       ↓
┌─────────────────┐
│   Page Map      │ ← Generated artifact
└──────┬──────────┘
       │ Runtime
       ↓
┌─────────────────┐
│ Cloudflare      │ ← No fs module needed
│ Workers         │
└─────────────────┘
```

## Common Issues & Solutions

### Issue: Sidebar Not Showing

**Symptoms**: Navigation sidebar missing, content renders directly under `<body>`

**Cause**: Missing theme component imports in `mdx-components.tsx`

**Solution**: Import and return theme components from `nextra-theme-docs`:

```typescript
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const themeComponents = getThemeComponents();
  return { ...themeComponents, ...components };
}
```

### Issue: "Module not found: fs"

**Symptoms**: Build fails with "Can't resolve 'fs'" errors

**Cause**: File system libraries bundled for client/edge runtime

**Solution**: Add to `next.config.ts`:

```typescript
serverExternalPackages: ['@nodelib/fs.scandir', '@nodelib/fs.stat', 'fast-glob']

webpack: (config, { isServer }) => {
  if (!isServer) {
    config.resolve.fallback = { fs: false, module: false, path: false, os: false };
  }
  return config;
}
```

### Issue: TypeScript Build Errors

**Symptoms**: Type errors during Webflow Cloud deployment

**Cause**: Webflow injects configuration code that triggers type narrowing errors

**Solution**: Disable TypeScript checks during build:

```typescript
typescript: {
  ignoreBuildErrors: true,
}
```

You can still type-check locally before pushing.

## Tutorial

For a complete step-by-step guide, see [How to Deploy Nextra on Webflow Cloud](./lessons/deploy-nextra-to-webflow-cloud.md)

The tutorial covers:
- Complete setup from scratch
- All configuration files explained
- Common errors and their solutions
- Why this configuration works
- FAQs with official documentation references

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Documentation**: [Nextra 4.0](https://nextra.site/)
- **Hosting**: [Webflow Cloud](https://developers.webflow.com/webflow-cloud)
- **Runtime**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Adapter**: [@opennextjs/cloudflare](https://opennext.js.org/cloudflare)

## Official Documentation

- [Nextra Documentation](https://nextra.site/docs)
- [Webflow Cloud Documentation](https://developers.webflow.com/webflow-cloud)
- [Node.js Compatibility on Webflow Cloud](https://developers.webflow.com/webflow-cloud/environment/nodejs-compatibility)
- [OpenNext Cloudflare Adapter](https://opennext.js.org/cloudflare)

## Contributing

Found an issue or have a suggestion? Feel free to:

1. Open an issue
2. Submit a pull request
3. Share your experience in Webflow's [Developer Forum](https://discourse.webflow.com/c/app-developers/90)

## License

MIT License - see [LICENSE](./LICENSE) file for details

## Acknowledgments

- Built with [Nextra](https://nextra.site/) by Vercel
- Deployed on [Webflow Cloud](https://developers.webflow.com/webflow-cloud)
- Powered by [Cloudflare Workers](https://workers.cloudflare.com/)

---

**Questions?** Check out the [tutorial](./lessons/deploy-nextra-to-webflow-cloud.md) or visit [Webflow's Developer Forum](https://discourse.webflow.com/c/app-developers/90).

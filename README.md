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

#### Method 1: UI Deployment (Recommended) ⭐

This method is **recommended** for its simplicity and automatic updates:

1. **Upload to GitHub**
   - Push your project to a GitHub repository (public or private)
   - Example: `https://github.com/yourusername/your-nextra-docs`

2. **Connect to Webflow Cloud**
   - Go to [Webflow Dashboard](https://webflow.com/dashboard) → **Webflow Cloud**
   - Click **Sign in with GitHub** to authorize Webflow to access your repositories

3. **Create New Project**
   - Click **Create a new project**
   - Select the GitHub repository you just uploaded
   - Choose the branch you want to deploy (e.g., `main` or `master`)

4. **Configure and Deploy**
   - Set your custom domain path (e.g., `/docs`)
   - Click **Deploy**

**Benefits:**
- ✅ Simple visual interface - no CLI required
- ✅ Automatic deployments - GitHub updates trigger automatic redeployments
- ✅ Easy to maintain and update
- ✅ Built-in CI/CD pipeline

#### Method 2: CLI Deployment

For developers who prefer command-line interface:

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

## 🔍 Search Functionality (Advanced - Optional)

> **Note for Advanced Users**: This feature is optional and OFF by default. Follow the setup steps below to enable it.

### Why Algolia Instead of Built-in Search?

Nextra's default search (Pagefind) is **incompatible with Webflow Cloud's edge runtime** due to:
- CORS restrictions on dynamic WASM imports
- Cloudflare Workers edge runtime limitations
- Module resolution failures in edge environment

**Solution**: We've implemented **Algolia-powered search** as an optional feature that works seamlessly on Webflow Cloud.

### ✨ Search Features (When Configured)

Once you set up Algolia, users get:
- ⌨️ **Keyboard Shortcuts**: `Cmd+K` / `Ctrl+K` to open search
- 🎯 **Real-time Search**: Instant results as you type
- 🗂️ **Hierarchical Results**: Shows page title and section hierarchy
- ↕️ **Keyboard Navigation**: Arrow keys + Enter to navigate
- 🔄 **Auto-Updates**: GitHub Actions keeps index fresh on every push

### 📖 Setup Instructions (Step-by-Step)

#### Step 1: Create Algolia Account

1. Go to [algolia.com](https://www.algolia.com/) and sign up (free tier available)
2. Create a new application
3. Create a new index named `documentation`

#### Step 2: Get API Credentials

1. Go to **API Keys** in your Algolia dashboard
2. Copy and save:
   - **Application ID** (public)
   - **Search-Only API Key** (public, safe for frontend)
   - **Admin API Key** (secret, store securely)

#### Step 3: Configure Environment Variables

**For Local Development:**

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials:
   ```env
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id_here
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=your_search_key_here
   ALGOLIA_WRITE_API_KEY=your_admin_key_here
   ```

3. (Optional) If your site uses a base path, set it:
   ```env
   BASE_PATH=/docs
   ```

**For Webflow Cloud:**

1. Go to your Webflow Dashboard → **Project Settings** → **Environment Variables**
2. Add **public environment variables** (only these are available at runtime):
   ```
   NEXT_PUBLIC_ALGOLIA_APP_ID = your_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY = your_search_key
   ```
   - Do NOT add `ALGOLIA_WRITE_API_KEY` to Webflow (not needed for frontend)

**For GitHub Actions (Auto-Indexing):**

1. Go to your GitHub repository → **Settings** → **Secrets and Variables** → **Actions**
2. Add repository secrets:
   ```
   ALGOLIA_APP_ID = your_app_id
   ALGOLIA_WRITE_API_KEY = your_admin_key
   ```

#### Step 4: Initial Index

Index your documentation for the first time:

```bash
npm run index
```

You should see output like:
```
✅ Indexed: Getting Started (5 records)
✅ Indexed: API Reference (8 records)
...
✅ Successfully indexed 45 records
📊 Total records: 45
🚀 Your search is now ready to use!
```

#### Step 5: Verify Search is Working

1. Start development server: `npm run dev`
2. Visit http://localhost:3002
3. Press `Cmd+K` (or `Ctrl+K` on Windows/Linux)
4. Search for a term from your documentation

If the search modal opens and you can type, it's working!

#### Step 6: Deploy and Auto-Indexing

Once you push to GitHub, the GitHub Actions workflow automatically:
1. Detects documentation changes
2. Runs the indexer
3. Uploads new records to Algolia
4. Deploys to Webflow Cloud

No manual intervention needed!

### ⚙️ Configuration Details

#### Base Path Auto-Detection

The crawler intelligently detects your site's base path:

1. **First check**: `BASE_PATH` environment variable
2. **Second check**: `NEXT_PUBLIC_BASE_PATH` environment variable
3. **Third check**: `basePath` in `next.config.ts`
4. **Default**: Root path (empty string)

This prevents 404 errors when clicking search results on sites deployed under a subdirectory.

#### Customizing Crawler Behavior

Edit `scripts/algolia-crawler.mjs` to:
- Change the index name (line 48): `const indexName = 'documentation'`
- Adjust content truncation limits (lines 68, 84, 104)
- Add custom record fields or metadata

### 🔧 Troubleshooting

#### Search box doesn't appear

**Cause**: Missing or incorrect environment variables

**Solution**:
1. Verify `NEXT_PUBLIC_ALGOLIA_APP_ID` and `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY` are set
2. Restart development server after setting variables
3. Check browser console for errors (F12 → Console tab)

#### Search returns no results

**Cause**: Index is empty or hasn't been populated

**Solution**:
1. Run `npm run index` to populate the index
2. Check Algolia dashboard to verify records exist
3. Wait for GitHub Actions workflow to complete if auto-indexing

#### 404 errors when clicking search results

**Cause**: BASE_PATH mismatch

**Solution**:
1. Set `BASE_PATH` to match your deployment path (e.g., `/docs`)
2. Re-run `npm run index` to re-index with correct paths
3. Verify URLs in Algolia dashboard under **Indices** → **documentation** → **Browser**

#### GitHub Actions workflow not triggering

**Cause**: Secrets not configured

**Solution**:
1. Verify secrets exist: Go to **Settings** → **Secrets and variables** → **Actions**
2. Check both `ALGOLIA_APP_ID` and `ALGOLIA_WRITE_API_KEY` are set
3. Trigger manually: Go to **Actions** → **Index Documentation to Algolia** → **Run workflow**

### 🚫 Disabling Search

To disable search:
1. Remove Algolia environment variables
2. The search UI automatically disappears
3. Your site continues to work normally

No code changes needed!

### 📚 Related Documentation

- [Algolia Documentation](https://www.algolia.com/doc/)
- [Algolia API Keys Guide](https://www.algolia.com/doc/guides/security/api-keys/)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Webflow Cloud Environment Variables](https://developers.webflow.com/webflow-cloud/environment/env-variables)

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

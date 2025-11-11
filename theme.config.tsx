import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>📚 My Documentation</span>,
  project: {
    link: "https://github.com/yourusername/your-repo",
  },
  docsRepositoryBase: "https://github.com/yourusername/your-repo/tree/main",
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank" rel="noopener">
          Powered by Nextra
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – My Documentation",
    };
  },
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Documentation" />
      <meta property="og:description" content="Documentation powered by Nextra and Webflow Cloud" />
    </>
  ),
  // Disable search due to Pagefind incompatibility with Webflow Cloud edge runtime
  // See README.md for more details
  search: false,
  primaryHue: 200,
  primarySaturation: 100,
};

export default config;

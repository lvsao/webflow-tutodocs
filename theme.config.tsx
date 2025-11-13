import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>📚 Nextra on Webflow Cloud</span>,
  project: {
    link: "https://github.com/lvsao/webflow-nextra",
  },
  docsRepositoryBase: "https://github.com/lvsao/webflow-nextra/tree/master",
  footer: {
    content: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank" rel="noopener">
          Powered by Nextra
        </a>
        {" | "}
        <a href="https://webflow.com/cloud" target="_blank" rel="noopener">
          Deployed on Webflow Cloud
        </a>
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  // Disable search due to Pagefind incompatibility with Webflow Cloud edge runtime
  // See README.md for more details
  search: false,
  // Disable git-related features for Webflow Cloud deployment
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  gitTimestamp: null,
  primaryHue: 200,
  primarySaturation: 100,
};

export default config;

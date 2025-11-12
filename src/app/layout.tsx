import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { DocSearchComponent } from '@/components/DocSearchComponent'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: "Documentation - Nextra on Webflow Cloud",
  description: "Documentation site powered by Nextra and Webflow Cloud",
  icons: {
    icon: '/favicon.ico',
  },
}


const navbar = (
  <Navbar
    logo={<strong>📚 Documentation</strong>}
    projectLink="https://github.com/yourusername/your-repo"
  />
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © Nextra on Webflow Cloud
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
        {/* Hide any Nextra native search elements and Algolia search CSS conflicts */}
        <style dangerouslySetInnerHTML={{__html: `
          .nextra-search,
          .nextra-search-bar,
          .nextra-nav-container [role="search"],
          nav [role="combobox"],
          nav input[type="search"] {
            display: none !important;
          }
        `}} />
      </head>
      <body>
        <Layout
          banner={null}
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/yourusername/your-repo/tree/main"
        >
          {children}
        </Layout>
        <DocSearchComponent />
      </body>
    </html>
  )
}

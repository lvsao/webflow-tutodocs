import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: "Documentation - Nextra on Webflow Cloud",
  description: "Documentation site powered by Nextra and Webflow Cloud",
  icons: {
    icon: '/favicon.ico',
  },
}

const banner = (
  <Banner storageKey="nextra-banner">
    🚀 Nextra 4.0 on Webflow Cloud
  </Banner>
)

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

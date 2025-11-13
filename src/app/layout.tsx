import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://selofy.com/nextrademo'),
  title: {
    default: "Nextra on Webflow Cloud - Documentation Template",
    template: "%s – Nextra on Webflow Cloud",
  },
  description: "Deploy Nextra 4.0 documentation sites to Webflow Cloud on Cloudflare Workers. Production-ready template with edge runtime compatibility.",
  keywords: ["Nextra", "Webflow Cloud", "Next.js", "Documentation", "Cloudflare Workers", "Edge Runtime", "MDX"],
  authors: [{ name: "Nextra on Webflow Cloud" }],
  creator: "Nextra on Webflow Cloud",
  publisher: "Nextra on Webflow Cloud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://selofy.com/nextrademo",
    siteName: "Nextra on Webflow Cloud",
    title: "Nextra on Webflow Cloud - Documentation Template",
    description: "Deploy Nextra 4.0 documentation sites to Webflow Cloud on Cloudflare Workers. Production-ready template with edge runtime compatibility.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nextra on Webflow Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextra on Webflow Cloud - Documentation Template",
    description: "Deploy Nextra 4.0 documentation sites to Webflow Cloud on Cloudflare Workers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}


const navbar = (
  <Navbar
    logo={<strong>📚 Nextra on Webflow Cloud</strong>}
    projectLink="https://github.com/lvsao/webflow-nextra"
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
      <head />
      <body>
        <Layout
          banner={null}
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/lvsao/webflow-nextra/tree/master"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

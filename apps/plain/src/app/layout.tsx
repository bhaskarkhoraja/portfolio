import type { Metadata, Viewport } from "next"
import { Agbalumo } from "next/font/google"
import { GeistSans } from "geist/font/sans"

import "@/styles/globals.css"

import { PLAIN_URL } from "@/config/constants"
import { SITE_CONFIG } from "@/config/site"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  description: SITE_CONFIG.description,
  keywords: [
    "Bhaskar Khoraja",
    "Plain Portfolio",
    "NextJS developer",
    "ReactJS developer",
    "NodeJS",
    "Typescript",
    "Javascript",
  ],
  authors: [
    {
      name: "Bhaskar Khoraja",
      url: PLAIN_URL,
    },
  ],
  creator: "Bhaskar Khoraja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@bhaskarkhoraja",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${SITE_CONFIG.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

/*
  Fonts:
  * Agbalumo for highlights
  * Geist Sans for body
*/
const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-agbalumo-serif",
})
const geist = GeistSans

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geist.className,
          geist.variable,
          agbalumo.className,
          agbalumo.variable
        )}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/StructuredData"
import "./globals.css"
import type { Metadata, Viewport } from 'next'
import React from 'react';
import Script from 'next/script'

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const inter = Inter({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.geekytechh.in'),
  title: {
    default: "GeekyTechh | Premium Web Development & Digital Solutions Agency India",
    template: "%s | GeekyTechh"
  },
  description:
    "GeekyTechh - Premium web development agency in Mumbai. Custom websites, e-commerce, UI/UX design, AI/ML solutions & cybersecurity. Next.js, React experts. Transform your digital presence.",
  keywords: [
    "web development India",
    "custom website development",
    "e-commerce development",
    "react development",
    "next.js development",
    "UI/UX design",
    "mobile app development",
    "digital agency India",
    "software development company",
    "AI development",
    "machine learning solutions",
    "GeekyTechh",
    "professional web design",
    "responsive websites",
    "SEO optimization",
  ],
  authors: [{ name: "GeekyTechh", url: "https://www.geekytechh.in" }],
  creator: "GeekyTechh",
  publisher: "GeekyTechh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.geekytechh.in',
    siteName: 'GeekyTechh',
    title: 'GeekyTechh - Premium Web Development & Digital Solutions | Mumbai',
    description: 'Mumbai-based web development agency. Custom websites, e-commerce, UI/UX, AI/ML & cybersecurity. Next.js & React experts. Get a free quote today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GeekyTechh - Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeekyTechh - Premium Web Development & Digital Solutions',
    description: 'Transform your business with professional web development and digital solutions.',
    images: ['/og-image.png'],
    creator: '@geekytechh',
  },
  verification: {
    google: 'EuRCh79QPJnSufzFj9wdfxfcOC59AuKR6aBGsP31L-k',
  },
  alternates: {
    canonical: 'https://www.geekytechh.in',
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Structured Data for SEO */}
        <StructuredData />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GR9TNWBYBG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GR9TNWBYBG');
          `}
        </Script>
      </head>
      <body className="font-sans font-medium bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

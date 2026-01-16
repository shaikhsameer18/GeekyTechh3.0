import { Inter, Poppins, Space_Grotesk, Montserrat } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/StructuredData"
import "./globals.css"
import type { Metadata } from 'next'
import React from 'react';
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})
const montserrat = Montserrat({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://geekytechh.in'),
  title: {
    default: "GeekyTechh - Premium Web Development & Digital Solutions | India",
    template: "%s | GeekyTechh"
  },
  description:
    "GeekyTechh is a leading web development and digital agency in India, specializing in custom websites, e-commerce platforms, AI/ML solutions, and innovative digital experiences. Transform your business with our professional development services.",
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
  authors: [{ name: "GeekyTechh", url: "https://geekytechh.in" }],
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
    url: 'https://geekytechh.in',
    siteName: 'GeekyTechh',
    title: 'GeekyTechh - Premium Web Development & Digital Solutions',
    description: 'Transform your business with professional web development, e-commerce solutions, and innovative digital experiences from India\'s leading tech agency.',
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
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
  alternates: {
    canonical: 'https://geekytechh.in',
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${montserrat.variable}`}>
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
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script"; // 👈 Add this
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fystack - Crypto wallet infrastructure for teams powered by MPC wallet",
  description:
    "MPC platform built for developers. Create wallets with ease securely.",
  keywords: ['MPC', 'wallet', 'crypto', 'blockchain', 'security', 'developers'],
  authors: [{ name: 'Fystack Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fystack.io',
    title: 'Fystack - Crypto wallet infrastructure for teams powered by MPC wallet',
    description: 'MPC platform built for developers. Create wallets with ease securely.',
    siteName: 'Fystack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fystack - Crypto wallet infrastructure for teams powered by MPC wallet',
    description: 'MPC platform built for developers. Create wallets with ease securely.',
  },
  alternates: {
    canonical: 'https://fystack.io',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Structured Data for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fystack",
              "alternateName": "Fystack MPC Platform",
              "url": "https://fystack.io",
              "description": "MPC platform built for developers. Create wallets with ease securely.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://fystack.io/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://github.com/fystack",
                "https://x.com/fystack",
                "https://docs.fystack.io"
              ]
            })
          }}
        />
        
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fystack",
              "url": "https://fystack.io",
              "logo": "https://fystack.io/logo.png",
              "description": "MPC platform built for developers. Create wallets with ease securely.",
              "foundingDate": "2024",
              "sameAs": [
                "https://github.com/fystack",
                "https://x.com/fystack"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://t.me/anhthind"
              }
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://fystack.io"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://fystack.io#features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Security",
                  "item": "https://fystack.io#security"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "SDK",
                  "item": "https://fystack.io#sdk"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Pricing",
                  "item": "https://fystack.io#pricing"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Documentation",
                  "item": "https://docs.fystack.io"
                }
              ]
            })
          }}
        />

        {/* 👇 Google Analytics script loading */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QQC8WN5ZCM"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QQC8WN5ZCM');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Fystack - Stablecoin wallet infrastructure for every business',
  description: 'Secure team portal for multi-chain stablecoin wallets, approvals, and risk policies powered by MPC technology with no private key exposure.',
  metadataBase: new URL('https://fystack.io'),
  alternates: {
    canonical: 'https://fystack.io'
  },
  openGraph: {
    type: 'website',
    url: 'https://fystack.io',
    title: 'Fystack - Stablecoin wallet infrastructure for every business',
    description: 'Secure team portal for multi-chain stablecoin wallets, approvals, and risk policies powered by MPC technology',
    siteName: 'Fystack'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fystack',
    creator: '@fystack',
    title: 'Fystack - Secure Wallet Infrastructure',
    description: 'Secure team portal for multi-chain stablecoin wallets, approvals, and risk policies powered by MPC technology'
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Web App Manifest and Icons */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="application-name" content="Fystack" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fystack" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Fystack_logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Fystack_logo.png" />
        <link rel="apple-touch-icon" href="/Fystack_logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* For better browser compatibility */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        {/* Structured Data for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fystack",
              alternateName: "Fystack MPC Platform",
              url: "https://fystack.io",
              description:
                "Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security.",
              image: "https://fystack.io/Fystack_logo.png",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://fystack.io/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              sameAs: [
                "https://github.com/fystack",
                "https://x.com/fystack",
                "https://docs.fystack.io",
              ],
            }),
          }}
        />
        {/* Enhanced Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fystack",
              url: "https://fystack.io",
              logo: {
                "@type": "ImageObject",
                url: "https://fystack.io/Fystack_logo.png",
                width: 200,
                height: 60,
              },
              image: "https://fystack.io/Fystack_logo.png",
              description:
                "Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security.",
              foundingDate: "2024",
              sameAs: ["https://github.com/fystack", "https://x.com/fystack"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://t.me/anhthind",
              },
            }),
          }}
        />
        {/* Software Application Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Fystack MPC Wallet Platform",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              description:
                "Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security.",
              url: "https://fystack.io",
              screenshot: "https://fystack.io/og-banner.png",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free tier available",
              },
              author: {
                "@type": "Organization",
                name: "Fystack",
              },
            }),
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
                }
              ]
            })
          }}
        />
        {/* Additional meta tags for better social sharing */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Fystack" />
        <meta property="fb:app_id" content="your-facebook-app-id" />{" "}
        {/* Replace with actual FB app ID if you have one */}
        {/* For better mobile sharing */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Google Analytics script loading */}
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
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <NextTopLoader
          color="#2563eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2563eb,0 0 5px #2563eb"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

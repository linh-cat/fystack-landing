// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Fystack — The custody layer for digital asset infrastructure',
  description: 'Multi-chain infrastructure for fintechs, payment platforms, and crypto businesses to automate digital asset operations securely.',
  metadataBase: new URL('https://fystack.io'),
  alternates: {
    canonical: 'https://fystack.io'
  },
  openGraph: {
    type: 'website',
    url: 'https://fystack.io',
    title: 'Fystack — The custody layer for digital asset infrastructure',
    description: 'Multi-chain infrastructure for fintechs, payment platforms, and crypto businesses to automate digital asset operations securely.',
    siteName: 'Fystack',
    images: [
      {
        url: '/self_custody.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fystack - Stablecoin wallet infrastructure'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fystack',
    creator: '@fystack',
    title: 'Fystack — The custody layer for digital asset infrastructure',
    description: 'Multi-chain infrastructure for fintechs, payment platforms, and crypto businesses to automate digital asset operations securely.',
    images: ['/self_custody.jpeg']
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
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className}`}>
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KKVJG5R7');",
          }}
        />
        {/* End Google Tag Manager */}
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
        <meta name="format-detection" content="telephone=no" />
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
        className={`${geistSans.className} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKVJG5R7"
          height={0} width={0} style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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

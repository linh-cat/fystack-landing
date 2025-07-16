// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://fystack.io'),
  title: "Fystack - Secure crypto wallet infrastructure for teams",
  description:
    "Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security. No private keys to compromise.",
  keywords: [
    "MPC",
    "wallet",
    "crypto",
    "blockchain",
    "security",
    "developers",
    "multi-party computation",
    "enterprise wallet",
  ],
  authors: [{ name: "Fystack Team" }],

  // Enhanced Open Graph for Facebook, WhatsApp, Messenger
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fystack.io",
    siteName: "Fystack",
    title: "Fystack - Secure crypto wallet infrastructure for teams",
    description:
      "Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security. No private keys to compromise.",
    images: [
      {
        // url: "https://fystack.io/og-banner.png", // Placeholder - replace with actual banner
        url: "https://fystack.io/Fystack_logo.png", // Placeholder - replace with actual banner
        width: 1200,
        height: 630,
        alt: "Fystack - Secure crypto wallet infrastructure for teams",
        type: "image/png",
      },
      {
        url: "https://fystack.io/Fystack_logo.png", // banner sqaure
        width: 1080,
        height: 1080,
        alt: "Fystack - Secure crypto wallet infrastructure for teams",
        type: "image/png",
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@fystack",
    creator: "@fystack",
    title: "Fystack - Hack-Resistant Crypto Wallet Infrastructure",
    description:
      "Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security. No private keys to compromise.",
    images: ["https://fystack.io/Fystack_logo.png"], // banner
  },

  // Additional metadata for better social sharing
  alternates: {
    canonical: "https://fystack.io",
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional meta tags
  other: {
    // For Telegram
    "telegram:channel": "@fystack",

    // For WhatsApp and general sharing
    "og:image:secure_url": "https://fystack.io/Fystack_logo.png", // Banner
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",

    // Theme color for mobile browsers
    "theme-color": "#3b82f6",
    "msapplication-TileColor": "#3b82f6",

    // Apple specific
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Fystack",

    // Microsoft specific
    "msapplication-TileImage": "https://fystack.io/Fystack_logo.png",

    // Additional social tags
    "article:author": "Fystack Team",
    "article:publisher": "https://fystack.io",
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
        {/* Favicon and app icons - Updated paths */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/Fystack_logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://fystack.io",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Features",
                  item: "https://fystack.io#features",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Security",
                  item: "https://fystack.io#security",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "SDK",
                  item: "https://fystack.io#sdk",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Pricing",
                  item: "https://fystack.io#pricing",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Documentation",
                  item: "https://docs.fystack.io",
                },
              ],
            }),
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

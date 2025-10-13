import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { ghostAPI, formatDate, getReadingTime, type GhostPost } from "@/lib/ghost";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "./components/BlogContent";

// This page will be statically generated at build time
// and revalidated every 1 hour (3600 seconds)
export const revalidate = 3600;

// Generate static metadata for the blog listing page
export async function generateMetadata() {
  const title = "Blog | Fystack - Secure crypto wallet infrastructure";
  const description = "Insights on stablecoin treasury, MPC wallets, and Web3 finance from the Fystack team. Stay updated with the latest in secure crypto wallet infrastructure.";
  const url = "https://fystack.io/blog";

  return {
    title,
    description,
    keywords: [
      "MPC wallet",
      "crypto infrastructure",
      "blockchain security",
      "stablecoin treasury",
      "Web3 finance",
      "crypto wallet",
      "blockchain technology",
      "digital asset security"
    ],
    authors: [{ name: "Fystack Team" }],
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Fystack",
      locale: "en_US",
      images: [
        {
          url: "https://fystack.io/og-image.png", // Make sure this image exists
          width: 1200,
          height: 630,
          alt: "Fystack Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@fystack",
      creator: "@fystack",
      images: ["https://fystack.io/og-image.png"], // Make sure this image exists
    },
    alternates: {
      canonical: url,
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
    verification: {
      google: "7SWOjjI91baBx54gs2Rnh3jqc0cJwzO2IcKpHBkjuiA",
    },
    other: {
      "theme-color": "#3b82f6",
    },
  };
}

// Generate static props at build time
async function fetchBlogData() {
  try {
    const response = await ghostAPI.getPosts({
      limit: 'all',
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    });
    
    // Extract unique tags for categories
    const tagSet = new Set<string>();
    response.posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag.name));
    });
    
    return {
      posts: response.posts,
      categories: ['All posts', ...Array.from(tagSet).sort()],
      error: null
    };
  } catch (err) {
    console.error('Error fetching blog data:', err);
    return {
      posts: [],
      categories: ['All posts'],
      error: 'Failed to load blog posts. Please try again later.'
    };
  }
}

export default async function BlogPage() {
  // Fetch data at build time and during revalidation
  const { posts, categories, error } = await fetchBlogData();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<div className="py-16"><div className="container px-4 md:px-6 max-w-7xl mx-auto text-center">Loading...</div></div>}>
        <BlogContent posts={posts} categories={categories} error={error} />
      </Suspense>
      <Footer />
    </div>
  );
} 

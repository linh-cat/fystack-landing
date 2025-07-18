import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { ghostAPI, formatDate, getReadingTime, type GhostPost } from "@/lib/ghost";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogContent from "./components/BlogContent";

export default async function BlogPage() {
  let posts: GhostPost[] = [];
  let error: string | null = null;
  let categories: string[] = ['All posts'];

  try {
    const response = await ghostAPI.getPosts({
      limit: 20,
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    });
    posts = response.posts;
    
    // Extract unique tags for categories
    const tagSet = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag.name));
    });
    categories = ['All posts', ...Array.from(tagSet).sort()];
  } catch (err) {
    error = 'Failed to load blog posts. Please try again later.';
    console.error('Error fetching posts:', err);
  }

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
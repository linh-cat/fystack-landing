import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Tag, BookOpen } from "lucide-react";
import { ghostAPI, formatDate, getReadingTime, type GhostPost } from "@/lib/ghost";
import type { Metadata } from "next";
import ShareButton from "./components/ShareButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await ghostAPI.getPostBySlug(params.slug);
    
    if (!post) {
      return {
        title: 'Post Not Found | Fystack Blog',
        description: 'The requested blog post could not be found.',
      };
    }

    // Determine the best image for social sharing
    const socialImage = post.twitter_image || post.og_image || post.feature_image;
    const description = post.twitter_description || post.og_description || post.custom_excerpt || post.excerpt || `Read ${post.title} on the Fystack blog`;

    return {
      title: `${post.title} | Fystack Blog`,
      description: post.meta_description || description,
      keywords: post.tags?.map(tag => tag.name).join(', '),
      openGraph: {
        title: post.og_title || post.title,
        description: post.og_description || description,
        type: 'article',
        publishedTime: post.published_at,
        authors: [post.primary_author.name],
        tags: post.tags?.map(tag => tag.name),
        images: socialImage ? [
          {
            url: socialImage,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.twitter_title || post.title,
        description: post.twitter_description || description,
        images: socialImage ? [socialImage] : undefined,
      },
    };
  } catch (error) {
    return {
      title: 'Error | Fystack Blog',
      description: 'An error occurred while loading this blog post.',
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await ghostAPI.getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPostsResponse = await ghostAPI.getPosts({
    limit: 3,
    include: ['tags', 'authors'],
    order: 'published_at DESC'
  });
  const relatedPosts = relatedPostsResponse.posts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="mb-16">
            <header className="mb-8">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                      className="group"
                    >
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted/80 transition-colors cursor-pointer group-hover:text-foreground">
                        {tag.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground mb-6">
                {post.title}
              </h1>
              
              {/* Removed excerpt display from blog detail page - it should only be on blog listing */}

              {/* Author and Meta Info */}
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    {post.primary_author.profile_image ? (
                      <Image
                        src={post.primary_author.profile_image}
                        alt={post.primary_author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    ) : (
                      <span className="text-muted-foreground text-lg font-bold">
                        {post.primary_author.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {post.primary_author.name}
                    </p>
                    {post.primary_author.bio && (
                      <p className="text-sm text-muted-foreground">
                        {post.primary_author.bio}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(post.published_at)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{getReadingTime(post.reading_time)}</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.feature_image && (
              <div className="relative h-80 md:h-96 mb-12 rounded-lg overflow-hidden">
                <Image
                  src={post.feature_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-img:rounded-lg prose-img:shadow-sm"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                      className="group"
                    >
                      <Badge variant="outline" className="hover:bg-muted transition-colors cursor-pointer group-hover:border-primary">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Share this post</h3>
              <div className="max-w-xs">
                <ShareButton title={post.title} excerpt={post.excerpt} />
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Related Posts
                </h2>
                <p className="text-muted-foreground">
                  Continue reading with these related articles
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-background rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        {relatedPost.feature_image ? (
                          <Image
                            src={relatedPost.feature_image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <BookOpen className="w-12 h-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="space-y-4">
                          {relatedPost.primary_tag && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                              {relatedPost.primary_tag.name}
                            </span>
                          )}
                          
                          <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
                            {relatedPost.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{formatDate(relatedPost.published_at)}</span>
                            <span>•</span>
                            <span>{getReadingTime(relatedPost.reading_time)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
} 
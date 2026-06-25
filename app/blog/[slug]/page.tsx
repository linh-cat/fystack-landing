import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Tag, BookOpen } from "lucide-react";
import { ghostAPI, formatDate, getReadingTime, type GhostPost } from "@/lib/ghost";
import type { Metadata } from "next";
import ShareButton from "./components/ShareButton";
import BlogContentWithTOC from "./components/BlogContentWithTOC";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

// Known author social profiles, keyed by author name
const AUTHOR_LINKEDIN: Record<string, string> = {
  "Thi Nguyen": "https://www.linkedin.com/in/thi-nguyen-559684210/",
  "Phoebe Duong": "https://www.linkedin.com/in/baovyduong/",
};

// This page will be statically generated at build time
// and revalidated every 1 hour (3600 seconds)
export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    // Get all posts (increase limit if you have more posts)
    const response = await ghostAPI.getPosts({
      limit: 100,
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    });

    // Return an array of slugs for static generation
    return response.posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return []; // Return empty array if fetch fails
  }
}

// Update the generateMetadata function
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await ghostAPI.getPostBySlug(slug);
    
    if (!post) {
      return {
        title: 'Post Not Found | Fystack Blog',
        description: 'The requested blog post could not be found.',
      };
    }

    // Determine the best image for social sharing
    const socialImage = post.twitter_image || post.og_image || post.feature_image || '/Fystack_logo.png';
    const description = post.twitter_description || post.og_description || post.custom_excerpt || post.excerpt || `Read ${post.title} on the Fystack blog`;
    const fullImageUrl = socialImage.startsWith('http') ? socialImage : `https://fystack.io${socialImage}`;

    // Default dimensions - adjust if Fystack_logo.png has different dimensions
    const imageSize = socialImage === '/Fystack_logo.png' 
      ? { width: 1200, height: 1200 }  // Logo dimensions
      : { width: 1200, height: 630 };   // Blog post image dimensions

    return {
      title: `${post.title} | Fystack Blog`,
      description: post.meta_description || description,
      keywords: post.tags?.map(tag => tag.name).join(', '),
      openGraph: {
        title: post.og_title || post.title,
        description: post.og_description || description,
        type: 'article',
        publishedTime: post.published_at,
        authors: (post.authors?.length ? post.authors : [post.primary_author]).map((a) => a.name),
        tags: post.tags?.map(tag => tag.name),
        images: [
          {
            url: fullImageUrl,
            width: imageSize.width,
            height: imageSize.height,
            alt: post.title,
            type: socialImage.endsWith('.png') ? 'image/png' : 'image/jpeg',
          }
        ],
        url: `https://fystack.io/blog/${post.slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        site: '@fystack',
        creator: '@fystack',
        title: post.twitter_title || post.title,
        description: post.twitter_description || description,
        images: [fullImageUrl],
      },
      alternates: {
        canonical: `https://fystack.io/blog/${post.slug}`,
      },
      other: {
        'article:published_time': post.published_at,
        'article:author': (post.authors?.length ? post.authors : [post.primary_author]).map((a) => a.name).join(', '),
        'article:section': post.primary_tag?.name || 'Blog',
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error | Fystack Blog',
      description: 'An error occurred while loading this blog post.',
    };
  }
}

function generateBlogPostSchema(post: GhostPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.meta_description,
    image: post.feature_image || '/Fystack_logo.png',
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: (post.authors?.length ? post.authors : [post.primary_author]).map((a) => {
      const linkedin = AUTHOR_LINKEDIN[a.name] || a.website;
      return {
        '@type': 'Person',
        name: a.name,
        url: `https://fystack.io/author/${a.slug}`,
        ...(linkedin ? { sameAs: [linkedin] } : {}),
      };
    }),
    publisher: {
      '@type': 'Organization',
      name: 'Fystack',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fystack.io/Fystack_logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://fystack.io/blog/${post.slug}`
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://fystack.io'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://fystack.io/blog'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://fystack.io/blog/${post.slug}`
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await ghostAPI.getPostBySlug(slug);
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

  const blogPostSchema = generateBlogPostSchema(post);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      
      <main className="py-16">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
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
                  {post.tags.map((tag) => (
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
              {(() => {
                const authors = post.authors?.length ? post.authors : [post.primary_author];

                return (
                  <div className="flex flex-col gap-4 pb-6 border-b mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {authors.map((author) => (
                            <div
                              key={author.id ?? author.name}
                              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center overflow-hidden ring-2 ring-background"
                            >
                              {author.profile_image ? (
                                <Image
                                  src={author.profile_image}
                                  alt={author.name}
                                  width={40}
                                  height={40}
                                  className="rounded-full object-cover w-full h-full"
                                />
                              ) : (
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm font-semibold">
                                    {author.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground flex flex-wrap items-center gap-x-1 gap-y-0.5">
                            {authors.map((author, i) => {
                              const linkedin = AUTHOR_LINKEDIN[author.name] || author.website;
                              const separator =
                                i < authors.length - 2
                                  ? ", "
                                  : i === authors.length - 2
                                  ? " & "
                                  : "";
                              return (
                                <span key={author.id ?? author.name} className="inline-flex items-center gap-1">
                                  <span>{author.name}</span>
                                  {linkedin && (
                                    <Link
                                      href={linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={`${author.name} on LinkedIn`}
                                      className="text-[#0A66C2] hover:opacity-80 transition-opacity"
                                    >
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                      >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                      </svg>
                                    </Link>
                                  )}
                                  {separator && <span className="text-muted-foreground">{separator}</span>}
                                </span>
                              );
                            })}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {authors.length > 1 ? "Authors" : "Author"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{getReadingTime(post.reading_time)}</span>
                        </div>
                      </div>
                    </div>
                    {authors.some((a) => a.bio) && (
                      <div className="flex flex-col gap-2">
                        {authors
                          .filter((a) => a.bio)
                          .map((author) => (
                            <p
                              key={author.id ?? author.name}
                              className="text-xs text-muted-foreground max-w-2xl"
                            >
                              {authors.length > 1 && (
                                <span className="font-medium text-foreground">{author.name}: </span>
                              )}
                              {author.bio}
                            </p>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </header>

            {/* Featured Image */}
            {post.feature_image && (
              <div className="relative w-full mb-12">
                <div className="relative w-full">
                  <Image
                    src={post.feature_image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Article Content */}
            <BlogContentWithTOC html={post.html} />

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
                          
                          <div className="flex items-center justify-between pt-3 border-t border-muted/50">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 text-primary/60" />
                              <span className="font-medium">{formatDate(relatedPost.published_at)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                              <Clock className="w-3 h-3" />
                              <span className="font-medium">{getReadingTime(relatedPost.reading_time)}</span>
                            </div>
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

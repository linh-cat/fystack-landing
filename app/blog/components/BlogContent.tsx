"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, Tag } from "lucide-react";
import { formatDate, getReadingTime, type GhostPost } from "@/lib/ghost";

interface BlogContentProps {
  posts: GhostPost[];
  categories: string[];
  error: string | null;
}

export default function BlogContent({ posts, categories, error }: BlogContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tagFromUrl = searchParams.get('tag');
  
  const [selectedCategory, setSelectedCategory] = useState(() => {
    // Initialize with tag from URL if present and valid, otherwise "All posts"
    return tagFromUrl && categories.includes(tagFromUrl) ? tagFromUrl : "All posts";
  });

  // Update selected category when URL changes
  useEffect(() => {
    if (tagFromUrl && categories.includes(tagFromUrl)) {
      setSelectedCategory(tagFromUrl);
    } else if (!tagFromUrl) {
      setSelectedCategory("All posts");
    }
  }, [tagFromUrl, categories]);

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All posts" 
    ? posts 
    : posts.filter(post => 
        post.tags.some(tag => tag.name === selectedCategory)
      );

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL to reflect the selected category
    if (category === "All posts") {
      router.push('/blog', { scroll: false });
    } else {
      router.push(`/blog?tag=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  return (
    <main className="py-16">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Blog
            </h1>
            <p className="text-sm text-muted-foreground">
              {selectedCategory === "All posts" 
                ? "Updates from the Fystack team"
                : `Posts tagged with "${selectedCategory}"`
              }
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.slice(0, 7).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-foreground text-background'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {error ? (
          <div className="text-center py-20">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-destructive">{error}</p>
            </div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-muted rounded-lg p-12 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {selectedCategory === "All posts" ? "No posts yet" : `No posts found for "${selectedCategory}"`}
              </h3>
              <p className="text-muted-foreground">
                {selectedCategory === "All posts" 
                  ? "Check back soon for our latest insights and updates."
                  : "Try selecting a different category or check back later."
                }
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {filteredPosts[0] && (
              <div className="mb-16">
                <Link href={`/blog/${filteredPosts[0].slug}`} className="group">
                  <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-80">
                        {filteredPosts[0].feature_image ? (
                          <Image
                            src={filteredPosts[0].feature_image}
                            alt={filteredPosts[0].title}
                            fill
                            className="object-cover transition-transform duration-300"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <Tag className="w-16 h-16 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {filteredPosts[0].tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag.id}
                                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                              >
                                {tag.name}
                              </span>
                            ))}
                          </div>
                          
                          <h2 className="text-3xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                            {filteredPosts[0].title}
                          </h2>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                            {filteredPosts[0].excerpt && filteredPosts[0].excerpt.length > 200 
                              ? `${filteredPosts[0].excerpt.substring(0, 200)}...`
                              : filteredPosts[0].excerpt
                            }
                          </p>
                          
                          <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                                {filteredPosts[0].primary_author.profile_image ? (
                                  <Image
                                    src={filteredPosts[0].primary_author.profile_image}
                                    alt={filteredPosts[0].primary_author.name}
                                    width={20}
                                    height={20}
                                    className="rounded-full object-cover w-full h-full"
                                  />
                                ) : (
                                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                      {filteredPosts[0].primary_author.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <span>{filteredPosts[0].primary_author.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(filteredPosts[0].published_at)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{getReadingTime(filteredPosts[0].reading_time)}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
            )}

            {/* All Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      {post.feature_image ? (
                        <Image
                          src={post.feature_image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <Tag className="w-12 h-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag.id}
                              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                            >
                              {tag.name}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                              {post.primary_author.profile_image ? (
                                <Image
                                  src={post.primary_author.profile_image}
                                  alt={post.primary_author.name}
                                  width={24}
                                  height={24}
                                  className="rounded-full object-cover w-full h-full"
                                />
                              ) : (
                                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    {post.primary_author.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {post.primary_author.name}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatDate(post.published_at)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
} 
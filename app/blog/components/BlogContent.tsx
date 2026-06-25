"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Calendar, Clock, Tag, Search, X } from "lucide-react";
import { formatDate, getReadingTime, type GhostPost } from "@/lib/ghost";

const POSTS_PER_PAGE = 9;

interface BlogContentProps {
  posts: GhostPost[];
  categories: string[];
  error: string | null;
}

function getPageNumbers(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | "ellipsis")[] = [1];
  if (currentPage > 3) pages.push("ellipsis");
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }
  if (currentPage < totalPages - 2) pages.push("ellipsis");
  pages.push(totalPages);
  return pages;
}

export default function BlogContent({ posts, categories, error }: BlogContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tagFromUrl = searchParams.get("tag");
  const postsTopRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState(() =>
    tagFromUrl && categories.includes(tagFromUrl) ? tagFromUrl : "All posts"
  );
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(searchInput);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (tagFromUrl && categories.includes(tagFromUrl)) {
      setSelectedCategory(tagFromUrl);
    } else if (!tagFromUrl) {
      setSelectedCategory("All posts");
    }
  }, [tagFromUrl, categories]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === "All posts") {
      router.push("/blog", { scroll: false });
    } else {
      router.push(`/blog?tag=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    postsTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Filter by tag + search
  const filteredPosts = posts.filter((post) => {
    const matchesTag =
      selectedCategory === "All posts" ||
      post.tags.some((t) => t.name === selectedCategory);
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      (post.excerpt ?? "").toLowerCase().includes(q) ||
      post.tags.some((t) => t.name.toLowerCase().includes(q));
    return matchesTag && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const pagedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const showFeatured = currentPage === 1 && !searchQuery;
  const featuredPost = showFeatured ? (pagedPosts[0] ?? null) : null;
  const gridPosts = showFeatured ? pagedPosts.slice(1) : pagedPosts;

  return (
    <main className="py-16">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Blog</h1>
            <p className="text-sm text-muted-foreground">
              {selectedCategory === "All posts"
                ? "Updates from the Fystack team"
                : `Posts tagged with "${selectedCategory}"`}
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              placeholder="Search posts…"
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9 pr-9"
            />
            {searchInput && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll anchor */}
        <div ref={postsTopRef} />

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
                {searchQuery
                  ? `No posts match "${searchQuery}"`
                  : selectedCategory === "All posts"
                  ? "No posts yet"
                  : `No posts found for "${selectedCategory}"`}
              </h3>
              <p className="text-muted-foreground">
                {searchQuery
                  ? "Try a different keyword or clear the search."
                  : selectedCategory === "All posts"
                  ? "Check back soon for our latest insights and updates."
                  : "Try selecting a different category or check back later."}
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Post — page 1, no search only */}
            {featuredPost && (
              <div className="mb-16">
                <Link href={`/blog/${featuredPost.slug}`} className="group">
                  <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
                      <div className="relative w-full h-[300px] lg:h-full">
                        {featuredPost.feature_image ? (
                          <Image
                            src={featuredPost.feature_image}
                            alt={featuredPost.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <Tag className="w-16 h-16 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center min-h-[400px] lg:min-h-0">
                        <div className="space-y-6">
                          <div className="flex flex-wrap gap-2">
                            {featuredPost.tags.slice(0, 2).map((tag) => (
                              <span key={tag.id} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                                {tag.name}
                              </span>
                            ))}
                          </div>

                          <h2 className="text-3xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h2>

                          <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                            {featuredPost.excerpt && featuredPost.excerpt.length > 200
                              ? `${featuredPost.excerpt.substring(0, 200)}...`
                              : featuredPost.excerpt}
                          </p>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-muted/50">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center overflow-hidden ring-2 ring-background shadow-sm">
                                {featuredPost.primary_author.profile_image ? (
                                  <Image
                                    src={featuredPost.primary_author.profile_image}
                                    alt={featuredPost.primary_author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full object-cover w-full h-full"
                                  />
                                ) : (
                                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-semibold">
                                      {featuredPost.primary_author.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">{featuredPost.primary_author.name}</span>
                                <span className="text-xs text-muted-foreground">Author</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 flex-shrink-0 text-primary/60" />
                                <span className="font-medium">{formatDate(featuredPost.published_at)}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 flex-shrink-0 text-primary/60" />
                                <span className="font-medium">{getReadingTime(featuredPost.reading_time)}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
            )}

            {/* Posts Grid */}
            {gridPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {gridPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300">
                      <div className="relative h-64 bg-muted/30">
                        {post.feature_image ? (
                          <Image
                            src={post.feature_image}
                            alt={post.title}
                            fill
                            className="object-contain transition-transform duration-300"
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
                              <span key={tag.id} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
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

                          <div className="pt-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-muted rounded-full flex items-center justify-center overflow-hidden ring-1 ring-muted-foreground/10">
                                  {post.primary_author.profile_image ? (
                                    <Image
                                      src={post.primary_author.profile_image}
                                      alt={post.primary_author.name}
                                      width={28}
                                      height={28}
                                      className="rounded-full object-cover w-full h-full"
                                    />
                                  ) : (
                                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                      <span className="text-white text-xs font-semibold">
                                        {post.primary_author.name.charAt(0).toUpperCase()}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <span className="text-sm font-medium text-foreground truncate">
                                  {post.primary_author.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                                <Clock className="w-3 h-3 flex-shrink-0" />
                                <span className="font-medium">{getReadingTime(post.reading_time)}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 flex-shrink-0 text-primary/60" />
                              <span className="font-medium">{formatDate(post.published_at)}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => { e.preventDefault(); if (currentPage > 1) handlePageChange(currentPage - 1); }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>

                    {getPageNumbers(currentPage, totalPages).map((page, i) =>
                      page === "ellipsis" ? (
                        <PaginationItem key={`ellipsis-${i}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            isActive={page === currentPage}
                            onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    )}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) handlePageChange(currentPage + 1); }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>

                <p className="text-center text-xs text-muted-foreground mt-3">
                  Page {currentPage} of {totalPages} — {filteredPosts.length} posts
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

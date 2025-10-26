"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Globe } from 'lucide-react';

interface LinkMetadata {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  site_name?: string;
  author?: string;
  published_time?: string;
}

interface ExternalLinkPreviewProps {
  url: string;
  children?: React.ReactNode;
}

export default function ExternalLinkPreview({ url, children }: ExternalLinkPreviewProps) {
  const [metadata, setMetadata] = useState<LinkMetadata | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMetadata = async () => {
      if (!url) return;
      
      setLoading(true);
      setError(false);
      
      try {
        // For now, we'll create a basic preview structure
        // In a real implementation, you'd want to fetch the actual metadata from the URL
        const urlObj = new URL(url);
        const basicMetadata: LinkMetadata = {
          url,
          title: children?.toString() || urlObj.hostname,
          description: `Visit ${urlObj.hostname}`,
          site_name: urlObj.hostname,
        };
        
        setMetadata(basicMetadata);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, [url, children]);

  if (loading) {
    return (
      <div className="my-6 p-4 border border-border rounded-lg bg-muted/30 animate-pulse">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-muted rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !metadata) {
    return (
      <Link 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
      >
        {children || url}
        <ExternalLink className="w-4 h-4" />
      </Link>
    );
  }

  return (
    <div className="my-6">
      <Link 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 bg-background">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            {metadata.image && (
              <div className="md:w-48 md:flex-shrink-0">
                <div className="relative w-full h-32 md:h-full overflow-hidden">
                  <Image
                    src={metadata.image}
                    alt={metadata.title || 'Link preview'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            )}
            
            {/* Content */}
            <div className="flex-1 p-4 space-y-3">
              {/* Title */}
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {metadata.title}
              </h4>
              
              {/* Description */}
              {metadata.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {metadata.description}
                </p>
              )}
              
              {/* Meta info */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                {metadata.site_name && (
                  <div className="flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    <span>{metadata.site_name}</span>
                  </div>
                )}
                {metadata.author && (
                  <span>• {metadata.author}</span>
                )}
                {metadata.published_time && (
                  <span>• {new Date(metadata.published_time).toLocaleDateString()}</span>
                )}
                <ExternalLink className="w-3 h-3 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 
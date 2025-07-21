import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any paths you want to block from crawling
    },
    sitemap: 'https://fystack.io/sitemap.xml',
  };
} 
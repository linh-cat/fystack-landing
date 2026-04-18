/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
    ],
  },
  async headers() {
    // Vercel's default for /public/* is `public, max-age=0, must-revalidate`,
    // which forces an origin round-trip on every request. Override with a
    // long immutable cache — Next.js appends ?dpl=<deployment-id> to public
    // assets, so a new deploy naturally produces new URLs.
    return [
      {
        source: '/:all*(svg|png|jpg|jpeg|webp|gif|ico|avif|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

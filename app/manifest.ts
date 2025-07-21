import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fystack - Secure crypto wallet infrastructure',
    short_name: 'Fystack',
    description: 'Secure MPC wallet platform for developers. Create hack-resistant wallets with enterprise-grade security.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/Fystack_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/Fystack_logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
} 
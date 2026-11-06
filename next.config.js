/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/quality',
        destination: '/capabilities/quality-assurance',
        permanent: true,
      },
      {
        source: '/capabilities',
        destination: '/capabilities/manufacturing',
        permanent: false,
      },
      {
        source: '/capabilities/custom-solutions',
        destination: '/capabilities/manufacturing',
        permanent: false,
      },
      {
        source: '/about/our-story',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/about/mission-vision',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/about/team',
        destination: '/about',
        permanent: false,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;


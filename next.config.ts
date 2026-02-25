import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend-cliperr-production.up.railway.app',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

export default nextConfig;

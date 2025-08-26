/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github-readme-stats.vercel.app'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;


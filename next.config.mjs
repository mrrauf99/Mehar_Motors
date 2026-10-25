/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    deviceSizes: [512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    qualities: [75, 84, 86, 88]
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;

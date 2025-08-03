/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  output: 'standalone',
  compress: true,
  poweredByHeader: false
}

module.exports = nextConfig 
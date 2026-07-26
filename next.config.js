/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/my-event-nextjs-lab4',
  assetPrefix: '/my-event-nextjs-lab4/',
  images: {
    unoptimized: true, // Required for static export
  },
  // Add this to suppress hydration warnings
  reactStrictMode: false,
}

module.exports = nextConfig

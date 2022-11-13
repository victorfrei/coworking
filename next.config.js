/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com','tailwindui.com','flowbite.com','flowbite.s3.amazonaws.com'],
  },
}

module.exports = nextConfig

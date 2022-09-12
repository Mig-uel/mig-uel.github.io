/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['miguelcastillo.net', 'localhost', 'raw.githubusercontent.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

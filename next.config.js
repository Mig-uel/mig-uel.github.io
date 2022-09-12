/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['miguelcastillo.net', 'localhost'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
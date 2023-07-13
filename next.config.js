/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/kncalderong/job-listing/assets/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig

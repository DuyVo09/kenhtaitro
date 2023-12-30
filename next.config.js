/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'serverless',
    experimental: {
      outputFileTracing: true,
    },
}

module.exports = nextConfig

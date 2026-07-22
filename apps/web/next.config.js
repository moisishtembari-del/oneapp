/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@oneapp/types', '@oneapp/ui', '@oneapp/utils'],
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Dice a Next.js di ignorare gli errori TypeScript e saltare i controlli automatici dei pacchetti
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

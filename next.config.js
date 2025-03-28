/** @type {import('next').NextConfig} */
const nextConfig = {
    // Netlify uchun
    output: "export",
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    // Netlify-da baland chastotali so'rovlarni oldini olish
    poweredByHeader: false,
    // Netlify uchun statik eksport
    distDir: 'out',
};

module.exports = nextConfig;

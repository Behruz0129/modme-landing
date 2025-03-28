/** @type {import('next').NextConfig} */
const nextConfig = {
    // Netlify uchun
    output: "export",
    images: {
        unoptimized: true,
        domains: ['example.com'], // agar tashqi manbalardan rasm bo'lsa
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/modme-landing",
    assetPrefix: "/modme-landing/",
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;

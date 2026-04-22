const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    turbopack: {
        root: __dirname,
    },
    outputFileTracingRoot: __dirname,
};

module.exports = withNextIntl(nextConfig);

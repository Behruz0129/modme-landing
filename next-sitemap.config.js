/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://modme.uz',
  generateRobotsTxt: true,
  outDir: 'out',
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://modme.uz'}/sitemap.xml`,
    ],
  },
} 
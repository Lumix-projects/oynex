/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://oynex.vercel.app/",
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    {
      loc: "/", // الصفحة الرئيسية
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/about",
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/products",
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ],
};

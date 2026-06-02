/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://wooferdigital.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/"] },
    ],
  },
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/services": 0.9,
      "/industries": 0.9,
      "/locations": 0.8,
      "/about": 0.8,
      "/contact": 0.9,
      "/case-studies": 0.8,
      "/blog": 0.7,
    };

    let priority = 0.6;
    if (priorityMap[path] !== undefined) {
      priority = priorityMap[path];
    } else if (path.startsWith("/services/") && path.split("/").length === 3) {
      priority = 0.9;
    } else if (path.startsWith("/services/")) {
      priority = 0.8;
    } else if (path.startsWith("/industries/")) {
      priority = 0.8;
    } else if (path.startsWith("/locations/")) {
      priority = 0.7;
    } else if (path.startsWith("/case-studies/")) {
      priority = 0.75;
    } else if (path.startsWith("/blog/")) {
      priority = 0.6;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

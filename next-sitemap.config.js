/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.geekytechh.in",
  generateRobotsTxt: true,
  outDir: "./public",
  exclude: ["/admin*", "/api/*"],
};

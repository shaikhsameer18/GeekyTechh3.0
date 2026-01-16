/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://geekytechh.in",
  generateRobotsTxt: true,
  outDir: "./public",
  exclude: ["/admin*", "/api/*"],
};

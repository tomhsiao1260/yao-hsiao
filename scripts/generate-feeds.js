// Generates public/sitemap.xml and public/rss.xml from blogs/articles.json
const fs = require("fs");
const path = require("path");
const articles = require("../blogs/articles.json");
const site = require("../site.config.json");

const publicPath = path.join(__dirname, "..", "public");

const escapeXml = (text) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toDate = (date) => new Date(`${date.replace(/\./g, "-")}T00:00:00Z`);

const sortedArticles = [...articles].sort((a, b) => toDate(b.date) - toDate(a.date));

const sitemapUrls = [
  `  <url><loc>${site.url}/</loc></url>`,
  ...sortedArticles.map(
    ({ route, date }) =>
      `  <url><loc>${site.url}/${route}</loc><lastmod>${toDate(date).toISOString().slice(0, 10)}</lastmod></url>`
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>
`;

const rssItems = sortedArticles.map(
  ({ title, route, date, description }) => `    <item>
      <title>${escapeXml(title)}</title>
      <link>${site.url}/${route}</link>
      <guid>${site.url}/${route}</guid>
      <pubDate>${toDate(date).toUTCString()}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`
);

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${site.url}/</link>
    <description>${escapeXml(site.description)}</description>
    <language>zh-Hant</language>
${rssItems.join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(publicPath, "rss.xml"), rss);

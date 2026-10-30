# Yao Hsiao's Blog

Personal blog built with Next.js (Pages Router), TypeScript, Tailwind CSS and MDX. Math is rendered with KaTeX, and every page is statically generated at build time.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Commands

```bash
npm run dev        # start the development server
npm run build      # generate sitemap and RSS, then export static files to out/
npx serve out      # preview the production build
npm run lint       # run ESLint
npx tsc --noEmit   # run the type check
```

## Project Structure

```
blogs/                       articles (.mdx), article index and article styles
components/                  shared React components
pages/index.tsx              article list
pages/[blogId]/index.tsx     article page
public/blogs/<route>/        images for each article
scripts/generate-feeds.js    generates sitemap.xml and rss.xml at build time
site.config.json             site URL, title and description
styles/globals.scss          global styles
```

## Adding an Article

1. Create `blogs/<route>.mdx`.
2. Add an entry to `blogs/articles.json`. The `route` must match the file name without its extension, and `date` uses the `YYYY.MM.DD` format.

   ```json
   {
     "title": "Article title",
     "date": "2026.01.31",
     "route": "article-route",
     "description": "One sentence shown on the article list."
   }
   ```

3. Put images in `public/blogs/<route>/` and reference them as `/blogs/<route>/image-name.jpg`.
4. To show two images side by side, wrap them in `<p className="image-pair">`. They stack vertically on phones.

import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint so dark mode users don't see a white flash
const setThemeScript = `
try {
  if (JSON.parse(localStorage.getItem("is-dark-mode") || "true")) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {
  document.documentElement.classList.add("dark");
}
`;

export default function Document() {
  return (
    <Html lang="zh-Hant">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Yao Hsiao"
          href="/rss.xml"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

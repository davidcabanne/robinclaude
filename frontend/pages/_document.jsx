import { Html, Head, Main, NextScript } from "next/document";

import {
  indexTitle,
  indexDescription,
  indexImage_secure_url,
  indexImage,
} from "@/seo";

export default function Document() {
  return (
    <Html lang="en">
      <title>{indexTitle}</title>
      <meta name="description" content={indexDescription} />

      <meta property="og:title" content={indexTitle} />
      <meta property="og:url" content="https://www.synchronized.tv" />
      <meta
        property="og:site_name"
        content="Synchronized | In-Video Intelligence"
      />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={indexDescription} />
      <meta property="og:image:secure_url" content={indexImage_secure_url} />
      <meta property="og:image" content={indexImage} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="384" />
      <meta property="og:image:height" content="216" />

      <meta name="twitter:card" content={indexTitle} />
      <meta name="twitter:site" content="@RobinClaude" />
      <meta name="twitter:title" content={indexTitle} />
      <meta name="twitter:description" content={indexDescription} />
      <meta name="twitter:image" content={indexImage_secure_url} />

      <meta
        name="keywords"
        content="Robin Claude, director, editor, video, videos, film, films, editing, reel, projects, movies, camera"
      />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="icon"
        type="image/x-icon"
        sizes="any"
        href="/images/favicon.ico"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.ico" />
      <link
        rel="icon"
        type="image/x-icon"
        sizes="32x32"
        href="/images/favicon.ico"
      />
      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16"
        href="/images/favicon.ico"
      />

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

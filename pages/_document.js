import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B8494" />
        <meta name="description" content="Recap is a dementia-care app with Apple Foundation Models on supported iPhones, custom AI fallback, and mood journaling." />
        <meta property="og:title" content="Recap - Memory Care App" />
        <meta property="og:description" content="Dual-provider AI memory care with Apple Foundation Models, custom AI fallback, and mood journaling for patients and families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.recap.djdiptayan.in" />
        <meta property="og:image" content="https://recap.djdiptayan.in/screenshots/landing.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

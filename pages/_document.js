import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B8494" />
        <meta name="description" content="Recap is a dementia-care app that combines Apple Foundation Models on supported iPhones with custom AI fallback and mood journaling to support Alzheimer's patients and caregivers." />
        <meta property="og:title" content="Recap - Memory Care App" />
        <meta property="og:description" content="Recap provides memory care for Alzheimer's patients using dual-provider AI (Apple Foundation Models with custom fallback) and mood journaling to support patients and their families." />
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

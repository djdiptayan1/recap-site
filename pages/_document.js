import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="description" content="Recap - An innovative memory care app designed for Alzheimer's patients and their caregivers" />
        <meta property="og:title" content="Recap - Memory Care App" />
        <meta property="og:description" content="Bridging the gap between family members and Alzheimer's patients with compassion and care" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.recapapp.com" />
        <meta property="og:image" content="https://www.recapapp.com/og-image.jpg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import "@/styles/globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Recap - Every Memory Matters</title>
      </Head>
      <Navbar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

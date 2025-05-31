import "@/styles/globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>

      <Navbar />
      <div className="pt-10">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

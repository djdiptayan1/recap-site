import "@/styles/globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Head from "next/head";
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Recap - Every Memory Matters</title>
      </Head>
      <Navbar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

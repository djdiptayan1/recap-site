import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext } from 'react';
import { config } from "../../config"
import { ThemeContext } from "../../pages/_app";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 fixed w-full z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image src="/recapLogo.svg" alt="Recap Logo" width={36} height={36} className="mr-2" />
                            <span className="text-xl font-bold text-[#0B8494]">Recap</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-sm font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-sm font-medium transition-colors">
                            Features
                        </Link>
                        <Link href="/guidelines" className="text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-sm font-medium transition-colors">
                            Guidelines
                        </Link>
                        <Link href="/support" className="text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-sm font-medium transition-colors">
                            Support
                        </Link>
                        <Link href="/screenshots" className="text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-sm font-medium transition-colors">
                            Screenshots
                        </Link>
                        <Link href="/privacyPolicy" className="text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-sm font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {darkMode ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <a
                            href={config.appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 bg-[#0B8494] hover:bg-[#097383] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            Download App
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#0B8494]"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pb-4">
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        <Link href="/" className="block text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/features" className="block text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                            Features
                        </Link>
                        <Link href="/guidelines" className="block text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                            Guidelines
                        </Link>
                        <Link href="/support" className="block text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                            Support
                        </Link>
                        <Link href="/screenshots" className="block text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                            Screenshots
                        </Link>
                        <Link href="/privacyPolicy" className="block text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                            Privacy Policy
                        </Link>
                        <button
                            onClick={toggleDarkMode}
                            className="flex items-center w-full text-gray-600 dark:text-gray-300 hover:text-[#0B8494] px-3 py-2 text-base font-medium"
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {darkMode ? (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    Light Mode
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    Dark Mode
                                </>
                            )}
                        </button>
                        <a
                            href={config.appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[#0B8494] hover:bg-[#097383] text-white px-4 py-2 rounded-lg text-base font-medium mt-4 mx-3 text-center"
                        >
                            Download App
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
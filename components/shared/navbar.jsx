import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#F4F6FF] dark:bg-gray-900 fixed w-full z-50 shadow-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            {/* App logo */}
                            <Image src="/recapLogo.svg" alt="Recap Logo" width={40} height={40} className="mr-2" />
                            <span className="text-2xl font-bold text-[#0B8494] dark:text-[#0B8494]">Recap</span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/features" className="text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-sm font-medium">
                            Features
                        </Link>
                        <Link href="/guidelines" className="text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-sm font-medium">
                            Guidelines
                        </Link>
                        <Link href="/support" className="text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-sm font-medium">
                            Support
                        </Link>
                        <Link href="/privacyPolicy" className="text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-sm font-medium">
                            Privacy Policy
                        </Link>
                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-8 bg-[#0B8494] hover:bg-[#097383] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Download App
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494]"
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
                <div className="md:hidden bg-[#F4F6FF] dark:bg-gray-900 shadow-lg pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-base font-medium">
                            Home
                        </Link>
                        <Link href="/features" className="block text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-base font-medium">
                            Features
                        </Link>
                        <Link href="/guidelines" className="block text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-base font-medium">
                            Guidelines
                        </Link>
                        <Link href="/support" className="block text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-base font-medium">
                            Support
                        </Link>
                        <Link href="/privacyPolicy" className="block text-gray-700 dark:text-gray-200 hover:text-[#0B8494] dark:hover:text-[#0B8494] px-3 py-2 text-base font-medium">
                            Privacy Policy
                        </Link>
                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-[#0B8494] hover:bg-[#097383] text-white px-4 py-2 rounded-md text-base font-medium mt-4 mx-3 text-center"
                        >
                            Download App
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
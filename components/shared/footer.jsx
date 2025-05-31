import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 shadow-inner">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-xl font-bold text-purple-700 dark:text-purple-400">Recap</h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Bridging the gap between family members and Alzheimer's patients with compassion, creativity, and curiosity.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1">
                        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase mb-4">
                            Navigation
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/guidelines" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    App Guidelines
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="col-span-1">
                        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase mb-4">
                            Support
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacyPolicy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    Privacy Policy
                                </Link>
                            </li>
                            {/* <li>
                                <a href="mailto:recapsdk@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    Contact Us
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    {/* Download */}
                    <div className="col-span-1">
                        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase mb-4">
                            Download
                        </h2>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="https://apps.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-36"
                            >
                                <Image
                                    src="/app-store-badge.svg"
                                    alt="Download on the App Store"
                                    width={150}
                                    height={50}
                                    className="h-auto w-auto"
                                    priority
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-sm text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400">
                                    Download on the App Store
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Copyright */}
                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Recap App. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
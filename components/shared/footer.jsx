import Link from 'next/link';
import Image from 'next/image';
import { config } from "../../config"

export default function Footer() {
    return (
        <footer className="bg-[#F4F6FF] dark:bg-gray-900 shadow-inner">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center">
                                <Image src="/recapLogo.svg" alt="Recap Logo" width={30} height={30} className="mr-2" />
                                <h1 className="text-xl font-bold text-[#0B8494] dark:text-[#0B8494]">Recap</h1>
                            </div>
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
                                <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/guidelines" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
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
                                <Link href="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacyPolicy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
                                    Privacy Policy
                                </Link>
                            </li>
                            {/* <li>
                                <a href="mailto:recapsdk@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
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
                                href={config.appLink}
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
                                <span className="hidden text-sm text-gray-600 dark:text-gray-400 hover:text-[#0B8494] dark:hover:text-[#0B8494]">
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
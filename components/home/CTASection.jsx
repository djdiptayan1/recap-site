import Image from 'next/image';
import Link from 'next/link';
import { config } from "../../config"

export default function CTASection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Start Supporting Memory Care Today
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Download Recap on the App Store and begin a structured, science-informed approach to memory care for your loved ones.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href={config.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#0B8494] text-white font-semibold rounded-xl hover:bg-[#097383] transition-all duration-300 shadow-lg"
                    >
                        Download on the App Store
                    </a>
                    <Link
                        href="/support"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0B8494]/30 text-[#0B8494] font-semibold rounded-xl hover:border-[#0B8494] transition-all duration-300"
                    >
                        Get Support
                    </Link>
                </div>

                <div className="flex justify-center gap-6">
                    <Image
                        src="/screenshots/landing.png"
                        alt="Recap App - Role Selection"
                        width={180}
                        height={320}
                        className="rounded-xl shadow-lg object-cover"
                    />
                    <Image
                        src="/screenshots/games.png"
                        alt="Recap App - Memory Games"
                        width={180}
                        height={320}
                        className="rounded-xl shadow-lg object-cover hidden sm:block"
                    />
                    <Image
                        src="/screenshots/report.png"
                        alt="Recap App - Progress Reports"
                        width={180}
                        height={320}
                        className="rounded-xl shadow-lg object-cover hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
}

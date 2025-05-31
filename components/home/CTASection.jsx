import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="bg-purple-700 dark:bg-purple-900">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Ready to transform the way you approach memory care?
                        </h2>
                        <p className="mt-4 text-lg text-purple-100">
                            Download Recap today and start fostering deeper connections with your loved ones facing Alzheimer's challenges.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://apps.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-purple-700 hover:bg-purple-50 transition-colors"
                            >
                                Download Now
                            </a>
                            <Link
                                href="/support"
                                className="inline-flex items-center justify-center px-6 py-3 border border-purple-300 text-base font-medium rounded-md text-white hover:bg-purple-800 transition-colors"
                            >
                                Get Support
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <div className="pl-0 lg:pl-8">
                            <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg p-4">
                                {/* Replace with app preview */}
                                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
                                    <span className="text-gray-500 dark:text-gray-400 text-center p-12">
                                        App Preview
                                        <br />
                                        (Replace with app mockup or screenshot)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

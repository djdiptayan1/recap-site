import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase">Why Recap Matters</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Making a Meaningful Difference
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Memory recall challenges in Alzheimer's can feel like an invisible barrier, quietly impacting daily life and accelerating cognitive decline.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            But what if we could slow that progression while empowering patients and caregivers alike? We got you - Recap is here to do just that.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            By addressing memory recall proactively, Recap helps enhance the quality of life for millions worldwide, offering a lifeline of hope, connection, and engagement.
                        </p>
                        <div className="mt-10 flex justify-start">
                            <a
                                href="https://apps.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                            >
                                Try It Now
                            </a>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
                        {/* Placeholder for image - replace with your image */}
                        <div className="w-full h-80 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-500 dark:text-gray-400">
                                Image showing a person using the app
                                <br />
                                (Replace with your image)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-8">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                <span className="block">Bridge the gap with</span>
                                <span className="block text-purple-600 dark:text-purple-400">Recap</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-md">
                                An innovative app designed to support memory recall and foster deeper connections for Alzheimer's patients and their loved ones.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                            <a
                                href="https://apps.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                            >
                                Download App
                            </a>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-96 lg:h-full">
                        {/* Here you would place a screenshot of your app */}
                        <div className="h-full w-full relative rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-900 p-2">
                            {/* Placeholder image - replace with your app screenshot */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                                <span className="text-gray-500 dark:text-gray-400 text-center p-4">
                                    App Screenshot
                                    <br />
                                    (Upload your app screenshot here)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave pattern at bottom */}
            {/* <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,144C672,107,768,85,864,101.3C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        className="fill-white dark:fill-gray-900"
                    ></path>
                </svg>
            </div> */}
        </section>
    );
}

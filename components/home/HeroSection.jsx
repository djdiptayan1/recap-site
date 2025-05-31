import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#B0E0E0]/50 via-[#D4E7E7]/50 to-[#EFB9CC]/50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#0B8494]/20 rounded-full blur-lg animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-[#EFB9CC]/30 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[70vh]">

                    {/* Content Section */}
                    <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">

                        {/* Badge */}
                        <div className="inline-flex items-center justify-center lg:justify-start">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/80 text-[#0B8494] shadow-sm backdrop-blur-sm">
                                <span className="w-2 h-2 bg-[#0B8494] rounded-full mr-2 animate-pulse"></span>
                                Memory Care Innovation
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-800 dark:text-white leading-[1.1] tracking-tight">
                                <span className="block mb-2">Bridge the gap with</span>
                                <span className="block text-[#0B8494] dark:text-[#0B8494] relative">
                                    Recap
                                    <div className="absolute -bottom-2 left-0 lg:left-0 w-full h-1 bg-gradient-to-r from-[#0B8494] to-[#EFB9CC] rounded-full transform scale-x-0 animate-pulse"></div>
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="max-w-xl mx-auto lg:mx-0">
                            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                An innovative app designed to support memory recall and foster deeper connections for Alzheimer's patients and their loved ones.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 justify-center lg:justify-start">
                            <a
                                href="https://apps.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-semibold rounded-xl bg-[#0B8494] text-white hover:bg-[#097383] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Download App
                            </a>
                            <a
                                href="#how-it-works"
                                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-[#0B8494]/30 text-base md:text-lg font-semibold rounded-xl bg-white/70 backdrop-blur-sm text-[#0B8494] hover:bg-white hover:border-[#0B8494] dark:bg-gray-800/70 dark:text-[#0B8494] dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Learn More
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats or Features */}
                        <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0">
                            <div className="text-center lg:text-left">
                                <div className="text-xl md:text-2xl font-bold text-[#0B8494]">10K+</div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl md:text-2xl font-bold text-[#0B8494]">4.9★</div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">App Rating</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl md:text-2xl font-bold text-[#0B8494]">24/7</div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                            {/* Main App Container */}
                            <div className="relative transform hover:scale-105 transition-all duration-500">

                                {/* Actual App Screenshot */}
                                <div className="relative overflow-hidden">
                                    <Image
                                        src="/screenshots/landing.png"
                                        alt="Recap App Screenshot - Role Selection Screen"
                                        width={400}
                                        height={600}
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Floating elements around the phone */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EFB9CC] rounded-full shadow-lg animate-bounce delay-300"></div>
                                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#0B8494] rounded-full shadow-lg animate-bounce delay-700"></div>
                                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-white rounded-full shadow-lg animate-bounce delay-500"></div>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B8494]/20 to-[#EFB9CC]/20 rounded-3xl transform rotate-1 scale-105"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
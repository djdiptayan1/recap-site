import Image from 'next/image';
import { config } from "../../config"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-[#B0E0E0]/30 via-white to-[#EFB9CC]/20 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[75vh]">

                    {/* Content Section */}
                    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center justify-center lg:justify-start">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#0B8494]/10 text-[#0B8494]">
                                Evidence-Based Memory Care
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-[1.1] tracking-tight">
                            <span className="block mb-2">Supporting Memory,</span>
                            <span className="block text-[#0B8494]">One Day at a Time</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Recap is a holistic memory-care ecosystem combining <strong>dual-provider AI companionship</strong>, <strong>daily cognitive exercises</strong>, <strong>mood journaling</strong>, and <strong>family collaboration</strong> — empowering Alzheimer&apos;s patients and caregivers through science-backed engagement.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <a
                                href={config.appLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl bg-[#0B8494] text-white hover:bg-[#097383] transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Download on the App Store
                            </a>
                            <a
                                href="#science"
                                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-[#0B8494]/30 text-base md:text-lg font-semibold rounded-xl bg-white/70 text-[#0B8494] hover:border-[#0B8494] dark:bg-gray-800/70 transition-all duration-300"
                            >
                                The Science Behind It
                            </a>
                        </div>

                        {/* Real Alzheimer's stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0">
                            <div className="text-center lg:text-left">
                                <div className="text-xl md:text-2xl font-bold text-[#0B8494]">55M+</div>
                                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">People with Dementia Worldwide</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl md:text-2xl font-bold text-[#0B8494]">Dual AI</div>
                                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Apple + Custom Routing</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl md:text-2xl font-bold text-[#0B8494]">3 Stages</div>
                                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Early, Middle &amp; Advanced</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative max-w-xs md:max-w-sm">
                            <div className="relative">
                                <Image
                                    src="https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/r9h7ej4mm8gt3bedt2dq.png"
                                    alt="Recap App - Patient Home Screen"
                                    width={350}
                                    height={600}
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B8494]/10 to-[#EFB9CC]/10 rounded-3xl transform rotate-2 scale-105"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

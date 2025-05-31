import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#F0F9FF] via-white to-[#F4F6FF]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: 'var(--foreground)' }}>
                                Why Recap
                                <span style={{ color: 'var(--primary-color)' }}>
                                    {" "}Matters
                                </span>
                            </h2>
                            <div className="w-24 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                        </div>

                        {/* Subheading */}
                        <h3 className="text-2xl lg:text-3xl font-semibold" style={{ color: 'var(--foreground)' }}>
                            Making a Meaningful Difference
                        </h3>

                        {/* Description paragraphs with enhanced styling */}
                        <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--secondary-text)' }}>
                            <div className="relative pl-6 border-l-4" style={{ borderColor: 'var(--primary-light)' }}>
                                <p>
                                    Memory recall challenges in Alzheimer's can feel like an <strong style={{ color: 'var(--foreground)' }}>invisible barrier</strong>, quietly impacting daily life and accelerating cognitive decline.
                                </p>
                            </div>

                            <div className="relative pl-6 border-l-4" style={{ borderColor: 'var(--primary-color)' }}>
                                <p>
                                    But what if we could slow that progression while empowering patients and caregivers alike? <strong style={{ color: 'var(--primary-color)' }}>We got you</strong> – Recap is here to do just that.
                                </p>
                            </div>

                            <div className="relative pl-6 border-l-4" style={{ borderColor: 'var(--primary-light)' }}>
                                <p>
                                    By addressing memory recall proactively, Recap helps enhance the quality of life for <strong style={{ color: 'var(--foreground)' }}>millions worldwide</strong>, offering a lifeline of hope, connection, and engagement.
                                </p>
                            </div>
                        </div>

                        {/* Enhanced CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group relative px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden" style={{ backgroundColor: 'var(--primary-color)' }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--primary-color)', filter: 'brightness(0.9)' }}></div>
                                <span className="relative flex items-center justify-center">
                                    Try It Now
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative">
                        {/* Main image container with enhanced styling */}
                        <div className="relative group">
                            {/* Decorative background */}
                            <div className="absolute inset-0 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                            <div className="absolute inset-0 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}></div>

                            {/* Image container */}
                            <div className="relative p-2 rounded-3xl shadow-2xl" style={{ backgroundColor: 'var(--card-bg)' }}>
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                    <Image
                                        src="/screenshots/patientHome.png"
                                        alt="Recap app interface showing memory assistance features"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
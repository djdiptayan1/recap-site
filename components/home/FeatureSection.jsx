import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        title: 'Family View',
        description: 'Connect with your loved ones through photos, emergency contacts, and real-time access to patient data for better care coordination.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        gradient: 'from-blue-500 to-purple-600'
    },
    {
        title: 'Daily Questions',
        description: 'Personalized questions that strengthen bonds and create meaningful conversations. Family members can add custom questions.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        gradient: 'from-green-500 to-teal-600'
    },
    {
        title: 'Memory Games',
        description: 'Engaging cognitive exercises and brain training games designed to keep minds active and support memory health.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        gradient: 'from-yellow-500 to-orange-600'
    },
    {
        title: 'Progress Tracking',
        description: 'Comprehensive analytics and detailed reports to monitor memory improvements and share insights with healthcare providers.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        gradient: 'from-indigo-500 to-blue-600'
    },
    {
        title: 'Educational Resources',
        description: 'Access evidence-based articles about Alzheimer\'s care, tips from experts, and stories from other families on similar journeys.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        gradient: 'from-pink-500 to-rose-600'
    },
    {
        title: 'Secure Data Sharing',
        description: 'Privacy-first approach with secure data sharing between family members and healthcare providers when needed.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        gradient: 'from-purple-500 to-indigo-600'
    }
];

export default function FeatureSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#F4F6FF] via-white to-[#F0F9FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0B8494]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#EFB9CC]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#0B8494]/5 to-[#EFB9CC]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-6">
                        <span className="text-sm font-semibold text-[#0B8494] tracking-wide uppercase">
                            Powerful Features
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                        Everything You Need to
                        <span className="block text-[#0B8494] mt-2">Stay Connected</span>
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover how Recap bridges the gap between patients and families with innovative features designed for memory care and meaningful connections.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                        >
                            {/* Animated background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon container */}
                            <div className="relative mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#0B8494]/10 to-[#0B8494]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#0B8494] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B8494] to-[#EFB9CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                        <Link
                            href="/features"
                            className="group inline-flex items-center px-8 py-4 bg-[#0B8494] text-white font-semibold rounded-xl shadow-lg hover:bg-[#097383] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <span>Explore All Features</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        Join thousands of families already using Recap to stay connected
                    </p>
                </div>
            </div>
        </section>
    );
}
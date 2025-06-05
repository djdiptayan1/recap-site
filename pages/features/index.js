import Image from 'next/image';
import { config } from "../../config"

const features = [
    {
        title: "Family View",
        description: "Connect with your loved ones through photos, emergency contacts, and real-time access to patient data for better care coordination.",
        details: [
            "Photo sharing to help with memory recall and connection",
            "Emergency contact management for quick access during crises",
            "Real-time patient data sharing with authorized family members",
            "Secure family communication channels",
            "Care coordination tools for multiple family caregivers"
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        imageUrl: "/features/family-view.jpg",
        alt: "Family View interface showing photo sharing and emergency contacts",
        gradient: 'from-blue-500 to-purple-600'
    },
    {
        title: "Daily Questions",
        description: "Simple questions that strengthen bonds and memories. Family members can add personalized questions for a meaningful touch.",
        details: [
            "Family members can remotely add questions about shared memories",
            "Photo attachment capabilities to enhance recall",
            "Voice recording options for more personal interactions",
            "Customizable question scheduling throughout the day",
            "Memory reinforcement through gentle repetition of important topics"
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        imageUrl: "/features/daily-questions.jpg",
        alt: "Daily Questions screen showing family-added questions with photos",
        gradient: 'from-green-500 to-teal-600'
    },
    {
        title: "Memory Games",
        description: "Engage with fun memory exercises and cognitive games designed to keep your brain active and stimulated.",
        details: [
            "Multiple difficulty levels to match cognitive abilities",
            "Visual and audio recognition games",
            "Pattern matching and sequence memory exercises",
            "Photo-based memory games using family pictures",
            "Progressive challenges that adapt to user performance"
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        imageUrl: "/screenshots/games.png",
        alt: "Selection of memory games showing different difficulty levels",
        gradient: 'from-yellow-500 to-orange-600'
    },
    {
        title: "Progress Tracking",
        description: "Detailed reports and analytics to monitor memory improvements over time, providing valuable insights to family members.",
        details: [
            "Visual progress charts showing memory retention over time",
            "Weekly and monthly performance reports",
            "Response time tracking for cognitive assessment",
            "Shareable reports for healthcare providers",
            "Personalized improvement recommendations"
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        imageUrl: "/screenshots/report.png",
        alt: "Progress tracking dashboard with charts and analytics",
        gradient: 'from-indigo-500 to-blue-600'
    },
    {
        title: "Educational Resources",
        description: "Access informative articles about Alzheimer's disease and learn how others handle similar challenges.",
        details: [
            "Curated articles from leading memory care experts",
            "Community forums to connect with others on similar journeys",
            "Video tutorials on caregiving techniques",
            "Local support group finder",
            "Latest research updates on Alzheimer's treatments"
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        imageUrl: "/screenshots/articles.png",
        alt: "Educational resources library showing articles and community forums",
        gradient: 'from-pink-500 to-rose-600'
    },
    {
        title: "Secure Data Sharing",
        description: "Privacy-first approach with secure data sharing between family members and healthcare providers when needed.",
        details: [
            "End-to-end encryption for all sensitive health data",
            "Granular privacy controls for different user roles",
            "HIPAA-compliant data handling and storage",
            "Secure communication channels with healthcare providers",
            "User-controlled data sharing permissions"
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        imageUrl: "/features/secure-sharing.jpg",
        alt: "Secure data sharing interface with privacy controls",
        gradient: 'from-purple-500 to-indigo-600'
    }
];

export default function Features() {
    return (
        <div className="bg-gradient-to-br from-[#F4F6FF] via-white to-[#F0F9FF] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#0B8494]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#EFB9CC]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#0B8494]/5 to-[#EFB9CC]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-6">
                        <span className="text-sm font-semibold text-[#0B8494] tracking-wide uppercase">
                            Powerful Features
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-6">
                        <span className="block">Features That Spark Joy</span>
                        <span className="block text-[#0B8494] dark:text-[#0B8494]">and Connection</span>
                    </h1>

                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Discover how Recap helps strengthen bonds and preserve memories for Alzheimer's patients and their loved ones.
                    </p>
                </div>

                {/* Features Detail Sections */}
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-8 lg:gap-12 items-center group`}
                        >
                            {/* Feature Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl p-8 transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden">

                                    <div className="w-full h-full rounded-xl flex items-center justify-center">
                                        <Image
                                            src={feature.imageUrl}
                                            alt={feature.alt}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Feature Description */}
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#0B8494] transition-colors duration-300">
                                    {feature.title}
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="space-y-4">
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start group/item">
                                            <div className="flex-shrink-0 w-6 h-6 bg-[#0B8494]/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-[#0B8494]/20 transition-colors duration-300">
                                                <svg className="h-3 w-3 text-[#0B8494]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100 transition-colors duration-300">
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Download Recap today and begin your journey toward better memory care and stronger family connections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={config.appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-[#0B8494] text-white font-semibold rounded-xl shadow-lg hover:bg-[#097383] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <span>Download Now</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                        <a
                            href="/guidelines"
                            className="inline-flex items-center justify-center px-8 py-4 border border-[#0B8494] text-[#0B8494] font-semibold rounded-xl bg-white dark:bg-gray-800 hover:bg-[#0B8494] hover:text-white dark:hover:bg-[#0B8494] dark:hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            View App Guidelines
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                        Join thousands of families already using Recap to stay connected
                    </p>
                </div>
            </div>
        </div>
    );
}
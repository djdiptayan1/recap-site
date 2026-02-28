import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        title: 'Daily Memory Questions',
        description: 'Family members remotely create personalized questions about shared memories, complete with photo attachments. Questions are categorized by memory type to target long-term, short-term, and recent recall.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        title: 'Cognitive Games',
        description: 'Two scientifically-designed games — Geo Sorter for spatial memory and geographic recognition, and Match Mania for pattern matching and short-term memory agility.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Memory Type Assessment',
        description: 'Rapid memory quizzes evaluate performance across all three memory types (distant, immediate, remote), providing percentage scores and personalized improvement recommendations.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Detailed Progress Reports',
        description: 'Three report views — Immediate, Recent, and Remote — with visual charts tracking memory performance over time. Reports can be shared with healthcare providers.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        title: 'Family Connection',
        description: 'Add family members with photos and relationship details. Family members get their own dashboard with trend analytics, daily question creation, and remote monitoring capabilities.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: 'Streaks & Engagement',
        description: "A daily streak system motivates consistent app usage. Research shows that regular cognitive exercise provides the most benefit for maintaining memory function in Alzheimer's patients.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0B8494]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    }
];

export default function FeatureSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-4">
                        <span className="text-sm font-semibold text-[#0B8494] uppercase tracking-wide">
                            App Features
                        </span>
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Built for Real <span className="text-[#0B8494]">Memory Care</span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Every feature in Recap is designed around actual cognitive science and the needs of Alzheimer&apos;s patients and their families.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#F4F6FF] dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/features"
                        className="inline-flex items-center px-8 py-4 bg-[#0B8494] text-white font-semibold rounded-xl hover:bg-[#097383] transition-all duration-300 shadow-lg"
                    >
                        Explore All Features
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
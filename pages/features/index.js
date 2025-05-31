import Image from 'next/image';

export default function Features() {
    const features = [
        {
            title: "Memory Companion",
            description: "Your personal assistant dedicated to memory health, keeping you connected with your family throughout your memory journey.",
            details: [
                "Personalized memory exercises based on individual cognitive needs",
                "Daily reminders and gentle memory prompts",
                "Family integration that keeps loved ones connected",
                "Voice-enabled interface for easier interaction",
                "Adaptive learning that adjusts to user's changing needs"
            ],
            imageUrl: "/features/memory-companion.jpg", // Replace with actual image
            alt: "Memory Companion interface showing personalized memory exercises"
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
            imageUrl: "/features/daily-questions.jpg", // Replace with actual image
            alt: "Daily Questions screen showing family-added questions with photos"
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
            imageUrl: "/features/memory-games.jpg", // Replace with actual image
            alt: "Selection of memory games showing different difficulty levels"
        },
        {
            title: "Track Progress",
            description: "Detailed reports and analytics to monitor memory improvements over time, providing valuable insights to family members.",
            details: [
                "Visual progress charts showing memory retention over time",
                "Weekly and monthly performance reports",
                "Response time tracking for cognitive assessment",
                "Shareable reports for healthcare providers",
                "Personalized improvement recommendations"
            ],
            imageUrl: "/features/progress-tracking.jpg", // Replace with actual image
            alt: "Progress tracking dashboard with charts and analytics"
        },
        {
            title: "Supporting Resources",
            description: "Access informative articles about Alzheimer's disease and learn how others handle similar challenges.",
            details: [
                "Curated articles from leading memory care experts",
                "Community forums to connect with others on similar journeys",
                "Video tutorials on caregiving techniques",
                "Local support group finder",
                "Latest research updates on Alzheimer's treatments"
            ],
            imageUrl: "/features/resources.jpg", // Replace with actual image
            alt: "Supporting resources library showing articles and community forums"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                        <span className="block">Features That Spark Joy</span>
                        <span className="block text-purple-600 dark:text-purple-400">and Connection</span>
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
                                } gap-8 lg:gap-12 items-center`}
                        >
                            {/* Feature Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg">
                                    {/* Replace with actual image */}
                                    <div className="w-full h-full flex items-center justify-center p-8">
                                        <span className="text-gray-500 dark:text-gray-400 text-center">
                                            {feature.alt}
                                            <br />
                                            (Replace with actual screenshot)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Feature Description */}
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>

                                <ul className="space-y-3">
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start">
                                            <svg className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Download Recap today and begin your journey toward better memory care and stronger family connections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://apps.apple.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                        >
                            Download Now
                        </a>
                        <a
                            href="/guidelines"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            View App Guidelines
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

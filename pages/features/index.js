import Image from 'next/image';
import { config } from "../../config"

const features = [
    {
        title: "Daily Memory Questions",
        description: "Personalized questions created by family members that target different memory types. Each question can include photos to enhance visual recall.",
        details: [
            "Family members remotely add questions about shared memories and life events",
            "Questions are categorized by memory type: distant, immediate, or remote",
            "Photo attachments help trigger visual memory associations",
            "Category picker allows targeting specific memory areas",
            "Response tracking feeds into memory assessment reports"
        ],
        imageUrl: "/screenshots/addQuestion.png",
        alt: "Daily questions interface showing family-created memory prompts",
    },
    {
        title: "Cognitive Games",
        description: "Two scientifically-designed games that exercise spatial memory, pattern recognition, and short-term recall through engaging gameplay.",
        details: [
            "Geo Sorter: Sort geographic items to boost spatial memory and recognition",
            "Match Mania: Pattern matching game to increase memory agility",
            "Games designed to exercise working memory and attention",
            "Session tracking records performance for progress reports",
            "Difficulty adapts to maintain cognitive challenge"
        ],
        imageUrl: "/screenshots/games.png",
        alt: "Memory games selection screen showing Geo Sorter and Match Mania",
    },
    {
        title: "Memory Type Assessment",
        description: "Rapid memory quizzes that evaluate cognitive function across three clinically-recognized memory types, providing scored assessments and recommendations.",
        details: [
            "Tests distant memory (long-term): memories from years ago",
            "Tests immediate memory (short-term): minutes to hours",
            "Tests remote memory (recent): days to weeks",
            "Percentage scores calculated per memory type",
            "Personalized recommendations based on weak areas (e.g., journaling for recent memory, photo review for distant memory)"
        ],
        imageUrl: "/screenshots/report.png",
        alt: "Memory assessment results showing scores by memory type",
    },
    {
        title: "Progress Reports & Analytics",
        description: "Three specialized report views with visual charts tracking memory performance trends over time, designed to be shared with healthcare providers.",
        details: [
            "Immediate Report: tracks short-term memory quiz performance",
            "Recent Report: monitors recent memory recall accuracy",
            "Remote Report: analyzes long-term memory retention trends",
            "Trend visualization with charts and performance over time",
            "Export and share reports with doctors and caregivers"
        ],
        imageUrl: "/screenshots/report.png",
        alt: "Progress tracking dashboard with charts and memory type analytics",
    },
    {
        title: "Family Member Management",
        description: "Add and manage family member profiles with photos, relationships, and contact information. Family members get their own dedicated dashboard.",
        details: [
            "Add family members with profile photos and relationship details",
            "Family dashboard with trend cards and daily question creation",
            "Streaks card shows patient engagement consistency",
            "Remote monitoring of patient activity and progress",
            "Secure data sharing with authorized family members"
        ],
        imageUrl: "/screenshots/patientHome.png",
        alt: "Family connection interface showing member management",
    },
    {
        title: "Streaks & Daily Engagement",
        description: "A streak system that encourages consistent daily use, backed by research showing regular cognitive exercise provides the greatest benefit for memory maintenance.",
        details: [
            "Daily streak tracking encourages routine engagement",
            "Calendar-style collection view shows activity history",
            "Visual indicators for active and missed days",
            "Streak data integrated into family member dashboard",
            "Based on research: consistency matters more than intensity for cognitive benefit"
        ],
        imageUrl: "/screenshots/patientHome.png",
        alt: "Streaks interface showing daily engagement calendar",
    },
    {
        title: "Educational Articles",
        description: "Curated articles about Alzheimer's disease, memory care techniques, and caregiver support, accessible directly within the app.",
        details: [
            "Articles sourced from reputable Alzheimer's research organizations",
            "Covers topics from disease stages to caregiving strategies",
            "In-app reading experience with clean, accessible formatting",
            "Prefetched content for smooth offline access",
            "Let's Read card on patient home screen for easy access"
        ],
        imageUrl: "/screenshots/articles.png",
        alt: "Educational articles library within the Recap app",
    },
];

export default function Features() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-4">
                        <span className="text-sm font-semibold text-[#0B8494] uppercase tracking-wide">
                            App Features
                        </span>
                    </span>

                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl mb-4">
                        Features Built from
                        <span className="block text-[#0B8494]">Real Science</span>
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Every feature in Recap is informed by cognitive science research and designed around the actual needs of Alzheimer&apos;s patients and their caregiving families.
                    </p>
                </div>

                {/* Features Detail Sections */}
                <div className="space-y-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                        >
                            {/* Feature Image */}
                            <div className="w-full lg:w-5/12 flex justify-center">
                                <Image
                                    src={feature.imageUrl}
                                    alt={feature.alt}
                                    width={280}
                                    height={500}
                                    className="rounded-2xl shadow-lg object-cover"
                                />
                            </div>

                            {/* Feature Description */}
                            <div className="w-full lg:w-7/12">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                                    {feature.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="space-y-3">
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start">
                                            <svg className="w-5 h-5 text-[#0B8494] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center bg-[#F4F6FF] dark:bg-gray-800 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Download Recap today and begin a structured, science-informed approach to memory care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={config.appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#0B8494] text-white font-semibold rounded-xl hover:bg-[#097383] transition-all duration-300 shadow-lg"
                        >
                            Download on the App Store
                        </a>
                        <a
                            href="/guidelines"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0B8494]/30 text-[#0B8494] font-semibold rounded-xl hover:border-[#0B8494] transition-all duration-300"
                        >
                            View App Guidelines
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
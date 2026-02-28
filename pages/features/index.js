import Image from 'next/image';
import { config } from "../../config"

const features = [
    {
        title: "Smriti AI Care Companion",
        description: "An AI-powered care companion built on Google Gemini that provides real-time support, reminiscence therapy, and context-aware conversations. Smriti understands each patient\u2019s name, family members, Alzheimer\u2019s stage, activities, and reminders.",
        details: [
            "Powered by Google Gemini (gemini-3-flash-preview) for natural, empathetic conversations",
            "Memory-lane reminiscence mode helps patients recall and cherish past experiences",
            "Patient context-aware: references family members, stage, activities, and reminders",
            "Structured responses include care strategies, sources, medical disclaimers, and follow-up prompts",
            "Real-time streaming chat (SSE) for a live, responsive experience",
            "Conversation history support for continuity across sessions"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/jl1oweylvh6wr0yo13bs.png",
        alt: "Smriti AI Care Companion chat interface",
    },
    {
        title: "Daily Memory Questions",
        description: "Personalized questions created by family members that target different memory types. Each question can include photos, hints, and answer options to enhance recall.",
        details: [
            "7 questions per day: 4 immediate, 2 recent, 1 remote memory",
            "Family members remotely add questions about shared memories and life events",
            "Photo attachments help trigger visual memory associations",
            "Multiple-choice format with configurable answer options and correct answers",
            "Patient and family answer tracking with role distinction",
            "Ask interval and time frame settings for question scheduling"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/ifcqlc4g1lrbc0kpimbq.png",
        alt: "Daily questions interface showing family-created memory prompts",
    },
    {
        title: "Cognitive Games",
        description: "Three scientifically-designed games that exercise spatial memory, pattern recognition, and short-term recall through engaging gameplay with performance tracking.",
        details: [
            "Geo Sorter: Sort geographic items to boost spatial memory and recognition",
            "Match Mania: Pattern matching game to increase memory agility",
            "Card Game: Recognition-based card matching for visual memory training",
            "Session tracking records performance for progress reports",
            "Games target working memory, attention, and cognitive flexibility"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/uv8wmtmbgdp2qe1ag7yi.png",
        alt: "Memory games selection screen showing cognitive games",
    },
    {
        title: "Journal & Memory Entries",
        description: "A rich journaling system where patients can capture thoughts, memories, and emotions through text, voice recordings, and photos \u2014 building a personal memory archive.",
        details: [
            "Create entries with text content and optional voice recordings (audio upload to Cloudinary)",
            "Attach multiple photos with captions to each entry",
            "Mood tagging: happy, sad, neutral, anxious, calm, grateful",
            "Two entry types: journal (text/voice focused) and memory (photo focused)",
            "Tag people, places, and events for rich context",
            "Pagination support for browsing past entries"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/sid4k7p89esbm7vwncab.png",
        alt: "Journal and memory entries interface with photos and mood tags",
    },
    {
        title: "Smart Reminders",
        description: "A comprehensive reminder system to help patients maintain daily routines \u2014 from medication schedules to appointments, exercise, meals, and hydration.",
        details: [
            "Categories: Medicine, Daily Chore, Appointment, Exercise, Meal, Hydration, Other",
            "Flexible frequencies: once, hourly, daily, weekdays, weekends, weekly, biweekly, monthly, yearly",
            "Add optional notes for additional context",
            "Edit and delete reminders as routines change",
            "Helps maintain structured daily routines critical for Alzheimer\u2019s patients"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/l0u2uo3moubir9dcqlma.png",
        alt: "Smart reminders interface showing medication and activity scheduling",
    },
    {
        title: "Dashboard Analytics",
        description: "Comprehensive analytics with daily, weekly, and monthly question accuracy statistics, per-category breakdowns, and cognitive decline trend alerts.",
        details: [
            "Daily stats: total questions, answered count, correct count, accuracy percentage",
            "Per-category breakdowns for immediate, recent, and remote memory",
            "Weekly and monthly trend visualization",
            "Cognitive decline trend alerts to flag concerning patterns",
            "Analytics caching for fast dashboard loading"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048142/nmexrxae9dg4k8ccrlb6.png",
        alt: "Dashboard analytics showing memory performance trends",
    },
    {
        title: "Memory Assessment & Reports",
        description: "A 15-point cognitive quiz evaluating performance across all three memory types, with historical reports to track changes and inform clinical decisions.",
        details: [
            "15-point scoring system across immediate, recent, and remote memory",
            "Historical report tracking with date-stamped results",
            "Share reports with healthcare providers for clinical assessments",
            "Trend data shows improvement or decline over time",
            "Personalized recommendations based on weak areas"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/vg2syphpkskizu1acwaz.png",
        alt: "Memory assessment results showing scores by memory type",
    },
    {
        title: "Family Member Management",
        description: "Add and manage family member profiles with photos, relationships, and contact information. Family members get their own dedicated dashboard with real-time insights.",
        details: [
            "Add family members with profile photos, relationship, phone, and email",
            "Family dashboard with trend cards, daily question creation, and streaks monitoring",
            "Upload photos, voices, and stories for shared memory building",
            "Remote monitoring of patient activity and cognitive progress",
            "Medication and routine coordination across family members"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/ywycbazxwenr5jtxfbr4.png",
        alt: "Family connection interface showing member management",
    },
    {
        title: "Streaks & Daily Engagement",
        description: "A streak system with calendar-style tracking that encourages consistent daily use \u2014 backed by research showing regular cognitive exercise provides the greatest benefit.",
        details: [
            "Daily streak tracking with current streak and max streak statistics",
            "Calendar-style collection view shows activity history month by month",
            "Active days count and last activity date tracking",
            "Yearly streak data for long-term engagement visualization",
            "Automatic streak updates when patients answer daily questions"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/v9dxlusltvxy4rjnuuoo.png",
        alt: "Streaks interface showing daily engagement calendar",
    },
    {
        title: "Educational Articles & Citations",
        description: "Curated articles about Alzheimer\u2019s disease, memory care techniques, and caregiver support \u2014 backed by scientific citations from reputable research journals.",
        details: [
            "Articles sourced from reputable Alzheimer\u2019s research organizations",
            "Scientific citation database with DOI links and journal references",
            "Covers topics from disease stages to caregiving strategies",
            "In-app reading experience with clean, accessible formatting",
            "Multimedia support with images and external links"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/uqr02nylkp6ugcxrx27d.png",
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
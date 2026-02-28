import Image from 'next/image';
import { config } from "../../config"

const features = [
    {
        title: "Smriti AI Care Companion",
        description: "An intelligent AI care companion that provides real-time conversational support, reminiscence therapy, and personalized interactions tailored to each patient.",
        details: [
            "Natural, empathetic conversations for emotional support and companionship",
            "Reminiscence therapy mode helps patients recall and cherish past experiences",
            "Personalized responses based on patient context and family connections",
            "Thoughtful follow-up prompts to encourage continued engagement",
            "Seamless, responsive chat experience"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/jl1oweylvh6wr0yo13bs.png",
        alt: "Smriti AI Care Companion chat interface",
    },
    {
        title: "Daily Memory Questions",
        description: "Personalized daily questions created by family members that target different memory types, helping patients exercise recall through meaningful prompts.",
        details: [
            "Questions tailored to different memory types for comprehensive cognitive exercise",
            "Family members can remotely create questions about shared memories and life events",
            "Photo attachments help trigger visual memory associations",
            "Responses are tracked to monitor progress over time"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/ifcqlc4g1lrbc0kpimbq.png",
        alt: "Daily questions interface showing family-created memory prompts",
    },
    {
        title: "Cognitive Games",
        description: "Engaging, science-informed games designed to exercise spatial memory, pattern recognition, and short-term recall.",
        details: [
            "Multiple game modes targeting different cognitive skills",
            "Exercises for working memory, attention, and cognitive flexibility",
            "Performance tracking to measure improvement over time",
            "Designed to be enjoyable while providing cognitive benefit"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/uv8wmtmbgdp2qe1ag7yi.png",
        alt: "Memory games selection screen showing cognitive games",
    },
    {
        title: "Journal & Memory Entries",
        description: "A rich journaling system where patients can capture thoughts, memories, and emotions through text, voice, and photos \u2014 building a personal memory archive.",
        details: [
            "Create entries with text, voice recordings, and photos",
            "Mood tagging to track emotional well-being over time",
            "Tag people, places, and events for meaningful context",
            "Browse past entries to revisit cherished memories"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/sid4k7p89esbm7vwncab.png",
        alt: "Journal and memory entries interface with photos and mood tags",
    },
    {
        title: "Smart Reminders",
        description: "A comprehensive reminder system to help patients maintain daily routines \u2014 from medication schedules to appointments, exercise, and meals.",
        details: [
            "Supports a wide range of reminder categories for daily life",
            "Flexible scheduling with multiple frequency options",
            "Easy to create, edit, and manage as routines change",
            "Helps maintain the structured daily routines critical for Alzheimer\u2019s patients"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/l0u2uo3moubir9dcqlma.png",
        alt: "Smart reminders interface showing medication and activity scheduling",
    },
    {
        title: "Dashboard Analytics",
        description: "Visual analytics that help families and caregivers track cognitive performance trends over time.",
        details: [
            "Track question accuracy across different memory categories",
            "View trends over daily, weekly, and monthly timeframes",
            "Alerts to flag concerning cognitive patterns",
            "Clear visualizations designed for easy understanding"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048142/nmexrxae9dg4k8ccrlb6.png",
        alt: "Dashboard analytics showing memory performance trends",
    },
    {
        title: "Memory Assessment & Reports",
        description: "Cognitive assessments that evaluate memory performance across multiple dimensions, with reports that can be shared with healthcare providers.",
        details: [
            "Structured assessments covering different memory types",
            "Historical reports to track changes over time",
            "Sharable with healthcare providers for clinical insight",
            "Personalized recommendations based on results"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/vg2syphpkskizu1acwaz.png",
        alt: "Memory assessment results showing scores by memory type",
    },
    {
        title: "Family Member Management",
        description: "Connect family members to collaborate on care. Each family member gets their own dashboard to monitor progress and contribute to the patient\u2019s memory exercises.",
        details: [
            "Add family members with profile details and relationship information",
            "Dedicated family dashboard for monitoring and engagement",
            "Share photos, stories, and memories collaboratively",
            "Coordinate care and routines across the family"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/ywycbazxwenr5jtxfbr4.png",
        alt: "Family connection interface showing member management",
    },
    {
        title: "Streaks & Daily Engagement",
        description: "A motivation system that encourages consistent daily use \u2014 backed by research showing regular cognitive exercise provides the greatest benefit.",
        details: [
            "Daily streak tracking to build healthy engagement habits",
            "Visual calendar showing activity history over time",
            "Long-term engagement insights for patients and families",
            "Research-backed: consistency matters most for cognitive benefit"
        ],
        imageUrl: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/v9dxlusltvxy4rjnuuoo.png",
        alt: "Streaks interface showing daily engagement calendar",
    },
    {
        title: "Educational Articles & Citations",
        description: "Curated articles about Alzheimer\u2019s disease, memory care techniques, and caregiver support \u2014 backed by scientific research.",
        details: [
            "Articles sourced from reputable Alzheimer\u2019s research organizations",
            "Covers topics from disease stages to caregiving strategies",
            "Clean, accessible in-app reading experience",
            "Scientific citations and references included"
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
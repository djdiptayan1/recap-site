import Image from 'next/image';

export default function Guidelines() {
    const guidelines = [
        {
            title: "Getting Started",
            description: "Set up your account and choose your role",
            steps: [
                "Download Recap from the App Store",
                "Sign in with your Google account for secure authentication",
                "Select your role: Patient or Family Member",
                "Patients: Enter your profile details including name, date of birth, and Alzheimer\u2019s stage",
                "Family Members: Connect to a patient account using their unique Patient ID"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/ufke6lkpp4oxsnjswwr8.png",
            alt: "Recap app role selection screen"
        },
        {
            title: "Daily Questions",
            description: "Engage with personalized memory prompts daily",
            steps: [
                "Patients: Open the Questions card on the home screen to view today\u2019s questions",
                "Answer each question \u2014 responses are tracked across memory types",
                "Family Members: Use the Add Question feature to create new questions remotely with photos",
                "Questions cover different memory types for comprehensive cognitive exercise",
                "Answering questions automatically updates your daily activity streak"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/ifcqlc4g1lrbc0kpimbq.png",
            alt: "Daily questions interface"
        },
        {
            title: "Smriti AI Companion",
            description: "Chat with your AI care companion for support and reminiscence",
            steps: [
                "Open Smriti from the home screen to start a conversation",
                "Ask questions about memory care, daily activities, or just chat for companionship",
                "Use \u2018Memory Lane\u2019 mode for guided reminiscence therapy sessions",
                "Smriti provides personalized responses based on your context",
                "Receive care strategies, follow-up prompts, and supportive notes"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/jl1oweylvh6wr0yo13bs.png",
            alt: "Smriti AI Care Companion chat screen"
        },
        {
            title: "Journal & Memories",
            description: "Capture thoughts, memories, and emotions",
            steps: [
                "Create a new journal entry from the home screen",
                "Write text, record voice entries, or attach photos",
                "Tag your mood to track emotional well-being over time",
                "Tag people, places, and events for meaningful context",
                "Browse past entries to revisit your personal memory archive"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/sid4k7p89esbm7vwncab.png",
            alt: "Journal and memory entries screen"
        },
        {
            title: "Smart Reminders",
            description: "Never miss medication, appointments, or daily routines",
            steps: [
                "Add reminders for medication, appointments, exercise, meals, and more",
                "Set flexible scheduling to match your daily routine",
                "Add optional notes for additional context",
                "Edit or delete reminders as routines change",
                "Family members can help coordinate care reminders remotely"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/l0u2uo3moubir9dcqlma.png",
            alt: "Smart reminders setup screen"
        },
        {
            title: "Memory Games",
            description: "Exercise your brain with cognitive games",
            steps: [
                "Choose from multiple games targeting different cognitive skills",
                "Games exercise spatial memory, pattern recognition, and visual recall",
                "Play for 15-20 minutes daily for optimal cognitive benefit",
                "Performance is tracked to monitor improvement over time"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/uv8wmtmbgdp2qe1ag7yi.png",
            alt: "Memory games selection screen"
        },
        {
            title: "Progress & Analytics",
            description: "Monitor memory performance and cognitive trends",
            steps: [
                "View analytics showing performance trends over time",
                "Check breakdowns across different memory categories",
                "Take cognitive assessments to get a comprehensive score",
                "Review historical reports to track changes",
                "Share reports with healthcare providers to support clinical assessments"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048142/nmexrxae9dg4k8ccrlb6.png",
            alt: "Progress tracking and analytics dashboard"
        },
        {
            title: "Streaks & Consistency",
            description: "Build a daily habit for maximum cognitive benefit",
            steps: [
                "Complete at least one activity daily to maintain your streak",
                "View your streak calendar on the home screen to track active days",
                "Research shows consistent daily cognitive engagement provides the most benefit",
                "Family members can monitor engagement from their dashboard"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/v9dxlusltvxy4rjnuuoo.png",
            alt: "Streaks tracking on patient home screen"
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-4">
                        <span className="text-sm font-semibold text-[#0B8494] uppercase tracking-wide">
                            User Guide
                        </span>
                    </span>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">App Guidelines</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Learn how to make the most of Recap — from setup to daily engagement and progress tracking.
                    </p>
                </div>

                <div className="space-y-16">
                    {guidelines.map((guideline, index) => (
                        <div key={index} className="bg-[#F4F6FF] dark:bg-gray-800 rounded-2xl overflow-hidden">
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-col lg:flex-row gap-8 items-center">
                                    <div className="lg:w-7/12">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="w-10 h-10 rounded-full bg-[#0B8494] text-white flex items-center justify-center font-bold">
                                                {index + 1}
                                            </span>
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{guideline.title}</h2>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm">{guideline.description}</p>
                                            </div>
                                        </div>

                                        <ol className="list-decimal pl-6 space-y-3">
                                            {guideline.steps.map((step, stepIndex) => (
                                                <li key={stepIndex} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step}</li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div className="lg:w-5/12 flex justify-center">
                                        <Image
                                            src={guideline.image}
                                            alt={guideline.alt}
                                            width={220}
                                            height={400}
                                            className="rounded-xl shadow-lg object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-[#0B8494]/5 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Need More Help?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Visit our support page for FAQs, contact information, and additional resources.
                    </p>
                    <a
                        href="/support"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#0B8494] text-white font-medium rounded-xl hover:bg-[#097383] transition-colors"
                    >
                        Go to Support
                    </a>
                </div>
            </div>
        </div>
    );
}
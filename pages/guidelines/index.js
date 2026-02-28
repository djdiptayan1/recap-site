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
                "Patients: Enter your profile details including name, date of birth, sex, blood group, and Alzheimer\u2019s stage (Early, Middle, or Advanced)",
                "Family Members: Connect to a patient account using their unique 6-character Patient UID"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/ufke6lkpp4oxsnjswwr8.png",
            alt: "Recap app role selection screen"
        },
        {
            title: "Daily Questions",
            description: "Engage with personalized memory prompts daily",
            steps: [
                "Patients: Open the Questions card on the home screen to view today\u2019s 7 questions (4 immediate, 2 recent, 1 remote)",
                "Answer each question \u2014 responses are tracked across memory types with accuracy scores",
                "Family Members: Use the Add Question feature to create new questions remotely with photos and hints",
                "Set ask intervals and time frames to control when questions appear",
                "Patient answers automatically update daily activity streaks"
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
                "Smriti understands your name, family members, stage, and recent activities for personalized responses",
                "Receive care strategies, follow-up prompts, and supportive notes in every conversation",
                "Conversation history is maintained for continuity across sessions"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/jl1oweylvh6wr0yo13bs.png",
            alt: "Smriti AI Care Companion chat screen"
        },
        {
            title: "Journal & Memories",
            description: "Capture thoughts, memories, and emotions",
            steps: [
                "Create a new journal entry from the home screen",
                "Write text content or record voice entries with audio upload support",
                "Attach multiple photos with captions to each entry",
                "Tag your mood (happy, sad, neutral, anxious, calm, grateful) to track emotional well-being",
                "Tag people, places, and events for rich context and easier recall later",
                "Browse past entries with pagination to revisit your personal memory archive"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/sid4k7p89esbm7vwncab.png",
            alt: "Journal and memory entries screen"
        },
        {
            title: "Smart Reminders",
            description: "Never miss medication, appointments, or daily routines",
            steps: [
                "Add reminders for Medicine, Daily Chores, Appointments, Exercise, Meals, Hydration, or Other",
                "Set flexible frequencies: once, hourly, daily, weekdays, weekends, weekly, biweekly, monthly, or yearly",
                "Add optional notes for additional context (e.g., \u2018Take with breakfast\u2019)",
                "Edit or delete reminders as routines change",
                "Family members can coordinate medication and routine reminders remotely"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/l0u2uo3moubir9dcqlma.png",
            alt: "Smart reminders setup screen"
        },
        {
            title: "Memory Games",
            description: "Exercise your brain with cognitive games",
            steps: [
                "Choose from available games: Geo Sorter, Match Mania, or Card Game",
                "Geo Sorter: Sort geographic items to boost spatial memory and recognition",
                "Match Mania: Find matching pairs to increase memory agility and pattern recognition",
                "Card Game: Visual recognition-based card matching for cognitive training",
                "Play for 15-20 minutes daily for optimal cognitive benefit"
            ],
            image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/uv8wmtmbgdp2qe1ag7yi.png",
            alt: "Memory games selection screen"
        },
        {
            title: "Progress & Analytics",
            description: "Monitor memory performance and cognitive trends",
            steps: [
                "View dashboard analytics with daily, weekly, and monthly question accuracy",
                "Check per-category breakdowns for immediate, recent, and remote memory",
                "Take the 15-point Memory Assessment quiz to get a comprehensive cognitive score",
                "Review historical memory quiz reports to track changes over time",
                "Watch for cognitive decline trend alerts that flag concerning patterns",
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
                "View your streak calendar on the home screen \u2014 shows current streak, max streak, and active days",
                "Check monthly and yearly streak data for long-term engagement visualization",
                "Research shows consistent daily cognitive engagement provides the most benefit",
                "Family members can monitor streak data from their dashboard"
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
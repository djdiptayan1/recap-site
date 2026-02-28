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
                "Patients: Enter your profile details including name, date of birth, sex, blood group, and Alzheimer's stage (Early, Middle, or Advanced)",
                "Family Members: Connect to a patient account using their unique Patient UID"
            ],
            image: "/screenshots/landing.png",
            alt: "Recap app role selection screen"
        },
        {
            title: "Daily Questions",
            description: "Engage with personalized memory prompts daily",
            steps: [
                "Patients: Open the Questions card on the home screen to view today's questions",
                "Answer each question — responses are tracked across memory types (distant, immediate, remote)",
                "Family Members: Use the Add Question feature to create new questions remotely",
                "Attach photos to questions to enhance visual memory recall",
                "Select a category for each question to target specific memory types"
            ],
            image: "/screenshots/addQuestion.png",
            alt: "Daily questions interface"
        },
        {
            title: "Memory Games",
            description: "Exercise your brain with cognitive games",
            steps: [
                "Choose from available games: Geo Sorter or Match Mania",
                "Geo Sorter: Sort geographic items to boost spatial memory and recognition",
                "Match Mania: Find matching pairs to increase memory agility and pattern recognition",
                "Play for 15-20 minutes daily for optimal cognitive benefit",
                "Game performance is automatically tracked and included in your reports"
            ],
            image: "/screenshots/games.png",
            alt: "Memory games selection screen"
        },
        {
            title: "Progress Tracking",
            description: "Monitor memory performance over time",
            steps: [
                "View three types of reports: Immediate, Recent, and Remote memory",
                "Each report shows performance trends with visual charts",
                "Family Members: Access the Trends card on your dashboard for quick insights",
                "Share reports with healthcare providers to support clinical assessments",
                "Look for personalized recommendations based on your performance patterns"
            ],
            image: "/screenshots/report.png",
            alt: "Progress tracking report screen"
        },
        {
            title: "Streaks & Consistency",
            description: "Build a daily habit for maximum benefit",
            steps: [
                "Complete at least one activity daily to maintain your streak",
                "View your streak calendar on the home screen to track active days",
                "Research shows consistent daily cognitive engagement provides the most benefit",
                "Family members can monitor streak data from their dashboard",
                "Missed days are visible — aim for unbroken streaks of activity"
            ],
            image: "/screenshots/patientHome.png",
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
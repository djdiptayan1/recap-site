import Image from 'next/image';

export default function Guidelines() {
    const guidelines = [
        {
            title: "Getting Started",
            description: "Setup your account and connect with family members",
            steps: [
                "Download Recap from the App Store",
                "Create a user profile for the patient or caregiver",
                "Connect family members using their email addresses",
                "Customize notification preferences",
                "Add important dates and memories to kickstart the journey"
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Daily Questions",
            description: "Engage with meaningful memory prompts",
            steps: [
                "Access the Daily Questions section from the home screen",
                "Answer the pre-set questions or those added by family members",
                "Add photos to enhance the memory connection",
                "Family members can create custom questions about shared experiences",
                "Set reminders for question time to build a healthy routine"
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Memory Games",
            description: "Keep the brain active with engaging activities",
            steps: [
                "Choose from various difficulty levels based on cognitive ability",
                "Start with matching games and photo recognition",
                "Progress to more complex memory challenges as skills improve",
                "Play for 15-20 minutes daily for optimal benefits",
                "Family members can participate remotely for shared experiences"
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Progress Tracking",
            description: "Monitor memory improvements over time",
            steps: [
                "View the weekly and monthly progress reports",
                "Analyze patterns in memory retention and recall",
                "Share reports with healthcare providers",
                "Celebrate improvements with achievement badges",
                "Adjust activities based on progress data"
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">App Guidelines</h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Learn how to make the most of Recap with our comprehensive guidelines for patients and caregivers.
                </p>
            </div>

            <div className="space-y-16">
                {guidelines.map((guideline, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                                    {guideline.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{guideline.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300">{guideline.description}</p>
                                </div>
                            </div>

                            <ol className="list-decimal pl-6 space-y-3">
                                {guideline.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="text-gray-700 dark:text-gray-300">{step}</li>
                                ))}
                            </ol>

                            {/* App screenshot placeholder */}
                            <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Screenshot showing {guideline.title.toLowerCase()} feature
                                    <br />
                                    (Replace with actual app screenshot)
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-purple-50 dark:bg-purple-900/30 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need More Help?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Visit our support page for additional resources, tutorials, and FAQs.
                </p>
                <a
                    href="/support"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                    Go to Support
                </a>
            </div>
        </div>
    );
}
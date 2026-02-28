import { config } from "../../config"

export default function AboutSection() {
    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Why <span className="text-[#0B8494]">Recap</span> Matters
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Alzheimer&apos;s disease affects over 55 million people worldwide and is the 7th leading cause of death globally. Early and consistent cognitive engagement can help slow memory decline.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        { stat: "55M+", label: "People Living with Dementia Worldwide", source: "WHO, 2023" },
                        { stat: "10M", label: "New Cases Diagnosed Every Year", source: "Alzheimer's Disease International" },
                        { stat: "60-70%", label: "Of Dementia Cases Are Alzheimer's", source: "WHO" },
                        { stat: "#7", label: "Leading Cause of Death Globally", source: "WHO, 2023" },
                    ].map((item, i) => (
                        <div key={i} className="text-center p-6 rounded-xl bg-[#F4F6FF] dark:bg-gray-800">
                            <div className="text-3xl lg:text-4xl font-bold text-[#0B8494] mb-2">{item.stat}</div>
                            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">{item.label}</div>
                            <div className="text-xs text-gray-400">{item.source}</div>
                        </div>
                    ))}
                </div>

                {/* Problem & Solution */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Challenge</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Alzheimer&apos;s progressively impairs memory across all types — from forgetting recent conversations to losing long-held personal memories. Caregivers often struggle to track cognitive changes, and patients can feel isolated from their families.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Research from the <strong>Alzheimer&apos;s Association</strong> shows that consistent cognitive stimulation — including memory exercises, social engagement, and structured daily routines — can help maintain cognitive function and improve quality of life.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">How Recap Helps</h3>
                        <ul className="space-y-4">
                            {[
                                "Targets all three memory types: long-term (distant), short-term (immediate), and recent (remote) memory",
                                "Smriti AI Care Companion — powered by Google Gemini — provides reminiscence therapy and context-aware support",
                                "Journal & Memory entries with photos, voice recordings, and mood tagging for emotional expression",
                                "Smart reminders for medicine, appointments, daily chores, exercise, and hydration",
                                "Enables family members to remotely create daily memory questions with photos",
                                "Dashboard analytics with daily, weekly, and monthly insights plus cognitive decline alerts",
                                "Encourages daily engagement through streaks, cognitive games, and structured routines",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <svg className="w-5 h-5 text-[#0B8494] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
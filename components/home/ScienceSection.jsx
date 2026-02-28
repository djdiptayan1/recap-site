export default function ScienceSection() {
    const memoryTypes = [
        {
            type: "Long-term Memory",
            appLabel: "Distant",
            color: "#0B8494",
            description: "Memories from years ago — childhood events, life milestones, and deeply encoded experiences.",
            science: "Long-term memory relies on the hippocampus for encoding and the neocortex for storage. In Alzheimer's, hippocampal damage occurs early, but distant memories encoded long ago may persist longer.",
            appApproach: "Recap uses personalized daily questions about past life events, family photos, and familiar experiences to reinforce long-term recall pathways.",
        },
        {
            type: "Short-term Memory",
            appLabel: "Immediate",
            color: "#E07A5F",
            description: "Very recent memories — what happened minutes or hours ago, such as a conversation or a meal.",
            science: "Short-term memory has limited capacity (typically 7±2 items) and duration. Alzheimer's often impairs this first, making it hard to remember recent events or instructions.",
            appApproach: "Memory games like Match Mania and Geo Sorter exercise short-term recall and working memory through pattern matching and spatial recognition tasks.",
        },
        {
            type: "Recent Memory",
            appLabel: "Remote",
            color: "#81B29A",
            description: "Memories from days to weeks ago — what someone did last weekend or a recent doctor visit.",
            science: "Recent memory requires consolidation from short-term to long-term storage, a process that sleep and repetition facilitate. This consolidation is disrupted in Alzheimer's.",
            appApproach: "Daily questions and streak-based engagement encourage repeated recall of recent events, supporting the consolidation process through structured repetition.",
        },
    ];

    return (
        <section id="science" className="py-20 lg:py-28 bg-[#F4F6FF] dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#0B8494]/10 text-[#0B8494] mb-4">
                        Scientific Foundation
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        The Science Behind Recap
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Recap&apos;s approach is grounded in neuroscience research on memory systems. The app targets three clinically recognized memory types that are progressively affected by Alzheimer&apos;s disease.
                    </p>
                </div>

                <div className="space-y-8">
                    {memoryTypes.map((memory, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="lg:w-1/3">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: memory.color }}></div>
                                        <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                                            {memory.appLabel} Memory
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{memory.type}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{memory.description}</p>
                                </div>

                                <div className="lg:w-1/3">
                                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Neuroscience</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{memory.science}</p>
                                </div>

                                <div className="lg:w-1/3">
                                    <h4 className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: memory.color }}>How Recap Addresses This</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{memory.appApproach}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Alzheimer's Stages */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
                        Designed for Every Stage of Alzheimer&apos;s
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                stage: "Early Stage",
                                description: "Mild memory lapses, difficulty finding words, misplacing objects. Patients are mostly independent.",
                                recap: "Recap provides cognitively stimulating games and daily questions to help maintain existing memory function and build engagement habits.",
                            },
                            {
                                stage: "Middle Stage",
                                description: "Increasing confusion, trouble recognizing family, behavioral changes. This is typically the longest stage.",
                                recap: "Family-created questions with photos help reinforce recognition. Simplified game difficulty levels and streak tracking maintain routine.",
                            },
                            {
                                stage: "Advanced Stage",
                                description: "Severe memory loss, difficulty communicating, requiring full-time care assistance.",
                                recap: "Focus shifts to gentle engagement — familiar photos, simple questions, and family connection features to maintain emotional bonds.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                                <div className="text-sm font-semibold text-[#0B8494] mb-2">Stage {i + 1}</div>
                                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.stage}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.description}</p>
                                <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                                    <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Recap&apos;s role:</strong> {item.recap}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sources */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-gray-400">
                        Sources: World Health Organization (WHO), Alzheimer&apos;s Association, Alzheimer&apos;s Disease International, National Institute on Aging (NIA)
                    </p>
                </div>
            </div>
        </section>
    );
}

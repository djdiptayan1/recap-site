import { useState } from 'react';

export default function Support() {
    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "How do I connect with family members on Recap?",
            answer: "Family members connect using the patient's unique Patient UID. When a family member signs up, they enter the patient's UID to link their accounts. This allows them to create daily questions, view progress reports, and monitor engagement."
        },
        {
            id: 2,
            question: "What are the three memory types that Recap tests?",
            answer: "Recap assesses Distant (long-term) memory — memories from years ago; Immediate (short-term) memory — things that happened minutes or hours ago; and Remote (recent) memory — events from days to weeks ago. Each type is tracked separately in progress reports."
        },
        {
            id: 3,
            question: "How often should the memory games be played?",
            answer: "For optimal benefit, we recommend 15-20 minutes of daily engagement, which can include both memory games and daily questions. Research shows that consistent daily cognitive exercise provides more benefit than longer, infrequent sessions."
        },
        {
            id: 4,
            question: "What games are available in Recap?",
            answer: "Recap currently offers two games: Geo Sorter, which exercises spatial memory through geographic sorting tasks, and Match Mania, a pattern-matching game designed to increase memory agility and short-term recall."
        },
        {
            id: 5,
            question: "Can healthcare providers access the progress reports?",
            answer: "Yes. The app generates three types of reports — Immediate, Recent, and Remote memory reports — that can be shared with healthcare providers. These reports include trend data and performance analytics that can inform clinical assessments."
        },
        {
            id: 6,
            question: "How does Recap adapt to different Alzheimer's stages?",
            answer: "During setup, patients or caregivers select the current Alzheimer's stage: Early, Middle, or Advanced. The app uses this information to tailor the difficulty and nature of questions and activities to be appropriate for the patient's cognitive level."
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-4">
                        <span className="text-sm font-semibold text-[#0B8494] uppercase tracking-wide">
                            Help Center
                        </span>
                    </span>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Support Center</h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Get help with Recap app features, troubleshooting, and frequently asked questions.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
                    <div className="bg-[#F4F6FF] dark:bg-gray-800 rounded-xl p-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0B8494] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Email Support</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Get in touch with our support team</p>
                        <a href="mailto:recapsdk@gmail.com" className="text-[#0B8494] font-medium hover:underline">
                            recapsdk@gmail.com
                        </a>
                    </div>

                    <div className="bg-[#F4F6FF] dark:bg-gray-800 rounded-xl p-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0B8494] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Phone Support</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Available Monday-Friday, 9am-5pm IST</p>
                        <a href="tel:+919474182596" className="text-[#0B8494] font-medium hover:underline">
                            +91 94741 82596
                        </a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-3">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="bg-[#F4F6FF] dark:bg-gray-800 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full text-left p-5 focus:outline-none flex justify-between items-center"
                                >
                                    <h3 className="text-base font-medium text-gray-800 dark:text-white pr-4">{faq.question}</h3>
                                    <svg
                                        className={`h-5 w-5 text-gray-400 flex-shrink-0 transform ${openFaqId === faq.id ? 'rotate-180' : ''} transition-transform duration-200`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {openFaqId === faq.id && (
                                    <div className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-300">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#F4F6FF] dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Contact Us</h2>
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full rounded-xl border-gray-200 dark:border-gray-600 shadow-sm focus:border-[#0B8494] focus:ring-[#0B8494] dark:bg-gray-700 dark:text-white p-3"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full rounded-xl border-gray-200 dark:border-gray-600 shadow-sm focus:border-[#0B8494] focus:ring-[#0B8494] dark:bg-gray-700 dark:text-white p-3"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block w-full rounded-xl border-gray-200 dark:border-gray-600 shadow-sm focus:border-[#0B8494] focus:ring-[#0B8494] dark:bg-gray-700 dark:text-white p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="block w-full rounded-xl border-gray-200 dark:border-gray-600 shadow-sm focus:border-[#0B8494] focus:ring-[#0B8494] dark:bg-gray-700 dark:text-white p-3"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 bg-[#0B8494] text-white font-medium rounded-xl hover:bg-[#097383] transition-colors shadow-sm"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
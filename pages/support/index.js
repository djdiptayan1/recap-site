import { useState } from 'react';

export default function Support() {
    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "What is Smriti AI and how does it help?",
            answer: "Smriti is Recap\u2019s AI Care Companion powered by Google Gemini. It provides real-time conversational support, reminiscence therapy through a \u2018Memory Lane\u2019 mode, and context-aware responses that reference the patient\u2019s name, family members, Alzheimer\u2019s stage, recent activities, and reminders. It returns care strategies, follow-up prompts, and supportive notes."
        },
        {
            id: 2,
            question: "How do I connect with family members on Recap?",
            answer: "Family members connect using the patient\u2019s unique 6-character Patient UID. When a family member signs up, they enter the patient\u2019s UID to link their accounts. This allows them to create daily questions, view dashboard analytics, monitor streaks, coordinate reminders, and upload photos and stories."
        },
        {
            id: 3,
            question: "What are the three memory types that Recap assesses?",
            answer: "Recap assesses Immediate memory (short-term) \u2014 things that happened minutes or hours ago; Recent memory \u2014 events from days to weeks ago; and Remote memory (long-term) \u2014 memories from years ago. The app provides 4 immediate, 2 recent, and 1 remote question per day, and the 15-point Memory Assessment quiz covers all three types."
        },
        {
            id: 4,
            question: "What games are available in Recap?",
            answer: "Recap offers three cognitive games: Geo Sorter (spatial memory through geographic sorting), Match Mania (pattern matching for memory agility), and Card Game (visual recognition-based card matching). All games track performance for progress reports."
        },
        {
            id: 5,
            question: "How does the Journal & Memories feature work?",
            answer: "The Journal feature lets patients create entries with text, voice recordings (audio uploaded to Cloudinary), and multiple photos with captions. You can tag your mood (happy, sad, neutral, anxious, calm, grateful), tag people, places, and events, and choose between \u2018journal\u2019 (text/voice) or \u2018memory\u2019 (photo-focused) entry types. Browse past entries with pagination."
        },
        {
            id: 6,
            question: "What types of reminders can I set?",
            answer: "Recap supports reminders for Medicine, Daily Chores, Appointments, Exercise, Meals, Hydration, and Other. Each reminder can be set with flexible frequencies: once, hourly, daily, weekdays, weekends, weekly, biweekly, monthly, or yearly. You can add optional notes for context."
        },
        {
            id: 7,
            question: "How does the Dashboard Analytics work?",
            answer: "The Dashboard provides daily, weekly, and monthly question accuracy statistics with per-category breakdowns (immediate, recent, remote). It includes cognitive decline trend alerts that flag concerning patterns. Analytics are cached for fast loading with a configurable refresh interval."
        },
        {
            id: 8,
            question: "Can healthcare providers access the progress reports?",
            answer: "Yes. The Memory Assessment quiz generates a 15-point score with historical reports that can be shared with healthcare providers. Dashboard analytics with daily/weekly/monthly trends and cognitive decline alerts help inform clinical assessments and treatment decisions."
        },
        {
            id: 9,
            question: "How does Recap adapt to different Alzheimer\u2019s stages?",
            answer: "During setup, patients or caregivers select the current Alzheimer\u2019s stage: Early, Middle, or Advanced. Smriti AI uses this context to tailor its responses. The combination of questions, games, journal, reminders, and Smriti supports patients across all stages with appropriate engagement."
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
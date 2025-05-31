import { useState } from 'react';

export default function Support() {
    // FAQ state management
    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "How do I connect with family members on Recap?",
            answer: "To connect with family members, go to the Profile section and tap on 'Family Connections'. From there, you can send invitation links via email or text. Once they accept the invitation and create an account, you'll be connected."
        },
        {
            id: 2,
            question: "Can multiple family members be connected to one patient account?",
            answer: "Yes, Recap allows multiple family members to connect to a single patient account. Each family member will have their own login credentials and can contribute questions, view progress reports, and engage with the patient."
        },
        {
            id: 3,
            question: "How often should the memory games be played?",
            answer: "For optimal results, we recommend engaging with the memory games for about 15-20 minutes daily. However, the frequency can be adjusted based on the patient's comfort level and cognitive ability. The app also provides personalized recommendations based on usage patterns."
        },
        {
            id: 4,
            question: "Is my personal data secure on Recap?",
            answer: "Yes, we take data security very seriously. All personal information is encrypted, and we follow industry best practices for data protection. You can learn more about our security measures in our Privacy Policy."
        },
        {
            id: 5,
            question: "Can healthcare providers access the progress reports?",
            answer: "Yes, patients or family members can share progress reports with healthcare providers. There's an option to export reports as PDFs or directly share them via secure links that can be sent to your healthcare provider's email."
        },
        {
            id: 6,
            question: "Does Recap work offline?",
            answer: "Some features of Recap work offline, including memory games and access to previously loaded questions. However, an internet connection is required to sync data, update progress reports, and connect with family members."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Support Center</h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Get help with Recap app features, troubleshooting, and frequently asked questions.
                </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 justify-center items-center">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Support</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Get in touch with our support team</p>
                    <a href="mailto:recapsdk@gmail.com" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                        recapsdk@gmail.com
                    </a>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone Support</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Available Monday-Friday, 9am-5pm IST</p>
                    <a href="tel:+919474182596" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
                        +919474182596
                    </a>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                            >
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                                <svg
                                    className={`h-5 w-5 text-gray-500 transform ${openFaqId === faq.id ? 'rotate-180' : ''} transition-transform duration-200`}
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
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Us</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:text-white p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:text-white p-3"
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
                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:text-white p-3"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-800 dark:text-white p-3"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Additional Resources */}
            {/* <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Additional Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Video Tutorials</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Watch step-by-step guides on how to use all Recap features effectively.
                        </p>
                        <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center">
                            View Tutorials
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">User Manual</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Download our comprehensive user guide for detailed instructions.
                        </p>
                        <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center">
                            Download PDF
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Alzheimer's Resources</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Find helpful articles and resources about Alzheimer's care.
                        </p>
                        <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center">
                            Learn More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
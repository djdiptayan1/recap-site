import Image from 'next/image';

export default function TestimonialSection() {
    const testimonials = [
        {
            content: "Recap has been life-changing for our family. Mom remembers more of our shared memories now, and we feel more connected than ever.",
            author: "Sarah J.",
            role: "Caregiver"
        },
        {
            content: "The daily questions feature helps my father stay mentally engaged. It's beautiful to see his face light up when memories come back.",
            author: "Michael T.",
            role: "Son of Alzheimer's Patient"
        },
        {
            content: "As a doctor, I recommend Recap to my patients with early-stage Alzheimer's. The progress tracking provides valuable data for treatment.",
            author: "Dr. Emily Chen",
            role: "Neurologist"
        }
    ];

    return (
        <section className="py-16 bg-[#F4F6FF] dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-[#0B8494] dark:text-[#0B8494] tracking-wide uppercase">Testimonials</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Real Stories from Recap Users
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
                        See how Recap is making a difference in people's lives.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                        >
                            <svg className="h-12 w-12 text-[rgba(11,132,148,0.2)] dark:text-[rgba(11,132,148,0.4)] mb-4" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {testimonial.content}
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="h-10 w-10 rounded-full bg-[rgba(11,132,148,0.1)] dark:bg-[rgba(11,132,148,0.2)] flex items-center justify-center text-[#0B8494] dark:text-[#0B8494] font-bold">
                                        {testimonial.author[0]}
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

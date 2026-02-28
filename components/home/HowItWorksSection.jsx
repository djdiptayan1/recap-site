import Image from 'next/image';

const steps = [
    {
        step: "1",
        title: "Choose Your Role",
        description: "Sign up as a Patient or Family Member. Patients get daily questions, games, journal, reminders, and the Smriti AI companion. Family members get monitoring tools, question creation, and shared dashboards.",
        image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/ufke6lkpp4oxsnjswwr8.png",
    },
    {
        step: "2",
        title: "Engage Daily",
        description: "Answer personalized memory questions, play cognitive games, write journal entries with photos and voice recordings, chat with Smriti AI, and build your daily streak for consistent brain exercise.",
        image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/r9h7ej4mm8gt3bedt2dq.png",
    },
    {
        step: "3",
        title: "Track Progress",
        description: "View dashboard analytics with daily, weekly, and monthly breakdowns by memory type. Share cognitive assessment reports with healthcare providers. Get decline trend alerts.",
        image: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048142/nmexrxae9dg4k8ccrlb6.png",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-[#F4F6FF] dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Getting started with Recap takes just a few minutes.
                    </p>
                </div>

                <div className="space-y-16">
                    {steps.map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                        >
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-10 h-10 rounded-full bg-[#0B8494] text-white flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            <div className="lg:w-1/2 flex justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={280}
                                    height={500}
                                    className="rounded-2xl shadow-lg object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

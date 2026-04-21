import Image from 'next/image';

const patientScreenshots = [
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/ufke6lkpp4oxsnjswwr8.png", alt: "Patient App - Welcome Screen" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/r9h7ej4mm8gt3bedt2dq.png", alt: "Patient App - Home Dashboard" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/jl1oweylvh6wr0yo13bs.png", alt: "Patient App - Smriti AI Companion" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/ifcqlc4g1lrbc0kpimbq.png", alt: "Patient App - Daily Questions" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048144/uv8wmtmbgdp2qe1ag7yi.png", alt: "Patient App - Cognitive Games" },
];

const caregiverScreenshots = [
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048142/nmexrxae9dg4k8ccrlb6.png", alt: "Caregiver Portal - Dashboard" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048148/sid4k7p89esbm7vwncab.png", alt: "Caregiver Portal - Journal Entries" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/l0u2uo3moubir9dcqlma.png", alt: "Caregiver Portal - Reminders" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/ywycbazxwenr5jtxfbr4.png", alt: "Caregiver Portal - Family Management" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048146/v9dxlusltvxy4rjnuuoo.png", alt: "Caregiver Portal - Streaks & Analytics" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048140/vg2syphpkskizu1acwaz.png", alt: "Caregiver Portal - Memory Reports" },
    { src: "https://res.cloudinary.com/dbtijt1zq/image/upload/v1772048141/uqr02nylkp6ugcxrx27d.png", alt: "Caregiver Portal - Articles & Resources" },
];

export default function Screenshots() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center px-4 py-2 bg-[#0B8494]/10 rounded-full mb-4">
                        <span className="text-sm font-semibold text-[#0B8494] uppercase tracking-wide">
                            App Gallery
                        </span>
                    </span>
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl mb-4">
                        Screenshots
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Explore the Recap app experience for both patients and caregivers.
                    </p>
                </div>

                {/* Patient App Screenshots */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">Patient App</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                        Daily questions, cognitive games, dual-provider Smriti AI, mood journaling, and personalized memory care.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {patientScreenshots.map((screenshot, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    width={220}
                                    height={440}
                                    className="rounded-2xl shadow-lg object-cover"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2 max-w-[220px]">{screenshot.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Caregiver Portal Screenshots */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">Caregiver Portal</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                        Dashboard analytics, family management, reminders, mood journal entries, and progress tracking.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {caregiverScreenshots.map((screenshot, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    width={220}
                                    height={440}
                                    className="rounded-2xl shadow-lg object-cover"
                                />
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2 max-w-[220px]">{screenshot.alt}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

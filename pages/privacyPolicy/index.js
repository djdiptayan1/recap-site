
export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                    Last updated: May 31, 2025
                </p>
            </div>

            <div className="prose prose-purple dark:prose-invert max-w-none">
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        At Recap, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                        and safeguard your information when you use our mobile application. Please read this privacy policy
                        carefully. If you do not agree with the terms of this privacy policy, please do not access the app.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">App Privacy Details</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In accordance with Apple's App Store guidelines, we provide the following summary of our data
                        collection practices. You can also view this information in the "App Privacy" section of our
                        App Store listing.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Collected and Its Uses</h3>
                    <div className="overflow-x-auto mb-6">
                        <table className="min-w-full border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr className="bg-purple-50 dark:bg-purple-900/30">
                                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-left">Data Type</th>
                                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-left">Purpose of Use</th>
                                    <th className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 text-left">Linked to Identity?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Contact Info (Name, Email)</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">App Functionality, User Authentication</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Yes</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">User Content (Photos, Responses)</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">App Functionality, Product Personalization</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Yes</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">User Activity Data</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Analytics, Product Improvement</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Yes</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">Diagnostic Data</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">App Functionality, Analytics</td>
                                    <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>Note:</strong> Our app does not track you across other apps and websites owned by other companies,
                        and we do not sell your data to third parties for advertising purposes.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We collect information that you provide directly to us when you:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Register for an account</li>
                        <li className="mb-2">Input data related to memory exercises and activities</li>
                        <li className="mb-2">Communicate with family members through the app</li>
                        <li className="mb-2">Track progress and memory improvements</li>
                        <li className="mb-2">Contact our support team</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        The information we collect is used to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                        <li className="mb-2">Provide, maintain, and improve our services</li>
                        <li className="mb-2">Create personalized memory exercises</li>
                        <li className="mb-2">Generate progress reports for patients and family members</li>
                        <li className="mb-2">Communicate with you about updates, security alerts, and support</li>
                        <li className="mb-2">Analyze usage patterns to enhance user experience</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Detailed Data Collection Practices</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In accordance with Apple's App Privacy guidelines, we provide detailed information about the specific types of data we collect:
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Contact Information</h3>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Name: Used to personalize your experience and identify users within family groups</li>
                        <li className="mb-2">Email Address: Used for authentication, account recovery, and important notifications</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. User Content</h3>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Photos: Optional photos you upload to associate with memories and questions</li>
                        <li className="mb-2">User-Generated Content: Responses to memory prompts, custom questions, and notes</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Usage Data</h3>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Product Interaction: How you engage with features, time spent on different activities</li>
                        <li className="mb-2">Performance Data: Used to improve app functionality and user experience</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Health-Related Information</h3>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Memory Activity Metrics: Aggregated data about memory performance and cognitive exercises</li>
                        <li className="mb-2">Progress Tracking: Historical data showing changes in memory recall performance</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">App Tracking Transparency</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        In compliance with Apple's App Tracking Transparency framework:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Our app does not track your activity across other companies' apps or websites</li>
                        <li className="mb-2">We do not share your identifiable information with data brokers</li>
                        <li className="mb-2">We do not use your data for targeted advertising purposes</li>
                        <li className="mb-2">Any analytics we perform is solely to improve our own app functionality</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Processing and Storage</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Most data processing occurs directly on your device. When data is transmitted to our servers, it is:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Encrypted during transmission using industry-standard protocols</li>
                        <li className="mb-2">Stored in secure, access-controlled databases</li>
                        <li className="mb-2">Regularly backed up to prevent data loss</li>
                        <li className="mb-2">Retained only as long as necessary for the purposes stated in this policy</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We implement appropriate security measures to protect the security of your personal information.
                        However, please note that no method of transmission over the Internet or electronic storage is
                        100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Our app may contain links to third-party websites and services. We are not responsible for the
                        content or privacy practices of these third-party services. We encourage you to read the privacy
                        policies of any third-party services you visit.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We use the following third-party SDKs:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Analytics: To monitor app performance and user experience</li>
                        <li className="mb-2">Crash Reporting: To identify and fix technical issues</li>
                        <li className="mb-2">Cloud Storage: To securely store and sync your data</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All third-party services we use adhere to strict privacy and security standards.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Privacy Rights</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Access: Request copies of your personal data</li>
                        <li className="mb-2">Rectification: Correct inaccurate or incomplete information</li>
                        <li className="mb-2">Erasure: Request deletion of your personal data</li>
                        <li className="mb-2">Restriction: Limit how we use your data</li>
                        <li className="mb-2">Data Portability: Receive your data in a structured, machine-readable format</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        To exercise these rights, please contact us at privacy@recapapp.com.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy Choices</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Within the app, you can:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
                        <li className="mb-2">Update your profile information in the Account Settings</li>
                        <li className="mb-2">Choose what information to share with family members</li>
                        <li className="mb-2">Delete content you've created, including photos and responses</li>
                        <li className="mb-2">Opt out of optional analytics collection</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Our app is not intended for children under 13 years of age, and we do not knowingly collect
                        personal information from children under 13. If we learn we have collected personal information
                        from a child under 13, we will delete that information promptly.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page and updating the "Last Updated" date at the top. For significant
                        changes, we may also provide a more prominent notice or send an email notification.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Email: recapsdk@gmail.com<br />
                        Address: IOS development Centre, SRMIST, Chennai<br />
                        Phone: +91 9474182596
                    </p>
                </section>
            </div>
        </div>
    );
}
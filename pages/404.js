import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-[#0B8494]">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mt-4">Page Not Found</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-[#0B8494] text-white hover:bg-[#097383] transition-colors shadow-lg">
                        Return Home
                    </Link>
                    <Link href="/support" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0B8494]/30 text-base font-medium rounded-xl bg-white dark:bg-gray-800 text-[#0B8494] hover:border-[#0B8494] transition-colors">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}

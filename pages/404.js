import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-purple-600 dark:text-purple-400">404</h1>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">Page Not Found</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <div className="mt-8 space-x-4">
                    <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                        Return Home
                    </Link>
                    <Link href="/support" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}

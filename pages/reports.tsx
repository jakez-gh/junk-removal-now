import Head from 'next/head';
import Link from 'next/link';

export default function Reports() {
  return (
    <>
      <Head>
        <title>Test Reports & Screenshots - Junk Removal Now</title>
        <meta name="description" content="View Playwright test report and screenshots" />
      </Head>
      <main className="min-h-screen bg-white">
        <header className="bg-green-700 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Automated Test Reports</h1>
            <p className="text-xl mt-2">Playwright HTML report and collected screenshots</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">Playwright Report</h2>
              <p className="text-gray-700 mb-4">Latest test run HTML report captured in CI.</p>
              <Link href="/test-report/index.html" className="text-green-700 font-semibold hover:underline">
                View Playwright Report →
              </Link>
              <p className="mt-2 text-sm text-gray-600">Note: Report updates on each deployment after tests run.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-3">Screenshots</h2>
              <p className="text-gray-700 mb-4">Raw screenshots from automated browser tests.</p>
              <Link href="/screenshots/" className="text-green-700 font-semibold hover:underline">
                Browse Screenshots →
              </Link>
              <p className="mt-2 text-sm text-gray-600">Navigate folders by browser and test suite.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

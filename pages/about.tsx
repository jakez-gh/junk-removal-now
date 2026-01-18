import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Junk Removal Now</title>
        <meta
          name="description"
          content="Learn about Junk Removal Now and our commitment to quality service"
        />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Junk Removal Now</h1>
            <p className="text-xl">Professional junk removal with a personal touch</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Junk Removal Now is a locally-owned and operated junk removal service proudly
                serving Sanford, Florida and the surrounding Seminole County area.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Founded on the principles of reliability, professionalism, and customer
                satisfaction, we take pride in delivering exceptional service to our community.
                Owner Diane &ldquo;Dee&rdquo; Bennett brings years of experience and a personal
                touch to every job.
              </p>
              <p className="text-gray-700 text-lg">
                Whether you need to clear out a single room or manage an entire estate cleanout, our
                experienced team is ready to help you reclaim your space.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Professional Service</h4>
                    <p className="text-gray-600">Trained and courteous staff</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Fair Pricing</h4>
                    <p className="text-gray-600">Transparent quotes with no hidden fees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Eco-Friendly</h4>
                    <p className="text-gray-600">Responsible disposal and recycling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">Customer Focused</h4>
                    <p className="text-gray-600">Your satisfaction is our priority</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Free Estimate</h3>
                <p className="text-gray-600">Contact us for a hassle-free quote</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Schedule Service</h3>
                <p className="text-gray-600">Book at a time that works for you</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Professional Removal</h3>
                <p className="text-gray-600">We handle the heavy lifting safely</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-lg mb-2">Responsible Disposal</h3>
                <p className="text-gray-600">Items are recycled or donated</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Why Local Service Matters</h2>
          <p className="text-gray-700 text-lg mb-6">
            As a local, owner-operated business, we understand the unique needs of our community. We
            know that reliable service and fair pricing are important to you. That&apos;s why we:
          </p>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl mr-3">→</span>
              <span>Provide same-day service when possible for urgent needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl mr-3">→</span>
              <span>Give accurate, transparent estimates with no surprises</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl mr-3">→</span>
              <span>Coordinate with local charities for donations</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 text-2xl mr-3">→</span>
              <span>Build lasting relationships based on trust and quality</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Junk Removal Now - Professional Junk Removal Services | Sanford, FL</title>
        <meta
          name="description"
          content="Professional junk removal and furniture disposal services in Sanford, FL and Seminole County. Fast, reliable, eco-friendly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        <header className="bg-blue-600 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Junk Removal Now</h1>
            <p className="text-xl mt-2">Professional Junk Removal & Furniture Services</p>
            <p className="text-lg mt-1 opacity-90">Serving Sanford, FL & Seminole County</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Welcome</h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide professional junk removal and furniture disposal services throughout Sanford,
            Florida and the surrounding Seminole County area. Fast, reliable, and eco-friendly
            service you can trust.
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              Book a Service
            </button>
          </Link>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Junk Removal"
                description="General household junk and clutter removal"
              />
              <ServiceCard
                title="Furniture Removal"
                description="Specialty furniture pickup and disposal"
              />
              <ServiceCard
                title="Estate Cleanouts"
                description="Complete property and estate cleanouts"
              />
            </div>
            <div className="text-center mt-10">
              <Link href="/services">
                <button className="text-blue-600 font-bold hover:text-blue-700 text-lg">
                  View All Services →
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
              <p className="text-gray-600">Same-day service available for your convenience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Professional Team</h3>
              <p className="text-gray-600">Experienced and courteous service</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Donation and recycling coordination</p>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="bg-blue-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Learn More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-bold mb-3">About Us</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about our commitment to quality service
                  </p>
                  <span className="text-blue-600 font-bold">Read More →</span>
                </div>
              </Link>
              <Link href="/services">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-bold mb-3">Services</h3>
                  <p className="text-gray-600 mb-4">Explore our comprehensive service offerings</p>
                  <span className="text-blue-600 font-bold">View Services →</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                  <h3 className="text-xl font-bold mb-3">Contact</h3>
                  <p className="text-gray-600 mb-4">Get a free quote or schedule your service</p>
                  <span className="text-blue-600 font-bold">Contact Us →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="mb-2">© 2026 Junk Removal Now. All rights reserved.</p>
            <p className="text-gray-400">Professional Junk Removal & Furniture Services</p>
          </div>
        </footer>
      </main>
    </>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600, // Revalidate every hour
  };
};

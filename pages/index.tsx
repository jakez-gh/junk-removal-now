import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Junk Removal Now - Professional Junk Removal Services</title>
        <meta
          name="description"
          content="Professional junk removal and furniture disposal services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        <header className="bg-green-700 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Junk Removal Now</h1>
            <p className="text-xl mt-2">Responsible, judgment-free junk removal & furniture services</p>
          </div>
        </header>

        {/* Hero with photo */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                Responsible Disposal. Judgment-Free Help.
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We donate, recycle, and responsibly dispose of your unwanted items. From single
                pieces to full cleanouts, we handle it all—with empathy and respect.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800 transition">
                    Book a Service
                  </button>
                </Link>
                <Link href="/services">
                  <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg text-lg hover:bg-green-50 transition">
                    What We Take
                  </button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                We don’t judge. We’re here to help—discreetly and professionally.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1600585152220-90363fe7f9f6?auto=format&fit=crop&w=1600&q=80"
                alt="Team removing clutter responsibly"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-12">
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
                <button className="text-green-700 font-bold hover:text-green-800 text-lg">
                  View All Services →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Responsible & Recycling section */}
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
              <h3 className="text-xl font-bold mb-3">Responsible Disposal</h3>
              <p className="text-gray-600">We donate, recycle, and minimize landfill waste</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Recycle Options</h4>
              <p className="text-gray-600">Electronics, appliances, metals, cardboard, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Donation First</h4>
              <p className="text-gray-600">We prioritize donations to local charities when possible</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">Judgment-Free</h4>
              <p className="text-gray-600">We don’t judge—just friendly, discreet help</p>
            </div>
          </div>
        </section>

        {/* Before & After gallery */}
        <section className="bg-green-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Before & After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=60"
                    alt="Before - cluttered space"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1505692794403-34d4982f04b0?auto=format&fit=crop&w=800&q=60"
                    alt="After - clean space"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="col-span-2 text-sm text-gray-600">Garage cleanup — judgment-free help</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582582429416-1c27fcb5f718?auto=format&fit=crop&w=800&q=60"
                    alt="Before - furniture to remove"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
                    alt="After - open space"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="col-span-2 text-sm text-gray-600">Furniture removal — recycled when possible</p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/contact">
                <button className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-800 transition">
                  Get Your Free Quote
                </button>
              </Link>
              <p className="mt-3 text-sm text-gray-600">Prefer to call? <a href="tel:4076036768" className="text-green-700 font-semibold">(407) 603-6768</a></p>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="mb-2">© 2026 Junk Removal Now. All rights reserved.</p>
            <p className="text-gray-400">Responsible disposal • Donation-first • Judgment-free</p>
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

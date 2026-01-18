import { GetStaticProps } from 'next';
import Head from 'next/head';

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
        <header className="bg-blue-600 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Junk Removal Now</h1>
            <p className="text-xl mt-2">Professional Junk Removal & Furniture Services</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Welcome</h2>
          <p className="text-lg text-gray-700 mb-4">
            We provide professional junk removal and furniture disposal services in your area.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Book a Service
          </button>
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
          </div>
        </section>
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

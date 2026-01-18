import { GetStaticProps } from 'next';
import Head from 'next/head';
import ItemsWeRemove from '../components/ItemsWeRemove';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 'residential-junk',
    name: 'Residential Junk Removal',
    description: 'Professional removal of household clutter and unwanted items',
    icon: '🏠',
    details: [
      'General household junk removal',
      'Basement and attic cleanouts',
      'Garage decluttering',
      'Post-renovation debris removal',
      'Same-day service available',
    ],
  },
  {
    id: 'furniture-removal',
    name: 'Furniture Removal',
    description: 'Specialized pickup and disposal of furniture items',
    icon: '🪑',
    details: [
      'Unwanted furniture pickup',
      'Estate furniture disposition',
      'Bulky item handling',
      'Donation coordination',
      'Eco-friendly disposal',
    ],
  },
  {
    id: 'appliance-removal',
    name: 'Appliance Removal',
    description: 'Safe and responsible removal of old appliances',
    icon: '🔧',
    details: [
      'Refrigerator and freezer removal',
      'Washing machine and dryer pickup',
      'Oven and range removal',
      'Dishwasher removal',
      'Proper recycling and disposal',
    ],
  },
  {
    id: 'estate-cleanouts',
    name: 'Estate Cleanouts',
    description: 'Complete property clearance and disposal services',
    icon: '🏘️',
    details: [
      'Full house cleanout services',
      'Room-by-room clearance',
      'Donation and recycling coordination',
      'Sensitive handling of personal items',
      'Flexible scheduling',
    ],
  },
  {
    id: 'commercial-cleanup',
    name: 'Commercial Cleanup',
    description: 'Business and office space clearing services',
    icon: '🏢',
    details: [
      'Office cleanout services',
      'Retail space clearing',
      'Construction debris removal',
      'Facility downsizing support',
      'Commercial-scale removal',
    ],
  },
  {
    id: 'e-waste-removal',
    name: 'Electronics Disposal',
    description: 'Responsible removal and recycling of electronics',
    icon: '📱',
    details: [
      'Computer and monitor removal',
      'Television disposal',
      'Electronics recycling',
      'Hazardous material handling',
      'Eco-friendly processing',
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Junk Removal Now</title>
        <meta
          name="description"
          content="Professional junk removal and furniture disposal services"
        />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h1 className="text-4xl font-bold">Our Services</h1>
              <a
                href="tel:4075558585"
                className="mt-4 md:mt-0 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-xl hover:bg-gray-100 transition"
              >
                📞 (407) 555-JUNK
              </a>
            </div>
            <p className="text-xl">Comprehensive junk removal solutions for your needs</p>
            <div className="mt-4 inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm">
              ⚡ SAME-DAY SERVICE AVAILABLE
            </div>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Fast Service</h3>
                <p className="text-gray-600">Same-day availability for emergency removals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-3">Professional</h3>
                <p className="text-gray-600">Experienced team with proper equipment</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">Donation and recycling coordination</p>
              </div>
            </div>
          </div>
        </section>

        <ItemsWeRemove />

        <section className="bg-blue-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us for a free estimate or to book your junk removal service today.
            </p>
            <a
              href="tel:4075558585"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition font-bold"
            >
              Call (407) 555-JUNK
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="text-5xl p-6 bg-blue-50 text-center">{service.icon}</div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">✓</span>
              <span className="text-sm text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 3600,
  };
};

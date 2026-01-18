import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would send data to an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Junk Removal Now</title>
        <meta name="description" content="Get in touch with Junk Removal Now for a free estimate" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="bg-blue-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get a free estimate today</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-700 text-lg">
                  <a href="tel:" className="text-blue-600 hover:underline">
                    Call for a free quote
                  </a>
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-gray-700 mb-1">
                  <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Saturday:</strong> 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-700">
                  <strong>Sunday:</strong> By appointment
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Service Area</h3>
                <p className="text-gray-700">
                  We proudly serve the local area and surrounding communities. Contact us to confirm
                  service availability in your location.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Free, no-obligation estimates</li>
                  <li>✓ Same-day service available</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ Professional and courteous team</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Quick Quote Form</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We&apos;ve received your inquiry. A team member will contact you shortly to
                    provide an estimate and schedule your service.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-bold mb-2">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Junk Removal</option>
                      <option value="furniture">Furniture Removal</option>
                      <option value="appliance">Appliance Removal</option>
                      <option value="estate">Estate Cleanout</option>
                      <option value="commercial">Commercial Cleanup</option>
                      <option value="electronics">Electronics Disposal</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2">
                      Details About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Tell us about what you need removed..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Get Free Estimate
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Your Space Back?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact Junk Removal Now today for a professional, reliable junk removal service.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

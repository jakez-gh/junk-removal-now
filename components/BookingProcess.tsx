export default function BookingProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Call or Book Online</h3>
            <p className="text-gray-600">
              Contact us by phone or fill out our quick quote form. Tell us what you need removed.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Free On-Site Estimate</h3>
            <p className="text-gray-600">
              We arrive at your location and provide a free, no-obligation estimate. No hidden fees.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">We Haul It Away</h3>
            <p className="text-gray-600">
              Approve the price and we&apos;ll remove everything immediately. Fast, professional
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

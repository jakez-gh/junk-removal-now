import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  location: string;
}

interface TestimonialsData {
  testimonials: Testimonial[];
  reviewStats: {
    totalReviews: number;
    averageRating: number;
    fiveStar: number;
    fourStar: number;
    threeStar: number;
    twoStar: number;
    oneStar: number;
  };
}

export default function Testimonials() {
  const [data, setData] = useState<TestimonialsData | null>(null);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Failed to load testimonials:', err));
  }, []);

  if (!data || data.testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          {data.reviewStats.totalReviews > 0 && (
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="text-2xl">
                {renderStars(Math.round(data.reviewStats.averageRating))}
              </span>
              <span className="font-semibold">{data.reviewStats.averageRating.toFixed(1)}</span>
              <span className="text-gray-600">({data.reviewStats.totalReviews} reviews)</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="text-xl">{renderStars(testimonial.rating)}</div>
              </div>
              <p className="text-gray-700 mb-3 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">{testimonial.service}</span>
                <span className="mx-2">•</span>
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

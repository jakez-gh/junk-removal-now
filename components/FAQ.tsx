import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How much does junk removal cost?',
    answer:
      'Pricing is based on the volume of junk we remove. We charge by how much space your items take up in our truck. After seeing what you need removed, we provide a free, upfront estimate with no hidden fees. Most jobs range from $100-$600 depending on the amount.',
  },
  {
    question: 'Do you offer same-day service?',
    answer:
      'Yes! Same-day service is available in most cases. Call us early in the day and we can often schedule your removal for that same afternoon. We also offer next-day appointments for guaranteed availability.',
  },
  {
    question: 'What items do you NOT take?',
    answer:
      "We cannot accept: hazardous materials (paint, chemicals, asbestos), medical waste, or items requiring special disposal permits. If you're unsure about an item, just ask - we're happy to advise you on proper disposal options.",
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      "Yes, we are fully licensed and insured for your protection. Our team is trained professionals who handle your property with care. You can book with confidence knowing you're protected.",
  },
  {
    question: 'What happens to my junk after removal?',
    answer:
      "We prioritize eco-friendly disposal. Usable items are donated to local Sanford charities. Recyclable materials go to proper recycling facilities. Only items that can't be donated or recycled go to the landfill - typically less than 40% of what we haul.",
  },
  {
    question: 'Do I need to be present during the removal?',
    answer:
      "You need to be present for the initial estimate so we can show you exactly what we'll charge. After you approve, you can stay or leave - whatever works best for you. Many customers leave us to work and come back to a clean space.",
  },
  {
    question: 'How do I prepare for junk removal?',
    answer:
      "No preparation needed! Just point out what you want removed. We handle all the heavy lifting, loading, and cleanup. If you want to save time, you can gather smaller items in one area, but it's not required.",
  },
  {
    question: 'Do you work on weekends?',
    answer:
      "Yes, we offer Saturday appointments. Sunday service is available by appointment. Call us to discuss your preferred time and we'll work with your schedule.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <span className="text-2xl text-blue-600 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

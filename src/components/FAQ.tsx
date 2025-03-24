import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What time do doors open?",
    answer: "Doors typically open 2 hours before the show starts. VIP ticket holders get early access 30 minutes before general admission.",
  },
  {
    question: "Is there a minimum age requirement?",
    answer: "The minimum age requirement varies by venue. Please check specific venue policies when purchasing tickets.",
  },
  {
    question: 'What time should I arrive at the venue?',
    answer: 'We recommend arriving at least 1 hour before the show starts to allow time for parking, security checks, and finding your seat.',
  },
  {
    question: 'Are cameras allowed at the concert?',
    answer: 'Small personal cameras and phones are allowed. Professional cameras (those with detachable lenses) are not permitted.',
  },
  {
    question: 'What items are prohibited?',
    answer: 'Prohibited items include outside food and drinks, professional cameras, recording equipment, and large bags.',
  },
  {
    question: 'Is there a minimum age requirement?',
    answer: "All ages are welcome. Children under 2 years old do not need a ticket but must sit on a parent's lap.",
  },
];

const FAQ = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  return (
    <section id='faq' className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full py-4 flex items-center justify-between text-left"
                onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform ${selectedFaq === index ? 'rotate-180' : ''}`}
                />
              </button>
              {selectedFaq === index && (
                <div className="pb-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
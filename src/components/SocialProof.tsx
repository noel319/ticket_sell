import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Johnson",
    location: "New York",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    text: "The most incredible concert experience of my life! The energy was electric, and the production value was out of this world.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Los Angeles",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    text: "Absolutely phenomenal show! The sound quality was perfect, and the crowd interaction was amazing.",
    rating: 5,
  },
  {
    name: "Sofia Rodriguez",
    location: "Miami",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    text: "Worth every penny! The VIP experience exceeded all my expectations. Can't wait for the next tour!",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Fan Experiences</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 text-purple-400/20" size={48} />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-purple-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-zinc-900/50 rounded-lg">
            <p className="text-4xl font-bold text-purple-400 mb-2">500K+</p>
            <p className="text-gray-400">Instagram Followers</p>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-lg">
            <p className="text-4xl font-bold text-purple-400 mb-2">1M+</p>
            <p className="text-gray-400">Twitter Followers</p>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-lg">
            <p className="text-4xl font-bold text-purple-400 mb-2">2M+</p>
            <p className="text-gray-400">Facebook Fans</p>
          </div>
          <div className="p-6 bg-zinc-900/50 rounded-lg">
            <p className="text-4xl font-bold text-purple-400 mb-2">100M+</p>
            <p className="text-gray-400">Video Views</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
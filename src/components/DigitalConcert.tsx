import React from 'react';
import { Play, Tv, Wifi, Globe, Timer } from 'lucide-react';

const digitalFeatures = [
  {
    icon: <Tv className="w-8 h-8" />,
    title: "4K Streaming",
    description: "Crystal clear video quality with dynamic camera angles",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Live Interaction",
    description: "Real-time chat and virtual meet & greets",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Access",
    description: "Watch from anywhere in the world",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "48hr Replay",
    description: "Rewatch the magic for 48 hours post-show",
  },
];

const DigitalConcert = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Experience Digital Magic</h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't make it to the live show? Join us virtually for an immersive digital concert experience streamed in stunning 4K quality.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {digitalFeatures.map((feature, index) => (
                <div key={index} className="bg-black/30 p-4 rounded-lg backdrop-blur">
                  <div className="text-purple-400 mb-3">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700 transition flex items-center gap-2">
                <Play size={20} />
                Pre-order Stream
              </button>
              <button className="border border-purple-600 px-8 py-3 rounded-full hover:bg-purple-600/10 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=2000"
              alt="Digital Concert Experience"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-400">Next Digital Show</p>
                  <p className="font-bold">World Tour 2024 - Digital Experience</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Starting from</p>
                  <p className="text-xl font-bold text-purple-400">$29.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalConcert;
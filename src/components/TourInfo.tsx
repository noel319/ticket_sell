import React, { useState } from 'react';
import { MapPin, Calendar, Music, Users, Play, Tv, Wifi, Globe, Timer } from 'lucide-react';

interface TourStat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const tourStats: TourStat[] = [
  {
    icon: <MapPin className="w-6 h-6 text-red-500" />,
    value: "25+",
    label: "Cities"
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-500" />,
    value: "6",
    label: "Months"
  },
  {
    icon: <Music className="w-6 h-6 text-purple-500" />,
    value: "100+",
    label: "Songs"
  },
  {
    icon: <Users className="w-6 h-6 text-green-500" />,
    value: "1M+",
    label: "Fans"
  }
];

const tourFeatures = [
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

const TourInfo = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            World Tour 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for an unprecedented musical journey across the globe. Experience groundbreaking performances,
            stunning visual productions, and unforgettable moments in iconic venues worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {tourStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
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
                  <p className="font-bold">World Tour 2025 - Digital Experience</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Starting from</p>
                  <p className="text-xl font-bold text-purple-400">$29.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {tourFeatures.map((feature, index) => (
            <div key={index} className="bg-black/30 p-4 rounded-lg backdrop-blur">
              <div className="text-purple-400 mb-3">{feature.icon}</div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700 transition flex items-center gap-2">
            <Play size={20} />
            Pre-order Stream
          </button>
          <button 
            className="border border-purple-600 px-8 py-3 rounded-full hover:bg-purple-600/10 transition"
            onClick={() => setShowMoreInfo(!showMoreInfo)}
          >
            {showMoreInfo ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        {/* Additional Information - Only shown when showMoreInfo is true */}
        {showMoreInfo && (
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-xl p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Immersive Experience</h3>
                <p className="text-gray-300">
                  State-of-the-art sound systems, mesmerizing light shows, and innovative stage designs
                  create an unforgettable atmosphere at every venue.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Exclusive Content</h3>
                <p className="text-gray-300">
                  VIP ticket holders get access to soundcheck sessions, meet & greets, and exclusive
                  merchandise not available anywhere else.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-xl p-6 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Digital Integration</h3>
                <p className="text-gray-300">
                  Enhanced concert experience with our mobile app featuring real-time translations,
                  song lyrics, and interactive elements during the show.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80"
                alt="Concert venue"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <button className="w-full bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity duration-200">
                  View Tour Schedule
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourInfo;
import React from 'react';
import { Play, Music, Calendar } from 'lucide-react';

interface Artist {
  name: string;
  role: string;
  image: string;
  description: string;
  stats: {
    albums: number;
    awards: number;
    tours: number;
  };
}

const artists: Artist[] = [
  {
    name: "Alex Rivers",
    role: "Lead Performer",
    image: "../assets/img/artists/IMG_9514.jpeg",
    description: "Grammy-winning artist known for pushing the boundaries of modern music with electrifying performances.",
    stats: {
      albums: 5,
      awards: 12,
      tours: 8
    }
  },
  {
    name: "Luna Eclipse",
    role: "Featured Artist",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
    description: "Rising star whose unique blend of electronic and classical music has captivated audiences worldwide.",
    stats: {
      albums: 3,
      awards: 7,
      tours: 4
    }
  },
  {
    name: "The Resonants",
    role: "Special Guests",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80",
    description: "A dynamic ensemble known for their innovative approach to contemporary music and stunning live shows.",
    stats: {
      albums: 4,
      awards: 9,
      tours: 6
    }
  }
];

const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black p-1">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-[4/5]">
          <img
            src={artist.image}
            alt={artist.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
          <p className="text-red-400 mb-3">{artist.role}</p>
          <p className="text-gray-300 text-sm mb-4">{artist.description}</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Music className="w-5 h-5 mx-auto mb-1 text-blue-400" />
              <p className="text-xl font-bold text-white">{artist.stats.albums}</p>
              <p className="text-xs text-gray-400">Albums</p>
            </div>
            <div>
              <Calendar className="w-5 h-5 mx-auto mb-1 text-red-400" />
              <p className="text-xl font-bold text-white">{artist.stats.tours}</p>
              <p className="text-xs text-gray-400">Tours</p>
            </div>
            <div>
              <Play className="w-5 h-5 mx-auto mb-1 text-purple-400" />
              <p className="text-xl font-bold text-white">{artist.stats.awards}</p>
              <p className="text-xs text-gray-400">Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Artists = () => {
  return (
    <section id="artists" className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Featured Artists
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the magic of live music with our extraordinary lineup of world-class performers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity duration-200">
            View All Artists
          </button>
        </div>
      </div>
    </section>
  );
};

export default Artists;
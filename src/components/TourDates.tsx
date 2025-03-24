import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Users, ChevronRight, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

interface TourDate {
  id: number;
  city: string;
  state: string;
  venue: string;
  date: Date;
  time: string;
  capacity: string;
  imageUrl: string;
  coordinates: {
    x: number;
    y: number;
  };
}

const tourDates: TourDate[] = [
  {
    id: 1,
    city: "East Rutherford",
    state: "NJ",
    venue: "MetLife Stadium",
    date: new Date(2025, 6, 6),
    time: "7:00 PM",
    capacity: "70,000",
    imageUrl: "../../src/assets/img/stadium/Metlife Stadium.png",
    coordinates: { x: 84, y: 37 }
  },
  {
    id: 2,
    city: "Arlington",
    state: "TX",
    venue: "AT&T Stadium",
    date: new Date(2025, 6, 13),
    time: "7:00 PM",
    capacity: "80,000",
    imageUrl: "../../src/assets/img/stadium/AT&T Stadium.png",
    coordinates: { x: 47, y: 67 }
  },
  {
    id: 3,
    city: "Inglewood",
    state: "CA",
    venue: "SoFi Stadium",
    date: new Date(2025, 6, 14),
    time: "7:00 PM",
    capacity: "100,000",
    imageUrl: "../../src/assets/img/stadium/SoFi Stadium.png",
    coordinates: { x: 15, y: 45 }
  },
  {
    id: 4,
    city: "Santa Clara",
    state: "CA",
    venue: "Levi's Stadium",
    date: new Date(2025, 6, 27),
    time: "7:00 PM",
    capacity: "68,500",
    imageUrl: "../../src/assets/img/stadium/Levi's Stadium.png",
    coordinates: { x: 13, y: 45 }
  },
  {
    id: 5,
    city: "Atlanta",
    state: "GA",
    venue: "Mercedes-Benz Stadium",
    date: new Date(2025, 7, 4),
    time: "7:00 PM",
    capacity: "72,000",
    imageUrl: "../../src/assets/img/stadium/Mercedes-Benz Stadium.png",
    coordinates: { x: 72, y: 60 }
  },
  {
    id: 6,
    city: "Landover",
    state: "MD",
    venue: "FedExField",
    date: new Date(2025, 7, 10),
    time: "7:00 PM",
    capacity: "82,000",
    imageUrl: "../../src/assets/img/stadium/FedExField.png",
    coordinates: { x: 82, y: 41 }
  },
  {
    id: 7,
    city: "Filadelfia",
    state: "PA",
    venue: "Lincoln Financial Field",
    date: new Date(2025, 7, 18),
    time: "7:00 PM",
    capacity: "69,176",
    imageUrl: "../../src/assets/img/stadium/Lincoln Financial Field.png",
    coordinates: { x: 79, y: 36 }
  }
];

const TourDates = () => {
  const [selectedVenue, setSelectedVenue] = useState<TourDate | null>(null);

  return (
    <section id="tour-dates" className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Tour Dates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in a city near you for an unforgettable night of music and entertainment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="relative aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../../src/assets/img/map.png')" }} />
            <div className="absolute inset-0">
              {tourDates.map((date) => (
                <button
                  key={date.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${date.coordinates.x}%`, top: `${date.coordinates.y}%` }}
                  onClick={() => setSelectedVenue(date)}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute inset-0" />
                    <div className="w-4 h-4 bg-red-500 rounded-full relative z-10" />
                  </div>
                  <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 bg-black/90 backdrop-blur-lg rounded-lg py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {date.city}, {date.state}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tour Schedule */}
          <div className="space-y-6">
            {tourDates.map((date) => (
              <button
                key={date.id}
                className="w-full bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 flex items-center gap-6 hover:from-slate-700 hover:to-slate-800 transition-colors duration-200"
                onClick={() => setSelectedVenue(date)}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                  <img
                    src={date.imageUrl}
                    alt={date.venue}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow text-left">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {date.city}, {date.state}
                  </h3>
                  <p className="text-gray-400 mb-2">{date.venue}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(date.date, 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {date.time}
                    </span>
                  </div>
                </div>
                <ChevronRight className="flex-shrink-0 w-6 h-6 text-gray-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Venue Details Dialog */}
        <Dialog.Root open={!!selectedVenue} onOpenChange={() => setSelectedVenue(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-gradient-to-br from-slate-900 to-black rounded-2xl p-8">
              {selectedVenue && (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-white mb-2">
                        {selectedVenue.venue}
                      </Dialog.Title>
                      <Dialog.Description className="text-gray-400">
                        {selectedVenue.city}, {selectedVenue.state}
                      </Dialog.Description>
                    </div>
                    <Dialog.Close className="text-gray-500 hover:text-white transition-colors">
                      <X className="w-6 h-6" />
                    </Dialog.Close>
                  </div>

                  <div className="aspect-video rounded-xl overflow-hidden mb-6">
                    <img
                      src={selectedVenue.imageUrl}
                      alt={selectedVenue.venue}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-black/50 rounded-lg p-4">
                      <Calendar className="w-5 h-5 text-red-500 mb-2" />
                      <p className="text-sm text-gray-400">Date</p>
                      <p className="text-white font-semibold">
                        {format(selectedVenue.date, 'MMM d, yyyy')}
                      </p>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <Clock className="w-5 h-5 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-400">Time</p>
                      <p className="text-white font-semibold">{selectedVenue.time}</p>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <Users className="w-5 h-5 text-purple-500 mb-2" />
                      <p className="text-sm text-gray-400">Capacity</p>
                      <p className="text-white font-semibold">{selectedVenue.capacity}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-red-500 to-blue-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                      Buy Tickets
                    </button>
                    <button className="flex-1 border border-gray-700 text-white py-3 rounded-full font-semibold hover:bg-white/5 transition-colors">
                      View Seating Chart
                    </button>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default TourDates;
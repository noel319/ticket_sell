import { ShoppingCart, ShoppingBag } from 'lucide-react';

const merchandise = [
  {
    name: "Tour Logo Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000",
    badge: "Best Seller",
  },
  {
    name: "Limited Edition Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1000",
    badge: "Limited",
  },
  {
    name: "Concert Poster",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1000",
    badge: "New",
  },
  {
    name: "Vinyl Record",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000",
    badge: "Pre-order",
  },
];

const Merchandise = () => {
  return (
    <section id="merchandise" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Official Merchandise</h2>
          <p className="text-xl text-gray-300">Take the experience home with exclusive tour merchandise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchandise.map((item, index) => (
            <div key={index} className="group bg-black rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                {item.badge && (
                  <span className="absolute top-4 right-4 bg-purple-600 text-sm px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">${item.price}</span>
                  <button className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition" aria-label="Add to cart">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 px-8 py-3 rounded-full hover:bg-purple-700 transition inline-flex items-center gap-2">
            <ShoppingBag size={20} />
            View All Merchandise
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;
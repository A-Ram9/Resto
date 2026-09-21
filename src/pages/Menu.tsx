import { motion } from 'motion/react';
import { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Kerala Fish Curry', price: '4.500', category: 'Indian', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=500' },
  { id: 2, name: 'Chicken Biryani', price: '3.800', category: 'Indian', image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=500' },
  { id: 3, name: 'Grilled Salmon', price: '6.200', category: 'International', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500' },
  { id: 4, name: 'Beef Fry (Ularthiyathu)', price: '4.200', category: 'Indian', image: 'https://images.unsplash.com/photo-1512058560366-cd24270083cd?auto=format&fit=crop&q=80&w=500' },
  { id: 5, name: 'Pasta Carbonara', price: '3.500', category: 'International', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=500' },
  { id: 6, name: 'Appam with Stew', price: '2.500', category: 'Indian', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500' },
  { id: 7, name: 'Lamb Chops', price: '7.500', category: 'International', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=500' },
  { id: 8, name: 'Malabar Paratha', price: '0.500', category: 'Indian', image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=500' },
];

export default function Menu() {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Creative <span className="text-grass">Menu</span>
          </motion.h2>
          
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Indian', 'International'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  filter === cat ? 'bg-grass border-grass text-white' : 'border-white/20 hover:border-grass'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="relative group aspect-square rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-grass font-mono text-lg">OMR {item.price}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

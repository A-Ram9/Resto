import { motion } from 'motion/react';
import { Check, Users, Calendar, Award } from 'lucide-react';

const halls = [
  {
    name: "Royal Malabar Hall",
    capacity: "500-800 Guests",
    plans: [
      { name: "Bronze", price: "8 OMR/Person", features: ["Standard Buffet", "Basic Decor", "Sound System"] },
      { name: "Silver", price: "12 OMR/Person", features: ["Premium Buffet", "Floral Decor", "Stage Setup", "Photography"] },
      { name: "Gold", price: "18 OMR/Person", features: ["Luxury Buffet", "Full Event Management", "Live Music", "Valet Parking"] }
    ]
  },
  {
    name: "Emerald Suite",
    capacity: "200-400 Guests",
    plans: [
      { name: "Bronze", price: "7 OMR/Person", features: ["Standard Buffet", "Basic Decor"] },
      { name: "Silver", price: "10 OMR/Person", features: ["Premium Buffet", "Floral Decor", "Stage"] },
      { name: "Gold", price: "15 OMR/Person", features: ["Luxury Buffet", "Themed Decor", "AV System"] }
    ]
  },
  {
    name: "The Pearl Lounge",
    capacity: "50-150 Guests",
    plans: [
      { name: "Bronze", price: "6 OMR/Person", features: ["Snack Buffet", "Basic Decor"] },
      { name: "Silver", price: "9 OMR/Person", features: ["Full Buffet", "Elegant Decor"] },
      { name: "Gold", price: "13 OMR/Person", features: ["Gourmet Buffet", "Custom Decor", "Music"] }
    ]
  }
];

export default function Banquet() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Banquet <span className="text-grass">Halls</span>
          </motion.h2>
          <p className="text-xl text-gray-600">Celebrate your special moments in our exquisite venues.</p>
        </div>

        {halls.map((hall, hIndex) => (
          <div key={hall.name} className="mb-32">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">{hall.name}</h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1"><Users size={18} /> {hall.capacity}</span>
                  <span className="flex items-center gap-1"><Award size={18} /> Premium Venue</span>
                </div>
              </div>
              <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-grass transition-colors flex items-center gap-2">
                <Calendar size={18} /> Check Availability
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hall.plans.map((plan, pIndex) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: pIndex * 0.1 }}
                  className={`p-8 rounded-[2rem] border-2 transition-all ${
                    plan.name === 'Gold' ? 'bg-black text-white border-grass' : 'bg-white text-black border-gray-100 hover:border-grass/30'
                  }`}
                >
                  <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${plan.name === 'Gold' ? 'text-grass' : 'text-gray-400'}`}>
                    {plan.name} Plan
                  </div>
                  <div className="text-3xl font-bold mb-8">{plan.price}</div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.name === 'Gold' ? 'bg-grass' : 'bg-grass/20'}`}>
                          <Check size={12} className={plan.name === 'Gold' ? 'text-white' : 'text-grass'} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    plan.name === 'Gold' ? 'bg-grass text-white hover:bg-grass-dark' : 'bg-gray-100 text-black hover:bg-grass hover:text-white'
                  }`}>
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

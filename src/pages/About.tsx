import { motion } from 'motion/react';
import { Heart, History, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-grass italic">Story</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey from the backwaters of Kerala to the majestic landscapes of Muscat.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1974"
              alt="Traditional Kerala Dish"
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-grass rounded-full flex items-center justify-center p-8 text-white text-center font-bold leading-tight hidden md:flex">
              Authentic Kerala Flavors
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-grass/10 rounded-xl flex items-center justify-center">
                <History className="text-grass" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our History</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2015, Malabar Muscat was born from a passion to bring the rich culinary heritage of Kerala to the international community in Oman. Our founder, inspired by the traditional recipes passed down through generations, envisioned a place where spice meets sophistication.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-grass/10 rounded-xl flex items-center justify-center">
                <Target className="text-grass" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the premier destination for authentic Indian cuisine in Muscat, blending traditional Kerala techniques with international standards of service and presentation. We strive to create memories through every plate we serve.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-grass/10 rounded-xl flex items-center justify-center">
                <Heart className="text-grass" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Kerala Inspiration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every dish is a tribute to the "God's Own Country." From the use of fresh coconut and curry leaves to the perfect balance of spices, we honor the soul of Kerala's coastal and highland cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 scale-105"
          >
            <source src="/Vids/cook.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              A Taste of <span className="text-grass">Kerala</span> in Muscat
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed">
              Experience the authentic flavors of India with a modern twist. 
              From the spice gardens of Kerala to the heart of Oman.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-grass hover:bg-grass-dark text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                Explore Menu <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-full font-bold transition-all">
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef in Action Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Culinary <span className="text-grass">Artistry</span> <br />
                Live in Action
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Watch our master chefs blend traditional Kerala spices with international techniques. 
                Our open kitchen concept allows you to witness the passion and precision that goes into every dish.
              </p>
              <div className="flex gap-8 items-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-grass mb-1">15+</div>
                  <div className="text-gray-500 text-sm uppercase tracking-widest">Master Chefs</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-grass mb-1">100%</div>
                  <div className="text-gray-500 text-sm uppercase tracking-widest">Fresh Spices</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl border border-white/10"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Vids/cook.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-bold tracking-widest uppercase text-sm">Kitchen Live Cam</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-grass/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-grass w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600">Al Khuwair, Muscat, Oman</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-grass/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="text-grass w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-gray-600">+968 24XXXXXX</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-grass/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="text-grass w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p className="text-gray-600">12:00 PM - 11:30 PM</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

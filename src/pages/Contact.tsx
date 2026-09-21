import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get in <span className="text-grass">Touch</span>
          </motion.h2>
          <p className="text-xl text-gray-600">We'd love to hear from you. Whether it's a reservation or feedback.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-grass/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-grass" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-600">Building 123, Way 4567, Al Khuwair,<br />Muscat, Sultanate of Oman</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-grass/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-grass" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                <p className="text-gray-600">+968 24XXXXXX<br />+968 9XXXXXXX</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-grass/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-grass" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                <p className="text-gray-600">info@malabarmuscat.com<br />reservations@malabarmuscat.com</p>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden bg-gray-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-6 py-2 rounded-full shadow-lg font-bold text-grass">View on Google Maps</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-grass transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-grass transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-grass transition-all appearance-none">
                  <option>Reservation Request</option>
                  <option>Banquet Inquiry</option>
                  <option>General Feedback</option>
                  <option>Catering Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-grass transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-grass transition-all flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

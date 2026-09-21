import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 tracking-tighter">
            MALABAR <span className="text-grass">MUSCAT</span>
          </h2>
          <p className="text-gray-400 max-w-sm mb-8">
            Bringing the authentic flavors of Kerala to the heart of Muscat. 
            Experience culinary excellence with every bite.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-grass transition-colors cursor-pointer">FB</div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-grass transition-colors cursor-pointer">IG</div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-grass transition-colors cursor-pointer">TW</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/menu" className="hover:text-grass transition-colors">Our Menu</Link></li>
            <li><Link to="/banquet" className="hover:text-grass transition-colors">Banquet Halls</Link></li>
            <li><Link to="/services" className="hover:text-grass transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-grass transition-colors">Reservations</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe for latest offers and events.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/10 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-grass"
            />
            <button className="bg-grass px-4 py-2 rounded-xl font-bold">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Malabar Muscat. All rights reserved.
      </div>
    </footer>
  );
}

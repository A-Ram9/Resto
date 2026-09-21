import { motion } from 'motion/react';
import { Truck, Utensils, Users, Sparkles, ChefHat, Music } from 'lucide-react';

const services = [
  {
    icon: <Utensils className="w-10 h-10" />,
    title: "Dine-In Experience",
    description: "Enjoy a sophisticated atmosphere with impeccable service and a menu that celebrates the best of Kerala and international flavors."
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Outdoor Catering",
    description: "Bring the Malabar Muscat magic to your own venue. We provide full-service catering for weddings, corporate events, and private parties."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Corporate Events",
    description: "Professional settings for meetings and conferences, complete with custom menus and state-of-the-art AV equipment."
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Event Planning",
    description: "Our expert planners handle everything from decor to entertainment, ensuring your celebration is seamless and memorable."
  },
  {
    icon: <ChefHat className="w-10 h-10" />,
    title: "Private Chef Service",
    description: "Experience a personalized culinary journey with our head chef in the comfort of your home or our private dining suite."
  },
  {
    icon: <Music className="w-10 h-10" />,
    title: "Live Entertainment",
    description: "Enhance your dining experience with live traditional and contemporary music performances on selected evenings."
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-grass">Services</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond great food, we provide experiences that linger in your memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 bg-grass/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-grass group-hover:text-white transition-colors">
                <div className="text-grass group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

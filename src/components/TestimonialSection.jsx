import React from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    title: "Product Quality",
    message:
      "organicAlaya is really serving pure Authentic product",
    name: "Mayank",
    time: "1 Month Ago",
  },
  {
    rating: 5,
    title: "Customer Support",
    message:
      "Top-notch support. Thanks guys for going above and beyond!",
    name: "Avnish",
    time: "1 Month Ago",
  },
  {
    rating: 5,
    title: "Pureness Quality",
    message:
      "I love the product. I will definitely come back for more products.",
    name: "Gaurav",
    time: "1 Month Ago",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 120,
      damping: 15,
      bounce: 0.25,
    },
  }),
};

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex text-yellow-500 mb-2">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} fill="currentColor" size={20} />
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-600 mb-6">{t.message}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <span className="text-xl">👤</span>
                </div>
                <div className="text-left">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

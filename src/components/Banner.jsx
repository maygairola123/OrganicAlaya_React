import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImg from '../assets/images/banner.jpg';

export default function Banner() {
  return (
    <div
      className="w-full bg-cover bg-center h-[80vh] flex items-center justify-center text-white relative"
      style={{
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}

    >
      <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fresh Organic Goodness Delivered
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          100% farm-fresh, chemical-free, and eco-friendly products at your doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/shop">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold transition">
              Shop Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

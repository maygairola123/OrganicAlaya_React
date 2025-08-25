import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/banner.png",       // image from public folder
  "/banner.png",       // you can add more images here
  "/banner1.jpg"
];

const slideVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%" },
};

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Banner ${index}`}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
            Welcome to OrganicAlaya
          </h2>
          <p className="mt-2 sm:text-lg md:text-xl">
            Fresh from farms to your doorstep 🌿
          </p>
        </div>
      </div>
    </div>
  );
}

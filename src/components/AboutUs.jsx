
import React from "react";

const AboutUs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/src/assets/images/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}

      <div className="relative z-10 flex flex-col justify-center items-center text-white text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About OrganicAlaya</h1>
        <p className="max-w-4xl text-lg md:text-xl leading-relaxed">
          At OrganicAlaya, we believe in nourishing lives through sustainable,
          chemical-free farming. Our mission is to deliver the freshest organic produce
          directly from local farmers to your table. We're committed to promoting
          healthy living, environmental care, and community growth.
        </p>
        <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-300">
          From heritage grains like *Kulthi Dal* to cold-pressed oils and fresh vegetables,
          every item is carefully curated to bring you nature’s best — untouched and pure.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

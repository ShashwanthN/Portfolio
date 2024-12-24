import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCarousel = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center px-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-h-full max-w-full object-contain py-10"
          />
        </AnimatePresence>
      </div>

      <button
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#121212] hover:bg-[#1e1e1e] text-white p-3 rounded transition-colors z-10 border border-[#242424]"
        onClick={prevSlide}
      >
        ←
      </button>

      <button
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#121212] hover:bg-[#1e1e1e] text-white p-3 rounded transition-colors z-10 border border-[#242424]"
        onClick={nextSlide}
      >
        →
      </button>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel; 
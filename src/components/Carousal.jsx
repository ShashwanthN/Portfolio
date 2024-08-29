import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative  border-2 border-yellow-400 w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className=" min-w-full min-h-full flex justify-center items-center bg-gray-100"
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 animate-slide left-2 transform -translate-y-1/2 p-2 text-white hover:text-gray-500 transition"
        style={{ zIndex: 10 }}
      >
        <AiOutlineLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 text-white hover:text-gray-500 transition"
        style={{ zIndex: 10 }}
      >
        <AiOutlineRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/4 flex justify-between">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 bg-white transition-colors duration-300 ${
              currentIndex === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

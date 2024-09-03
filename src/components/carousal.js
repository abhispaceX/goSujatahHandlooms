import React, { useState, useEffect } from 'react';

const images = [
  'https://res.cloudinary.com/dpipco346/image/upload/v1725202755/Articians_ft0dou.jpg',
  
  'https://res.cloudinary.com/dpipco346/image/upload/v1725342683/thathablur_hpv4m5.png',
  'https://res.cloudinary.com/dpipco346/image/upload/v1725343110/4c58c13c-501e-41cd-af75-519a1c78472c_peiv0h.jpg',
  "https://res.cloudinary.com/dpipco346/image/upload/v1725342918/Workersdying_2-min_mmsrlk.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  h-64 md:h-screen   overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full ${index === currentIndex ? 'object-contain' : 'object-cover'} sm:object-cover`}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

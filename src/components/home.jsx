import React from 'react';

import Carousel from './carousal';
import LogoBelow  from './LogoBelow';
import ImageGallery from "./Designs";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        
        <div className="flex flex-col bg-white justify-center items-center bg-none py-8 px-4 sm:px-6 lg:px-8">
          <img src="/Logo2.png" alt="Logo" className="h-32 mb-4" />
          <div className="text-2xl sm:text-3xl font-bold">𝓖𝓸 𝓢𝓾𝓳𝓪𝓽𝓱𝓪</div>
        </div>
        <Carousel />
        <LogoBelow  />
      </div>
      <div className="flex flex-col font-montserrat justify-center items-center px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center text-xl sm:text-2xl font-bold mb-4">OUR MISSION</div>
        <p className="text-center font-montserrat max-w-lg">
          A one-stop digital platform to conveniently buy 100% authentic handloom and handicraft from rural artisans and weavers directly.
        </p>
        <ImageGallery />
      </div>
    </>
  );
};

export default HomePage

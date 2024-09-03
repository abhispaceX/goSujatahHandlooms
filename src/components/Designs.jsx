import React, { useState } from 'react';
import { images } from "../constants";

const ImageGallery = () => {
  return (
    <>
      <div className="text-center mt-32 text-xl font-montserrat font-thin sm:text-2xl mb-4">FEATURED COLLECTION</div>
      <div className="flex flex-wrap mt-16 justify-center gap-20 sm:px-6 lg:px-8">
        {images.map((url, index) => (
          <ShimmerImage key={index} src={url} alt="design" />
        ))}
      </div>
    </>
  );
};

const ShimmerImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-64 h-72 p-2 relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover ${loaded ? 'block' : 'hidden'}`}
        onLoad={() => setLoaded(true)} 
      />
    </div>
  );
};

export default ImageGallery;

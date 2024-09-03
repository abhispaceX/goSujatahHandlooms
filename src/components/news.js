import React from 'react';

const NewsArticle = () => {
  return (
    <div className='container mx-auto p-4 md:p-6 flex flex-col space-y-12'>
      {/* First Section: Image Left, Text Right */}
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='lg:w-5/12'>
          <img
            src='https://res.cloudinary.com/dpipco346/image/upload/v1725202812/IMG_5817_efcqdy.jpg'
            alt='Master artisan weaving fabric'
            className='w-full h-auto rounded-md shadow-md'
          />
        </div>
        <div className='lg:w-7/12 p-4 md:p-6'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 font-serif'>Weaving the Future: Bikshapati Kolaan's Mastery in Ikat</h2>
          <p className='text-base md:text-lg text-gray-700 font-sans'>
            To create the checked ikat fabric in our Spring Summer 2022 collection, weavers work under master artisan
            Bikshapati Kolaan in the village of Yellanki in Andhra Pradesh, south-east India. Following the path of his father, 
            he has been weaving for over 40 years and now passes down his expertise to his son.
          </p>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div className='flex flex-col lg:flex-row-reverse items-center'>
        <div className='lg:w-5/12'>
          <img
            src='https://res.cloudinary.com/dpipco346/image/upload/v1725202812/IMG_5816_ptghfw.jpg'
            alt='Weaver showcasing designs'
            className='w-full h-auto rounded-md shadow-md'
          />
        </div>
        <div className='lg:w-7/12 p-4 md:p-6'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 font-serif'>Weaving Magic Overseas: Kolanupaka Bixapathi</h2>
          <p className='text-base md:text-lg text-gray-700 font-sans'>
            A sixty-year-old weaver, Kolanupaka Bixapathi, has created more than 1,000 designs for tie and dye ikat 
            handlooms, setting an example for other weavers by receiving higher prices for his products.
          </p>
        </div>
      </div>

      {/* Third Section: Image Left, Text Right */}
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='lg:w-5/12'>
          <img
            src='https://res.cloudinary.com/dpipco346/image/upload/v1725202830/IMG_5825_srnktm.jpg'
            alt='Handcrafted gingham ikat'
            className='w-full h-auto rounded-md shadow-md'
          />
        </div>
        <div className='lg:w-7/12 p-4 md:p-6'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4 font-serif'>Handcrafted Gingham Ikat: A One-of-a-Kind Piece</h2>
          <p className='text-base md:text-lg text-gray-700 font-sans'>
            Our soft gingham ikat is handcrafted by weavers working under master artisan Bikshapati Kolaan in Andhra Pradesh. 
            The dyed yarn is woven on traditional handlooms to create truly unique pieces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle
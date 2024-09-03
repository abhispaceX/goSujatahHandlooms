import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Our journey began 50 years ago, specializing in exquisite handloom weaving.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <img
            src="https://res.cloudinary.com/dpipco346/image/upload/v1725336399/IMG_5824_nvlh1l.jpg"
            alt="Founder and Team"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <div className="text-gray-700 md:w-1/2">
            <p className="mb-4">
              The idea of our handloom weaving was started long back almost 50 years. We have our specialist in designing the fabric according to your specifications. Our designer <span className="font-semibold">Mr. Bikshapathi</span> has been showing his excellence in fabric design for 40 years. We produce for one of the largest international markets like <span className="font-semibold">TOAST</span> and also to <span className="font-semibold">EAST WEST LINKERS</span>.
            </p>
            <p className="mb-4">
              We manufacture pure 100% cotton Ikkat fabrics with more than 10,000+ designs. We sell them wholesale and retail at affordable prices. Our handloom history started in Telangana State, Nalgonda district, where some places are famous for handlooms. Our main goal is customer satisfaction, so we replace any orders if there is a mistake.
            </p>
            <p>
              We mainly focus on the quality of the fabric, ensuring no color loss or damage. We export the fabric in large quantities to other states and countries. Visit our Instagram profile and our production house to know us better and have a delightful experience.
            </p>
          </div>
          
        </div>
        <div className=' flex md:flex  gap-7 mb-6' >
        <img
            src="https://res.cloudinary.com/dpipco346/image/upload/v1725337112/IMG_5508_paojry.jpg"
            alt="Founder and Team"
            className="w-6/12  md:w-3/12 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <img
            src="https://res.cloudinary.com/dpipco346/image/upload/v1725337120/IMG_5513_fj0iy3.jpg"
            alt="Founder and Team"
            className="w-6/12 md:w-3/12 h-auto rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          </div>

        {/* Production Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Production House</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="https://res.cloudinary.com/dpipco346/image/upload/v1725336263/WhatsApp_Image_2024-09-02_at_22.04.01_o9cpee.jpg"
              alt="Handloom Production"
              className="w-6/12 h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://res.cloudinary.com/dpipco346/image/upload/v1725336455/WhatsApp_Image_2024-09-02_at_23.36.22_k19sqt.jpg"
              alt="Handloom Weaving Process"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Instagram Section */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/go.sujathaa.handlooms"
            className="inline-block mt-6 text-gradient-instagram text-2xl font-bold"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

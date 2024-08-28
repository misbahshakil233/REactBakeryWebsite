import React from 'react';

const AboutBakery = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 min-h-screen">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full h-full bg-gradient-to-r from-[#8d755a] via-[#e8cbad] to-[#b67b55] ">
        <img
          src="https://png.pngtree.com/png-clipart/20230301/ourmid/pngtree-bakery-logo-baker-illustration-png-image_6625246.png"
          alt="Bakery Taste"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-12 text-center md:text-left relative">
        {/* Oval Signature Icon */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:left-0 mb-4 flex items-center bottom-80 right-11 justify-center">
          <div className="bg-orange-500 text-brown-800 px-4 py-2 rounded-full text-xl  font-bold   hover:bg-red-950 hover:w-60  hover:text-white shadow-md">
            Client Testimonial
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-6 text-brown-700 animate-pulse pt-12">
          Experience the{' '}
          <span className="text-brown-800 font-bold animate-bounce transition-transform duration-500 ease-in-out hover:scale-110">
            Taste
          </span>{' '}
          of Tradition
        </h2>

        {/* Quotation Marks */}
        <p className="text-gray-700 text-lg leading-relaxed relative">
          <span className="text-6xl text-brown-400 absolute -left-6 -top-6">“</span>
          At our bakery, we believe in delivering a unique taste experience that brings together the richness of traditional recipes and the freshness of modern ingredients. Each of our products is crafted with care, ensuring that every bite is a journey through layers of flavor and texture. Whether you are enjoying a warm, buttery croissant or a slice of our signature cake, you can taste the passion and dedication that goes into every item we bake.
          <span className="text-6xl text-brown-400 absolute -right-6 -bottom-6">”</span>
        </p>
      </div>
    </section>
  );
};

export default AboutBakery;

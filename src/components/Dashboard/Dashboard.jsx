import React from 'react';
import Service from '../Dashboard/Service';
import AboutPage from '../Dashboard/AboutPage';
import Product from './Product';
import Contact from './Contact';
import Footer from './Footer';
import BannarCounter from './BannarCounter';
import AboutBakery from './AboutBakery';
import BakeryPage from  './BakeryPage'
import productHeader from './productHeader';

function Dashboard() {
  return (
    <div className="bg-white text-gray-800 ">
      {/* Hero Section */}
      <header
        id="home"
        className="relative overflow-hidden h-screen flex flex-col items-center justify-start bg-gradient-to-r from-[#634627] via-[#634627] to-[#271204] pt-10"
      >
        {/* Top Section with Welcome Text, Experience Text, and Animated GIFs */}
        <div className="relative flex flex-col items-center mb-10 md:mr-32 text-center md:text-left">
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="flex space-x-4 md:mr-96">
              <img
                src="https://media.giphy.com/media/LirrLcmc7DJBu/giphy.gif"
                alt="Animated Cake"
                className="w-24 h-24 md:w-32 md:h-32 transform rotate-45 animate-spin-slow opacity-40"
                style={{ animationDuration: "20s" }}
              />
              <img
                src="https://media.giphy.com/media/PbRrHXe8qrmEM/giphy.gif"
                alt="Animated Bread"
                className="w-24 h-24 md:w-32 md:h-32 transform rotate-45 animate-spin-slow opacity-40"
                style={{ animationDuration: "25s" }}
              />
              <img
                src="https://th.bing.com/th/id/R.34c5581b86f0caa64597078d6b059a07?rik=cJAaOUHJPC9wng&pid=ImgRaw&r=0"
                alt="Animated Pastry"
                className="w-24 h-24 md:w-32 md:h-32 transform rotate-45 animate-spin-slow opacity-40"
                style={{ animationDuration: "22s" }}
              />
            </div>
          </div>
          <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white md:mr-96">
            Welcome to My Bakery
          </h1>
          <p className="relative z-10 text-base md:text-lg text-white max-w-2xl mb-6 italic md:mr-80">
            Experience the finest baked goods crafted with love and passion.
          </p>
        </div>

        {/* Bottom Section with Two Columns */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-40">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-white max-w-lg mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 italic font-serif">
              Our Best Desserts
            </h2>
            <p
              className="text-sm md:text-lg italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              At BakeryZone, we offer a variety of baked goods made fresh every day. From warm breads to sweet pastries, everything is crafted with the finest ingredients to bring you the best flavors.
            </p>

            {/* 3D Button */}
            <a
              href="#home"
              className="mt-6 inline-block px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-sm md:text-lg rounded-lg shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl"
            >
              Go to Home
            </a>
          </div>

          {/* Right Animated Bakery Image */}
          <div className="flex items-center justify-center h-72 w-72 md:h-96 md:w-96">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJhamc1ZnducTB4anM0MzBsNjRxMGU1OTl4dnIyZWQ1cHhreXljbyZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/KRWPCOeJakqju/giphy.webp"
              alt="Animated Bakery"
              className="w-full h-full object-cover md:ml-10 rotate-45"
            />
          </div>
        </div>
      </header>

     
         <Service />
         <BannarCounter />
          <AboutPage />
          <AboutBakery />
          {/* <Product /> */}
          <productHeader />
          <Contact />
         <Footer />
       
        

      </div>
   
  );
}

export default Dashboard;

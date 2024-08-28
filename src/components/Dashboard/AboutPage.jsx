import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <section id="about" className="relative p-6 text-center">
        <div className="absolute inset-0 z-0 h-full w-full opacity-80">
          <div className="absolute inset-0 bg-slide bg-cover bg-center opacity-60"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 slide-bg-1"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 slide-bg-2"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 slide-bg-3"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 slide-bg-4"></div>
        </div>

        <div className="relative z-10 p-6 text-white max-w-lg mx-auto h-auto md:h-[32rem]">
          <h2 className="text-2xl md:text-5xl font-extrabold text-black">About Our Bakery</h2>
          <p className="text-sm md:text-lg mt-4 italic text-black">
            Welcome to our bakery, where every bite is a journey of flavors and tradition. We use only the finest ingredients, carefully sourced from local farms to bring you the freshest baked goods. From the moment you step inside, you'll be greeted by the aroma of freshly baked bread, pastries, and cakes that are as beautiful as they are delicious.
          </p>
          <p className="text-sm md:text-lg mt-4 italic text-black">
            Our skilled bakers blend traditional techniques with innovative flavors to create unique treats that you'll love. 
          </p>
          <div className="flex flex-wrap justify-center md:justify-evenly mt-6">
            <img
              src="https://media.giphy.com/media/LirrLcmc7DJBu/giphy.gif"
              alt="Animated Cake"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transform rotate-45 animate-spin-slow opacity-70"
              style={{ animationDuration: "20s" }}
            />
            <img
              src="https://media.giphy.com/media/PbRrHXe8qrmEM/giphy.gif"
              alt="Animated Bread"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transform rotate-45 animate-spin-slow opacity-70"
              style={{ animationDuration: "25s" }}
            />
            <img
              src="https://th.bing.com/th/id/R.34c5581b86f0caa64597078d6b059a07?rik=cJAaOUHJPC9wng&pid=ImgRaw&r=0"
              alt="Animated Pastry"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 transform rotate-45 animate-spin-slow opacity-70"
              style={{ animationDuration: "22s" }}
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes slide {
          0% { opacity: 1; }
          20% { opacity: 0; }
          25% { opacity: 0; }
          45% { opacity: 1; }
          50% { opacity: 1; }
          70% { opacity: 0; }
          75% { opacity: 0; }
          95% { opacity: 1; }
          100% { opacity: 1; }
        }
        .bg-slide {
          height: 150%;
          width: 150%;
        }
        .slide-bg-1 {
          background-image: url('https://www.travelrepublic.co.uk/blog/wp-content/uploads/2017/04/JWMMGallery.jpg');
          animation: slide 20s infinite;
        }
        .slide-bg-2 {
          background-image: url('https://q-xx.bstatic.com/xdata/images/hotel/840x460/16625990.jpg?k=9def314fa1e56ab656232016d8c1e4f974499e9ce05e03c3b78690045fc08206&o=');
          animation: slide 20s infinite;
        }
        .slide-bg-3 {
          background-image: url('https://th.bing.com/th/id/R.67fdd24f05d9b7d8c0ff5254b48d9688?rik=D6VaQeIQGTXNwg&pid=ImgRaw&r=0');
          animation: slide 20s infinite 5s;
        }
        .slide-bg-4 {
          background-image: url('https://th.bing.com/th/id/OIP.kbjtlWIAoPxBARf3rj-1hQHaE8?rs=1&pid=ImgDetMain');
          animation: slide 20s infinite 15s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

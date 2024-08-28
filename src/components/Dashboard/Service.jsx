import React, { useState } from 'react';

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      imgSrc: "https://media.giphy.com/media/7T2FsFuVCrqOPEl3X6/giphy.gif",
      title: "Baking Classes",
      description: "Join our interactive baking classes and learn how to make delicious bread, pastries, and more.",
      extra: "Perfect for beginners and experienced bakers alike. Sign up now and master the art of baking with our expert instructors.",
      linkText: "Go to Signup",
      linkHref: "#signup",
    },
    {
      imgSrc: "https://media.giphy.com/media/LirrLcmc7DJBu/giphy.gif",
      title: "Custom Cake Orders",
      description: "We create custom cakes for all occasions tailored to your taste and design preferences.",
      extra: "Choose from various flavors, fillings, and decorations. Perfect for weddings, birthdays, and corporate events.",
      linkText: "Order Now",
      linkHref: "#",
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.5d4eb4f238bfd3290073c7074a1f21f9?rik=KmeIpY9bCzP8HA&pid=ImgRaw&r=0",
      title: "Bread and Pastry Catering",
      description: "We deliver freshly baked bread and pastries straight to your event.",
      extra: "Our range includes breads, croissants, and pastries, perfect for brunches, parties, and corporate gatherings.",
      linkText: "Learn More",
      linkHref: "#",
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.705a73c13fe242b253f3e43d93703e0e?rik=qd90rXRrfE5SuQ&pid=ImgRaw&r=0",
      title: "Delicious Rusks",
      description: "Enjoy our crispy and golden rusks, perfect for dipping in tea or coffee.",
      extra: "Made with the finest ingredients, our rusks are a delightful treat any time of the day.",
      linkText: "Explore More",
      linkHref: "#",
    },
    {
      imgSrc: "https://i2.wp.com/akberahmed.com/wp-content/uploads/2014/08/gif-1-5.gif",
      title: "Delicious Chips",
      description: "Enjoy our crispy and golden chips, perfect for dipping in flavor.",
      extra: "Made with the finest ingredients, our rusks are a delightful treat any time of the day.",
      linkText: "Explore More",
      linkHref: "#",
    },
    {
      imgSrc: "https://media.giphy.com/media/LirrLcmc7DJBu/giphy.gif",
      title: "Custom Cake Orders",
      description: "We create custom cakes for all occasions tailored to your taste and design preferences.",
      extra: "Choose from various flavors, fillings, and decorations. Perfect for weddings, birthdays, and corporate events.",
      linkText: "Order Now",
      linkHref: "#",
    },
    {
      imgSrc: "https://media.giphy.com/media/7T2FsFuVCrqOPEl3X6/giphy.gif",
      title: "Baking Classes",
      description: "Join our interactive baking classes and learn how to make delicious bread, pastries, and more.",
      extra: "Perfect for beginners and experienced bakers alike. Sign up now and master the art of baking with our expert instructors.",
      linkText: "Go to Signup",
      linkHref: "#signup",
    },
    // Add more cards if needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gradient-to-r from-[#f0d1ad] via-[#e8cbad] to-[#b0a9a5] py-8">
      <section id="services" className="text-center mb-8">
        <h2 className="text-5xl font-bold text-black">Our Services</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto text-black italic">
          We offer a wide range of bakery products including cakes, bread, pastries, and more. Every item is made with the highest quality ingredients.
        </p>
        <p className="text-lg mt-4 max-w-xl mx-auto text-black italic">
          Our commitment to excellence ensures that every bite is a delightful experience. Visit us and indulge in the best bakery delights crafted with love and care.
        </p>
        <div className="relative w-full mt-6 overflow-hidden">
          {/* Carousel Cards */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%] flex-shrink-0 p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-700 mx-2"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-full h-48 object-cover mx-auto mb-4 transform transition duration-700 hover:scale-110 hover:rotate-3"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                <p className="text-sm text-gray-700 mb-4 italic">{card.extra}</p>
                <a
                  href={card.linkHref}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-lg shadow-lg text-sm"
                >
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;

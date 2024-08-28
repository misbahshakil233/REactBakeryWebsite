import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#634627] via-[#634627] to-[#271204] text-white p-8 text-center">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-lg mb-2">&copy; 2024 My Bakery. All rights reserved.</p>
        <p className="text-sm mb-4">Freshly baked with love and passion. Visit us for the finest treats!</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-yellow-300">Privacy Policy</a>
          <a href="#" className="text-white hover:text-yellow-300">Terms of Service</a>
          <a href="mailto:info@mybakery.com" className="text-white hover:text-yellow-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

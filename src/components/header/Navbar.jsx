import React, { useState } from 'react';
import { ImCross } from "react-icons/im"; // Importing Cross Icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#875826] via-[#956532] to-[#271204] p-3 relative">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyNavbar</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <ImCross className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a
            href="#home"
            className="text-white font-extrabold text-2xl px-3 py-2 block hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-transparent hover:bg-clip-text transition duration-300 rounded-md"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-extrabold text-2xl px-3 py-2 block hover:bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:text-transparent hover:bg-clip-text transition duration-300 rounded-md"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white font-extrabold text-2xl px-3 py-2 block hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text transition duration-300 rounded-md"
          >
            Services
          </a>
          <a
            href="#products"
            className="text-white font-extrabold text-2xl px-3 py-2 block hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text transition duration-300 rounded-md"
          >
            Product
          </a>
          <a
            href="#contact"
            className="text-white font-extrabold text-2xl px-3 py-2 block hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hover:text-transparent hover:bg-clip-text transition duration-300 rounded-md"
          >
            Contact
          </a>
          {/* Login and Buy buttons for desktop view */}
          <div className="flex items-center space-x-4 ml-auto">
            <a
              href="#login"
              className="text-white font-bold px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-md hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition duration-300"
            >
              Login
            </a>
            <a
              href="#buy"
              className="text-white font-bold px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-md hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 transition duration-300"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
      {/* Small Screen Menu */}
      <div
        className={`md:hidden transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out absolute top-0 left-0 w-full bg-gray-800 z-10`}
      >
        <a
          href="#home"
          className="text-white font-extrabold text-2xl block px-3 py-4 border-b border-gray-700 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-transparent hover:bg-clip-text transition duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white font-extrabold text-2xl block px-3 py-4 border-b border-gray-700 hover:bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:text-transparent hover:bg-clip-text transition duration-300"
        >
          About
        </a>
        <a
          href="#services"
          className="text-white font-extrabold text-2xl block px-3 py-4 border-b border-gray-700 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text transition duration-300"
        >
          Services
        </a>
        <a
          href="#products"
          className="text-white font-extrabold text-2xl block px-3 py-4 border-b border-gray-700 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text transition duration-300"
        >
          Product
        </a>
        <a
          href="#contact"
          className="text-white font-extrabold text-2xl block px-3 py-4 border-b border-gray-700 hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hover:text-transparent hover:bg-clip-text transition duration-300"
        >
          Contact
        </a>
        {/* Login and Buy buttons for mobile view */}
        <div className="flex flex-col items-center  mt-4">
          <a
            href="#login"
            className="text-white font-bold px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-md mb-2 w-full text-center transition duration-300 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600"
          >
            Login
          </a>
          <a
            href="#buy"
            className="text-white font-bold px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-md w-full text-center transition duration-300 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600"
          >
            Buy
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Importing search icon

const BakeryPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    console.log('Search triggered with:', inputValue); // Log the search trigger with input value
    // You can add additional logic here if needed
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen p-4 bg-brown-100">
     <section id='bakeryPage'>
      <div className="flex items-center w-full max-w-xl mt-4">
        <input 
          className="flex-grow h-14 p-2 border-2 border-brown-500 rounded-l-md text-center text-brown-900 shadow-md focus:outline-none focus:ring-2 focus:ring-brown-400" 
          placeholder="Enter text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button 
          onClick={handleSearch}
          className="h-16 w-20 bg-amber-950 border-2  bg text-white rounded-l-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brown-400"
        >
          SEARCH
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-screen-xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/R.cbd300238cd018291f834320f9424c3c?rik=htOyPgn%2bwd%2fX0w&pid=ImgRaw&r=0"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Delicious Cake</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/R.4a158acebc149f22a706533ea78bfa04?rik=wMaszN2yhJbs9g&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2018%2f07%2fBakery-Products-Wallpaper-Full-HD.jpg&ehk=xofUlzXSK%2fbSBukemr1TpiXjkgwkhDYUfBjB%2fEosXcc%3d&risl=&pid=ImgRaw&r=0"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Chocolati Khathai</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://www.whiskaffair.com/wp-content/uploads/2018/06/Namak-Para-2-3.jpg"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Namken Paaray</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.Ql3BHKlgFnh1kMQJSDwcyQHaE8?rs=1&pid=ImgDetMainhttps://thumbs.dreamstime.com/b/sausage-rolls-18982636.jpg"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Delicious Dessert</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-screen-xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://thumbs.dreamstime.com/z/fresh-rolls-25571507.jpg"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Delicious Dessert</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.XDJ1L1KTsVO-vi8LbVhZigHaE7?rs=1&pid=ImgDetMain"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Biscuts</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.kVwNpvaZ7RC0bo4WPA7ztQHaE7?w=593&h=395&rs=1&pid=ImgDetMain"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Delicious Dessert</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.x3-Gni1HWb1A7iFCjEJDfgHaFW?rs=1&pid=ImgDetMain"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Pizza</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-screen-xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/R.6151a795b10af9c7c2514e0924929fa0?rik=9Fg9iYNJcokC4A&pid=ImgRaw&r=0"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Choclate</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.Shmb2NJhwSnQsiK0F66yogHaHD?rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/OIP.kVwNpvaZ7RC0bo4WPA7ztQHaE7?w=593&h=395&rs=1&pid=ImgDetMain"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Samosa</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/R.35ff02bca848b14ead920e1e6d77365d?rik=rrO4BJDAG8s8AQ&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Chicken Sticks</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.0RKkLJy8rWJy6G6I2FW8wwHaHa?rs=1&pid=ImgDetMain"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-900 hover:text-2xl transition-all duration-300">Snacks</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
            <div className="flex justify-center items-center  bg-amber-950 h-10 rounded">
           <button className="font-bold text-justify text-white">Add To Cart</button>
           </div>

          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default BakeryPage;

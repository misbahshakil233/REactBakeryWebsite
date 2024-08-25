import React from 'react';

const Product = () => {
  return (
    <section id="products" className="p-6 text-center bg-gradient-to-r from-[#8d755a] via-[#ae7437] to-[#b67b55]">
      <h2 className="text-3xl font-semibold mb-6 text-white hover:text-4xl transition-all duration-300">Our Products</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="max-w-xs w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/R.b1708ca5ac932e78018de50c035c792d?rik=tvWrjLfm2VP2aQ&riu=http%3a%2f%2fdaisyt13.files.wordpress.com%2f2012%2f01%2fbiscuits-and-gravy-e1327273264297.jpg&ehk=3i0haTPh7r5JEGJuVMX74zDBK58kK3FJnLRmISQEKps%3d&risl=&pid=ImgRaw&r=0"
            alt="Butter Milk Biscuits"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white hover:text-2xl transition-all duration-300">Butter Milk Biscuits</h3>
            <p className="text-gray-600 mt-2">
              Our freshly baked Butter Milk Biscuits are a perfect blend of buttery richness and flaky goodness. They melt in your mouth, making them an ideal companion for your morning coffee or a hearty meal.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.ezFqLY2HWRMzqF6jb7uyZAHaJ3?rs=1&pid=ImgDetMain"
            alt="Cake"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white hover:text-2xl transition-all duration-300">Cake</h3>
            <p className="text-gray-600 mt-2">
              Delight in the soft, fluffy texture of our Butter Milk Biscuits, crafted with premium ingredients for an authentic, homemade taste. Perfect for breakfast, tea-time, or any occasion that calls for a delicious snack.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.0iYNnRBumyglVmS-0VcBDgHaFj?w=768&h=576&rs=1&pid=ImgDetMain"
            alt="Crunchy Snacks"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white hover:text-2xl transition-all duration-300">Crunchy Snacks</h3>
            <p className="text-gray-600 mt-2">
              Our variety of crunchy snacks are the perfect bite-sized treat to keep you energized throughout the day. Enjoy the satisfying crunch and savory flavors that make these snacks a favorite for all ages.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-xs w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://th.bing.com/th/id/OIP.kVwNpvaZ7RC0bo4WPA7ztQHaE7?w=593&h=395&rs=1&pid=ImgDetMain"
            alt="Delicious Dessert"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white hover:text-2xl transition-all duration-300">Delicious Dessert</h3>
            <p className="text-gray-600 mt-2">
              Indulge in our decadent desserts, crafted with rich, flavorful ingredients that offer a sweet ending to any meal. Perfectly balanced between taste and texture, these desserts are a true treat for your taste buds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

// const ProductWithApi = () => { // Renamed the function
//   const history = useHistory();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch the product data from the API when the component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/products'); // Replace with your API endpoint
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Failed to fetch products');
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleCardClick = (categoryId) => {
//     history.push(`/category/${categoryId}`);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2 className="text-center text-3xl font-bold my-6">Our Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => handleCardClick(product.categoryId)}
//             className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//           >
//             <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{product.name}</h3>
//               <p className="text-gray-600 mt-2">{product.description}</p>
//               <p className="text-gray-800 mt-4 font-bold">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductWithApi; // Updated the export name

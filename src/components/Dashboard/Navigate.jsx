import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BakeryPage from './BakeryPage';
import ProductPage from './ProductPage';

const Navigate = () => {
  return (
    <Router>
      <Routes>
        <Route path='/bakeryPage' element={<BakeryPage />} />
        <Route path='/productPage' element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default Navigate;

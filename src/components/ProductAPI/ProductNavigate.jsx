import React from 'react';
import ProductCategory from '../Dashboard/ProductCategory'
import Product from '../Dashboard/Product'

const ProductNavigate = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route path="/category/:id" component={ProductCategory} />
      </Switch>
    </Router>
  );
}

export default ProductNavigate;

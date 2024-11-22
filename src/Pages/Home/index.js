import React from 'react';
import ProductMain from './ProductMain';
import CategoryList from './CategoryCard'; // Should match the actual exported component.
import ProductList from './ProductList';
import FeaturedProducts from './FeaturedProducts';

const Home = () => (

  <div className="container mt-4">
    <div className="row">
      <div className="col-md-12">
        <ProductMain />
        <CategoryList />
        <div className="app">
          <ProductList />
        </div>
        <FeaturedProducts />
      </div>
    </div>
  </div>
);
export default Home;

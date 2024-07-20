import React from 'react';
import './HomePageProducts.css';
import homeProducts from '../../assets/HomeProductsData';
import ProductsCard from '../productsCard.jsx/ProductsCard';

const HomePageProducts = () => {
  return (
    <div className="homepage-products-container">
      <ProductsCard homeProducts={homeProducts} />
    </div>
  );
};

export default HomePageProducts;

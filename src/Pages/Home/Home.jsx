import React from 'react';
import './Home.css';
import HomeMiniBanner from '../../components/HomeMiniBanner/HomeMiniBanner';
import HomePageProducts from '../../components/HomePageProducts/HomePageProducts';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HomeMiniBanner />
      <Carousel />
      <HomePageProducts />
      <Footer />
    </>
  );
};

export default Home;

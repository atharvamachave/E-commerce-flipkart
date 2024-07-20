import React from 'react';
import './HomeMiniBanner.css';
import ImageData from '../../assets/ImageData.js';

const HomeMiniBanner = () => {
  return (
    <div className="Home-mini-banner-container">
      {ImageData.map((ImageData) => {
        return (
          <div className="images">
            <img src={ImageData.image} alt="" />
            <br />
            <div className="image-category">{ImageData.category}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeMiniBanner;

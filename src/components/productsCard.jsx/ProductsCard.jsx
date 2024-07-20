import React, { useState } from 'react';
import './ProductsCard.css';
import Select from 'react-select';
import menu from '../../assets/images/menu2.png';
import DropDown from '../DropDown/DropDown';

const ProductsCard = ({ homeProducts }) => {
  const [category, setCategory] = useState('All');
  const [showMenu, setShowMenu] = useState(false);

  const filterProducts = homeProducts.filter(
    (product) => category === 'All' || product.category === category
  );

  const showDropDown = () => {
    if (showMenu == true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <div>
      <h1>
        Select Your Category{' '}
        <img className="menu-img" src={menu} onClick={showDropDown} />
      </h1>
      {showMenu && (
        <div className="menu-list">
          <ul>
            <li
              onClick={() => {
                setCategory('All');
              }}
            >
              All
            </li>
            <li
              onClick={() => {
                setCategory('Electronics');
              }}
            >
              Electronics
            </li>
            <li
              onClick={() => {
                setCategory('Fashion');
              }}
            >
              Fashion
            </li>
            <li
              onClick={() => {
                setCategory('Beauty');
              }}
            >
              Beauty
            </li>
          </ul>
        </div>
      )}

      {/* <button
        onClick={() => {
          setCategory('Electronics');
          console.log(category);
        }}
      >
        Electronics
      </button> */}
      <div className="homeproducts">
        {filterProducts.map((product, key) => {
          return (
            <div className="product-card-container" key={key}>
              <div className="product-card-item">
                <img src={product.image} alt={product.name} />
                <p>{product.category}</p>
                <p>₹{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;

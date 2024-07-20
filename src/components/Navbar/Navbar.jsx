import React from 'react';
import './Navabr.css';
import logo from '../../assets/images/logo1.png';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />

          <button type="button">Search</button>
        </div>

        <div className="nav-links">
          <ul>
            <li>Login</li>
            <li>Cart 🛒 </li>
            <li>Become a seller</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

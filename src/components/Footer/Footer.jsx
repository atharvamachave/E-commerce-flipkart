import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="about">
          <p>About</p>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate information</li>
          </ul>
        </div>
        <div className="group-companies">
          <p>Group Companies</p>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div className="help">
          <p>Help</p>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Press</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div className="consumer-policy">
          <p>Consumer Policy</p>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className="mail-us">
          <p>Mail Us</p>
          <p>
            Buildings Alyssa, Begonia & Flipkart Internet Private Limited, Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </p>
        </div>
        <div className="office-address">
          <p>Office Address</p>
          <p>
            Buildings Alyssa, Begonia & Flipkart Internet Private Limited, Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
          </p>
        </div>
      </div>
      <hr className="footer-line" />
      <p className="footer-note">
        Developed by Atharva Machave. Copyright 2024 © atharva.machave@gmail.com
        - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

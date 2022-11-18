import React from 'react';
import Contact from './Contact';
import '../style/Footer.css';
import StoreLocations from './StoreLocations';
import Copyright from './Copyright';

function Footer() {
  return (
    <div className="footer-container">
      <StoreLocations />
      <hr />
      <Contact />
      <hr />
      <Copyright />
    </div>
  );
}

export default Footer;

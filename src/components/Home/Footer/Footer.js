import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className="left-links">
        <li><Link to="#">Terms of Service</Link></li>
        <li><Link to="/#">Privacy Policy</Link></li>
      </ul>
      <ul className="right-links">
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;

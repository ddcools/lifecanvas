import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact US</Link></li>
        <li><Link to="#">Terms of Service</Link></li>
        <li><Link to="/#">Privacy Policy</Link></li>
      </ul>
      <div className="social-media-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;

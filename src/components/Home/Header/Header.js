import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="{logo}"/>
        <span>WealthWay</span>
      </div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/features">Features</Link>
      </nav>
    </header>
  );
}

export default Header;

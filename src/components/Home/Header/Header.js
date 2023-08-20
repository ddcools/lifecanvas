import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo">Your Logo</div>
      
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      
      {/* CTA Button */}
      <button className="cta-button">Get Started</button>
    </header>
  );
}

export default Header;

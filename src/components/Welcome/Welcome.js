import React, { useState, useEffect } from 'react';
import ApiHelper from '../Helpers/ApiHelper';
import './Welcome.css';

function Welcome() {
  async function fetchData() {
    const apiInstance = new ApiHelper('https://mode.com/', true)
    try {
      const headers = { 'Authorization': 'Bearer TOKEN' };
      const response = await apiInstance.get('/endpoint', {}, headers);
      console.log('Response Data:', response.data);
      console.log('Status Code:', response.status);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

   useEffect(() => {
      fetchData();
   }, []);

   return(
      <div>
         <header id="header">
           Welcome
         </header>

         <section id="hero">
            {/* Hero section content */}
         </section>

         <main id="main">
            <section id="about" className="about">
            {/* About section content */}
            </section>

            <section id="why-us" className="why-us section-bg">
            {/* Why Us section content */}
            </section>

            <section className="faq">
            {/* FAQ section content */}
            </section>

            <section id="contact" className="contact section-bg">
            {/* Contact Us section content */}
            </section>
         </main>

         <footer id="footer">
            {/* Footer content */}
         </footer>
      </div>
   )
};

export default Welcome;

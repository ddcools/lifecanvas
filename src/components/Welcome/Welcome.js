import React, { useState, useEffect } from 'react';
import ApiHelper from '../Helpers/ApiHelper';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
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
         <Header/>
         <Footer/>
      </div>
   )
};

export default Welcome;

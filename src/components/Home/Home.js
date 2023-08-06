import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const [userName, setUserName] = useState('Dheeresha');

  useEffect(() => {
    console.log('Home Page is now loaded');
    console.log(userName);
    setUserName('Dheeresha Shettigar');
  },[userName]);

  return(
    <div> 
      <span>Home Page</span>
      <br/>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Home;
 
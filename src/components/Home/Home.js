import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import VisitorCard from '../VisitorCard/VisitorCard';
import './Home.css';

function Home() {

  useEffect(() => {
  },[]);

  return(
    <div className="home-page-wrapper">
      <span>
        <Link to="/signup">Signup</Link>
      </span>
      <br/>
      <Link to="/welcome">Welcome Page</Link>
      <VisitorCard />
     </div>
  );
}

export default Home;
 
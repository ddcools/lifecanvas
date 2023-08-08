import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Home.css';

function Home() {

  const [userName, setUserName] = useState('Dheeresha');

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)'})
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  useEffect(() => {
    setUserName('Dheeresha Shettigar');
  },[userName]);

  return(
    <div className="home-page-wrapper">
      <span>Home Page</span>
      <br/>
      <span>
        <Link to="/signup">Signup</Link>
      </span>
      <br/>
      <h1>Device Test!</h1>

        { isDesktopOrLaptop &&
          <p>You can now enjoy the Desktop features </p>
        }

        { isBigScreen &&
          <p>You can now enjoy this conetent on the Big screen</p>
        }

        { isTabletOrMobile &&
          <p>You are a tablet or mobile phone</p>
        }

        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are retina</p>}
    </div>
  );
}

export default Home;
 
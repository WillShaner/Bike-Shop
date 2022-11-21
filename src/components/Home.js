import React from 'react';
import { NavLink } from 'react-router-dom';
import Main from '../assets/landing.webp';
import '../style/Home.css';
import About from './About';
import TopBikes from './TopBikes';

function Home() {
  const style = {
    backgroundImage: `url(${Main})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 65%',
    backgroundRepeat: 'no-repeat',
    minHeight: 650,
  };
  return (
    <>
      <div className="home-container" style={style}>
        <h3 className="home-slogan">\ All your biking gear in one place /</h3>
        <h4 className="home-shop-btn">
          <NavLink to="/shop">Shop Now</NavLink>
        </h4>
      </div>
      <div>
        <TopBikes />
        <About />
      </div>
    </>
  );
}

export default Home;

import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Main from '../assets/landing.webp';
import '../style/Home.css';
import About from '../components/About';
import TopBikes from '../components/TopBikes';
import SearchBar from '../components/SearchBar';
import LandingSlider from '../components/LandingSlider';
import IMAGES from '../data/landingImages';

function Home() {
  // const style = {
  //   backgroundImage: `url(${Main})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: '50% 65%',
  //   backgroundRepeat: 'no-repeat',
  //   minHeight: 650,
  // };
  const sliderHeight = {
    height: '70vh',
  };
  return (
    <>
      <SearchBar />
      <div style={sliderHeight}>
        <LandingSlider arr={IMAGES} />
      </div>
      {/* <div className="home-container" style={style}>
        <h3 className="home-slogan">\ All your biking gear in one place /</h3>
        <h4 className="home-shop-btn">
          <NavLink to="/shop">Shop Now</NavLink>
        </h4>
      </div> */}
      <div>
        <TopBikes />
        <About />
      </div>
    </>
  );
}

export default Home;

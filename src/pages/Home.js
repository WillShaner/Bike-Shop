import React from 'react';
import '../style/Home.css';
import About from '../components/About';
import TopBikes from '../components/TopBikes';
import SearchBar from '../components/SearchBar';
import LandingSlider from '../components/LandingSlider';
import IMAGES from '../data/landingImages';

function Home() {
  const sliderHeight = {
    height: '70vh',
  };
  return (
    <>
      <SearchBar />
      <div style={sliderHeight}>
        <LandingSlider arr={IMAGES} />
      </div>
      <div>
        <TopBikes />
        <About />
      </div>
    </>
  );
}

export default Home;

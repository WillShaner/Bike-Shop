import React from 'react';
import '../style/Home.css';
import TopBikes from '../components/TopBikes';
import SearchBar from '../components/SearchBar';
import LandingSlider from '../components/LandingSlider';
import IMAGES from '../data/landingImages';
import EmailSignUp from '../components/EmailSignUp';

function Home({ openModal }) {
  const sliderHeight = {
    height: '70vh',
  };
  return (
    <>
      <SearchBar openModal={openModal} />
      <div style={sliderHeight}>
        <LandingSlider arr={IMAGES} />
      </div>
      <div>
        <TopBikes />
        <EmailSignUp />
      </div>
    </>
  );
}

export default Home;

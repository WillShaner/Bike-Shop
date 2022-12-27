import React, { useContext } from 'react';
import '../style/Home.css';
import TopBikes from '../components/TopBikes';
import SearchBar from '../components/SearchBar';
import LandingSlider from '../components/LandingSlider';
import IMAGES from '../data/landingImages';
import EmailSignUp from '../components/EmailSignUp';
import { CartContext } from '../context/CartContext';

function Home() {
  const { openModal } = useContext(CartContext);
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

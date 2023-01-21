import React, { useContext } from 'react';
import topBikes from '../data/topBikes';
import '../style/TopBikes.css';
import Slider from './Slider';
import { CartContext } from '../context/CartContext';

function TopBikes() {
  const { setSearchActive } = useContext(CartContext);
  return (
    <div className="top-bikes-container" aria-hidden onClick={() => setSearchActive(false)}>
      <h1 className="top-bikes-title text-dark">Top Sellers</h1>
      <Slider arr={topBikes} />
    </div>
  );
}

export default TopBikes;

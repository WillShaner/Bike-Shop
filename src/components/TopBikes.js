import React from 'react';
import topBikes from '../data/topBikes';
import '../style/TopBikes.css';
import Slider from './Slider';

function TopBikes() {
  return (
    <>
      <h1 className="top-bikes-title">Top Sellers</h1>
      <Slider arr={topBikes} />
    </>
  );
}

export default TopBikes;

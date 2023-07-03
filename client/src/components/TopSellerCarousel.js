/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
// import topBikes from '../data/topBikes';
import '../style/NewSlider.css';
// import Slider from './Slider';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsAward,
} from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

function TopSellerCarousel({ arr }) {
  const { setSearchActive } = useContext(CartContext);
  const [current, setCurrent] = useState(0);
  const { length } = arr;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const mod = (n, m) => {
    const result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  return (
    <div
      className="carousel-container"
      aria-hidden
      onClick={() => setSearchActive(false)}
    >
      <h3 className="title">The Bike Shop Best Sellers</h3>
      <h4 className="subtitle">
        Ride like never before with the combination of comfort, speed and
        durability!
      </h4>
      <div className="carousel-content">
        <BsFillArrowLeftCircleFill
          className="slider-btn btn-left"
          onClick={prevSlide}
        />
        <BsFillArrowRightCircleFill
          className="slider-btn btn-right"
          onClick={nextSlide}
        />
        {arr.map((x, i) => {
          const indexLeft = mod(current - 1, length);
          const indexRight = mod(current + 1, length);

          let className = 'card';

          if (i === current) {
            className = 'carousel-card center';
          } else if (i === indexRight) {
            className = 'carousel-card right';
          } else if (i === indexLeft) {
            className = 'carousel-card left';
          } else className = 'card';

          return (
            <div className={className} key={x.id}>
              <img src={x.image} alt="top seller" />
              <h4>{x.title}</h4>
              <p>{x.description}</p>
              <BsAward className="best-logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopSellerCarousel;

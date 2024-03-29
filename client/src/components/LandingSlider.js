import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/LandingSlider.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { CartContext } from '../context/CartContext';

function LandingSlider({ arr }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setSearchActive } = useContext(CartContext);
  const nextSlide = () => {
    if (currentIndex === arr.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(arr.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideStyle = {
    backgroundImage: `url(${arr[currentIndex].image})`,
  };

  return (
    <div className="landing-slider-container">
      <div aria-hidden onClick={() => setSearchActive(false)} className="landing-slider">
        <IoIosArrowDropleft className="landing-slider-btn slider-left" onClick={() => prevSlide()} aria-hidden="true" />
        <div style={slideStyle} className="landing-slider-slide">
          <div className="landing-slider-slogan my-5 rounded py-2 px-5 text-center">{arr[currentIndex].slogan}</div>
          <Link className="landing-slider-shop px-3  rounded" to="/shop">
            <h4>Shop Now</h4>
          </Link>
        </div>
        <div className="d-flex landing-slider-dots">
          {arr.map((x, index) => (
            <h1
              style={{ color: index === currentIndex && 'rgba(132, 169, 140, 1)' }}
              key={x.id}
              onClick={() => { setCurrentIndex(index); }}
              aria-hidden="true"
            >
              &bull;
            </h1>
          ))}
        </div>
        <IoIosArrowDropright className="landing-slider-btn slider-right" onClick={() => nextSlide()} aria-hidden="true" />
      </div>
    </div>
  );
}

export default LandingSlider;

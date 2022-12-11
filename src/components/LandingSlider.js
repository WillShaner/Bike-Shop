import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/LandingSlider.css';

function LandingSlider({ arr }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === arr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(arr.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const slideStyle = {
    backgroundImage: `url(${arr[index].image})`,
  };
  return (
    <div className="landing-slider">
      <div className="landing-slider-btn slider-left" onClick={() => prevSlide()} aria-hidden="true">
        &#60;
        {/* <GrFormNext onClick={() => nextSlide()} /> */}
      </div>

      <div style={slideStyle} className="landing-slider-slide">
        <div className="landing-slider-slogan my-5 rounded py-2 px-5">{arr[index].slogan}</div>
        <Link className="landing-slider-shop px-3  rounded" to="/shop">
          <h4>Shop Now</h4>
        </Link>
      </div>

      <div className="landing-slider-btn slider-right" onClick={() => nextSlide()} aria-hidden="true">
        &#62;
      </div>
    </div>
  );
}

export default LandingSlider;
/* eslint-disable */
import React, { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import '../style/Slider.css';
import BikeCard from './BikeCard';

function Slider(props) {
  const arr = props.arr;
  const [current, setCurrent] = useState(0);
  const length = arr.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className="slider-container">
      <BsFillArrowLeftCircleFill
        className="text-light slider-btn btn-left"
        onClick={prevSlide}
      />
      <BsFillArrowRightCircleFill
        className="slider-btn btn-right"
        onClick={nextSlide}
      />
      <div className="slider">
        {arr.map((slide, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.id}
          >
            {index === current && <BikeCard bike={slide} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

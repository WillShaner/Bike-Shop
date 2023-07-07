/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import IMAGES from '../../data/landingImages';
import '../../style/Hero.css';
import { Container } from '@mui/material';

function Hero() {
  return (
    <Container className="hero">
      <div className="hero-title">
        <h2>Hero heading</h2>
        <h3>
          shop our new collection of bikes and use promo code: &apos;15OFF&apos;
          at checkout for 15% off all purchases
        </h3>
      </div>
      <div className="grid-container">
        {IMAGES.map((x) => (
          <div
            key={x.id}
            style={{ backgroundImage: `url(${x.image})` }}
            className={`grid-item grid-item-${x.id}`}
          >
            <Link to="/shop">
              <span className="shop-btn-text">{x.category}</span>
              <BsArrowRight className="arrow" />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Hero;

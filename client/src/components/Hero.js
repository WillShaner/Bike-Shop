/* eslint-disable max-len */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import IMAGES from '../data/landingImages';
import '../style/Hero.css';
import { CartContext } from '../context/CartContext';

function Hero() {
  const { setSearchActive } = useContext(CartContext);
  return (
    <main aria-hidden onClick={() => setSearchActive(false)} className="hero">
      <div className="hero-title">
        <h2>
          All your biking needs
          <br /> in one place!
        </h2>
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
    </main>
  );
}

export default Hero;

/* eslint-disbale  */
import React from 'react';
import AboutImg from '../assets/julian-hochgesang-jyoTLVMv9So-unsplash.jpg';
import '../style/About.css';

function About() {
  const style = {
    backgroundImage: `url(${AboutImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 65%',
    backgroundRepeat: 'no-repeat',
    minHeight: 650,
  };
  return (
    <div style={style} className="about-container">
      <div className="about-text-container">
        <h3>Where we started</h3>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, nominavi dignissim vel et, sea hinc
          laboramus cu. Ei meis contentiones pro, sumo percipitur vim ut. Suas
          case probatus est ut, unum eius solum duo te. Euismod eloquentiam mei
          an. Eos ea impetus signiferumque, ex eos facer nemore principes.
        </p>
      </div>
    </div>
  );
}

export default About;

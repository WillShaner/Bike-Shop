import React from 'react';
import FounderImg from '../assets/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg';
import '../style/Founder.css';

function Founders() {
  return (
    <div className="founder-container p-2">
      <img src={FounderImg} className="founder-image" alt="founder" />
      <div className="founder-text px-2">
        <h3 className="founder-title">Our Founder</h3>
        <p className="founder-paragraph">
          Lorem ipsum dolor sit amet, nominavi dignissim vel et, sea hinc
          laboramus cu. Ei meis contentiones pro, sumo percipitur vim ut. Suas
          case probatus est ut, unum eius solum duo te. Euismod eloquentiam mei
          an. Eos ea impetus signiferumque, ex eos facer nemore principes.
        </p>
      </div>
    </div>
  );
}

export default Founders;

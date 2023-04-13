/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function StoreLocations() {
  const style = {
    color: 'black',
  };
  return (
    <div style={style}>
      <h3 className="locations-title">Our Locations</h3>
      <div className="locations-container">
        <div className="locations">
          <a href="#">Austin</a>
          <a href="#">Portland</a>
          <a href="#">San Diego</a>
          <a href="#">Tulsa</a>
          <a href="#">Little Rock</a>
          <a href="#">Chicago</a>
          <a href="#">Nashville</a>
        </div>
        <div className="locations">
          <a href="#">New York City</a>
          <a href="#">Phoenix</a>
          <a href="#">Philadelphia</a>
          <a href="#">Charlotte</a>
          <a href="#">Boston</a>
          <a href="#">Milwaukee</a>
          <a href="#">Kansas City</a>
        </div>
      </div>
    </div>
  );
}

export default StoreLocations;

import React from 'react';

function Copyright() {
  const style = {
    marginBottom: 20,
  };
  return (
    <div className="copyright-container">
      <p style={style}>&#169; 2022 The Bike Shop</p>
      <div>
        <a href="#">Privacy Policy</a>
        <span>-</span>
        <a href="#">Terms</a>
        <span>-</span>
        <a href="#"> Pricing</a>
      </div>
    </div>
  );
}

export default Copyright;

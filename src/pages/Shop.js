/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Bikes from '../components/Bikes';
import Filter from '../components/Filter';
import allBikes from '../data/allBikes';
import '../style/Shop.css';

function Shop(props) {
  const [data, setData] = useState(allBikes);

  const { onAdd, onRemove } = props;

  return (
    <div className="shop-main">
      <div className="text-center">
        <h1>Shop With Us</h1>
      </div>

      <div className="shop-container">
        <Filter setData={setData} arr={allBikes} />
        <div className="shop-bikes">
          {data.map((BIKE) => (
            BIKE.qty !== 0
              ? (
                <Bikes
                  bike={BIKE}
                  key={BIKE.id}
                  add={() => onAdd(BIKE)}
                  remove={() => onRemove()}
                />
              )
              : (
                <Bikes
                  bike={BIKE}
                  key={BIKE.id}
                  add={() => onAdd(BIKE)}
                  buttonText="remove from cart"
                  remove={() => onRemove()}
                />
              )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

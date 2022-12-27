/* eslint-disable eqeqeq */
import React from 'react';
import Filter from './Filter';
import Bikes from './Bikes';
import '../style/Shop.css';

function BikeList({
  data, setData, onAdd, onRemove, openModal,
}) {
  return (
    <div className="shop-main">
      <div className="text-center">
        <h1>Shop With Us</h1>
      </div>

      <div className="shop-container">
        <Filter setData={setData} data={data} />
        <div className="shop-bikes">
          {data.map((BIKE) => (
            BIKE.qty === undefined
              ? (
                <Bikes
                  bike={BIKE}
                  key={BIKE.id}
                  buttonText="add to cart"
                  task={() => onAdd(BIKE)}
                  openModal={openModal}
                />
              )
              : (
                <Bikes
                  bike={BIKE}
                  key={BIKE.id}
                  task={() => onRemove(BIKE)}
                  buttonText="remove from cart"
                  openModal={openModal}
                />
              )
          ))}
        </div>
      </div>
    </div>
  );
}

export default BikeList;

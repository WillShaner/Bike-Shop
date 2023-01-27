/* eslint-disable eqeqeq */
import React from 'react';
import Filter from './Filter';
import BikeCard from './BikeCard';

function BikeList({
  data, setData, onAdd, onRemove, openModal,
}) {
  return (
    <div className="shop-main">
      <div className={`text-center ${data.length === 9 && 'product-count-top'}`}>
        <h1>Shop With Us</h1>
        {data.length !== 9 && (
        <h4 className="product-count">
          {data.length}
          {' '}
          item(s) found
        </h4>
        )}
      </div>

      <div className="shop-container">
        <Filter setData={setData} data={data} />
        <div className="shop-bikes">
          {data.map((BIKE) => (
            BIKE.qty === undefined
              ? (
                <BikeCard
                  bike={BIKE}
                  key={BIKE.id}
                  buttonText="add to cart"
                  task={() => onAdd(BIKE)}
                  openModal={openModal}
                />
              )
              : (
                <BikeCard
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

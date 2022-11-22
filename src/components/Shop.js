/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Bikes from './Bikes';
import allBikes from '../data/allBikes';
import '../style/Shop.css';

function Shop(props) {
  const [data, setData] = useState(allBikes);
  const { onAdd, onRemove } = props;
  function FilterSize(e) {
    const results = allBikes.filter((x) => x.size === e);
    if (e === 'all') {
      setData(allBikes);
    } else {
      setData(results);
    }
  }

  return (
    <div className="shop-main">
      <div className="text-center">
        <h1>Shop With Us</h1>
      </div>

      <div className="shop-container">
        <Row className="filter-container">
          <h4 className="text-center">Filter: </h4>
          <Button
            className="m-2"
            type="button"
            onClick={() => FilterSize('kids')}
          >
            Kids
          </Button>
          <Button
            className="m-2"
            type="button"
            onClick={() => FilterSize('adult')}
          >
            Adults
          </Button>
          <Button
            className="m-2"
            type="button"
            onClick={() => FilterSize('all')}
          >
            All
          </Button>
        </Row>
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

/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import allBikes from '../data/allBikes';

function Filter({ setData }) {
  const [adultFilter, setAdultFilter] = useState(false);
  const [kidFilter, setKidFilter] = useState(false);
  const [priceLowFilter, setPriceLowFilter] = useState(false);
  const [priceHighFilter, setPriceHighFilter] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // eslint-disable-next-line prefer-const
    let filterList = ['', '', undefined, undefined];
    let newArr;
    if (kidFilter) {
      filterList[0] = 'kids';
    }
    if (adultFilter) {
      filterList[1] = 'adult';
    }
    if (priceLowFilter) {
      filterList[2] = 150;
    }
    if (priceHighFilter) {
      filterList[3] = 150;
    }
    if (!kidFilter && !adultFilter && !priceLowFilter && !priceHighFilter) {
      newArr = allBikes;
    } else {
      newArr = allBikes.filter((x) => x.size === filterList[0]
        || x.size === filterList[1]
        || x.price < filterList[2]
        || x.price > filterList[3]);
    }
    setData(newArr);
    return newArr;
  };
  const sort = (method) => {
    let sorted;
    const newData = handleSubmit();
    if (method === 'high') {
      sorted = newData.sort((bike1, bike2) => ((bike1.price < bike2.price) ? 1
        : (bike1.price > bike2.price) ? -1 : 0));
      setData(sorted);
      console.log(sorted);
    } else if (method === 'low') {
      sorted = newData.sort((bike1, bike2) => ((bike1.price > bike2.price) ? 1
        : (bike1.price < bike2.price) ? -1 : 0));
      console.log(sorted);
      setData(sorted);
    }
  };
  return (
    <div className="d-flex flex-column">
      <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center ps-4">
        <Form.Check
          type="checkbox"
          className="m-2 filter-button"
          label="KIDS"
          onChange={() => setKidFilter(!kidFilter)}
          value={kidFilter}
        />
        <Form.Check
          className="m-2 filter-button"
          type="checkbox"
          label="ADULT"
          onChange={() => setAdultFilter(!adultFilter)}
          value={adultFilter}
        />
        <Form.Check
          className="m-2 filter-button"
          type="checkbox"
          label="Under $150"
          onChange={() => setPriceLowFilter(!priceLowFilter)}
          value={priceLowFilter}
        />
        <Form.Check
          className="m-2 filter-button"
          type="checkbox"
          label="Over $150"
          onChange={() => setPriceHighFilter(!priceHighFilter)}
          value={priceHighFilter}
        />

        <Button variant="secondary" type="submit">Apply Filters</Button>
      </Form>

      <div className="sort-container ps-4 d-flex flex-column text-center align-items-center">
        <h1>Sort by price</h1>
        <Button variant="secondary" className="my-2" onClick={() => sort('low')} type="button">Low to High</Button>
        <Button variant="secondary" className="my-2" onClick={() => sort('high')} type="button">High to Low</Button>

      </div>
    </div>

  );
}

export default Filter;

/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import allBikes from '../data/allBikes';

function Filter({ setData, data }) {
  const [adultFilter, setAdultFilter] = useState(false);
  const [kidFilter, setKidFilter] = useState(false);
  const [priceLowFilter, setPriceLowFilter] = useState(false);
  const [priceHighFilter, setPriceHighFilter] = useState(false);
  const sort = (method) => {
    let sorted;
    if (method === 'high') {
      sorted = data.slice(0).sort((bike1, bike2) => ((bike1.price < bike2.price) ? 1
        : (bike1.price > bike2.price) ? -1 : 0));
    } else if (method === 'low') {
      sorted = data.slice(0).sort((bike1, bike2) => ((bike1.price > bike2.price) ? 1
        : (bike1.price < bike2.price) ? -1 : 0));
    } else {
      sorted = data;
    }
    setData(sorted);
    return sorted;
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // eslint-disable-next-line prefer-const
    let filterList = ['', '', undefined, undefined];
    let newArr = allBikes;
    if (kidFilter) {
      filterList[0] = 'kids';
      newArr = newArr.filter((x) => x.size === 'kids');
    }
    if (adultFilter) {
      filterList[1] = 'adult';
      newArr = newArr.filter((x) => x.size === 'adult');
    }
    if (priceLowFilter) {
      filterList[2] = 150;
      newArr = newArr.filter((x) => x.price < 150);
    }
    if (priceHighFilter) {
      filterList[3] = 150;
      newArr = newArr.filter((x) => x.price > 150);
    }
    if (!kidFilter && !adultFilter && !priceLowFilter && !priceHighFilter) {
      newArr = allBikes;
    }
    setData(newArr);
  };
  return (
    <div className="d-flex flex-column">
      <Form onSubmit={handleSubmit} className="d-flex flex-column ps-4">
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
          label="UNDER 150"
          onChange={() => setPriceLowFilter(!priceLowFilter)}
          value={priceLowFilter}
        />
        <Form.Check
          className="m-2 filter-button"
          type="checkbox"
          label="OVER 150"
          onChange={() => setPriceHighFilter(!priceHighFilter)}
          value={priceHighFilter}
        />

        <Button variant="secondary" type="submit">Apply Filters</Button>
      </Form>

      <select className="sort-container d-flex flex-column text-center align-items-center m-3" onChange={(e) => sort(e.target.value)}>
        <option value={null}>--Sort by price--</option>
        <option className="my-2" value="low" type="button">Low to High</option>
        <option className="my-2" value="high" type="button">High to Low</option>
      </select>
    </div>

  );
}

export default Filter;

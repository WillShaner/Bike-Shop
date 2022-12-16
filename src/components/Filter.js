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
    if (filterList.length !== 0) {
      newArr = allBikes.filter((x) => x.size === filterList[0]
        || x.size === filterList[1]
        || x.price < filterList[2]
        || x.price > filterList[3]);
      console.log(filterList, newArr);
      setData(newArr);
    } else if (filterList.length === 0) {
      setData(allBikes);
    }
  };

  return (
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
  );
}

export default Filter;

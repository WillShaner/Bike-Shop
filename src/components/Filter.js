/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Filter({ arr, setData }) {
  const filterBtns = document.querySelector('.filter-button');

  function handleSubmit(e) {
    e.preventDefault();
    setData(arr);
    filterBtns.foreach((btn) => {
      if (btn.checked === true) {
        console.log(btn);
      }
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Check
        type="checkbox"
        className="m-2 filter-button"
        label="kids"
      />
      <Form.Check
        className="m-2 filter-button"
        type="checkbox"
        label="adults"
      />
      <Form.Check
        className="m-2 filter-button"
        type="checkbox"
        label="all"
      />
      <Button type="submit">Apply Filters</Button>
    </Form>
  );
}

export default Filter;

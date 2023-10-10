import React from 'react';
import { FaRecycle, FaFlagUsa } from 'react-icons/fa';
import { BsCardChecklist, BsCheckLg } from 'react-icons/bs';

const differenceItems = [
  {
    id: 1,
    title: 'Greener',
    content: 'Every bike made is 100% from recycled bicycles and tires',
    image: (
      <FaRecycle
        className="difference-container-item-icon"
        alt="Bike Shop Difference"
      />
    ),
  },
  {
    id: 2,
    title: 'Made in the USA',
    content:
      'All bikes are created in the U.S. and shipped from one of our many locations',
    image: (
      <FaFlagUsa
        className="difference-container-item-icon"
        alt="Bike Shop Difference"
      />
    ),
  },
  {
    id: 3,
    title: 'Ensured Safety',
    content:
      'Inspectors ensure that every bike is up to the highest safety measures',
    image: (
      <BsCardChecklist
        className="difference-container-item-icon"
        alt="Bike Shop Difference"
      />
    ),
  },
  {
    id: 4,
    title: 'Satisfaction Guarantee',
    content: 'The Bike Shop offers a 100% money back guarantee on all bikes',
    image: (
      <BsCheckLg
        className="difference-container-item-icon"
        alt="Bike Shop Difference"
      />
    ),
  },
];

export default differenceItems;

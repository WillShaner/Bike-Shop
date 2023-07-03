import React from 'react';
import { FaRecycle, FaFlagUsa } from 'react-icons/fa';
import { BsCardChecklist, BsCheckLg } from 'react-icons/bs';

const differenceItems = [
  {
    id: 1,
    title: 'Greener',
    content: 'Every bike made is 100% from recycled bicycles and tires',
    image: <FaRecycle className="difference-container-item-icon" />,
  },
  {
    id: 2,
    title: 'Made in the USA',
    content:
      'All bikes are created in the U.S. and shipped from one of our many locations',
    image: <FaFlagUsa className="difference-container-item-icon" />,
  },
  {
    id: 3,
    title: 'Ensured Safety',
    content:
      'Inspectors ensure that every bike is up to the highest safety measures',
    image: <BsCardChecklist className="difference-container-item-icon" />,
  },
  {
    id: 4,
    title: 'Satisfaction Guarantee',
    content: 'The Bike Shop offers a 100% money back guarantee on all bikes',
    image: <BsCheckLg className="difference-container-item-icon" />,
  },
];
function Difference() {
  return (
    <div className="difference">
      <div className="difference-container">
        {differenceItems.map((x) => (
          <div key={x.id} className="difference-container-item">
            {x.image}
            <div>{x.title}</div>
            <p>{x.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Difference;

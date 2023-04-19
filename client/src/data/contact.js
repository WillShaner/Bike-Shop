import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
}
  from 'react-icons/fa';
import React from 'react';

const CONTACTS = [
  {
    id: 1,
    image: <FaInstagramSquare />,
    link: '#',
    class: 'instagram',
  },
  {
    id: 2,
    image: <FaFacebookSquare />,
    link: '#',
    class: 'facebook',
  },
  {
    id: 3,
    image: <FaTwitterSquare />,
    link: '#',
    class: 'twitter',
  },
];

export default CONTACTS;

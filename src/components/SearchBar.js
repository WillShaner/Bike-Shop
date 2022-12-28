/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import allBikes from '../data/allBikes';
import { CartContext } from '../context/CartContext';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((bike) => bike.title.includes(query));
};

function SearchBar({ openModal }) {
  const [search, setSearch] = useState('');
  const filteredItems = getFilteredItems(search, allBikes);
  const { searchActive, setSearchActive } = useContext(CartContext);
  return (
    <div
      onFocus={() => setSearchActive(true)}
      className="d-flex flex-column align-items-center search"
    >
      <input
        className="w-100 px-2"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for your favorite products"
      />
      {searchActive && (
        <div className={filteredItems.length !== 0 ? 'search-input p-3' : 'd-none'}>
          {filteredItems.map((x) => (
            <Link key={x.id} to="/shop" onClick={() => openModal(x.id)}><h5>{x.title}</h5></Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

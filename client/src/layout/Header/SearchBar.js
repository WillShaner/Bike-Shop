/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import allBikes from '../../data/allBikes';
import { CartContext } from '../../context/CartContext';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((bike) => bike.title.includes(query));
};

function SearchBar({ openModal, setSearchOpen }) {
  const [search, setSearch] = useState('');
  const filteredItems = getFilteredItems(search, allBikes);
  const { setSearchActive } = useContext(CartContext);
  useEffect(() => {
    setSearchActive(false);
  }, []);
  return (
    <div onFocus={() => setSearchActive(true)} className="search">
      <input
        className="px-2"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for your favorite products"
      />

      {search === '' && (
        <div className="top-searches">
          <h3>Recommended Searches</h3>
          <p
            aria-hidden
            onClick={() => {
              setSearchActive(true);
              setSearch('adult');
            }}
          >
            Adult Bike
          </p>
          <p
            aria-hidden
            onClick={() => {
              setSearchActive(true);
              setSearch('kid');
            }}
          >
            Kids Bike
          </p>
          <p
            aria-hidden
            onClick={() => {
              setSearchActive(true);
              setSearch('blue');
            }}
          >
            Blue Bikes
          </p>
        </div>
      )}
      {search !== '' && (
        <div
          className={
            filteredItems.length !== 0 ? 'search-results p-3' : 'd-none'
          }
        >
          {filteredItems.map((x) => (
            <Link
              key={x.id}
              to="/shop"
              onClick={() => {
                setSearchOpen(false);
                openModal(x.id);
              }}
              className="search-results-item"
            >
              <img src={x.image} alt="bike" />
              <h5>{x.title}</h5>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

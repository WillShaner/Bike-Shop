/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
import React, { useState } from 'react';
import allBikes from '../data/allBikes';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  return items.filter((bike) => bike.title.includes(query));
};

function SearchBar() {
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const filteredItems = getFilteredItems(search, allBikes);
  console.log(filteredItems);

  return (
    <div className="d-flex flex-column align-items-center search">
      <input
        className="w-100 px-2"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
        placeholder="search for your favorite products"
      />
      {searchActive && (
        <div className={filteredItems.length !== 0 ? 'search-input p-3' : 'd-none'}>
          {filteredItems.map((x) => (
            <h5 key={x.id}>{x.title}</h5>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

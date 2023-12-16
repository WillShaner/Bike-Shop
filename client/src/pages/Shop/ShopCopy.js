import React, { useState, useEffect } from 'react';
import allBikes from '../../data/allBikes';
import BikeList from '../../components/BikeList';
import './Shop.css';

function Shop(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState(allBikes);
  const { onAdd, onRemove, modalOpen, openModal } = props;

  return (
    <div className={`p-1 ${modalOpen && 'overflow-hidden'}`}>
      <BikeList
        data={data}
        setData={setData}
        onAdd={onAdd}
        onRemove={onRemove}
        openModal={openModal}
      />
    </div>
  );
}

export default Shop;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import allBikes from '../data/allBikes';
import BikeSingle from '../components/BikeSingle';
import BikeList from '../components/BikeList';

function Shop(props) {
  const [data, setData] = useState(allBikes);
  const [currentBike, setCurrentBike] = useState(0);
  const { onAdd, onRemove } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (id) => {
    setCurrentBike(id);
    setModalOpen(true);
  };
  return (

    <div>
      <BikeList
        data={data}
        setData={setData}
        onAdd={onAdd}
        onRemove={onRemove}
        openModal={openModal}
      />

      <BikeSingle
        bike={data[currentBike]}
        onAdd={onAdd}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />

    </div>
  );
}

export default Shop;

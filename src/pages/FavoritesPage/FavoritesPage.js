import React, { useEffect, useContext } from 'react';
import './FavoritesPage.css';
import allBikes from '../../data/allBikes';
import BikeCard from '../../components/BikeCard';
import { CartContext } from '../../context/CartContext';

function FavoritesPage() {
  const { addToCart, openModal } = useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const favoritesArray = allBikes.filter((x) => x.favorite === true);
  return (
    <main className="favorites">
      {favoritesArray.length > 0 ? favoritesArray.map((x) => (
        <BikeCard
          key={x.id}
          bike={x}
          task={() => addToCart(x)}
          openModal={openModal}
        />
      )) : <h5>No Favorites Selected</h5>}
    </main>
  );
}

export default FavoritesPage;

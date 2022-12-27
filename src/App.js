/* eslint-disable*/
import React, { useState } from 'react';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import AboutPage from '../src/pages/AboutPage';
import CartPage from '../src/pages/CartPage';
import Footer from '../src/components/Footer';
import Shop from '../src/pages/Shop';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import './style.css';
import { CartContext } from './context/CartContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [currentBike, setCurrentBike] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(undefined)
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (id) => {
    setCurrentBike(id - 1);
    setModalOpen(true);
    document.body.classList.add('overflow-hidden')
  };
  function addToCart(product) {
    const inCart = cartItems.find((x) => x.id === product.id);
    if (inCart) {
      return
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  function addQuantity(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: (exist.qty += 1) } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  function removeFromCart(product) {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: (exist.qty -= 1) } : x
        )
      );
    }
  }
  return (
    <CartContext.Provider value={{currentBike, setCurrentBike,
      cartItems, setCartItems,
      user, setUser,
      modalOpen, setModalOpen,openModal,
      addToCart,
      addQuantity,
      removeFromCart,}}>
    <Router>
      <div className="container-main">
        <Header/>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/cart"
              element={
                <CartPage
                />
              }
            />
            <Route
              path="/shop"
              element={
                <Shop
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                  currentBike={currentBike}
                  setCurrentBike={setCurrentBike}
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  openModal={openModal}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login/>
              }
            />
            <Route
              path="/register"
              element={
                <RegisterPage
                />
              }
            />
          </Routes>
        </>
        <Footer />
      </div>
    </Router>
     </CartContext.Provider>
  );
}
export default App;

/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import Header from '../src/layout/Header/Header';
import Home from '../src/pages/Home/Home';
import AboutPage from '../src/pages/AboutPage/AboutPage';
import CartPage from '../src/pages/CartPage/CartPage';
import Footer from '../src/layout/Footer/Footer'
import Shop from '../src/pages/Shop/Shop';
import Login from './pages/Login/Login';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import IndividualBikeModal from '../src/components/IndividualBikeModal'
import './style.css';
import { CartContext } from './context/CartContext';
import allBikes from './data/allBikes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

function App() {
  const [currentBike, setCurrentBike] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(undefined)
  const [modalOpen, setModalOpen] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0)

  {/* email signup pop up */}
  useEffect(() => {

    if(window.location.pathname === '/') {
      setTimeout(() => {
        setEmailPopup(true);
          document.body.classList.add('overflow-hidden');
      }, 6000);}
 
  }, []);

  
  {/* popup modal on shop page */}
  const openModal = (id) => {
    setCurrentBike(id - 1);
    setModalOpen(true);
    document.body.classList.add('overflow-hidden')
  };

  {/* --- CART FUNCTIONS --- */}
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

  function totalCartRemoval(product) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));    


  }

  {/* --- FAVORITES FUNCTIONS --- */}
  function addToFavorites(product) {
    product.favorite = true    
  }
  function removeFromFavorites(product) {
    product.favorite = false    
  }
  return (
    <CartContext.Provider value={{currentBike, setCurrentBike,
      cartItems, setCartItems,
      user, setUser,
      modalOpen, setModalOpen,openModal,
      addToCart,
      addQuantity,
      removeFromCart,
      searchActive,
      setSearchActive,
       emailPopup,
        setEmailPopup,
         totalCartRemoval,
          removeFromFavorites,
       addToFavorites,
      favoritesCount,
       setFavoritesCount}}>
    <Router>
      <div className="container-main">
        <Header/>

      <IndividualBikeModal
        bike={allBikes[currentBike]}
        onAdd={addToCart}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
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
            <Route
              path="/favorite"
              element={
                <FavoritesPage
                />
              }
            /><Route
              path="*"
              element={
                <PageNotFound
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

import React, { useState, useContext } from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { HiShoppingBag, HiSearch } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SearchBar from './SearchBar';
import { CartContext } from '../context/CartContext';

function Header() {
  const {
    cartItems, user, setUser, openModal, favoritesCount,
  } = useContext(CartContext);
  const { length } = cartItems;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Navbar sticky="top" expand="lg">
      <Container className="d-flex justify-content-around">
        <Navbar.Toggle onClick={() => {
          setSearchOpen(false);
          setMenuOpen(!menuOpen);
        }}
        >
          {menuOpen ? <AiOutlineClose /> : <CgMenuRightAlt />}
        </Navbar.Toggle>
        <Navbar.Brand onClick={() => setMenuOpen(false)}>
          <NavLink to="/" className="header-logo">
            <h1 className="logo-text">
              The
              Bike
              Shop
            </h1>
          </NavLink>
        </Navbar.Brand>
        <div className="d-flex">
          {/* Favorites Link */}
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/favorite" className="cart-logo logo-sm">
            <AiOutlineHeart />
            <p className="cart-count-main">{favoritesCount}</p>
          </NavLink>
          {/* Cart Link */}
          <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/cart" className="cart-logo logo-sm">
            <HiShoppingBag />
            <p className="cart-count-main">{length}</p>
          </NavLink>

        </div>
        <div id="basic-navbar-nav" className={`justify-content-end navbar-collapse ${menuOpen ? 'show' : 'collapse'}`}>
          <Nav>
            {/* Shop Link */}
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/shop" className="header-link">
              Shop
            </NavLink>

            {/* About Link */}
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/about" className="header-link">
              About
            </NavLink>

            {/* Favorites Link */}
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/favorite" className="header-link cart-logo logo-lg">
              <AiOutlineHeart />
              <p className="cart-count">{favoritesCount}</p>
            </NavLink>

            {/* Search Link */}
            <NavLink onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(!searchOpen); }} className="header-link cart-logo">
              <HiSearch />
            </NavLink>

            {/* Cart Link */}
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/cart" className=" header-link cart-logo logo-lg">
              <HiShoppingBag />
              <p className="cart-count">{length}</p>
            </NavLink>
            {/* Login Link */}

            {user === undefined ? <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/login" className="header-link">Login</NavLink> : (
              <div aria-hidden="true" onClick={() => setMenuOpen(!menuOpen)} className="d-flex flex-row justify-content-around align-items-center flex-lg-column justify-content-lg-center">
                <p className="user-login">{user}</p>
                <Button className="logout-btn" onClick={() => setUser(undefined)}>Logout</Button>
              </div>
            )}
          </Nav>
        </div>
      </Container>
      {searchOpen && <SearchBar setSearchOpen={setSearchOpen} openModal={openModal} />}
    </Navbar>
  );
}

export default Header;

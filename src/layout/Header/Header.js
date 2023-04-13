import React, { useState, useContext } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { HiShoppingBag, HiSearch } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';
import { CartContext } from '../../context/CartContext';

function Header() {
  const {
    cartItems, user, setUser, openModal, favoritesCount,
  } = useContext(CartContext);
  const { length } = cartItems;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const closeMenuCloseSearch = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };
  return (
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle onClick={() => {
          setSearchOpen(false);
          setMenuOpen(!menuOpen);
        }}
        >
          {menuOpen ? <AiOutlineClose /> : <CgMenuRightAlt />}
        </Navbar.Toggle>
        <NavLink to="/" className="header-logo" onClick={() => closeMenuCloseSearch()}>
          <h1 className="logo-text">
            The
            Bike
            Shop
          </h1>
        </NavLink>
        <div className="icons-sm">
          {/* Favorites Link */}
          <NavLink onClick={() => closeMenuCloseSearch()} to="/favorite" className="cart-logo logo-sm">
            <AiOutlineHeart />
            <p className="cart-count-main">{favoritesCount}</p>
          </NavLink>
          {/* Cart Link */}
          <NavLink onClick={() => closeMenuCloseSearch()} to="/cart" className="cart-logo logo-sm">
            <HiShoppingBag />
            <p className="cart-count-main">{length}</p>
          </NavLink>

        </div>
        <div id="basic-navbar-nav" className={`justify-content-end navbar-collapse ${menuOpen ? 'show' : 'collapse'}`}>
          <Nav>

            {/* Shop Link */}
            <NavLink onClick={() => closeMenuCloseSearch()} to="/shop" className="header-link">
              Shop
            </NavLink>

            {/* About Link */}
            <NavLink onClick={() => closeMenuCloseSearch()} to="/about" className="header-link">
              About
            </NavLink>

            {/* Favorites Link */}
            <NavLink onClick={() => closeMenuCloseSearch()} to="/favorite" className="header-link cart-logo logo-lg">
              <AiOutlineHeart />
              <p className="cart-count">{favoritesCount}</p>
            </NavLink>

            {/* Search Link */}
            <NavLink onClick={() => { setMenuOpen(false); setSearchOpen(!searchOpen); }} className="header-link cart-logo">
              <HiSearch />
            </NavLink>

            {/* Cart Link */}
            <NavLink onClick={() => closeMenuCloseSearch()} to="/cart" className=" header-link cart-logo logo-lg">
              <HiShoppingBag />
              <p className="cart-count">{length}</p>
            </NavLink>

            {/* Login Link */}
            {user === undefined ? <NavLink onClick={() => closeMenuCloseSearch()} to="/login" className="header-link">Login</NavLink> : (
              <div aria-hidden="true" onClick={() => closeMenuCloseSearch()} className="user">
                <div className="d-flex flex-column align-items-center">
                  <FaUserCircle className="user-image" />
                  <p
                    className="user-username"
                    onClick={() => closeMenuCloseSearch()}
                    aria-hidden
                  >
                    {user}
                  </p>
                </div>
                {' '}
                <Button variant="outlined" className="user-logout-btn user-logout-btn-sm" onClick={() => { setUser(undefined); }}>Logout</Button>
                {userMenuOpen && (
                <div className="user-menu">
                  <Button variant="outlined" className="user-logout-btn" onClick={() => { setUser(undefined); setUserMenuOpen(false); setSearchOpen(false); }}>Logout</Button>

                </div>
                )}
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

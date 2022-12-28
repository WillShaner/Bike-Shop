import React, { useState, useContext } from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from '../assets/Biker_Flatline.svg';
import { CartContext } from '../context/CartContext';

function Header() {
  const {
    cartItems, user, setUser, setSearchActive,
  } = useContext(CartContext);
  const { length } = cartItems;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar onMouseEnter={() => setSearchActive(false)} sticky="top" expand="lg" className="text-light">
      <Container>
        <Navbar.Brand onClick={() => setMenuOpen(false)}>
          <NavLink to="/" className="header-logo">
            <img className="logo-img img-fluid" src={logo} alt="logo" />
            <h6 className="logo-text">
              The
              <br />
              Bike
              <br />
              Shop
            </h6>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        >
          <AiOutlineMenu />
          {!menuOpen && <span className="cart-count-main">{length}</span>}
        </Navbar.Toggle>

        <div id="basic-navbar-nav" className={`justify-content-end navbar-collapse ${menuOpen ? 'show' : 'collapse'}`}>
          <Nav>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/shop" className="header-link">
              Shop
            </NavLink>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/about" className="header-link">
              About
            </NavLink>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/cart" className=" header-link cart">
              <BsFillCartFill />
              <span className="cart-count">{length}</span>
            </NavLink>
            {user === undefined ? <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/login" className="header-link">Login</NavLink> : (
              <div aria-hidden="true" onClick={() => setMenuOpen(!menuOpen)} className="d-flex flex-row justify-content-around align-items-center flex-lg-column justify-content-lg-center">
                <p className="user-login">{user}</p>
                <Button className="logout-btn" onClick={() => setUser(undefined)}>Logout</Button>
              </div>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

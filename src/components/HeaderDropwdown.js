import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderDropwdown(props) {
  const { cartItems } = props;
  const { length } = cartItems;
  return (
    <div className="header-dropdown-menu">
      <NavLink to="/shop" className="dropdown-link">
        Shop
      </NavLink>
      <NavLink to="/about" className="dropdown-link">
        About
      </NavLink>
      <NavLink to="/cart" className="dropdown-link">
        Cart
        <span className="cart-count">{length}</span>
      </NavLink>
    </div>
  );
}

export default HeaderDropwdown;

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartItem(props) {
  const { item, addQuantity, removeFromCart } = props;
  const { image, title, price, qty } = item;
  const { totalCartRemoval } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={image} alt="cart" className="cart-image" />
      <p
        className="cart-item-close"
        aria-hidden
        onClick={() => totalCartRemoval(item)}
      >
        x
      </p>
      <div className="cart-item-text">
        <h4>product details</h4>
        <h5>{title}</h5>
        <p>${price}</p>
        <div className="cart-qty">
          <p>qty</p>
          <button
            className="qty-btn"
            type="button"
            onClick={() => removeFromCart(item)}
          >
            -
          </button>
          <p>{qty}</p>
          <button
            className="qty-btn"
            type="button"
            onClick={() => addQuantity(item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

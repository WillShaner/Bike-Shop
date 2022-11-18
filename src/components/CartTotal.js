import React from 'react';

function CartTotal(props) {
  const { cartItems, checkout } = props;
  let cartTotal = 0;
  return (
    <div className="cart-total-container">
      <div className="cart-total-price">
        <h3>Subtotal</h3>
        {cartItems.forEach((x) => {
          cartTotal += Number(x.price * x.qty);
        })}
        <h2>
          $
          {cartTotal.toFixed(2)}
        </h2>
      </div>
      <button onClick={checkout} type="button" className="checkout-btn">
        Checkout
      </button>
    </div>
  );
}

export default CartTotal;

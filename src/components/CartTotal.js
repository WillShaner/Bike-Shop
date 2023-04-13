import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function CartTotal({ cartItems, checkout }) {
  const [promoCode, setPromoCode] = useState('');
  const [cartTotal, setCartTotal] = useState(0);
  const [codeApplied, setCodeApplied] = useState(false);

  useEffect(() => {
    setCodeApplied(false);
    let cartItemsTotal = 0;
    cartItems.forEach((x) => {
      cartItemsTotal += Number(x.price * x.qty);
      return cartItemsTotal;
    });
    setCartTotal(cartItemsTotal);
  }, [cartItems]);

  const checkCode = (e) => {
    e.preventDefault();

    if (promoCode === process.env.REACT_APP_PROMO_CODE && !codeApplied) {
      const discount = Number(cartTotal * process.env.REACT_APP_PROMO_CODE_AMOUNT);
      setCartTotal(cartTotal - discount);
      setCodeApplied(true);
    }
  };
  return (
    <div className="cart-total-container">
      <h3>Subtotal</h3>
      <form onSubmit={checkCode}>
        <h6>Promo Code</h6>
        <div style={{ display: 'flex' }}>
          <input type="text" onChange={(e) => setPromoCode(e.target.value)} placeholder="enter promo code" style={{ paddingLeft: '0.375rem' }} />
          <Button type="submit" variant="contained" size="small" sx={{ backgroundColor: 'white', color: 'black', marginLeft: '0.375rem' }}>Apply</Button>
        </div>
      </form>
      {codeApplied && (
      <p>
        Promo code applied:
        {' '}
        {process.env.REACT_APP_PROMO_CODE_AMOUNT * 100}
        % off
      </p>
      )}
      <div style={{
        display: 'flex', justifyContent: 'space-between', width: '100%',
      }}
      >
        <p style={{ display: 'inline' }}>
          Total:
        </p>
        <p style={{ display: 'inline' }}>
          $
          {cartTotal.toFixed(2)}
        </p>
      </div>
      <button onClick={checkout} type="button" className="checkout-btn">
        Checkout
      </button>
    </div>
  );
}

export default CartTotal;

import React, { useContext, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CartItem from '../../components/CartItem';
import CartTotal from '../../components/CartTotal';
import './CartPage.css';
import { CartContext } from '../../context/CartContext';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};
function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { cartItems, addQuantity, removeFromCart } = useContext(CartContext);

  const product = {
    price: 'price_1M5EnADMKtskwVZQGGXtrUzv',
    quantity: 1,

  };

  const checkoutOptions = {
    lineItems: [product],
    mode: 'payment',
    successUrl: `${window.location.origin}/`,
    cancelUrl: `${window.location.origin}/cart`,
  };
  const redirectToCheckout = async () => {
    console.log('redirect to checkout');

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log('Stripe checkout error', error);
  };
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3 className="text-center">Cart Items</h3>
        <p className="text-center py-3">
          {cartItems.length === 0
            ? 'cart is empty'
            : ` ${cartItems.length} item(s) in cart`}
        </p>
        {cartItems.map((item) => (
          <CartItem
            item={item}
            key={item.id}
            addQuantity={addQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      {cartItems.length !== 0 ? <CartTotal checkout={redirectToCheckout} cartItems={cartItems} /> : ' '}

    </div>
  );
}

export default CartPage;

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function CartItem(props) {
  const { item, addQuantity, removeFromCart } = props;
  const {
    image,
    title,
    price,
    qty,
  } = item;

  return (
    <Container className="cart-item d-flex flex-row justify-content-between align-items-center  p-3 w-100">
      <img src={image} alt="cart" className="cart-image" />

      <Row className="d-flex text-end justify-content-end w-100">
        <h4>product details</h4>
        <h5>{title}</h5>
        <p>
          $
          {price}
        </p>
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
          <button className="qty-btn" type="button" onClick={() => addQuantity(item)}>
            +
          </button>
        </div>
      </Row>
    </Container>
  );
}

export default CartItem;

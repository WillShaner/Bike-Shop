import React from 'react';
import '../style/Bikes.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Bikes(props) {
  const { bike, add, buttonText } = props;
  const {
    image,
    price,
    title,
    description,
  } = bike;

  return (
    <Card className="justify-content-center align-items-center m-3 p-3 bike-card">
      <img className="bike-image" src={image} alt="bike" />
      <h4 className="bike-text bike-title">{title}</h4>
      <p className="bike-text bike-desc">{description}</p>
      <p className="bike-text bike-price">
        $
        {price}
      </p>
      <Button value={bike} type="button" className="px-5 add mb-2" onClick={add}>
        {buttonText}
      </Button>
    </Card>
  );
}
Bikes.defaultProps = {
  buttonText: 'Add to cart',
};
export default Bikes;

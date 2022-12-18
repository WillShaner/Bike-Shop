import React from 'react';
import '../style/Bikes.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Bikes(props) {
  const {
    bike, task, buttonText, openModal,
  } = props;
  const {
    image,
    price,
    title,
    description,
    id,
  } = bike;

  return (
    <Card className="justify-content-center align-items-center m-3 p-3 bike-card" id={`#${id}`}>
      <img className="bike-image img-fluid" src={image} alt="bike" />
      <h4 className="bike-text bike-title">{title}</h4>
      <p className="bike-text bike-desc">{description}</p>
      <p className="bike-text bike-price">
        $
        {price}
      </p>
      <Button value={bike} type="button" className="px-5 add mb-2" onClick={task}>
        {buttonText}
      </Button>
      {openModal && <p className="read-more-btn px-3 rounded" onClick={() => openModal(id)} aria-hidden="true">Read more</p>}
    </Card>
  );
}
Bikes.defaultProps = {
  buttonText: 'Add to cart',
};
export default Bikes;

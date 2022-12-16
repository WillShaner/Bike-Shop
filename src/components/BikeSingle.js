import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { FaQuoteLeft } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Button from 'react-bootstrap/Button';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import RatingsTable from './RatingsTable';

function BikeSingle({
  bike, onAdd, setModalOpen, modalOpen,

}) {
  const {
    title, price, image, description, review, reviewName, reviewJob,
  } = bike;
  console.log(modalOpen);
  return (

    <Container className={`${modalOpen ? 'slide-in-left' : 'd-none'} d-flex flex-column p-5 bike-modal `}>
      <div
        aria-hidden="true"
        onClick={() => setModalOpen(false)}
        className="back-button"
      >
        <IoChevronBackCircleOutline />
      </div>
      <div className="text-uppercase">
        <Image src={image} alt="product" className="bike-single-image img-fluid" />

        <h1>{title}</h1>
        <div className="d-flex justify-content-between align-items-start">
          <p>
            $
            {price}
          </p>
          <Button onClick={() => onAdd(bike)} className="add px-4">Add to cart</Button>

        </div>

        <p className="text-wrap">
          description:
          <br />
          {description}
        </p>

        <div className="col-6-lg">
          <div className="row p-3 mb-3">
            <div className="quote-box ">
              <h1>
                <FaQuoteLeft />
              </h1>
              <p>
                <br />
                &lsquo;
                {review}
                &rsquo;

              </p>
            </div>
            <div className="quote-name d-flex align-items-center">
              <div className="quote-connect" />

              <div className="quote-profile d-flex align-items-center">
                <h2 className="quote-profile-img m-2">
                  <CgProfile />
                </h2>
                <h4 className="pt-5">
                  {reviewName}
                  <br />
                  <span><h6><i>{reviewJob}</i></h6></span>
                </h4>

              </div>

            </div>
          </div>
          <RatingsTable />
        </div>
      </div>

    </Container>
  );
}

export default BikeSingle;

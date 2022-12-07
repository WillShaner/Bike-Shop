import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function RegisterSuccess() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center h-100vh">
      <h1>
        You are successfully registered!
      </h1>
      <Link to="/login">
        <h2>Proceed to login</h2>
      </Link>
    </Container>
  );
}

export default RegisterSuccess;

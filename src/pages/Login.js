/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

function Login() {
  const [formErrors, setFormErrors] = useState({});

  const usernameField = useRef();
  const passwordField = useRef();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log('handle form here');
    const username = usernameField.current.value;
    const password = passwordField.current.value;

    const errors = {};
    if (!username) {
      errors.username = 'Username must not be empty.';
    }
    if (!password) {
      errors.password = 'Password must not be empty.';
    }
    setFormErrors(errors);
    console.log(errors);
  };
  return (
    <Container className="login-container my-5">
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Username or email address"
          error={formErrors.username}
          fieldRef={usernameField}
        />
        <InputField
          name="password"
          label="Password"
          error={formErrors.password}
          fieldRef={passwordField}
          type="password"
        />
        <Button type="submit">Login</Button>
      </Form>
      <hr />
      <p>
        Don't have an account?
        {' '}
        <Link to="/register">Register here</Link>
        !
      </p>
    </Container>
  );
}
/* if (Object.keys(errors).length > 0) {
    } */
export default Login;

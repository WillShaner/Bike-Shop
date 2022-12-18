/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';

function Login({ setUser, user }) {
  const [formErrors, setFormErrors] = useState({});
  // const [buttonDisabled, setButtonDisable] = useState(true);
  const usernameField = useRef();
  const passwordField = useRef();

  useEffect(() => {
    if (!user === undefined) {
      usernameField.current.focus();
    }
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
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
    if (errors.password === undefined && errors.username === undefined) {
      setUser(username);
      console.log('clear');
      // setButtonDisable(false);
    }
    console.log(errors.username, errors.password);
  };
  return (
    <div>

      { user === undefined ? (
        <Container className="login-container my-5">
          <h1>Login</h1>
          <Form onSubmit={onSubmit}>
            <InputField
              name="username"
              label="Username or email address"
              error={formErrors.username}
              fieldRef={usernameField}
              required
            />
            <InputField
              name="password"
              label="Password"
              error={formErrors.password}
              fieldRef={passwordField}
              type="password"
              required
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
      )

        : (
          <div className="p-5 text-center d-flex flex-column align-items-center">
            <h1>
              WELCOME,
              <br />
              {usernameField.current.value}
            </h1>
            <Link to="/shop">continue shopping</Link>
            <Button className="mt-5" onClick={() => setUser(undefined)}>Logout</Button>
          </div>
        )}
    </div>
  );
}
export default Login;

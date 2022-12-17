import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputField from './InputField';

export default function RegisterForm({ setRegistered }) {
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const password2Field = useRef();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    const username = usernameField.current.value;
    const password = passwordField.current.value;
    const password2 = password2Field.current.value;

    const errors = {};
    if (!username) {
      errors.username = 'Username must not be empty.';
    }
    if (!password) {
      errors.password = 'Password must not be empty.';
    }
    if (password2 !== password) {
      errors.password2 = 'Password do not match.';
    }
    setFormErrors(errors);
    if (errors.length === undefined) {
      setRegistered(true);
    }
  };
  return (
    <Container className="login-container my-5 mx-2">
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Username"
          error={formErrors.username}
          fieldRef={usernameField}
        />
        <InputField
          name="email"
          label="Enter your email"
          error={formErrors.email}
          fieldRef={emailField}
          type="email"
        />
        <InputField
          name="password"
          label="Password"
          error={formErrors.password}
          fieldRef={passwordField}
          type="password"
        />
        <InputField
          name="password2"
          label="Confirm password"
          error={formErrors.password2}
          fieldRef={password2Field}
          type="password"
        />
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
}

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import { CartContext } from '../../context/CartContext';
import './Login.css';
import Background from '../../assets/sign-in.webp';

function Login() {
  const { setUser, user } = useContext(CartContext);
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef();
  const passwordField = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user === undefined) {
      usernameField.current.focus();
    }
    window.scrollTo(0, 0);
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
      navigate('/');
    }
  };
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="login-container-content">
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
          Don't have an account? <Link to="/register">Register here</Link>!
        </p>
      </div>
    </div>
  );
}
export default Login;

import React, {
  useState, useRef, useEffect,
} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import '../Login/Login.css';

export default function RegisterPage() {
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef();
  const emailField = useRef();
  const passwordField = useRef();
  const password2Field = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    usernameField.current.focus();
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    const username = usernameField.current.value;
    const password = passwordField.current.value;
    const password2 = password2Field.current.value;
    const email = emailField.current.value;

    const errors = {};
    if (username.length < 8) {
      errors.username = 'Username must be 8 characters.';
    }
    if (email.includes('@') === false || email.includes('.') === false) {
      errors.email = 'Enter a valid email.';
    }
    if (password.length < 8) {
      errors.password = 'Password must be 8 characters.';
    }
    if (password2 !== password) {
      errors.password2 = 'Password do not match.';
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      navigate('/login');
    }
  };
  return (
    <div className="login-container">
      <div className="login-container-content">
        <h1>Register</h1>
        <Form onSubmit={onSubmit}>
          <InputField
            name="username"
            label="Username"
            error={formErrors.username}
            fieldRef={usernameField}
            required
          />
          <InputField
            name="email"
            label="Enter your email"
            error={formErrors.email}
            fieldRef={emailField}
            type="email"
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
          <InputField
            name="password2"
            label="Confirm password"
            error={formErrors.password2}
            fieldRef={password2Field}
            type="password"
            required
          />
          <Button type="submit">Register</Button>
        </Form>
        <hr />
        <p>
          Already have an account?
          {' '}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import Button from 'react-bootstrap/Button';

function EmailSignUp() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="row d-flex flex-column justify-content-around email-signup">
      <h1 className="text-center">Sign up for our newsletter</h1>
      <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <input className="ps-3 py-2 rounded mb-5" type="email" placeholder="email address" />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}

export default EmailSignUp;

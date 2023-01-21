import React from 'react';
import Button from 'react-bootstrap/Button';

function EmailSignUp({ setEmailPopup }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (

    <div className="email-signup-container">
      <div className="row d-flex flex-column justify-content-around email-signup">
        <span className="close-button" onClick={() => setEmailPopup(false)} aria-hidden>x</span>
        <h2 className="text-center">STAY IN THE KNOW</h2>
        <p>Stay up to date on the latest, get special member discounts, and lots of inspiration</p>
        <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
          <input className="ps-3 py-1 rounded" type="email" placeholder="email address" />
          <Button type="submit">Sign up</Button>
        </form>
        <p className="close-email-signup" onClick={() => setEmailPopup(false)} aria-hidden>No thanks</p>
      </div>
    </div>
  );
}

export default EmailSignUp;

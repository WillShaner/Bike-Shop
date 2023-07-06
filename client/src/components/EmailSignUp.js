import React from 'react';

function EmailSignUp({ setEmailPopup }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setEmailPopup(false);
    document.body.classList.remove('overflow-hidden');
  };

  const closePopUp = () => {
    setEmailPopup(false);
    document.body.classList.remove('overflow-hidden');
  };
  return (
    <div className="email-signup-container">
      <div className="row d-flex flex-column justify-content-around email-signup">
        <span className="close-button" onClick={() => closePopUp()} aria-hidden>
          x
        </span>
        <h2 className="text-center">STAY IN THE KNOW</h2>
        <p>
          Stay up to date on the latest, get special member discounts, and lots
          of inspiration
        </p>
        <form
          className="d-flex align-items-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="input-row">
            <input
              className="ps-3 py-1 rounded"
              type="email"
              placeholder="email address"
              required
            />
            <button type="submit">Sign up</button>
          </div>
        </form>
        <p
          className="close-email-signup"
          onClick={() => closePopUp()}
          aria-hidden
        >
          No thanks
        </p>
      </div>
    </div>
  );
}

export default EmailSignUp;

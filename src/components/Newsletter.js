import React, { useRef, useState } from 'react';
import { BsHandThumbsUp } from 'react-icons/bs';

function Newsletter() {
  const emailField = useRef();
  const [error, setError] = useState({});
  const [signedUp, setSignedUp] = useState(false);

  const handleEmail = (e) => {
    e.preventDefault();
    const email = emailField.current.value;
    console.log(email);
    const formErrors = {};

    if (email.includes('@') === false || email.includes('.') === false) {
      formErrors.email = 'Enter a valid email.';
    }
    setError(formErrors);

    if (Object.keys(error).length === 0) {
      setSignedUp(true);
    }
  };
  return (
    <div>
      {!signedUp
        ? (
          <form className="newsletter" onSubmit={handleEmail}>
            <p>Don&apos;t miss out!</p>
            <p>Sign up for our newsletter</p>
            <input type="email" placeholder="email address" ref={emailField} />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <div className="newsletter-success">
            <p>You&apos;re all signed up!</p>
            <BsHandThumbsUp className="thumbs-up" />
          </div>
        ) }
    </div>

  );
}

export default Newsletter;

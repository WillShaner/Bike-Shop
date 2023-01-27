import React, { useRef, useState } from 'react';
import { BsHandThumbsUp } from 'react-icons/bs';

function Newsletter() {
  const emailField = useRef();
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleEmail = (e) => {
    e.preventDefault();
    const email = emailField.current.value;
    console.log(email);
    let formErrors;
    if (email.includes('@') === false) {
      formErrors = 'Enter a valid email';
    }
    setError(formErrors);
    console.log(formErrors, error);

    if (!formErrors) {
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
            <p style={{ color: 'red' }}>{error}</p>
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

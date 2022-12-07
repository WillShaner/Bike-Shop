/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

import RegisterSuccess from '../components/RegisterSuccess';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  const [registered, setRegistered] = useState(false);

  return (
    <>
      {registered === false
        ? <RegisterForm setRegistered={setRegistered} />
        : <RegisterSuccess />}
    </>

  );
}
/* if (Object.keys(errors).length > 0) {
    } */
export default RegisterPage;

import React from 'react';
import AuthForm from '../content/Auth';

const RegisterPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useEffect } from 'react';
import AuthForm from '../content/Auth';

const LoginPage = () => {

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default LoginPage;

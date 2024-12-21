import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-betting-dark flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default Login;
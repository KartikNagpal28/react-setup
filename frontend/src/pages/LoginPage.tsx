import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import Login from '@app/components/authentication/LogInForm/Login';

const LoginPage: React.FC = () => {
  return (
    <>
      <PageTitle>Log In</PageTitle>
      <Login />
    </>
  );
};

export default LoginPage;

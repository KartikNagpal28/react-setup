import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import SignUpForm from '@app/components/authentication/SignUp-Form/SignUpForm';

const SignUpPage: React.FC = () => {
  return (
    <>
      <PageTitle>Sign Up</PageTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;

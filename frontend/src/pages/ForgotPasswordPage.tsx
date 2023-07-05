import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { ForgotPasswordForm } from '@app/components/auth/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <PageTitle>Forgot Password</PageTitle>
      <ForgotPasswordForm />
    </>
  );
};

export default ForgotPasswordPage;

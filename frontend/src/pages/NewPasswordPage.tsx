import React from 'react';
import { NewPasswordForm } from '@app/components/auth/NewPasswordForm/NewPasswordForm';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const NewPasswordPage: React.FC = () => {
  return (
    <>
      <PageTitle>New Password</PageTitle>
      <NewPasswordForm />
    </>
  );
};

export default NewPasswordPage;

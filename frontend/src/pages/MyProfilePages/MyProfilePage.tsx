import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import MyProfileForm from '@app/components/myProfile/MyProfileForm';
import React from 'react';

const MyProfilePage: React.FC = () => {
  return (
    <>
      <PageTitle>My Profile</PageTitle>
      <MyProfileForm />
    </>
  );
};

export default MyProfilePage;

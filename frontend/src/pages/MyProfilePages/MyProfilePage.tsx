import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
// import MyProfileForm from '@app/components/myProfile/MyProfileForm';
import MyProfileForm from '@app/components/my-Profile/MyProfileForm';
import React from 'react';

const MyProfilePage: React.FC = () => {
  return (
    <>
      {/* this my profile form is for builders */}
      <PageTitle>My Profile</PageTitle>
      <MyProfileForm />
    </>
  );
};

export default MyProfilePage;

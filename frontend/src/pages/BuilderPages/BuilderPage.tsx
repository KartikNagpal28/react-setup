import UserDetails from '@app/components/react-setup-user/UserDetail';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import React from 'react';

const BuilderPage: React.FC = () => {
  return (
    <div className="bg-[#FFF]">
      <PageTitle>Users</PageTitle>
      <UserDetails />
    </div>
  );
};

export default BuilderPage;

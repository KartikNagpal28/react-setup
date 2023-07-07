import UserDetails from '@app/components/react-setup-user/User-Detail';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import React from 'react';

const UserPage: React.FC = () => {
  return (
    <div className="bg-[#FFF]">
      <PageTitle>Users</PageTitle>
      <UserDetails />
    </div>
  );
};

export default UserPage;

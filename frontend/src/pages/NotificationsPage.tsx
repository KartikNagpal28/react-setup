import React from 'react';
import { Notifications } from '@app/components/profile/profileCard/profileFormNav/nav/notifications/Notifications/Notifications';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const NotificationsPage: React.FC = () => {
  return (
    <>
      <PageTitle>Notifications</PageTitle>
      <Notifications />
    </>
  );
};

export default NotificationsPage;

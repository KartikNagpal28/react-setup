import React from 'react';
import { SecuritySettings } from '@app/components/profile/profileCard/profileFormNav/nav/SecuritySettings/SecuritySettings';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const SecuritySettingsPage: React.FC = () => {
  return (
    <>
      <PageTitle>Security Settings</PageTitle>
      <SecuritySettings />
    </>
  );
};

export default SecuritySettingsPage;

import BusinessProfileForm from '@app/components/businessProfile/BusinessProfileForm';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

import React from 'react';

const BusineesPage: React.FC = () => {
  return (
    <>
      <PageTitle>Profile - Business</PageTitle>
      <BusinessProfileForm />
    </>
  );
};

export default BusineesPage;

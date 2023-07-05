import BuilderDetails from '@app/components/builder/BuilderDetails';
import BuilderProvider from '@app/components/builder/store/BuilderProvider';
// import BuilderHeader from '@app/components/builder/BuilderHeader';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import React from 'react';

const BuilderPage: React.FC = () => {
  return (
    <div className="bg-[#FFF]">
      <PageTitle>Builders</PageTitle>
      <BuilderProvider>
        <BuilderDetails />
      </BuilderProvider>
    </div>
  );
};

export default BuilderPage;

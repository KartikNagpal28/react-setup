import React from 'react';
import { Error } from '@app/components/Error/Error';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import error404 from '@app/assets/images/error404.svg';

const Error404Page: React.FC = () => {
  return (
    <>
      <PageTitle>Client Error</PageTitle>
      <Error img={error404} msg="Sorry, page not found!" />
    </>
  );
};

export default Error404Page;

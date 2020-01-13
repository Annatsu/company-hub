// React
import React from 'react';
import { useIntl } from 'react-intl';

const PageNotFound = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <h1 className='title'>{formatMessage({ id: 'routes.pageNotFound.title' })}</h1>
      <h2 className='subtitle'>{formatMessage({ id: 'routes.pageNotFound.subtitle' })}</h2>
    </>
  );
};

export default PageNotFound;

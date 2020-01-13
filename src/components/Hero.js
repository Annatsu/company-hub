// React
import React from 'react';
import { useIntl } from 'react-intl';

const Hero = () => {
  const { formatMessage } = useIntl();

  return (
    <section className='hero is-primary is-bold is-fullheight-with-navbar'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>{formatMessage({ id: 'hero.title' })}</h1>
          <h2 className='subtitle'>{formatMessage({ id: 'hero.subtitle' })}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

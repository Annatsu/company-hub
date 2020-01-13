// React
import React from 'react';
import PropTypes from 'prop-types';

const ApplicationFrame = ({ children, ...rest }) => {
  return (
    <section className='section' {...rest}>
      <div className='container'>{children}</div>
    </section>
  );
};

ApplicationFrame.propTypes = {
  children: PropTypes.node,
};

export default ApplicationFrame;

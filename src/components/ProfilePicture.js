// React
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ProfilePicture = ({ lg, src, ...rest }) => (
  <figure className={cx('image', lg ? 'is-128x128' : 'is-64x64')} {...rest}>
    <img src={src} style={{ borderRadius: '50%' }} alt='Profile' />
  </figure>
);

ProfilePicture.propTypes = {
  lg: PropTypes.bool,
  src: PropTypes.string,
};

export default ProfilePicture;

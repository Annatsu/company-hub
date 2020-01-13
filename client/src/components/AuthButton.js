// React
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import cx from 'classnames';

// Contexts
import AuthenticationContext from '../contexts/Authentication';

const AuthButton = () => {
  const { formatMessage } = useIntl();
  const { authenticated, toggleAuthenticated } = useContext(AuthenticationContext);

  return (
    <button
      className={cx('button is-rounded', authenticated ? 'is-danger' : 'is-success')}
      onClick={toggleAuthenticated}
    >
      {formatMessage({ id: `authentication.${authenticated ? 'logout' : 'login'}` })}
    </button>
  );
};

export default AuthButton;

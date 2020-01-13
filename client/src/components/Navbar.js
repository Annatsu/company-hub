// React
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Components
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

// Constants
const NAVBAR_ID = 'app-navbar-menu';

const Navbar = () => {
  const [isBurgerToggled, setBurgerState] = useState(false);
  const toggleBurger = useCallback(() => {
    setBurgerState(!isBurgerToggled);
  }, [isBurgerToggled]);

  return (
    <nav className='navbar is-fixed-top is-transparent' role='navigation'>
      <div className='container'>
        <NavbarBrand isActive={isBurgerToggled} onBurgerClick={toggleBurger} />
        <div id={NAVBAR_ID} className={cx('navbar-menu', isBurgerToggled && 'is-active')}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <AuthButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavbarBrand = ({ isActive, onBurgerClick }) => (
  <div className='navbar-brand'>
    <Link to='/' className='navbar-item'>
      CH
    </Link>

    <a
      role='button'
      className={cx('navbar-burger burger', isActive && 'is-active')}
      aria-label='menu'
      aria-expanded='false'
      data-target={NAVBAR_ID}
      onClick={onBurgerClick}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </a>
  </div>
);

NavbarBrand.propTypes = {
  isActive: PropTypes.bool,
  onBurgerClick: PropTypes.func,
};

export default Navbar;

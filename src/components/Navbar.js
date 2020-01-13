// React
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from '@emotion/styled';

// Components
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import LanguageDropdown from './LanguageDropdown';

// Constants
const NAVBAR_ID = 'app-navbar-menu';

const BurgerButton = styled.button`
  background: transparent;
  border: none;
`;

const Navbar = () => {
  const [isBurgerToggled, setBurgerState] = useState(false);
  const toggleBurger = useCallback(
    (e) => {
      e.preventDefault();
      setBurgerState(!isBurgerToggled);
    },
    [isBurgerToggled],
  );

  return (
    <nav className='navbar is-fixed-top is-transparent' role='navigation'>
      <div className='container'>
        <NavbarBrand isActive={isBurgerToggled} onBurgerClick={toggleBurger} />
        <div id={NAVBAR_ID} className={cx('navbar-menu', isBurgerToggled && 'is-active')}>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <AuthButton />
                <LanguageDropdown />
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

    <BurgerButton
      className={cx('navbar-burger burger', isActive && 'is-active')}
      aria-label='menu'
      aria-expanded='false'
      data-target={NAVBAR_ID}
      onClick={onBurgerClick}
    >
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
      <span aria-hidden='true'></span>
    </BurgerButton>
  </div>
);

NavbarBrand.propTypes = {
  isActive: PropTypes.bool,
  onBurgerClick: PropTypes.func,
};

export default Navbar;

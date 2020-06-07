import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import homeImg from './icon/home.svg';
import bookImg from './icon/book.svg';
import cartImg from './icon/cart.svg';
import userImg from './icon/user.svg';
import './NavbarBookRenter.css';

const NavbarBookRenter = (props) => {
  const { amountCart, isAuthenticated } = props;

  const guestLink = (
    <Fragment>
      <li className='h-navbar-item h-login'>
        <a href='#Top' className='h-nav-link'>
          <span className='link-text'>Login</span>
        </a>
      </li>
      <li className='h-navbar-item h-signup'>
        <a href='#Top' className='h-nav-link '>
          <span className='link-text'>SignUp</span>
        </a>
      </li>
    </Fragment>
  );
  const AuthLink = (
    <Fragment>
      <li className='h-navbar-item h-user'>
        <a href='#Top' className='h-nav-link'>
          <div className='nav-icon'>
            <img src={userImg} className='link-icon' alt='user' />
            <span className='link-text'>Name User</span>
          </div>
        </a>
      </li>
      <li className='h-navbar-item h-logout'>
        <a href='#Top' className='h-nav-link '>
          <span className='link-text'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='h-navbar'>
        <ul className='h-navbar-nav'>
          <li className='h-navbar-item'>
            <a href='#Top' className='h-nav-link'>
              <div className='nav-icon'>
                <img src={homeImg} className='link-icon' alt='home' />
              </div>
              <span className='link-text'>Home</span>
            </a>
          </li>
          <li className='h-navbar-item'>
            <a href='#Top' className='h-nav-link'>
              <div className='nav-icon'>
                <img src={bookImg} className='link-icon' alt='book' />
              </div>
              <span className='link-text'>Book</span>
            </a>
          </li>
          <li className='h-navbar-item'>
            <a href='#Top' className='h-nav-link'>
              <div className='nav-icon'>
                <img src={cartImg} className='link-icon' alt='cart' />
              </div>
              <span className='link-text'>
                Cart(
                <span className='text-warning'>{amountCart}</span>)
              </span>
            </a>
          </li>

          {isAuthenticated ? AuthLink : guestLink}
        </ul>
      </nav>
    </Fragment>
  );
};

NavbarBookRenter.propTypes = {
  amountCart: PropTypes.number,
  isAuthenticated: PropTypes.bool,
};

export default NavbarBookRenter;

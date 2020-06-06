import React from 'react';
import PropTypes from 'prop-types';

import './UserPage.css';
import HouseIcon from './icon/house.svg';
import SystemIcon from './icon/system.svg';

const UserPage = ({ user }) => {
  const { logo, name, rate, nameStore, products } = user;
  return (
    <div className='page-user'>
      <div className='logo-user'>
        <img src={logo} className='logo-img' alt='logo' />
      </div>
      <div className='info-user'>
        <h2 className='name-user'>{name}</h2>
        <h2 className='name-store'>
          {nameStore}
          <span>
            <img src={HouseIcon} className='icon-store' alt='house' />
          </span>
        </h2>
        <h2 className='rate-percent'>Comment {rate}% Good</h2>
        <h2 className='amount-product'>Store Have {products} products</h2>
        <div className='btn btn-edit'>
          <span>Edit profile</span>
          <img src={SystemIcon} className='icon-edit' alt='edit profile' />
        </div>
      </div>
    </div>
  );
};

UserPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    rate: PropTypes.number,
    nameStore: PropTypes.string,
    product: PropTypes.number,
  }),
};

export default UserPage;

import React, { useState } from 'react';

import './CardBook.css';
import cartImg from './icon/cart.svg';
import heartImg from './icon/heart.svg';
import menuImg from './icon/menu.svg';

const CardBook = ({ book }) => {
  const { image, name, des } = book;

  const [hoverDiv, setHover] = useState('');

  const handleHover = (e) => {
    setHover(e.target.alt);
  };

  const handleLeaveHover = (e) => {
    setHover('');
  };

  return (
    <div className='h-card'>
      <div className='h-card-content'>
        <img src={image} className='h-card-img' alt='book card' />
        <div className='h-card-body'>
          <h3 className='h-card-title'>{name}</h3>
          <p className='h-card-text'>{des.slice(0, 90)}</p>
        </div>
        <div className='action'>
          <button className='btn btn-cart'>
            <img
              src={cartImg}
              className={`btn-img ${hoverDiv === 'cart' ? 'fill' : ''}`}
              onMouseMove={handleHover}
              onMouseLeave={handleLeaveHover}
              alt='cart'
            />
          </button>
          <button className='btn btn-love'>
            <img
              src={heartImg}
              className={`btn-img ${hoverDiv === 'heart' ? 'fill' : ''}`}
              onMouseMove={handleHover}
              onMouseLeave={handleLeaveHover}
              alt='heart'
            />
          </button>
          <button className='btn btn-save'>
            <img
              src={menuImg}
              className={`btn-img ${hoverDiv === 'saveCart' ? 'fill' : ''}`}
              onMouseMove={handleHover}
              onMouseLeave={handleLeaveHover}
              alt='saveCart'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBook;

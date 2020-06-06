import React from 'react';

import './BookRenterItem.css';

const BookRenterItem = ({ row, userName, bookTitle, date, deadLine }) => {
  return (
    <div className='book-renter-child'>
      <div className='row'>
        <span>{row}</span>
      </div>
      <div className='user'>
        <h3 className='name'>{userName}</h3>
      </div>
      <div className='book'>
        <h3 className='name'>{bookTitle}</h3>
      </div>
      <div className='complete'>
        <button className='btn btn-complete'>Complete</button>
      </div>
      <div className='date'>
        <span>{date}</span>
        <span>-</span>
        <span>{deadLine}</span>
      </div>
    </div>
  );
};

export default BookRenterItem;

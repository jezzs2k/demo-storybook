import React from 'react';
import BookRenterItem from '../components/BookRenterItem';

export default {
  title: 'BookRenterItem',
  component: BookRenterItem,
};

export const BookItem = () => (
  <BookRenterItem
    bookRenter={{
      row: 1,
      userName: 'Vũ Thanh Hiếu',
      bookTitle: 'Đắc nhân tâm',
      date: '17/2/2020',
      deadLine: '17/5/2020',
    }}
  />
);

BookItem.story = {
  name: 'Book-Renter',
};

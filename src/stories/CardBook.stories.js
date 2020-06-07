import React from 'react';
import CardBook from '../components/CardBook';

export default {
  title: 'CardBook',
  component: CardBook,
};

export const BookItem = () => (
  <CardBook
    book={{
      image:
        'https://img.sosanhgia.com/images/500x0/7df05dcbea144b77a3dc41ed2e131af7/dac-nhan-tam-bi-quyet-de-thanh-cong.jpeg',
      name: 'Đắc nhân tâm',
      des:
        'Đứng thứ 5 trong Top 100 Sách tư duy - Kỹ năng sống bán chạy tuần này',
    }}
  />
);

BookItem.story = {
  name: 'Book',
};

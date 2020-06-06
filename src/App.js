import React from 'react';
import './App.css';

import BookRenderItem from './components/BookRenterItem';

const App = () => {
  return (
    <div className='App'>
      <BookRenderItem
        row={5}
        userName='Vũ Thanh Hiếu'
        bookTitle='Cuộc sống tối giản của người nhật'
        date='17/11/2000'
        deadLine='17/2/2001'
      />
    </div>
  );
};

export default App;

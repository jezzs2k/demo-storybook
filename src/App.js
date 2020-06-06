import React from 'react';
import './App.css';

import CardBook from './components/CardBook';

const App = () => {
  return (
    <div className='App'>
      <CardBook
        book={{
          image: 'https://picsum.photos/200/300',
          name: 'Hướng về tương lai',
          des:
            'con chim chào mào đi rồi con chim này hót đi, học đi em, Để tao nói cục cứt tao để trong bọc sau đó anh tặng mày, thứ hai, tao sút mày đau cả ngón chân, nhìn mày như là hoa hòng cần tao phải bón phân, trận này toàn cứt thôi em, đấu với may cho mày ăn cứt nhe em',
        }}
      />
    </div>
  );
};

export default App;

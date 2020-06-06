import React from 'react';
import './App.css';

import UserPage from './components/UserPage';

const App = () => {
  return (
    <div className='App'>
      <UserPage
        user={{
          logo: 'https://picsum.photos/seed/picsum/200/300',
          name: 'Vũ Thanh Hiếu',
          rate: 90,
          nameStore: 'HieuBook',
          products: 90,
        }}
      />
    </div>
  );
};

export default App;

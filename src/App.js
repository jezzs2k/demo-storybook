import React from 'react';
import './App.css';

import NavbarBookRenter from './components/NavbarBookRenter';

const App = () => {
  return (
    <div className='App'>
      <NavbarBookRenter amountCart={2} isAuthenticated={true} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

import './FormRegister.css';

const FormRegister = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    username: '',
    age: 0,
  });

  const [hoverDiv, setHover] = useState('');

  const { email, password, username, age } = state;

  const handleHover = (e) => {
    setHover(e.target.name);
  };

  const handleInputParams = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-register'>
      <h2 className='title'>REGISTER</h2>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          className={`form-control ${hoverDiv === 'username' ? 'hover' : ''}`}
          placeholder='Username...'
          value={username}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          className={`form-control ${hoverDiv === 'age' ? 'hover' : ''}`}
          value={age}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className={`form-control ${hoverDiv === 'email' ? 'hover' : ''}`}
          placeholder='Email...'
          value={email}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          className={`form-control ${hoverDiv === 'password' ? 'hover' : ''}`}
          placeholder='Password...'
          value={password}
          onChange={handleInputParams}
          onMouseMove={handleHover}
          onMouseLeave={handleHover}
        />
      </div>
      <button
        onMouseMove={handleHover}
        onMouseLeave={handleHover}
        className={`btn btn-register ${hoverDiv === '' ? 'hover' : ''}`}>
        Register
      </button>
    </div>
  );
};

export default FormRegister;

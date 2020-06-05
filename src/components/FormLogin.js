import React, { useState } from 'react';

import './FormLogin.css';

const FormLogin = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [hoverDiv, setHover] = useState('');

  const { email, password } = state;

  const handleHover = (e) => {
    setHover(e.target.name);
  };

  const handleInputParams = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-login'>
      <h2 className='title'>LOGIN</h2>
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
        className={`btn btn-login ${hoverDiv === '' ? 'hover' : ''}`}>
        Login
      </button>
    </div>
  );
};

export default FormLogin;

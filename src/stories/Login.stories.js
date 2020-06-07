import React from 'react';
import FormLogin from '../components/FormLogin';

export default {
  title: 'Auth',
  component: FormLogin,
};

export const Login = () => <FormLogin />;

Login.story = {
  name: 'Login',
};

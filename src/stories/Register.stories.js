import React from 'react';
import FormRegister from '../components/FormRegister';

export default {
  title: 'Auth',
  component: FormRegister,
};

export const Register = () => <FormRegister />;

Register.story = {
  name: 'Register',
};

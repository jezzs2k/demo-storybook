import React from 'react';

import NavbarBookRenter from '../components/NavbarBookRenter';

export default {
  title: 'Navbar',
  component: NavbarBookRenter,
};

export const Navbar = () => (
  <NavbarBookRenter amountCart={20} isAuthenticated={true} />
);

Navbar.story = {
  name: 'Menu',
};

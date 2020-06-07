import React from 'react';

import UserPage from '../components/UserPage';

export default {
  title: 'UserProfile',
  component: UserPage,
};

export const UserProfile = () => (
  <UserPage
    user={{
      logo:
        'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/78865058_2432076876920585_6337528251623145472_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_ohc=l4HwMHfrO3UAX8FEYRj&oh=37dd6eba614070b04ddbb3040dbe2d67&oe=5F052C7C',
      name: 'Vũ Thanh Hiếu',
      rate: 98,
      nameStore: 'jezzs Store',
      products: 300,
    }}
  />
);

UserProfile.story = {
  name: 'Profile',
};

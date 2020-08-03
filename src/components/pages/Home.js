import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import UserMap from '../users/UserMap';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <UserMap />
      <Users />
    </Fragment>
  );
};

export default Home;

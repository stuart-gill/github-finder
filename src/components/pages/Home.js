import React, { Fragment } from 'react';
import Search from '../users/Search';
import UserMap from '../users/UserMap';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <UserMap />
    </Fragment>
  );
};

export default Home;

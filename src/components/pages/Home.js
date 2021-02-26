import React, { Fragment } from 'react';
import Search from '../users/Search';
import CampsiteMap from '../users/CampsiteMap';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <CampsiteMap />
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from 'react';
import Search from '../campsites/Search';
import CampsiteMap from '../campsites/CampsiteMap';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <CampsiteMap />
    </Fragment>
  );
};

export default Home;

import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import Forecasts from '../forecasts/Forecasts';

const Campsite = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getCampsite, loading, campsite } = githubContext;

  // empty brackets at end of useEffect mimics "componentDidMount"... or "onMount" runs only once
  // have to use empty brackets or it just keeps running
  useEffect(() => {
    getCampsite(match.params.campsite_id);
    // eslint-disable-next-line
  }, []);
  console.log(campsite);
  const { name, lat, lng } = campsite;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className="card grid-1">
        <div className="all-center">
          <h1>{name}</h1>
          <p>
            Lat: {lat}, Lon: {lng}
          </p>
        </div>
        <Forecasts />
      </div>
    </Fragment>
  );
};

export default Campsite;

import React, { useContext } from 'react';
import ForecastItem from './ForecastItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Forecasts = () => {
  const githubContext = useContext(GithubContext);

  const { campsite, loading } = githubContext;

  return loading ? (
    <Spinner />
  ) : (
    <div style={forecastStyle}>
      {campsite.forecasts.map(
        (forecast) =>
          forecast.temperature > githubContext.minTemp && (
            <ForecastItem key={forecast.forecast_time} forecast={forecast} />
          )
      )}
    </div>
  );
};

const forecastStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
export default Forecasts;

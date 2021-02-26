import React from 'react';
import PropTypes from 'prop-types';

const ForecastItem = ({ forecast }) => {
  const dtOptions = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  return (
    <div className="card text-center">
      <h3>{forecast.short_forecast}</h3>
      <p>{forecast.temperature}</p>
      <p>
        {new Date(forecast.forecast_time).toLocaleString('en-US', dtOptions)}
      </p>
    </div>
  );
};

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastItem;

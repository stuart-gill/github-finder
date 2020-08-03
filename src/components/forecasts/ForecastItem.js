import React from 'react';
import PropTypes from 'prop-types';

// having ${login} in url Link is how we pass the user login to the User.js component
const ForecastItem = ({ forecast }) => {
  const dtOptions = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  return (
    <div className="card text-center">
      {/* <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      /> */}
      <h3>{forecast.short_forecast}</h3>
      <p>{forecast.temperature}</p>
      <p>
        {new Date(forecast.forecast_time).toLocaleString('en-US', dtOptions)}
      </p>
      {/* <div>
        <Link
          to={`/campsite/${campsite.id}`}
          className="btn btn-dark btn-sm my-1">
          See More
        </Link>
      </div> */}
    </div>
  );
};

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastItem;

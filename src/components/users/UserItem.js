import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// having ${login} in url Link is how we pass the user login to the User.js component
const UserItem = ({ campsite: { campsite, duration } }) => {
  // const travelTime = (duration_value / 3600).toFixed(2);
  return (
    <div className="card text-center">
      {/* <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      /> */}
      <h3>{campsite.name}</h3>
      <p>{duration.text}</p>
      <div>
        <Link
          to={`/campsite/${campsite.id}`}
          className="btn btn-dark btn-sm my-1">
          See More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  campsite: PropTypes.object.isRequired,
};

export default UserItem;

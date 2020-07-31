import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// having ${login} in url Link is how we pass the user login to the User.js component
const UserItem = ({ user: { campsite, duration } }) => {
  return (
    <div className="card text-center">
      {/* <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      /> */}
      <h3>{campsite.name}</h3>
      <p>{duration}</p>
      {/* <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          See More
        </Link>
      </div> */}
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

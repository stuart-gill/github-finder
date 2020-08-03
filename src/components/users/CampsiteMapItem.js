import React from 'react';
import PropTypes from 'prop-types';

// having ${login} in url Link is how we pass the user login to the User.js component
const CampsiteMapItem = ({ campsite }) => {
  return (
    <div>
      <p>{campsite.campsite.name}</p>
      <p>{campsite.duration}</p>
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

CampsiteMapItem.propTypes = {
  campsite: PropTypes.object.isRequired,
};

export default CampsiteMapItem;

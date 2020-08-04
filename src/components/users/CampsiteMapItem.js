import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
// import './map.css';

const CampsiteMapItem = ({ campsite }) => {
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      {/* <p className="pin-text">{campsite.campsite.name}</p>
      <p className="pin-text">{(campsite.duration / 3600).toFixed(2)} hours</p> */}
    </div>
  );
};

CampsiteMapItem.propTypes = {
  campsite: PropTypes.object.isRequired,
};

export default CampsiteMapItem;

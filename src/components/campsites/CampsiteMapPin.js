import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import CampsiteInfoWindow from './CampsiteInfoWindow';
// import './map.css';

const CampsiteMapPin = ({ campsite }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      {show && <CampsiteInfoWindow campsite={campsite} />}

      {/* <p className="pin-text">{campsite.campsite.name}</p>
      <p className="pin-text">{(campsite.duration / 3600).toFixed(2)} hours</p> */}
    </div>
  );
};

CampsiteMapPin.propTypes = {
  campsite: PropTypes.object.isRequired,
};

export default CampsiteMapPin;

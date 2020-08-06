import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CampsiteInfoWindow = ({ campsite }) => {
  const infoWindowStyle = {
    position: 'relative',
    bottom: 15,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>{campsite.campsite.name}</div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {campsite.duration.text} travel time
      </div>
    </div>
  );
};

export default CampsiteInfoWindow;

//   return (
//     <div style={infoWindowStyle}>
//       <div style={{ fontSize: 16 }}>{campsite.name}</div>
//       <div style={{ fontSize: 14 }}>
//         <span style={{ color: 'grey' }}>{campsite.duration} </span>
//         <span style={{ color: 'orange' }}>
//           {String.fromCharCode(9733).repeat(Math.floor(campsite.rating))}
//         </span>
//         <span style={{ color: 'lightgrey' }}>
//           {String.fromCharCode(9733).repeat(5 - Math.floor(campsite.rating))}
//         </span>
//       </div>
//       <div style={{ fontSize: 14, color: 'grey' }}>{campsite.types[0]}</div>
//       <div style={{ fontSize: 14, color: 'grey' }}>
//         {'$'.repeat(campsite.price_level)}
//       </div>
//       <div style={{ fontSize: 14, color: 'green' }}>
//         {campsite.opening_hours.open_now ? 'Open' : 'Closed'}
//       </div>
//     </div>
//   );

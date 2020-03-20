import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.styling}`}>
        <i className="fas fa-info-circle"> {alert.alertText}</i>
      </div>
    )
  );
};

export default Alert;

import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.styling}`}>
        <i className="fas fa-info-circle"> {alert.alertText}</i>
      </div>
    )
  );
};

export default Alert;

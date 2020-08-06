import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [zipcode, setZipcode] = useState('');
  const [willingTravelTime, setWillingTravelTime] = useState('');
  const [minTemp, setMinTemp] = useState('');

  const onZipChange = (e) => {
    setZipcode(e.target.value);
  };

  const onWillingTravelTimeChange = (e) => {
    setWillingTravelTime(e.target.value);
  };

  const onMinTempChange = (e) => {
    setMinTemp(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (zipcode === '') {
      alertContext.setAlert('please enter search zipcode', 'light');
    } else if (willingTravelTime === '') {
      alertContext.setAlert('please enter search travel time', 'light');
    } else {
      githubContext.setMinTemp(minTemp);
      githubContext.searchCampsites(zipcode, willingTravelTime);
      // setZipcode('');
      // setWillingTravelTime('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="zipcode"
          placeholder="zipcode"
          value={zipcode}
          onChange={onZipChange}
        />
        <input
          type="text"
          name="willingTravelTime"
          placeholder="willing travel time"
          value={willingTravelTime}
          onChange={onWillingTravelTimeChange}
        />
        <input
          type="text"
          name="minTemp"
          placeholder="minimum acceptable temperature"
          value={minTemp}
          onChange={onMinTempChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.campsites.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

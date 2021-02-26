import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_CAMPSITES,
  SET_LOADING,
  CLEAR_CAMPSITES,
  GET_CAMPSITE,
  SET_MIN_TEMP,
} from '../types';

let githubClientId;
let githubClientSecret;

// if API is on Digital Ocean
const URL = process.env.REACT_APP_DIGITAL_OCEAN_IP;

// if API is deployed on Heroku
// const URL = 'https://sunny65-api.herokuapp.com';

// if running locally
// const URL = 'http://127.0.0.1:5000';

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret = process.env.CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    campsites: [],
    acceptable_campsites: [],
    campsite: { forecasts: [] },
    loading: false,
    minTemp: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search campsite
  const searchCampsites = async (zipcode, willingTravelTime) => {
    setLoading();

    const res = await axios.get(`${URL}/traveltimes/${zipcode}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        willing_travel_time: willingTravelTime,
      },
    });
    console.log(res.data.travel_times);

    dispatch({
      type: SEARCH_CAMPSITES,
      payload: res.data.travel_times,
    });
  };

  // Get single campsite
  const getCampsite = async (campsiteId) => {
    setLoading();
    console.log('get campsite ran');

    const res = await axios.get(`${URL}/campsite`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        campsite_id: campsiteId,
      },
    });

    console.log(res.data);

    dispatch({
      type: GET_CAMPSITE,
      payload: res.data,
    });
  };

  //Clear Users
  const clearCampsites = () => dispatch({ type: CLEAR_CAMPSITES });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set min temp
  const setMinTemp = (input) => {
    dispatch({ type: SET_MIN_TEMP, payload: input });
  };

  //   whole application is wrapped in this provider
  return (
    <GithubContext.Provider
      value={{
        campsites: state.campsites,
        campsite: state.campsite,
        loading: state.loading,
        minTemp: state.minTemp,
        searchCampsites,
        clearCampsites,
        getCampsite,
        setMinTemp,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

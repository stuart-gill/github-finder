import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_CAMPSITES,
  SET_LOADING,
  CLEAR_CAMPSITES,
  GET_CAMPSITE,
  GET_REPOS,
  SET_MIN_TEMP,
} from '../types';

let githubClientId;
let githubClientSecret;

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
    repos: [],
    loading: false,
    minTemp: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search campsite
  const searchCampsites = async (zipcode, willingTravelTime) => {
    setLoading();

    const res = await axios.get(
      `http://127.0.0.1:5000/traveltimes/${zipcode}?willing_travel_time=${willingTravelTime}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    console.log(res.data.travel_times);

    dispatch({
      type: SEARCH_CAMPSITES,
      payload: res.data.travel_times,
    });
  };

  // Get single campsite
  const getCampsite = async (campsite_id) => {
    setLoading();
    console.log('get campsite ran');

    const res = await axios.get(
      `http://127.0.0.1:5000/campsite?campsite_id=${campsite_id}`
    );

    console.log(res.data);

    dispatch({
      type: GET_CAMPSITE,
      payload: res.data,
    });
  };

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
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
        repos: state.repos,
        loading: state.loading,
        minTemp: state.minTemp,
        searchCampsites,
        clearCampsites,
        getCampsite,
        getUserRepos,
        setMinTemp,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

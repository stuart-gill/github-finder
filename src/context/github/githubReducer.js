import {
  SEARCH_CAMPSITES,
  SET_LOADING,
  CLEAR_CAMPSITES,
  GET_CAMPSITE,
  SET_MIN_TEMP,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_MIN_TEMP:
      return {
        ...state,
        minTemp: action.payload,
      };
    case CLEAR_CAMPSITES:
      return {
        ...state,
        campsites: [],
        loading: false,
      };
    case GET_CAMPSITE:
      return {
        ...state,
        campsite: action.payload,
        loading: false,
      };
    case SEARCH_CAMPSITES:
      return {
        ...state,
        campsites: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

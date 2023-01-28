//Write the ActionCreator functions here

import {
  GET_SHOES_DATA_FAILURE,
  GET_SHOES_DATA_REQUEST,
  GET_SHOES_DATA_SUCCESS,
} from "./actionType";

export const shoesDataRequest = () => {
  return {
    type: GET_SHOES_DATA_REQUEST,
  };
};

export const shoesDataSuccess = (payload) => {
  return {
    type: GET_SHOES_DATA_SUCCESS,
    payload,
  };
};

export const shoesDataFailure = () => {
  return {
    type: GET_SHOES_DATA_FAILURE,
  };
};

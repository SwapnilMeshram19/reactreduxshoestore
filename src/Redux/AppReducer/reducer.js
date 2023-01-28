import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionType";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  shoes: [],
  isLoading: true,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  switch (type) {
    case GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SHOES_DATA_SUCCESS:
      return {
        ...state,
        shoes: payload,
        isLoading:false
      };

    case GET_SHOES_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export { reducer };

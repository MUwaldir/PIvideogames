// REDUCER

import { GET_DATABD, GET_DATANAME, GET_VIDEOGAME } from "../actions";

const initialState = {
  VideoGames: [],
  dataName: [],
  dataVideogames: [],
  dataBD: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAME:
      return {
        ...state,
        VideoGames: action.payload,
        dataVideogames: action.payload,
      };

    case GET_DATANAME:
      return { ...state, dataName: action.payload };

    case GET_DATABD:
      return { ...state, dataBD: action.payload };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

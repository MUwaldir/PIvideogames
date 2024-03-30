// REDUCER

import {
  DELETE_FILTEREDDATAGENRE,
  FILTER_GENRE,
  FILTER_NOMBRE,
  GET_DATABD,
  GET_DATANAME,
  GET_DETAILID,
  GET_GENRES,
  GET_VIDEOGAME,
} from "../actions";

const initialState = {
  VideoGames: [],
  dataName: [],
  genres: [],
  dataVideogames: [],
  dataBD: [],
  selectVideogame: null,
  filterVidegameByGenre: null,
  genrefilter:null,
  filterName: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAME:
      return {
        ...state,
        VideoGames: action.payload,
        dataVideogames: action.payload,
      };

    case GET_GENRES:
      return { ...state, genres: action.payload };

    case GET_DATANAME:
      return { ...state, dataName: action.payload };

    case GET_DATABD:
      return { ...state, dataBD: action.payload };

    case GET_DETAILID:
      console.log(action.payload);
      return { ...state, selectVideogame: action.payload };
    case FILTER_GENRE:
      const dataFiltrada = state.dataVideogames.filter((videogame) =>
        videogame.genres.some((g) => g.nombre === action.payload)
      );
      console.log(action.payload);
      console.log(dataFiltrada);
      return { ...state, filterVidegameByGenre: dataFiltrada , genrefilter: action.payload };
    case DELETE_FILTEREDDATAGENRE:
      return { ...state, filterVidegameByGenre: null,genrefilter:null };

      case FILTER_NOMBRE:
        const filterName = state.dataVideogames.filter((videogame) => videogame.nombre.includes(action.payload));

        return { ...state, filterName: filterName  };
  
      
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

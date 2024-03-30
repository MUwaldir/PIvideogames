import axios from "axios";

export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const SORT_VIDEOGAMES = "SORT_VIDEOGAMES";
export const GET_DATANAME = "GET _DATANAME";
export const GET_DATABD = "GET_DATABD";
export const GET_DETAILID = "GET_DETAILID";
export const FILTER_GENRE = "FILTER_GENRE";
export const GET_GENRES = "GET_GENRES";
export const DELETE_FILTEREDDATAGENRE = "DELETE_FILTEREDDATAGENRE";
export const FILTER_NOMBRE = "FILTER_NOMBRE";







// codgo  async await
export const getVideogame = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/videogames");
      dispatch({
        type: GET_VIDEOGAME,
        payload: data,
      });
    } catch (error) {
      throw new error(error.message);
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/genres");
      dispatch({
        type: GET_GENRES,
        payload: data,
      });
    } catch (error) {
      throw new error(error.message);
    }
  };
}

export const getdataName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/videogame/name?nombre=${name}`
      );
      dispatch({
        type: GET_DATANAME,
        payload: data,
      });
    } catch (error) {
      throw new error(error.message);
    }
  };
};

export const getDataBD = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/videogames/databd"
      );

      const formattedData = data.map((ge) => ({
        id: ge.id,
        nombre: ge.nombre,
        descripcion: ge.descripcion,
        fecha_de_lanzamiento: ge.fecha_de_lanzamiento,
        idApi: ge.idApi ? ge.idApi : ge.id,
        imagen: ge.imagen,
        plataformas: ge.plataformas,
        rating: ge.rating,
        genre: ge.genres.map((gen) => gen.nombre),
      }));

      dispatch({
        type: GET_DATABD,
        payload: formattedData,
      });
    } catch (error) {
      throw new error(error.message);
    }
  };
};

export const getDetailID = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/videogames/${id}`
      );
      // console.log(data)
      dispatch({
        type: GET_DETAILID,
        payload: data[0],
      });
    } catch (error) {
      throw new error(error.message);
    }
  };
};

export const filterGenre = (genre) => (dispatch) => {

  return dispatch ( {
      type: FILTER_GENRE,
      payload:genre
  })

}

export const DeleteFilteredDataGenre =  () => (dispatch) => {
  return dispatch ( {
    type: DELETE_FILTEREDDATAGENRE,
   
})
}

export const filterByNombre =  (nombre) => (dispatch) => {
  return dispatch ( {
    type: FILTER_NOMBRE,
    payload:nombre
   
})
}
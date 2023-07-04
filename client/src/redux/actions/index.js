import axios from "axios";

export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const SORT_VIDEOGAMES = "SORT_VIDEOGAMES";
export const GET_DATANAME = "GET _DATANAME";
export const GET_DATABD = "GET_DATABD";
export const GET_DETAILID = "GET_DETAILID";

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
      dispatch({
        type: GET_DETAILID,
        payload: data,
      });
    } catch (error) {
      throw new error(error.message);
    }
  };
};

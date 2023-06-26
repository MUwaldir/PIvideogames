import axios from "axios";

export const GET_VIDEOGAME = 'GET_VIDEOGAME';
// export const ADD_VIDEOGAME = 'ADD_VIDEOGAME';
// export const REMOVE_VIDEOGAME = 'REMOVE_VIDEOGAME';

// const URL = 'http://localhost:3001/videogames';

// codgo  async await
export const getVideogame = () => {
 return async (dispatch) => {
  try {
    const {data} = await axios.get('http://localhost:3001/videogames');
    dispatch({
      type: GET_VIDEOGAME,
      payload: data,
   });
  } catch (error) {
    throw new error(error.message)
  }
 }
}


// export const addVideogame = (videogame) => {
  
//   return async (dispatch) => {
//     try {
      
//       const {data} = await axios.post(URL, videogame);
       
//           dispatch({
//              type: ADD_VIDEOGAME,
//              payload: data,
//           });

//     } catch (error) {
//       throw new error(error.message)
//     }
  
//   };
// };



// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: REMOVE_FAV,
//            payload: data,
//      });
//      });
//   };
  
// };





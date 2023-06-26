// REDUCER

import {  GET_VIDEOGAME } from "../actions";

/* Importa las action-types aquí. */

const initialState = {
    VideoGames: [],
    myFavorites: [],
    figures:[]
};


const rootReducer = (state = initialState, action) => {
   switch (
      action.type
      
   ) {

         case GET_VIDEOGAME:
            
            return { ...state, VideoGames: action.payload };
        
            

        default:
            return {
                ...state
            }

   }
};

export default rootReducer;

import { ADD_FAV, DELETE_FAV, GET_FAV } from "../action/favorite";

const INITIAL_STATE = {
  favMovies: [],
};

export default function favoriteRoducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAV:
      const found = state.favMovies.find(
        (item) => item.id === action.payload.id
      );
      if (!found) {
          return { ...state, favMovies: [...state.favMovies, action.payload] };
      }
      break ;
    case DELETE_FAV:
      const newArr = state.favMovies.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, favMovies: [...newArr] };
     case GET_FAV:
        const specificMovie = state.favMovies.find(
            (item) => item.id === action.payload.id
          );
          return {
              ...state,specificMovie:specificMovie
          }
    default:
      return state;
  }
}

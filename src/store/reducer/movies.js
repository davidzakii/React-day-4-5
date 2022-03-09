import {
    GET_MOVIES_LIST,
    GET_MOVIE_DETAIL,
  } from "../action/movies";
  
  const INITIAL_STATE = {
    moviesList: [],
    oneMovie: {},
  };
  
  export default function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_MOVIES_LIST:
        return {
          ...state,
          moviesList: [...action.payload],
        };
      case GET_MOVIE_DETAIL:
        return {
          ...state,
          oneMovie: action.payload,
        };
      default:
        return state;
    }
  }
  
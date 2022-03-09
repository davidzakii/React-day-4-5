import { combineReducers } from "redux";
import authReducer from "./auth";
import favoriteRoducer from "./favorite";
import languageReducer from "./languge";
import loaderReducer from "./loder";
import moviesReducer from "./movies";

export default combineReducers({
    auth : authReducer,
    language: languageReducer,
    laoder : loaderReducer,
    fav: favoriteRoducer,
    movie: moviesReducer
})
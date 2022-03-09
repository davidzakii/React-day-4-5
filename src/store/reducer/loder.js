import { SET_LOADER } from "../action/loder";

const INITIAL_STATE = {
    loader: false,
  };
  
  export default function loaderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SET_LOADER:
        return {
          loader: action.payload,
        };
      default:
        return state;
    }
  }
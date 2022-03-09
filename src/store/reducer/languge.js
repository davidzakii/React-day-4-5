import { SET_LANGUAGE } from "../action/language";

const INITIAL_STATE = {
    lang: "en",
  };
  
  export default function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SET_LANGUAGE:
        return {
          lang: action.payload,
        };
      default:
        return state;
    }
  }
  
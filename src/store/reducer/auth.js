import { SET_AUTH, SET_USER_DETAILS } from "../action/auth";

const INITIAL_STATE = {
  isAuth: false,
  userDatails: {},
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        isAuth: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        userDatails: action.payload,
      };
    default:
      return state;
  }
}

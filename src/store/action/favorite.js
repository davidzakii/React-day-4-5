export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const GET_FAV = "GET_FAV";
export const setFavAction = (payload) => {
  return {
    type: ADD_FAV,
    payload,
  };
};
export const deleteFavaction = (payload) => {
  return {
    type: DELETE_FAV,
    payload,
  };
};
export const getFavAction = (payload) => {
  return {
    type: GET_FAV,
    payload,
  };
};

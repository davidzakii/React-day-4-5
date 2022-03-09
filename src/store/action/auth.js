export const SET_AUTH = "SET_AUTH";
export const SET_USER_DETAILS = "SET_USER_DETAILS";

export const authAction = (payload) => {
  return {
    type: SET_AUTH,
    payload,
  };
};
export const setUserDatails = (payload)=>{
    return{
        type : SET_USER_DETAILS,
        payload
    }
}
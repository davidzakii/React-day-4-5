import { axiosInstance } from "../../network/axioscongig";
export const GET_MOVIES_LIST = "GET_MOVIES_LIST";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";

export const getMoviesList =
  (query = {}) =>
  (dispatch) => {
    return axiosInstance
      .get("/movie/popular", { params: { ...query } })
      .then((res) => {
        dispatch({
          type: GET_MOVIES_LIST,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getMoviesDetail =
  (id, query = {}) =>
  (dispatch) => {
    return axiosInstance
      .get(`/movie/${id}`, { params: { ...query } })
      .then((res) => {
        const {
          id,
          original_title,
          poster_path,
          overview,
          vote_average,
          release_date,
        } = res.data;
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: {
            id,
            original_title,
            poster_path,
            overview,
            vote_average,
            release_date,
          },
        });
      })
      .catch((err) => console.log(err.message));
  };

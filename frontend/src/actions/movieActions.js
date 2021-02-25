import axios from "axios";
import {
  MOVIES_LIST_FAILURE,
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAILURE,
} from "./../constants/movieConstants";

export const listMovies = (keyword = "") => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_LIST_REQUEST });
    const { data } = await axios.get(`api/movies?keyword=${keyword}`);
    const { movies } = data;
    dispatch({ type: MOVIES_LIST_SUCCESS, payload: movies });
  } catch (error) {
    dispatch({
      type: MOVIES_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_BY_ID_REQUEST });
    const { data } = await axios.get(`../api/movies/${id}`);
    dispatch({ type: GET_MOVIE_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

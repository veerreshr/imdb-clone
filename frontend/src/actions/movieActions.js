import axios from "axios";
import {
  MOVIES_LIST_FAILURE,
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAILURE,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
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

export const updateMovie = (id, movie, history) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_MOVIE_REQUEST });
    const { data } = await axios.put(`../api/movies/${id}`, movie);
    dispatch({ type: UPDATE_MOVIE_SUCCESS, payload: data.updatedMovie });
    history.push("/");
  } catch (error) {
    dispatch({
      type: UPDATE_MOVIE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const addMovie = (movie, history) => async (dispatch) => {
  try {
    dispatch({ type: ADD_MOVIE_REQUEST });
    const { data } = await axios.post(`/api/movies`, movie);
    dispatch({ type: ADD_MOVIE_SUCCESS, payload: data.createdMovie });
    history.push("/");
  } catch (error) {
    dispatch({
      type: ADD_MOVIE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

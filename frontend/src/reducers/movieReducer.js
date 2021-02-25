import {
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAILURE,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_FAILURE,
  GET_MOVIE_BY_ID_SUCCESS,
} from "./../constants/movieConstants";

export const moviesListReducer = (state = { moviesList: [] }, action) => {
  switch (action.type) {
    case MOVIES_LIST_REQUEST:
      return { ...state, loading: true, moviesList: [] };
    case MOVIES_LIST_SUCCESS:
      return { ...state, loading: false, moviesList: action.payload };
    case MOVIES_LIST_FAILURE:
      return { loading: false, error: action.payload, moviesList: [] };
    case GET_MOVIE_BY_ID_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIE_BY_ID_SUCCESS:
      return { ...state, loading: false, currentMovie: action.payload };
    case GET_MOVIE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

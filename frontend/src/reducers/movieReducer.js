import {
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAILURE,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_FAILURE,
  GET_MOVIE_BY_ID_SUCCESS,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
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
    case UPDATE_MOVIE_REQUEST:
      return { ...state, loading: true };
    case UPDATE_MOVIE_SUCCESS:
      return { ...state, loading: false, updatedMovie: action.payload };
    case UPDATE_MOVIE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_MOVIE_REQUEST:
      return { ...state, loading: true };
    case ADD_MOVIE_SUCCESS:
      return { ...state, loading: false, createdMovie: action.payload };
    case ADD_MOVIE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  ACTORS_LIST_REQUEST,
  ACTORS_LIST_SUCCESS,
  ACTORS_LIST_FAILURE,
  ACTORS_NAME_LIST_REQUEST,
  ACTORS_NAME_LIST_SUCCESS,
  ACTORS_NAME_LIST_FAILURE,
  CREATE_ACTOR_REQUEST,
  CREATE_ACTOR_SUCCESS,
  CREATE_ACTOR_FAILURE,
  ACTORS_NAME_APPEND,
} from "./../constants/actorConstants";

export const actorsListReducer = (
  state = { actorsList: [], actorsNameList: [], newlyCreatedActor: {} },
  action
) => {
  switch (action.type) {
    case ACTORS_LIST_REQUEST:
      return { ...state, loading: true, actorsList: [] };
    case ACTORS_LIST_SUCCESS:
      return { ...state, loading: false, actorsList: action.payload };
    case ACTORS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        actorsList: [],
      };
    case ACTORS_NAME_LIST_REQUEST:
      return { ...state, loading: true, actorsNameList: [] };
    case ACTORS_NAME_LIST_SUCCESS:
      return { ...state, loading: false, actorsNameList: action.payload };
    case ACTORS_NAME_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        actorsNameList: [],
      };
    case CREATE_ACTOR_REQUEST:
      return { ...state, loading: true };
    case CREATE_ACTOR_SUCCESS:
      return { ...state, loading: false, newlyCreatedActor: action.payload };
    case CREATE_ACTOR_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ACTORS_NAME_APPEND:
      return {
        ...state,
        actorsNameList: [...state.actorsNameList, ...action.payload],
      };
    default:
      return state;
  }
};

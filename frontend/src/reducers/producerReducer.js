import {
  PRODUCERS_LIST_REQUEST,
  PRODUCERS_LIST_SUCCESS,
  PRODUCERS_LIST_FAILURE,
  PRODUCERS_NAME_LIST_REQUEST,
  PRODUCERS_NAME_LIST_SUCCESS,
  PRODUCERS_NAME_LIST_FAILURE,
  CREATE_PRODUCER_REQUEST,
  CREATE_PRODUCER_SUCCESS,
  CREATE_PRODUCER_FAILURE,
  PRODUCERS_NAME_APPEND,
} from "./../constants/producerConstants";

export const producersListReducer = (
  state = {
    producersList: [],
    producersNameList: [],
    newlyCreatedProducer: {},
  },
  action
) => {
  switch (action.type) {
    case PRODUCERS_LIST_REQUEST:
      return { ...state, loading: true, producersList: [] };
    case PRODUCERS_LIST_SUCCESS:
      return { ...state, loading: false, producersList: action.payload };
    case PRODUCERS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        producersList: [],
      };
    case PRODUCERS_NAME_LIST_REQUEST:
      return { ...state, loading: true, producersNameList: [] };
    case PRODUCERS_NAME_LIST_SUCCESS:
      return { ...state, loading: false, producersNameList: action.payload };
    case PRODUCERS_NAME_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        producersNameList: [],
      };
    case CREATE_PRODUCER_REQUEST:
      return { ...state, loading: true };
    case CREATE_PRODUCER_SUCCESS:
      return { ...state, loading: false, newlyCreatedProducer: action.payload };
    case CREATE_PRODUCER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case PRODUCERS_NAME_APPEND:
      return {
        ...state,
        producersNameList: [...state.producersNameList, ...action.payload],
      };
    default:
      return state;
  }
};

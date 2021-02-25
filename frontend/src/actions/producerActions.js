import axios from "axios";
import {
  PRODUCERS_LIST_FAILURE,
  PRODUCERS_LIST_REQUEST,
  PRODUCERS_LIST_SUCCESS,
  PRODUCERS_NAME_LIST_FAILURE,
  PRODUCERS_NAME_LIST_REQUEST,
  PRODUCERS_NAME_LIST_SUCCESS,
  CREATE_PRODUCER_REQUEST,
  CREATE_PRODUCER_SUCCESS,
  CREATE_PRODUCER_FAILURE,
  PRODUCERS_NAME_APPEND,
} from "./../constants/producerConstants";

export const listProducers = (keyword = "") => async (dispatch) => {
  try {
    dispatch({ type: PRODUCERS_LIST_REQUEST });
    const { data } = await axios.get(`api/producers?keyword=${keyword}`);
    const { producers } = data;
    dispatch({ type: PRODUCERS_LIST_SUCCESS, payload: producers });
  } catch (error) {
    dispatch({
      type: PRODUCERS_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllProducersNames = (urlPrefix) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCERS_NAME_LIST_REQUEST });
    const { data } = await axios.get(`${urlPrefix}api/producers/nameList`);
    const { allProducerNames } = data;
    dispatch({ type: PRODUCERS_NAME_LIST_SUCCESS, payload: allProducerNames });
  } catch (error) {
    dispatch({
      type: PRODUCERS_NAME_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProducer = (producer) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCER_REQUEST });
    let { data } = await axios.post("/api/producers");
    const id = data["createdProducer"]["_id"];
    let updated = await axios.put(`/api/producers/${id}`, producer);
    dispatch({ type: CREATE_PRODUCER_SUCCESS, payload: updated.data });
    const name = updated["data"];
    dispatch({
      type: PRODUCERS_NAME_APPEND,
      payload: [name.updatedProducer.name],
    });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

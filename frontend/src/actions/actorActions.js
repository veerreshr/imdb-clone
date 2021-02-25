import axios from "axios";
import {
  ACTORS_LIST_FAILURE,
  ACTORS_LIST_REQUEST,
  ACTORS_LIST_SUCCESS,
  ACTORS_NAME_LIST_REQUEST,
  ACTORS_NAME_LIST_SUCCESS,
  ACTORS_NAME_LIST_FAILURE,
  CREATE_ACTOR_REQUEST,
  CREATE_ACTOR_FAILURE,
  CREATE_ACTOR_SUCCESS,
  ACTORS_NAME_APPEND,
} from "./../constants/actorConstants";

export const listActors = (keyword = "") => async (dispatch) => {
  try {
    dispatch({ type: ACTORS_LIST_REQUEST });
    const { data } = await axios.get(`api/actors?keyword=${keyword}`);
    const { actors } = data;
    dispatch({ type: ACTORS_LIST_SUCCESS, payload: actors });
  } catch (error) {
    dispatch({
      type: ACTORS_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAllActorsNames = (urlPrefix) => async (dispatch) => {
  try {
    dispatch({ type: ACTORS_NAME_LIST_REQUEST });
    const { data } = await axios.get(`${urlPrefix}api/actors/nameList`);
    const { allActorNames } = data;
    dispatch({ type: ACTORS_NAME_LIST_SUCCESS, payload: allActorNames });
  } catch (error) {
    dispatch({
      type: ACTORS_NAME_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createActor = (actor) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ACTOR_REQUEST });
    let { data } = await axios.post("/api/actors");
    const id = data["createdActor"]["_id"];
    let updated = await axios.put(`/api/actors/${id}`, actor);
    dispatch({ type: CREATE_ACTOR_SUCCESS, payload: updated.data });
    const name = updated["data"];
    dispatch({ type: ACTORS_NAME_APPEND, payload: [name.updatedActor.name] });
  } catch (error) {
    dispatch({
      type: CREATE_ACTOR_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

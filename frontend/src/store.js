import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesListReducer } from "./reducers/movieReducer";
import { actorsListReducer } from "./reducers/actorReducer";
import { producersListReducer } from "./reducers/producerReducer";

const reducer = combineReducers({
  movies: moviesListReducer,
  actors: actorsListReducer,
  producers: producersListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { currentLocation } from "./reducers/currentLocation";
import { locationLog } from "./reducers/locationLog";
import locationLogMiddleware from "./middleware";

export const rootReducer = combineReducers({
  currentLocation,
  locationLog
});

const middlewares = [thunk, locationLogMiddleware];

export const store = compose(applyMiddleware(...middlewares))(createStore)(
  rootReducer
);

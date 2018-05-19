export default store => next => action => {
  if (action.type === "LOG_LOCATION") {
    store.dispatch({
      type: "ADD_LOCATION_TO_LOG",
      timestamp: action.timestamp,
      latitude: action.latitude,
      longitude: action.longitude
    });
  }

  return next(action);
};

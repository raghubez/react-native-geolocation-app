export const locationLog = (
  state = {
    locationlog: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_LOCATION_TO_LOG":
      return {
        ...state,
        locationlog: [
          ...state.locationlog,
          {
            timestamp: action.timestamp,
            latitude: action.latitude,
            longitude: action.longitude
          }
        ]
      };
    default:
      return state;
  }
};

export const currentLocation = (
  state = {
    timestamp: null,
    latitude: null,
    longitude: null
  },
  action
) => {
  switch (action.type) {
    case "SHOW_CURRENT_LOCATION":
      return {
        ...state,
        timestamp: action.timestamp.toString(),
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return state;
  }
};

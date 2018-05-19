export const showCurrentLocation = (timestamp, latitude, longitude) => ({
  type: "SHOW_CURRENT_LOCATION",
  timestamp,
  latitude,
  longitude
});

export const logLocation = (timestamp, latitude, longitude) => ({
  type: "LOG_LOCATION",
  timestamp,
  latitude,
  longitude
});

export const addLocationToLog = (timestamp, latitude, longitude) => ({
  type: "ADD_LOCATION_TO_LOG",
  timestamp,
  latitude,
  longitude
});

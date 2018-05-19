import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import { connect } from "react-redux";

import { showCurrentLocation, logLocation } from "../actions";

class CurrentLocation extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.props.showCurrentLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      error => alert(JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );

    this.watchId = navigator.geolocation.watchPosition(
      lastPosition => {
        this.props.showCurrentLocation(
          lastPosition.coords.latitude,
          lastPosition.coords.longitude
        );
      },
      error => alert(JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 1
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  render() {
    const {
      timestamp,
      latitude,
      longitude,
      logLocation,
      locationlog
    } = this.props;

    return (
      <View style={{ flexGrow: 1, alignItems: "center", top: 40 }}>
        <Text>
          {timestamp} : {latitude} {longitude}
        </Text>
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={() => logLocation(timestamp, latitude, longitude)}
        >
          <Text style={styles.buttonText}>Log Location</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 20
  },
  button: {
    backgroundColor: "#ff9900",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    borderRadius: 3
  },
  buttonText: {
    color: "white"
  }
});

const mapStateToProps = state => ({
  timestamp: state.currentLocation.timestamp,
  latitude: state.currentLocation.latitude,
  longitude: state.currentLocation.longitude,
  locationlog: state.currentLocation.locationlog
});

const mapDispatchToProps = dispatch => {
  return {
    showCurrentLocation: (latitude, longitude) => {
      dispatch(showCurrentLocation(new Date(), latitude, longitude));
    },
    logLocation: (timeStamp, latitude, longitude) => {
      dispatch(logLocation(timeStamp, latitude, longitude));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);

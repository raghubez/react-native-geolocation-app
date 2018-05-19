import React from "react";
import { View } from "react-native";

import CurrentLocation from "./components/CurrentLocation";
import LocationLog from "./components/LocationLog";

class AppContainer extends React.Component {
  render() {
    return (
      <View>
        <CurrentLocation />
        <LocationLog />
      </View>
    );
  }
}

export default AppContainer;

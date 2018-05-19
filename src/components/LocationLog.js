import React from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

class LocationLog extends React.Component {
  render() {
    const { locationlog } = this.props;

    return (
      <View style={{ flexGrow: 1, alignItems: "center", top: 40 }}>
        {locationlog.map((location, index) => {
          return (
            <Text key={index}>
              {location.timestamp} : {location.latitude} {location.longitude}
            </Text>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  locationlog: state.locationLog.locationlog
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationLog);

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
import { connect, Provider } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getCourts } from '../store/allCourts';

// class CourtMap extends Component {
//   render() {
//     return (
//       <MapView
//         style={{
//           flex: 1
//         }}
//         initialRegion={{
//           latitude: 40.7831,
//           longitude: -73.9851,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//       />
//     );
//   }
// }

const CourtMap = () => {
  return (
    <MapView
      style={{
        flex: 1
      }}
      initialRegion={{
        latitude: 40.7831,
        longitude: -73.9851,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  );
};

const mapSTP = state => {
  return {
    courts: state.allCourts.courts
  };
};

const mapDTP = dispatch => {
  return {
    getCourts: () => dispatch(getCourts())
  };
};

export default connect(
  mapSTP,
  mapDTP
)(CourtMap);

// export default CourtMap;

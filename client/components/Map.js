import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
import { connect, Provider } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getCourts, getUser } from '../store/allCourts';

class CourtMap extends Component {
  componentDidMount() {
    this.props.getCourts();
  }

  render() {
    const allCourts = this.props.courts;
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
      >
        {allCourts.map(court => (
          <Marker 
            key={court.id}
            title={court.name}
            description={`Hoopers at this court: ${this.props.user.username}`}
            coordinate={{
              latitude: Number(court.coordinates[0]),
              longitude: Number(court.coordinates[1])
            }}
          >
            <Image
              source={require('./court-icon.png')}
              resizeMode='contain'
            />
          </Marker>
        ))}
      </MapView>
    );
  }
}

// const CourtMap = () => {
//   return (
//     <MapView
//       style={{
//         flex: 1
//       }}
//       initialRegion={{
//         latitude: 40.7831,
//         longitude: -73.9851,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421
//       }}
//     />
//   );
// };

const mapSTP = state => {
  return {
    courts: state.allCourts.courts,
    user: state.allCourts.user
  };
};

const mapDTP = dispatch => {
  return {
    getCourts: () => dispatch(getCourts()),
    getUser: () => dispatch(getUser())
  };
};

export default connect(
  mapSTP,
  mapDTP
)(CourtMap);

// export default CourtMap;

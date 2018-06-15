import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

const BallerMap = () => {
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

export default BallerMap;

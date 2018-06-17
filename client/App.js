import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import CourtMap from './components/Map';

const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Map: {
    screen: CourtMap,
    navigationOptions: {
      headerTitle: 'Court Map'
    }
  }
});

export default RootNavigator;

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to working on your app!</Text>
//         <Text>Chanou make will automatically.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

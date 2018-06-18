import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login/Login'
import Home from './components/Home';
import CourtMap from './components/Map';
import store from './store';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

const RootNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login Page'
    }
  },
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

// export default RootNavigator;

function mapStateToProps(state) {
  return state;
}

let Container = connect(mapStateToProps)(RootNavigator);

export default class APP extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

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

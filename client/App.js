import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login/Login'
import LoginForm from './components/Login/LoginForm'
import Home from './components/Home';
import Map from './components/Map';
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
  Map: {
    screen: Map,
    navigationOptions: {
      headerTitle: 'Court Map'
    }
  }
});

// export default RootNavigator;

function mapStateToProps(state) {
  return state;
}

let Nav = connect(mapStateToProps)(RootNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
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

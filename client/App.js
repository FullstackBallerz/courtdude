import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Login from './components/Login/Login'
import LoginForm from './components/Login/LoginForm'
import CreateAccount from './components/Login/CreateAccount'
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
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerTitle: 'Create Account'
    }
  },
  Map: {
    screen: Map,
    navigationOptions: {
      headerTitle: 'Court Map'
    }
  }
});

function mapStateToProps(state) {
  return state;
}

const Nav = connect(mapStateToProps)(RootNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
      </Provider>
    );
  }
}

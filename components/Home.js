import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Sup marino!</Text>
    <Button onPress={() => navigation.navigate('Map')} title="View Map" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;

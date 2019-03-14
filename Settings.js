
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Settings extends React.Component {
  static navigationOptions = {
  	title: 'Welcome',
  };
  render() {
  	const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>This is the Settings screen</Text>
        <Button onPress={() => navigate('HomeScreen', {name: 'Jane'})} title="Home"/>
      </View>
    )
  }
};

export default Settings;
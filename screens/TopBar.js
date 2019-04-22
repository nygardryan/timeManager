import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet } from 'react-native';

function buttonPress() {
  console.log("big button pressed");
}

const styles = StyleSheet.create({
  top: {
    fontWeight: 'bold',
    fontSize: 45,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    color: 'white',
    backgroundColor: "tan"
  },
  button: {
    height: 125,
    width: 160,
    marginTop: 15,
  }
});


export class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { tickets: 'waiting'};
    var that = this;
  }

  render() {
    return (
      <View style={styles.top}>
        <Button
          style={styles.button}
          onPress={buttonPress}
          title="START ASCENDANCY"
          color="#d3c38f"
        />
        <Text style={styles.top}>25:00</Text>
        <Text>1/4 COMPLETED</Text>
      </View>
    );
  }
}

export default TopBar;
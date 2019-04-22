import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput, StyleSheet } from 'react-native';


function buttonPress() {
  console.log("big button pressed");
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    height: 125,
    width: 160,
    marginTop: 15,
  }
});




export class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = { daySelected: 'Mon'};
    var that = this;
  }

  render() {
    return (
      <View style={styles.top}>
        <Button
          onPress={buttonPress}
          title="Mon"
          color="#d3c38f"
        />
        <Button
          onPress={buttonPress}
          title="Tue"
          color="#d3c38f"
        />
        <Button
          onPress={buttonPress}
          title="Wed"
          color="#d3c38f"
        />
        <Button
          onPress={buttonPress}
          title="Thur"
          color="#d3c38f"
        />
        <Button
          style={styles.button}
          onPress={buttonPress}
          title="Fri"
          color="#d3c38f"
        />
        <Button
          onPress={buttonPress}
          title="Sat"
          color="#d3c38f"
        />
        <Button
          onPress={buttonPress}
          title="Sun"
          color="#d3c38f"
        />
      </View>
    );
  }
}

export default BottomBar;
var data = require('../async_storage_tool.js');


import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {taskName: 'hola', description: "description", selectedStartDate: new Date()};
  }


  render() {

    return (
      <ScrollView>
        <View style={{padding: 5, flex: 1}}>
          <TextInput
            style={{height: 40}}
            placeholder="Task Name"
            onChangeText={(text) => this.setState(previousState => (
             { taskName: text} ))}
          />

          <TextInput
            style={{height: 40}}
            placeholder="Description"
            onChangeText={(text) => this.setState(previousState => (
             { description: text} ))}
          />

          <CalendarPicker 
            onDateChange={(text) => this.setState(previousState => (
              { selectedStartDate: text}
             ))}
          />

          <Button
            onPress={() => {
              data.pushToTasks(this.state);
            }}
            title="Save"
          />

        </View>
      </ScrollView>
    );
  }
}

export default AddTask;
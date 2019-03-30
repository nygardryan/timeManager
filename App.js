import React, { Component } from 'react';
// import {AsyncStorageExample, addToDatabase, getFromDatabase } from './async_storage_tool.js'
var data = require('./async_storage_tool.js');
//Elements
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
  ScrollView
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
//Screens
import Settings from './screens/Settings';
import Home from './screens/Home';



// AsyncStorage.clear();

displayData = async (key) => {
  try {
    let value = AsyncStorage.getItem(key);
    alert(value);
  } catch (err) {
    console.log(err);
  }
}

   // try {
    //  return await AsyncStorage.getItem(key);
    // } catch (err) {
    //  console.log(err);
    // }

data.addToDatabase("you", "two");
data.addToDatabase("tasks", []);


// data.getFromDatabase('you', (err, result)=>{
//   this.setState(previousState => (
//       { tickets: result}
//       ))
// });



class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { tickets: 'waiting'};
    var that = this;
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height: 40, backgroundColor: 'gray'}}></View>
        <Text style={styles.top}>Monday</Text>
      </View>
    );
  }
}

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

export default class Main extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <TopBar />
        <AddTask />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  top: {
    fontWeight: 'bold',
    fontSize: 45,
  },
  add: {

  },
});

// const App = () => {
//   return (
//       <AsyncStorageExample />
//     )
// }

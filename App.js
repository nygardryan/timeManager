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
//Screens
import Settings from './screens/Settings';
import Home from './screens/Home';
import AddTask from './screens/AddTask';
import DayTasks from './screens/DayTasks';


//Setup Stuff
data.getFromDatabase('tasks', (err, result)=>{
  if (!result) {
    console.log('reset tasks');
    data.addToDatabase("tasks", []);
  }
});

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


export default class Main extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <DayTasks />

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

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
  AsyncStorage
} from 'react-native';
//Screens
import Settings from './screens/Settings';
import Home from './screens/Home';


displayData = async (key) => {
  try {
    let value = AsyncStorage.getItem(key);
    alert(value);
  } catch (err) {
    console.log(err);
  }
}

function hello() {
  console.log("hello");
}

function getData(key) {
  console.log(key);
}   // try {
    //  return await AsyncStorage.getItem(key);
    // } catch (err) {
    //  console.log(err);
    // }

data.addToDatabase("you", "two");

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = { tickets: 'waiting'};
    var that = this;
    data.getFromDatabase('you', (err, result)=>{
      this.setState(previousState => (
          { tickets: result}
          ))
      console.log("---------------------------------");
      console.log(this);
    });
  }

  render() {
    let textValue = typeof(data.getFromDatabase('you'));
    console.log(textValue);
    return (
      <View style={{flex:1}}>
        <View style={{height: 25, backgroundColor: 'gray'}}></View>
        <Text style={styles.top}>Monday</Text>
        <Text>{this.state.tickets}</Text>
        <Text>Hey Norm</Text>
      </View>
    );
  }
}

class AddTask extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={hello}
          title="Add New Task"
         />
         <Button
          onPress={hello}
          title="Start Pomodora Timer"
         />
      </View>
    );
  }
}

export default class Main extends Component {

  render() {
    return (
      <View>
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

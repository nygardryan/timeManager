import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
  ScrollView,
  StatusBar
} from 'react-native';
//Screens
import Settings from './screens/Settings';
import Home from './screens/Home';
import AddTask from './screens/AddTask';
import DayTasks from './screens/DayTasks';
import TopBar from './screens/TopBar';
import BottomBar from './screens/BottomBar';


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


// NAVIGATION //



// MAIN COMPONENT //

class Main extends Component {
  static navigationOptions = {
    title: 'Monday',
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.main}>
        <ScrollView>
          <StatusBar hidden />
          <TopBar />
          <DayTasks />
          <BottomBar />
          <Button
            title="Add New Task"
            onPress={() => navigate('AddNewTask')}
          />
        </ScrollView>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  AddNewTask: {screen: AddTask},
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
});

// const App = () => {
//   return (
//       <AsyncStorageExample />
//     )
// }

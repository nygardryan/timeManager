import React, { Component } from 'react';
import AsyncStorageExample from './async_storage_tool.js'
//Elements
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
//Screens
import Settings from './screens/Settings';
import Home from './screens/Home';



export default class Main extends Component {
  render() {
    return (
      <AsyncStorageExample />
    );
  }
}


// const App = () => {
//   return (
//       <AsyncStorageExample />
//     )
// }

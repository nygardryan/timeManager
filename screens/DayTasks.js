var data = require('../async_storage_tool.js');


import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput, SectionList, FlatList} from 'react-native';

class DayTasks extends Component {
  constructor(props) {
    super(props);
	this.state = {taskList: [{"taskName":"placeHolder"}]};
	console.log(this.state.taskList);
  }

  componentWillMount(){
  	data.getFromDatabase('tasks', (err, result)=>{
  		this.setState({taskList : JSON.parse(result)});
  	});
  }


  render() {
    return (
      <View>
        <FlatList
          data={this.state.taskList}
          renderItem={({item}) => <Text>{item.taskName}</Text>}
        />      	
      </View>
    );
  }
}


export default DayTasks;
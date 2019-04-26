var data = require('../async_storage_tool.js');


import React, { Component } from 'react';
import { View, Text, Button, ScrollView, TextInput, SectionList, FlatList, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
	listItems: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-between'
	}
})




class DayTasks extends Component {
  constructor(props) {
    super(props);
	this.state = {taskList: [{"taskName":"placeHolder"}], whatDay: "Sunday"};
  }

  componentWillMount(){
  	data.getFromDatabase('tasks', (err, result)=>{
  		this.setState({taskList : JSON.parse(result)});
  		console.log(result);
  	});
  }


  render() {
    return (
      <View>
      	<ScrollView>
	        <FlatList
	          data={this.state.taskList}
	          renderItem={({item}) => <View style={styles.listItems}>
	          <Text>{item.taskName}</Text>
	          <Text>{item.description}</Text>
	          <Text>{item.selectedStartDate}</Text>
	          <Text>{this.state.taskName}</Text>
	          </View>}
	        />
        </ScrollView>      	
      </View>
    );
  }
}


export default DayTasks;
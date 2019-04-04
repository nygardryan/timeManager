import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

let listOfTasks = [];

var methods ={

	addToDatabase: function(key, value) {
		// var fakeArray = [];
		// fakeArray.push(value);
		// console.log(fakeArray);
		AsyncStorage.setItem(key, JSON.stringify(value));
	},

	getFromDatabase: async (key, callback) => {
		try {
			await AsyncStorage.getItem(key, callback);
		} catch (err) {
			console.log(err);
		}
	},

	pushToTasks: function(task) {
    this.getFromDatabase('tasks', (err, result)=>{
    	var tasks = JSON.parse(result);
    	tasks.push(task);
    	this.addToDatabase('tasks', tasks);
    });
  },

};

module.exports = methods;

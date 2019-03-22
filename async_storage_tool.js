import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet } from 'react-native'

var methods ={

	addToDatabase: function(key, value) {
		AsyncStorage.setItem(key, JSON.stringify(value));
	},

	getFromDatabase: async (key, callback) => {
		try {
			AsyncStorage.getItem(key, callback);
		} catch (err) {
			console.log(err);
		}
	},
};

module.exports = methods;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import AlbumList from './src/components/AlbumList';
import config from './config';
import LoginForm from './src/components/LoginForm';
export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config.firbaseConfig);
  }
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

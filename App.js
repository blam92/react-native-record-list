/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { NativeRouter, Route } from 'react-router-native';

import { Header } from './src/components/common';
import config from './config';
import LoginForm from './src/components/LoginForm';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config.firbaseConfig);
  }
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Header headerText="Auth" /> 
          <Route exact path='/' render={() => <LoginForm />} />
          <Route path='/albumlist' component={AlbumList} />
        </View>
      </NativeRouter>
    );
  }
}

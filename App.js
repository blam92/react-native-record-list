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
  state = {
    loggedIn: false
  }

  componentDidMount() {
    firebase.initializeApp(config.firbaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  changeLoggedInState(state) {
    this.setState({
      loggedIn: state
    });
  }

  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Header headerText="Auth" /> 
          <Route 
            exact path='/'
            render={() => <LoginForm 
              loggedIn={this.state.loggedIn} 
              changeLoggedInState={this.changeLoggedInState.bind(this)} 
            />} 
          />
          <Route path='/albumlist' component={AlbumList} />
        </View>
      </NativeRouter>
    );
  }
}

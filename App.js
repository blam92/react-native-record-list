/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { NativeRouter, Route } from 'react-router-native';

import { Header, Spinner } from './src/components/common';
import config from './config';
import LoginForm from './src/components/LoginForm';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  state = {
    loggedIn: false,
    spinner: false
  }

  componentDidMount() {
    firebase.initializeApp(config.firbaseConfig);
    this.setState({ spinner: true });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          loggedIn: true,
          spinner: false
        });
      } else {
        this.setState({
          loggedIn: false,
          spinner: false
        });
      }
    });
  }

  changeLoggedInState(state) {
    this.setState({
      loggedIn: state
    });
  }
  signOut() {
    this.setState({
      spinner: true
    });
    firebase.auth().signOut();
  }

  render() {
    if(this.state.spinner) {
      return <Spinner />;
    }
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
          <Route 
          path='/albumlist' 
          render={() => <AlbumList signOut={this.signOut.bind(this)} />} />
        </View>
      </NativeRouter>
    );
  }
}

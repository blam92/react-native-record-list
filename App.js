/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Route, withRouter } from 'react-router-native';
import { connect } from 'react-redux';

import { Header, Spinner } from './src/components/common';
import config from './config';
import LoginForm from './src/components/LoginForm';
import AlbumList from './src/components/AlbumList';
import TechStack from './src/components/TechStack';

class App extends Component {
  state = {
    loggedIn: false,
    spinner: false
  }

  componentDidMount() {
    firebase.initializeApp(config.firebaseConfig);
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

  navItems = {
    labelColor: '#827717',
    onTabChange: () => 2,
    backgroundColor: '#CDDC39',
    tabs: [
      {
        onPress: () => this.props.history.push('/albumlist'),
        label: 'Music',
        icon: 'music-note',
        iconColor: '#827717'
      },
      {
        onPress: () => this.props.history.push('/techstack'),
        label: 'Tech Stack',
        icon: 'code',
        iconColor: '#827717'
      },
      {
        onPress: this.signOut.bind(this),
        label: 'Sign Out',
        icon: 'power-settings-new',
        iconColor: '#827717'
      }
    ]
  };

  changeLoggedInState(state) {
    this.setState({
      loggedIn: state
    });
  }
  signOut() {
    this.setState({
      spinner: true,
      loggedIn: false
    }, () => this.props.history.push('/'));
    firebase.auth().signOut()
      .then(() => this.setState({ spinner: false }));
  }

  render() {
    if(this.state.spinner) {
      return <Spinner />;
    }
    return (
        <View style={{ flex: 1 }}>
          <Header headerText={this.props.header} /> 
          <Route 
            exact path='/'
            render={() => (
                <LoginForm loggedIn={this.state.loggedIn} />
              )}
          />
          <Route 
            path='/albumlist' 
            render={() => <AlbumList navItems={this.navItems} />}
          />
          <Route 
            path='/techstack' 
            render={() => <TechStack navItems={this.navItems} />} 
          />
        </View>
    );
  }
}

const mapStateToProps = (state) => ({ header: state.header });

export default withRouter(connect(mapStateToProps)(App));

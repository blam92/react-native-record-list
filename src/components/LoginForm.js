import { Text } from 'react-native';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    loginError: null,
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loginError: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucces.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSucces.bind(this))
          .catch(this.onLoginFailure.bind(this));
      });
  }

  onLoginSucces() {
    this.setState({ 
      loading: false,
      password: '',
      loginError: 'LOGIN SUCCESS'
    });
    this.props.changeLoggedInState(true);
  }

  onLoginFailure(err) {
    this.setState({
      loginError: `Authentication failed. ${err}`,
      loading: false,
    });
  }

  redirect() {
    return <Redirect to={'/albumlist'} />;
  }

  render() {
    if(this.props.loggedIn) {
      return this.redirect();
    }

    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'} 
            placeholder={'user@gmail.com'}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
        <Input 
          label={'Password'} 
          placeholder={'password'}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          secureText
        />
        </CardSection>
        {this.state.loginError ? 
        <Text style={styles.errorTextStyle}>{this.state.loginError}</Text> : null}
        <CardSection>
          {this.state.loading ? 
          <Spinner /> : 
          <Button 
            style={styles.buttonStyle} 
            title={'Sign In'} 
            onPress={this.onButtonPress.bind(this)} 
          />}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  buttonStyle: {
    flex: 1
  }
};

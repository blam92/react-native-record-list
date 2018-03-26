import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    loginError: null,
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loginError: null, loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {

      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ loginError: 'Authentication failed.', loading: false });
          });
      });
  }

  render() {
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
        {this.state.loginError ? <Text style={styles.errorTextStyle}>{this.state.loginError}</Text> : null}
        <CardSection>
          {this.state.loading ? <Spinner /> : <Button style={styles.buttonStyle} title={'Sign In'} onPress={this.onButtonPress.bind(this)} />}
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

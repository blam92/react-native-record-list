import { Text } from 'react-native';
import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: 'SHOW_LOGIN' });
  }

  onButtonPress() {
    const { email, password, logUser } = this.props;
    this.setState({ loading: true });
    logUser(email, password);
  }
  onLoginSucces() {
    const { changeLoggedInState, onEmailChanged, onPasswordChanged } = this.props;
    this.setState({ 
      loading: false,
    });
    changeLoggedInState(true);
    onEmailChanged('');
    onPasswordChanged('');
  }

  onLoginFailure(err) {
    this.setState({
      loading: false,
    });
  }

  redirect() {
    return <Redirect to={'/albumlist'} />;
  }

  render() {
    const { email, password, onEmailChanged, onPasswordChanged } = this.props;
    if(this.props.loggedIn) {
      return this.redirect();
    }
    return (
      <Card>
        <CardSection>
          <Input 
            label={'Email'} 
            placeholder={'user@gmail.com'}
            value={email}
            onChangeText={(e) => onEmailChanged(e)}
          />
        </CardSection>
        <CardSection>
        <Input 
          label={'Password'} 
          placeholder={'password'}
          value={password}
          onChangeText={(p) => onPasswordChanged(p)}
          secureText
        />
        </CardSection>
        {this.props.error ? 
        <Text style={styles.errorTextStyle}>{this.props.error.message}</Text> : null}
        <CardSection>
          {this.state.loading ? 
          <Spinner /> : 
          <Button 
            style={styles.buttonStyle} 
            title={'Sign In'}
            color={'#827717'} 
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

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch) => ({
    onEmailChanged: (e) => dispatch(emailChanged(e)),
    onPasswordChanged: (p) => dispatch(passwordChanged(p)),
    dispatch,
    logUser: (email, password) => dispatch(loginUser({ email, password }))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

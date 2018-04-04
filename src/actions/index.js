import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then((user) => loginUserSuccess(dispatch, user))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then((user) => loginUserSuccess(dispatch, user));
    //   });
    signInUser(dispatch, email, password)
      .catch(() => createUser(dispatch, email, password));
  };
}

const loginUserSuccess = (dispatch, user) => dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

const signInUser = (dispatch, email, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        loginUserSuccess(dispatch, user);
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};

const createUser = (dispatch, email, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        loginUserSuccess(dispatch, user);
        resolve(user);
      })
      .catch((err) => reject(err));
  });
};

import firebase from 'firebase';
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAIL, 
  START_LOADING, 
  FINISH_LOADING
} from './types';

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
    signInUser(dispatch, email, password)
    .catch(() => createUser(dispatch, email, password))
    .catch((err) => loginUserFail(dispatch, err));
  };
};

const loginUserSuccess = (dispatch, user) => dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
const loginUserFail = (dispatch, err) => dispatch({ type: LOGIN_USER_FAIL, payload: err });
const startLoading = (dispatch) => dispatch({ type: START_LOADING });
const finishLoading = (dispatch) => dispatch({ type: FINISH_LOADING });

const signInUser = (dispatch, email, password) => {
  startLoading(dispatch);
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        loginUserSuccess(dispatch, user);
        resolve(user);
        finishLoading(dispatch);
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
        finishLoading(dispatch);
      })
      .catch((err) => {
        finishLoading(dispatch);
        reject(err);
      });
  });
};

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';

export default (state = { email: '', password: '', user: null, error: null }, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

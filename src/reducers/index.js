import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';
import headerReducer from './headerReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  libraries: libraryReducer,
  selectedLibrary: selectionReducer,
  header: headerReducer,
  auth: authReducer,
  loading: loadingReducer
});

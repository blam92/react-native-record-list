import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';
import headerReducer from './headerReducer';

export default combineReducers({
  libraries: libraryReducer,
  selectedLibrary: selectionReducer,
  header: headerReducer
});

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './src/reducers';

const ReduxApp = () => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('albums', () => ReduxApp);

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NativeRouter } from 'react-router-native';
import App from './App';
import reducers from './src/reducers';

const ReduxApp = () => (
  <Provider store={createStore(reducers)}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </Provider>
);

AppRegistry.registerComponent('albums', () => ReduxApp);

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { NativeRouter } from 'react-router-native';
import ReduxThunk from 'redux-thunk';

import App from './App';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));
const ReduxApp = () => (
  <Provider store={store}>
    <NativeRouter>
      <App />
    </NativeRouter>
  </Provider>
);

AppRegistry.registerComponent('albums', () => ReduxApp);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import LocationSearchComponent from './app/index';
import reducers from './app/modules/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <LocationSearchComponent />
  </Provider>
  , document.querySelector('.locationSearch'));
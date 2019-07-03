import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const isEnvDev = process.env.NODE_ENV === 'development';

const middlewares = isEnvDev
  ? [thunk, logger]
  : [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default function StoreProvider({App}) {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  );
}
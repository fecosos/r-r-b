import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const isEnvDev = process.env.NODE_ENV === 'development';

const middlewares = isEnvDev
  ? [logger]
  : [];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default function StoreProvider({App}) {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  );
}
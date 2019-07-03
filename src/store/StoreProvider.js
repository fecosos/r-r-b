import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


const store = createStore(rootReducer);

export default function StoreProvider({App}) {
  return (
    <Provider store={store} >
      <App />
    </Provider>
  );
}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
import reducers from './reducers';

const API_KEY = 'AIzaSyBkY-aDkBseLmJ-kzIcgU9fPZYDEnvqXU8';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <SearchBar />
  </Provider>
  , document.querySelector('.container'));

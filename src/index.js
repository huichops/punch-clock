import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import persistState from 'redux-localstorage'

import PunchClock from './redux/PunchClock';

import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const initialState = { entries: [] };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhacer = composeEnhancers(persistState());
const store = createStore(PunchClock, initialState, enhacer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

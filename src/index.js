import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import PunchClock from './redux/PunchClock';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const getLocalStorage = () => JSON.parse(localStorage.redux || "[]");
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(PunchClock, getLocalStorage(), devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

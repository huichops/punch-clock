import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PunchClock, { logTime } from './redux/PunchClock';

import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(
  PunchClock,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

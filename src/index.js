import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PunchClock, { logTime } from './redux/PunchClock';

import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(PunchClock);
const dispatch = (time) => store.dispatch(logTime(time));

ReactDOM.render(
  <App 
    entries={store.getState()} 
    logTime={dispatch} 
  />,
  document.getElementById('root')
);

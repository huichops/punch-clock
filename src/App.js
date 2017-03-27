import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';

import LogTime from './components/LogTime';
import TimeList from './components/TimeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h1">CHK</Header>
        <LogTime />
        <TimeList />
      </div>
    );
  }
}

export default App;

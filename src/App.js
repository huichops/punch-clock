import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';

import LogTime from './components/LogTime';
import TimeList from './components/TimeList';
import TotalTime from './components/TotalTime';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as="h1">CHK</Header>
        <LogTime />
        <TimeList />
        <TotalTime />
      </div>
    );
  }
}

export default App;

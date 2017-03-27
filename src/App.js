import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import './App.css';

import LogTime from './components/LogTime';
import TimeList from './components/TimeList';
import TotalTime from './components/TotalTime';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header as="h1">CHK</Header>
          <LogTime />
          <TotalTime />
          <TimeList />
        </Container>
      </div>
    );
  }
}

export default App;

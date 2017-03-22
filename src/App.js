import React, { Component } from 'react';
import { 
  Button,
  Container,
  Header,
  Input,
  List,
} from 'semantic-ui-react';
import './App.css';

import { subtractTime, sumTime } from './utils/time';
import TimeEntry from './components/TimeEntry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeEntries: [],
      total: '00:00'
    };
  }

  logTime = () => {
    const entranceTime = document.querySelector('[name=entranceTime]').value;
    const exitTime = document.querySelector('[name=exitTime]').value;
    const newLog = <TimeEntry startTime={entranceTime} endTime={exitTime} />;

    this.setState({
      timeEntries: [newLog, ...this.state.timeEntries],
      total: sumTime(this.state.total, subtractTime(exitTime, entranceTime))
    });
  }

  render() {
    return (
      <div className="App">
        <Header as="h1">CHK</Header>
        <Container>
          <Input
            label={{ basic: true, content: 'Entrada' }}
            type="time"
            name="entranceTime"
            defaultValue="16:00"
          />
          <Input
            label={{ basic: true, content: 'Salida' }}
            type="time"
            name="exitTime"
            defaultValue="21:00"
          />
          <Button primary onClick={this.logTime}>Log time</Button>
          <Header as="h2">{this.state.total}</Header>
          <List>
            {this.state.timeEntries}
          </List>
        </Container>
      </div>
    );
  }
}

export default App;

// TODO 
// - add js-joda
// - Use objects instead of strings
// - save on localStorage
// - add punchClock
// - add tests

import React, { Component } from 'react';
import { 
  Button,
  Container,
  Header,
  Input,
  List
} from 'semantic-ui-react';

import './App.css';

const textToTime = (text) => {
  const defaultTime = {
    hours: 0,
    minutes: 0,
    text: '00:00'
  };
  if (!text) return defaultTime;

  const [hours, minutes] = text.split(':');
  
  if (!hours.length || !minutes.length) return defaultTime;
  return {hours: Number(hours), minutes: Number(minutes), text};
};

const numberPadding = (number, pad = 2) => {
  const stringNumber = number.toString();
  if (stringNumber.length < pad) return `0${stringNumber}`;
  return stringNumber;
};

const sumTime = (exitTime, entranceTime) => {
  const entrance = textToTime(entranceTime);
  const exit = textToTime(exitTime);

  const entranceMinutes = entrance.hours * 60 + entrance.minutes;
  const exitMinutes = exit.hours * 60 + exit.minutes;
  const totalMinutes = exitMinutes + entranceMinutes;

  return `${numberPadding(Math.floor(totalMinutes / 60))}:${numberPadding(totalMinutes % 60)}`;
};
const substractTime = (exitTime, entranceTime) => {
  const entrance = textToTime(entranceTime);
  const exit = textToTime(exitTime);

  const entranceMinutes = entrance.hours * 60 + entrance.minutes;
  const exitMinutes = exit.hours * 60 + exit.minutes;
  const totalMinutes = exitMinutes - entranceMinutes;

  return `${numberPadding(Math.floor(totalMinutes / 60))}:${numberPadding(totalMinutes % 60)}`;
};

const TimeEntry = ({entranceTime, exitTime}) => {
  const totalTime = substractTime(exitTime, entranceTime);
  return (
    <List.Item>
      <List.Icon name='clock' />
      <List.Content>
        <List.Header>{totalTime} -> {entranceTime} - {exitTime}</List.Header>
      </List.Content>
    </List.Item>
  );
}
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
    const newLog = <TimeEntry entranceTime={entranceTime} exitTime={exitTime} />;

    this.setState({
      timeEntries: [newLog, ...this.state.timeEntries],
      total: sumTime(this.state.total, substractTime(exitTime, entranceTime))
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

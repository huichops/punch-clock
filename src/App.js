import React, { Component } from 'react';
import { 
  Button,
  Container,
  Header,
  Input,
  List,
} from 'semantic-ui-react';
import './App.css';

import TimeEntry from './components/TimeEntry';

const mapTimes = (entries) => entries.map(({startTime, endTime}) => <TimeEntry startTime={startTime} endTime={endTime} />);

class App extends Component {
  logTime = () => {
    const startTime = document.querySelector('[name=entranceTime]').value;
    const endTime = document.querySelector('[name=exitTime]').value;
    this.props.logTime({endTime, startTime});

    // this.setState({
    //   timeEntries: [newLog, ...this.state.timeEntries],
    //   total: sumTime(this.state.total, subtractTime(exitTime, entranceTime))
    // });
  }

  render() {
    console.log(this.props);
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
          <List>
            {mapTimes(this.props.entries)}
          </List>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { numberPadding } from '../utils/time';

const now = () => {
  const d = new Date();
  const month = numberPadding(d.getUTCMonth() + 1);
  const day = numberPadding(d.getUTCDate());
  const res = `${d.getUTCFullYear()}-${month}-${day}`;

  return res;
};

class LogTime extends Component {
  state = {
    startTime: this.props.startTime || '16:00',
    endTime: this.props.endTime || '21:00',
    date: this.props.date || now()
  }

  handleEndTime = e => this.setState({ endTime: e.target.value });

  handleStartTime = e => this.setState({ startTime: e.target.value });

  handleDate = e => this.setState({ date: e.target.value });

  handleSave = (e) => {
    const { date, startTime, endTime } = this.state;
    this.props.onSave({ date, startTime, endTime });
  }

  render() {
    return (
      <div>
        <Input
          label={{ basic: true, content: 'Fecha' }}
          name='date'
          type='date'
          onChange={this.handleDate}
          value={this.state.date}
        />
        <Input
          label={{ basic: true, content: 'Entrada' }}
          type='time'
          name='startTime'
          onChange={this.handleStartTime}
          value={this.state.startTime}
        />
        <Input
          label={{ basic: true, content: 'Salida' }}
          type='time'
          name='endTime'
          onChange={this.handleEndTime}
          value={this.state.endTime}
        />
        <Button primary type='submit' onClick={this.handleSave}>
          Log time
        </Button>
      </div>
    );
  }
}

export default LogTime;

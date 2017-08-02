import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
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
    e.preventDefault();

    const { date, startTime, endTime } = this.state;
    this.props.onSave({ date, startTime, endTime });
  }

  render() {
    return (
      <Form onSubmit={this.handleSave}>
        <Form.Group widths='equal'>
          <Form.Input
            name='date'
            type='date'
            onChange={this.handleDate}
            value={this.state.date}
          />
          <Form.Input
            type='time'
            name='startTime'
            onChange={this.handleStartTime}
            value={this.state.startTime}
          />
          <Form.Input
            type='time'
            name='endTime'
            onChange={this.handleEndTime}
            value={this.state.endTime}
          />
          <Form.Button
            labelPosition='right'
            content='Log'
            icon='clock'
            type='submit'
            onClick={this.handleSave}
            floated='right'
            primary
          />
        </Form.Group>
      </Form>
    );
  }
}

export default LogTime;

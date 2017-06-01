import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

import LogTime from './LogTime';
import { textToTime } from '../utils/time';

const Entry = ({ totalTime, date, startTime, endTime, onClick }) => {
  const { hours, minutes } = textToTime(totalTime);

  return (
    <div>
      <List.Content floated='left'>
        <List.Header>
          <span className='date'><strong>{date}</strong></span> --
          <span className='startTime'>{startTime}</span> -
          <span className='endTime'>{endTime}</span>
        </List.Header>
        <span className='totalTime'>
          {hours} horas {minutes} minutos
        </span>
      </List.Content>
      <List.Content floated='right'>
        <Button onClick={onClick} size='small'>
          Editar
        </Button>
      </List.Content>
    </div>
  );
};


class TimeEntry extends Component {
  state = { editing: false }

  handleSave = (id, timeEntry) => {
    this.props.onEdit(id, timeEntry);
    this.setState({ editing: false });
  }

  handleClick = () => {
    this.setState({ editing: true });
  }

  render() {
    const { id } = this.props;
    let element;
    if (this.state.editing) element = <LogTime {...this.props} onSave={(timeEntry) => this.handleSave(id, timeEntry)} />;
    else element = <Entry {...this.props} onClick={this.handleClick} />;

    return (
      <List.Item>
        {element}
      </List.Item>
    );
  }
}

export default TimeEntry;

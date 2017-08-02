import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

import LogTime from './LogTime';
import { textToTime } from '../utils/time';

const Entry = ({ totalTime, date, startTime, endTime, onEdit, onDelete }) => {
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
        <Button onClick={onEdit} size='small'>
          Editar
        </Button>
        <Button color='red' onClick={onDelete} size='small'>
          Eliminar
        </Button>
      </List.Content>
    </div>
  );
};


class TimeEntry extends Component {
  state = { editing: false }

  handleDelete = (id) => {
    this.props.onDelete(id);
  }

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
    if (this.state.editing) {
      element = <LogTime {...this.props} onSave={(timeEntry) => this.handleSave(id, timeEntry)} />;
    }
    else {
      element = <Entry {...this.props} onEdit={this.handleClick} onDelete={(timeEntry) => this.handleDelete(id)} />;
    }

    return (
      <List.Item>
        {element}
      </List.Item>
    );
  }
}

export default TimeEntry;

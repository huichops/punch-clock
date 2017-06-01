import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';

import LogTime from './LogTime';
import { textToTime } from '../utils/time';

const Entry = ({ totalTime, date, startTime, endTime, onClick }) => {
  const { hours, minutes } = textToTime(totalTime);

  return (
    <div>
      <List.Item>
        <List.Icon name='clock' />
        <List.Content>
          <List.Header>
            <h3 className='totalTime'>
              {hours} horas {minutes} minutos
              {' '}
              <Button onClick={onClick} size='small'>
                Editar
              </Button>
            </h3>
          </List.Header>
            <span className='date'><strong>{date}</strong></span> --
            <span className='startTime'>{startTime}</span> -
            <span className='endTime'>{endTime}</span>
        </List.Content>
      </List.Item>
    </div>
  );
};


class TimeEntry extends Component {
  state = { editing: false };

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

    return element;
  }
}

export default TimeEntry;

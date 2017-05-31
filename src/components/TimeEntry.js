import React from 'react';
import { List } from 'semantic-ui-react';

import { subtractTime, textToTime } from '../utils/time';



const TimeEntry = ({ date, startTime, endTime,  totalTime = '00:00' }) => {
  const {hours, minutes} = textToTime(totalTime);
  return (
    <List.Item>
      <List.Icon name='clock' />
      <List.Content>
        <List.Header>
          <h3 className='totalTime'>
            {hours} horas {minutes} minutos
          </h3>
          <span className='date'><strong>{date}</strong></span> --
          <span className='startTime'>{startTime}</span> -
          <span className='endTime'>{endTime}</span>
        </List.Header>
      </List.Content>
    </List.Item>
  );
};

export default TimeEntry;

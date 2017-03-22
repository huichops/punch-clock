import React from 'react'; 
import { List } from 'semantic-ui-react';

import { subtractTime } from '../utils/time';



const TimeEntry = ({startTime, endTime}) => {
  const totalTime = subtractTime(endTime, startTime);
  return (
    <List.Item>
      <List.Icon name='clock' />
      <List.Content>
        <List.Header>
          <span className='totalTime'>{totalTime}</span> 
          -> 
          <span className='startTime'>{startTime}</span> 
          - 
          <span className='endTime'>{endTime}</span>
        </List.Header>
      </List.Content>
    </List.Item>
  );
};

export default TimeEntry;

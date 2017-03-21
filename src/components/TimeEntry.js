import React from 'react'; 
import { List } from 'semantic-ui-react';

const textToTime = (text = '') => {
  const [hours, minutes] = text.split(':');

  if (!hours.length || !minutes.length) return null;
  return {hours: Number(hours), minutes: Number(minutes), text};
};

const numberPadding = (number, pad = 2) => {
  const stringNumber = number.toString();
  if (stringNumber.length < pad) return `0${stringNumber}`;
  return stringNumber;
};

const substractTime = (exitTime, entranceTime) => {
  const defaultTime = '00:00';
  const entrance = textToTime(entranceTime);
  const exit = textToTime(exitTime);

  if (!entrance || !exit) return defaultTime;

  const entranceMinutes = entrance.hours * 60 + entrance.minutes;
  const exitMinutes = exit.hours * 60 + exit.minutes;
  const totalMinutes = exitMinutes - entranceMinutes;

  if (totalMinutes < 0) return defaultTime;

  return `${numberPadding(Math.floor(totalMinutes / 60))}:${numberPadding(totalMinutes % 60)}`;
};

const TimeEntry = ({startTime, endTime}) => {
  const totalTime = substractTime(endTime, startTime);
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

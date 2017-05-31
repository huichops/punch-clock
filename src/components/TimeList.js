import React from 'react';
import { connect } from 'react-redux';
import { List, Container } from 'semantic-ui-react';

import { timeToText } from '../utils/time';
import TimeEntry from './TimeEntry';

const numberPadding = (number, pad = 2) => {
  const stringNumber = number.toString();
  if (stringNumber.length < pad) return `0${stringNumber}`;
  return stringNumber;
};
const mapTimes = entries => entries.map(({ startTime, endTime, totalTime, date }, index) => (
  <TimeEntry
    date={date}
    startTime={startTime}
    endTime={endTime}
    totalTime={totalTime}
    key={index}
  />
));

const TimeList = ({ entries }) => (
  <Container>
    <List>
      { mapTimes(entries) }
    </List>
  </Container>
);

const mapStateToProps = ({ entries }) => {
  return {
    entries: entries.map((e) => {
      const startTime = new Date(e.startTime);
      const endTime = new Date(e.endTime);
      const totalTime = (endTime - startTime) / 1000 / 60;
      const date = new Date(e.date);
      return {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        startTime: `${startTime.getHours()}:${numberPadding(startTime.getMinutes())}`,
        endTime: `${endTime.getHours()}:${numberPadding(endTime.getMinutes())}`,
        totalTime: timeToText(totalTime)
      };
    })
  };
};
export default connect(mapStateToProps)(TimeList);

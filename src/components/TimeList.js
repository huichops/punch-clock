import React from 'react';
import { connect } from 'react-redux';
import { List, Container } from 'semantic-ui-react';

import TimeEntry from './TimeEntry';

const mapTimes = (entries) => entries.map(({ startTime, endTime }, index) => (
    <TimeEntry startTime={startTime} endTime={endTime} key={index} />
));

const TimeList = ({ entries }) => (
  <Container>
    <List>
      { mapTimes(entries) }
    </List>
  </Container>
);

export default connect(state => ({ entries: state }))(TimeList);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Container, Segment } from 'semantic-ui-react';

import { editTimeEntry, deleteTimeEntry } from '../redux/PunchClock';
import { numberPadding, timeToText } from '../utils/time';
import TimeEntry from './TimeEntry';
;
const mapTimes = (entries, onEdit, onDelete) => entries.map(({ id, startTime, endTime, totalTime, date }) => (
  <TimeEntry
    date={date}
    startTime={startTime}
    endTime={endTime}
    totalTime={totalTime}
    id={id}
    key={id}
    onEdit={onEdit}
    onDelete={onDelete}
  />
));

const TimeList = ({ entries, onEdit, onDelete }) => (
  <Container>
    <Segment>
      <Container>
      <List>
        { mapTimes(entries, onEdit, onDelete) }
      </List>
      </Container>
    </Segment>
  </Container>
);

const mapStateToProps = ({ entries }) => {
  return {
    entries: entries.map((e) => {
      const startTime = new Date(e.startTime);
      const endTime = new Date(e.endTime);
      const totalTime = (endTime - startTime) / 1000 / 60;
      const date = new Date(e.date);
      const month = numberPadding(date.getUTCMonth() + 1);
      const day = numberPadding(date.getUTCDate());
      return {
        date: `${date.getFullYear()}-${month}-${day}`,
        startTime: `${startTime.getHours()}:${numberPadding(startTime.getMinutes())}`,
        endTime: `${endTime.getHours()}:${numberPadding(endTime.getMinutes())}`,
        totalTime: timeToText(totalTime),
        id: e.id
      };
    })
  };
};

const mapDispatchToProps = dispatch => ({
  onEdit: bindActionCreators(editTimeEntry, dispatch),
  onDelete: bindActionCreators(deleteTimeEntry, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeList);

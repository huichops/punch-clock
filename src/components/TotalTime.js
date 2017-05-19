import React from 'react';
import { connect } from 'react-redux';

import { Header } from 'semantic-ui-react';
import { subtractTime, sumTime, textToTime } from '../utils/time';

const toComplete = '480:00';

const TotalTime = ({ remainingTime }) => (
  <Header as="h2">
    Te faltan {remainingTime.hours} horas {remainingTime.minutes} minutos
  </Header>
);

const mapStateToProps = ({ entries }) => {

  const totalTime = entries
    .map(({ totalTime }) => totalTime)
    .reduce((a, b) => sumTime(a, b), 0);

  const remainingTime = textToTime(subtractTime(toComplete, totalTime));
  return { remainingTime };
};
export default connect(mapStateToProps)(TotalTime);

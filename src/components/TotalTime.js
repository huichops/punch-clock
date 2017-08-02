import React from 'react';
import { connect } from 'react-redux';

import { Progress, Header } from 'semantic-ui-react';

const toComplete = 480 * 60;

const TotalTime = ({ remainingTime, percent }) => (
  <div>
    <Header as='h2'>
      Te faltan {Math.floor(remainingTime / 60)} horas {remainingTime % 60} minutos
    </Header>
    <Progress percent={percent} indicating />
  </div>
);

const mapStateToProps = ({ entries }) => {
  const totalTime = entries
    .map(({ startTime, endTime }) => {
      return (endTime - startTime) / 1000 / 60;
    })
    .reduce((a, b) => a + b, 0);

  const remainingTime = toComplete - totalTime;
  const percent = totalTime / toComplete * 100;

  return { remainingTime, percent };
};

export default connect(mapStateToProps)(TotalTime);

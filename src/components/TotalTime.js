import React from 'react'; 
import { connect } from 'react-redux';

import { sumTime } from '../utils/time';

const TotalTime = ({ totalTime }) => <p>{totalTime}</p>;

const mapStateToProps = ({ entries }) => {
  const totalTime = entries
                      .map(({ totalTime }) => totalTime)
                      .reduce((a, b) => sumTime(a, b));
  return { totalTime };
};
export default connect(mapStateToProps)(TotalTime);

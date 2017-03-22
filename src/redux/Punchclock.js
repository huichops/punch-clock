import { subtractTime } from '../utils/time';

export const LOG_TIME = 'LOG_TIME';

export function logTime(time) {
  return {
    type: LOG_TIME,
    payload: {
      ...time,
      totalTime: subtractTime(time.endTime, time.startTime)
    }
  };
}

export default function reduce(state = [], action) {
  switch (action.type) {
    case LOG_TIME: return [action.payload, ...state];
    default: return state;
  };
}

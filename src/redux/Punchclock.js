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

export default function reduce(state = { entries: [] }, action = {}) {
  switch (action.type) {
    case LOG_TIME: 
      return Object.assign({},
        state,
        { entries: [action.payload, ...state.entries] }
      );
    default: 
      return state;
  }
}

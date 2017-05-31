import { subtractTime } from '../utils/time';

const createTimestamp = value => (new Date(value)).getTime();
export const LOG_TIME = 'LOG_TIME';

export function logTime(time = {}) {
  const { date, startTime, endTime } = time;
  const startTimestamp = createTimestamp(`${date}T${startTime}`);
  const endTimestamp = createTimestamp(`${date}T${endTime}`);

  return {
    type: LOG_TIME,
    payload: {
      date: createTimestamp(date),
      startTime: startTimestamp,
      endTime: endTimestamp
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

export const LOG_TIME = 'LOG_TIME';
export const EDIT_TIME_ENTRY = 'EDIT_TIME_ENTRY';
export const DELETE_TIME_ENTRY = 'DELETE_TIME_ENTRY';

const createTimestamp = value => (new Date(value)).getTime();

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

export function editTimeEntry(id, time = {}) {
  const { date, startTime, endTime } = time;
  const startTimestamp = createTimestamp(`${date}T${startTime}`);
  const endTimestamp = createTimestamp(`${date}T${endTime}`);

  return {
    type: EDIT_TIME_ENTRY,
    payload: {
      id,
      date: createTimestamp(date),
      startTime: startTimestamp,
      endTime: endTimestamp
    }
  };
}

export function deleteTimeEntry(id) {
  return {
    type: DELETE_TIME_ENTRY,
    payload: { id }
  };
}
export default function reduce(state = { entries: [] }, action = {}) {
  switch (action.type) {
    case LOG_TIME:
      const nextId = state.entries.reduce((max, { id }) => Math.max(id, max), -1) + 1;
      return Object.assign({},
        state,
        {
          entries: [
            { id: nextId, ...action.payload },
            ...state.entries
          ]
        }
      );
    case EDIT_TIME_ENTRY:
      {
        const { id, ...time } = action.payload;
        const entries = [...state.entries].map(t => id === t.id ? { ...t, ...time } : t);
        return Object.assign({}, state, { entries });
      }

    case DELETE_TIME_ENTRY:
      {
        const { id } = action.payload;
        const entries = [...state.entries].filter(t => id !== t.id);
        return Object.assign({}, state, { entries });
      }

    default:
      return state;
  }
}

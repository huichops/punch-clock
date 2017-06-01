import reduce, { editTimeEntry, logTime, LOG_TIME, EDIT_TIME_ENTRY } from './Punchclock';

const createTimestamp = value => (new Date(value)).getTime();
describe('actions', () => {
  it('should create an action to log time', () => {
    const time = {
      date: '2017-05-25',
      startTime: '16:21',
      endTime: '20:43'
    };
    const startTime = createTimestamp(`${time.date}T${time.startTime}`);
    const endTime = createTimestamp(`${time.date}T${time.endTime}`);

    const actual = logTime(time);
    const expected = {
      type: LOG_TIME,
      payload: {
        date: createTimestamp(time.date),
        startTime: startTime,
        endTime: endTime
      }
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action to edit a time entry', () => {
    const time = {
      date: '2017-05-25',
      startTime: '16:21',
      endTime: '20:43'
    };
    const startTime = createTimestamp(`${time.date}T${time.startTime}`);
    const endTime = createTimestamp(`${time.date}T${time.endTime}`);
    const index = 5;

    const actual = editTimeEntry(index, time);
    const expected = {
      type: EDIT_TIME_ENTRY,
      payload: {
        index,
        startTime,
        endTime,
        date: createTimestamp(time.date),
      }
    };

    expect(actual).toEqual(expected);
  });
});

describe('reducers', () => {
  it('should return an empty array in entries if no action provided', () => {
    const expected = { entries: [] };
    const actual = reduce();

    expect(actual).toEqual(expected);
  });

  it('should add a time log entry to state', () => {
    const startTime = createTimestamp('2017-05-25T16:21');
    const endTime = createTimestamp('2017-05-25T20:21');
    const action = {
      type: LOG_TIME,
      payload: {
        date: createTimestamp('2017-05-25'),
        startTime,
        endTime
      }
    };
    const expected = { entries: [action.payload] };
    const actual = reduce(undefined, action);

    expect(actual).toEqual(expected);
  });
});

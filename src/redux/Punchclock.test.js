import reduce, { logTime, LOG_TIME } from './Punchclock';

describe('actions', () => {
  it('should create an action to log time', () => {
    const time = {
      startTime: '16:21',
      endTime: '20:43'
    };

    const actual = logTime(time);
    const expected = {
      type: LOG_TIME,
      payload: {
        ...time,
        totalTime: '04:22'
      }
    };

    expect(actual).toEqual(expected);
  });
});

describe('reducers', () => {
  it('should return an empty array if no state provided', () => {
    const expected = [];
    const actual = reduce();

    expect(actual).toEqual(expected);
  });
  it('should add a time log entry to state', () => {
    const action = {
      type: LOG_TIME,
      payload: {
        startTime: '16:21',
        endTime: '20:43',
        totalTime: '04:22'
      }
    };
    const expected = [action.payload];
    const actual = reduce([], action);

    expect(actual).toEqual(expected);
  });
});

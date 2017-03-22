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

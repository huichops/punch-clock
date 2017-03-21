import React from 'react';
import { mount, shallow } from 'enzyme';
import TimeEntry from './TimeEntry';

describe('TimeEntry', () => {
  it('renders without crashing', () => {
    mount(<TimeEntry />);
  });

  it('renders the startTime', () => {
    const component = shallow(<TimeEntry startTime='16:00' />);

    const expected = true;
    const actual = component.contains(
      <span className='startTime'>16:00</span>
    );
    expect(actual).toEqual(expected);
  });

  it('renders the endTime', () => {
    const component = shallow(<TimeEntry endTime='16:00' />);

    const expected = true;
    const actual = component.contains(
      <span className='endTime'>16:00</span>
    );
    expect(actual).toEqual(expected);
  });

  it('renders the startTime and endTime difference', () => {
    const component = shallow(
      <TimeEntry startTime='15:37' endTime='20:01' />
    );

    const expected = true;
    const actual = component.contains(
      <span className='totalTime'>04:24</span>
    );
    expect(actual).toEqual(expected);
  });

  it('renders 00:00 totalTime if endTime is lower than startTime', () => {
    const component = shallow(
      <TimeEntry startTime='20:01' endTime='15:37' />
    );

    const expected = true;
    const actual = component.contains(
      <span className='totalTime'>00:00</span>
    );
    expect(actual).toEqual(expected);
  });

  it('renders 00:00 totalTime if invalid time provided', () => {
    const component = shallow(
      <TimeEntry startTime='20:01' endTime='15:37' />
    );

    const expected = true;
    const actual = component.contains(
      <span className='totalTime'>00:00</span>
    );
    expect(actual).toEqual(expected);
  });
});

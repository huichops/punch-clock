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

  it('renders the provided date', () => {
    const component = shallow(<TimeEntry endTime='16:00' date='2017-02-02' />);

    const expected = true;
    const actual = component.contains(
      <span className='date'><strong>2017-02-02</strong></span>
    );
    expect(actual).toEqual(expected);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'semantic-ui-react';
import App from './App';

it.skip('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header).length).toBe(1);

});

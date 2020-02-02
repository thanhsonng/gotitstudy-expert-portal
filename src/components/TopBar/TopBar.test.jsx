import React from 'react';
import { shallow } from 'enzyme';
import { TopBar } from './TopBar';

describe('<TopBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TopBar />);
  });

  it('renders', () => {
    const r = () => shallow(<TopBar />);
    expect(r).not.toThrow();
  });

  it('contains Got It\'s logo', () => {
    const logo = wrapper.find('Logo');
    expect(logo.exists()).toBe(true);
    expect(logo.prop('name')).toBe('gotit');
  });

  it('contains expert\'s ranking', () => {
    const ranking = wrapper.find('ExpertRanking');
    expect(ranking.exists()).toBe(true);
  });

  it('contains working stats', () => {
    const stats = wrapper.find('WorkingStats');
    expect(stats.exists()).toBe(true);
  });

  it('contains current time', () => {
    const time = wrapper.find('CurrentTime');
    expect(time.exists()).toBe(true);
  });

  it('contains STOP WORKING button', () => {
    const button = wrapper.find('StopWorkingButton');
    expect(button.exists()).toBe(true);
  });
});

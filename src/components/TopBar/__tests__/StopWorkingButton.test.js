import React from 'react';
import { shallow } from 'enzyme';
import { StopWorkingButton } from '../StopWorkingButton';

describe('<StopWorkingButton />', () => {
  let wrapper;
  let button;

  beforeEach(() => {
    wrapper = shallow(<StopWorkingButton />);
    button = wrapper.find('.stop-working').first();
  });

  it('renders', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('contains a button', () => {
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Stop working');
  });

  it('has a modal that is initially hidden', () => {
    const modal = wrapper.find('Modal');
    expect(modal.prop('show')).toBe(false);
  });

  describe('<Modal />', () => {
    beforeEach(() => {
      button.simulate('click');
    });

    it('shows up when button is clicked', () => {
      expect(wrapper.find('Modal').prop('show')).toBe(true);
    });

    it('hides when Cancel button is clicked', () => {
      wrapper.find('Modal').find('.cancel').simulate('click');
      expect(wrapper.find('Modal').prop('show')).toBe(false);
    });

    it('reloads the page when Confirm button is clicked', () => {
      const { location } = window;
      delete window.location;
      window.location = { reload: jest.fn() };

      const confirm = wrapper.find('Modal').find('.confirm');
      confirm.simulate('click');
      expect(window.location.reload).toHaveBeenCalled();

      window.location = location;
    });
  });
});

/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Developers from '../src/components/Developers';

describe('Developers', () => {
  it('should render component', () => {
    const wrapper = shallow(<Developers />);
    expect(wrapper.find('.wrapper')).to.have.lengthOf(1);
  });
});

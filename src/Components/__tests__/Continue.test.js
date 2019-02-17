import React from 'react';
import Continue from '../Continue';
import { shallow } from 'enzyme';

describe('Continue', function () {
  // let mountedContinue;
  // beforeEach(() => {
  //   mountedContinue = shallow(<Continue />);
  // })

  it('renders without crashing', () => {
    shallow(<Continue />)
  })

});
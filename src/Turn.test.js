import React from 'react';
import Turn from './Turn';
import { shallow } from 'enzyme';

describe('Turn', function () {
  // let mountedTurn;
  // beforeEach(() => {
  //   mountedTurn = shallow(<Turn />);
  // })

  it('renders without crashing', () => {
    shallow(<Turn />)
  })

});
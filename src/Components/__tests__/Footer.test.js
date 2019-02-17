import React from 'react';
import Footer from '../Footer';
import { shallow } from 'enzyme';

describe('Footer', function () {
  // let mountedFooter;
  // beforeEach(() => {
  //   mountedFooter = shallow(<Footer />);
  // })

  it('renders without crashing', () => {
    shallow(<Footer />)
  })

});
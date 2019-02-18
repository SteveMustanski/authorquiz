import React from 'react';
import AuthorForm from '../AuthorForm';
import { shallow } from 'enzyme';

describe('AuthorForm', function () {
  // let mountedContinue;
  // beforeEach(() => {
  //   mountedContinue = shallow(<Continue />);
  // })

  it('renders without crashing', () => {
    shallow(<AuthorForm />)
  })

});
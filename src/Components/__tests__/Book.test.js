import React from 'react';
import Book from '../Book';
import { shallow } from 'enzyme';

describe('Book', function () {


  it('renders without crashing', () => {
    shallow(<Book />)
  })
})



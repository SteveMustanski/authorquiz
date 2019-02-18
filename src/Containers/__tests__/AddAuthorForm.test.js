import React from 'react';
import AddAuthorForm from '../AddAuthorForm';
import { shallow } from 'enzyme';

describe('AddAuthorForm', function () {
  let mountedAddAuthor;
  beforeEach(() => {
    mountedAddAuthor = shallow(<AddAuthorForm />);
  })

  it('renders without crashing', () => {
    shallow(<AddAuthorForm />)
  })

  it('displays an h1 element', function () {
    const form = mountedAddAuthor.find('h1');
    expect(form.length).toBe(1);
  })
});
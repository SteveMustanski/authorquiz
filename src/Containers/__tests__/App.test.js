import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', function () {
  it('renders without crashing', () => {
    shallow(<App />)
  })

});
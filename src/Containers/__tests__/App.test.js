import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', function () {
  let mountedApp;
  beforeEach(() => {
    mountedApp = shallow(<App />);
  })

  it('renders without crashing', () => {
    shallow(<App />)
  })

});
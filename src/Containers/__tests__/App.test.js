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

  it('displays an AuthorQuiz component', function () {
    const quiz = mountedApp.find('AuthorQuiz');
    expect(quiz.length).toBe(1);
  })
});
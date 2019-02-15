import React from 'react';
import AuthorQuiz from './AuthorQuiz';
import { shallow } from 'enzyme';

describe('AuthorQuiz', function () {
  let mountedQuiz;
  beforeEach(() => {
    mountedQuiz = shallow(<AuthorQuiz />);
  })

  it('renders without crashing', () => {
    shallow(<AuthorQuiz />)
  })

  it('displays a Hero component', function () {
    const hero = mountedQuiz.find('Hero');
    expect(hero.length).toBe(1);
  })
  it('displays a Turn component', function () {
    const turn = mountedQuiz.find('Turn');
    expect(turn.length).toBe(1);
  })
  it('displays a Footer component', function () {
    const footer = mountedQuiz.find('Footer');
    expect(footer.length).toBe(1);
  })
});

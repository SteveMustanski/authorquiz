import React from 'react';
import AuthorQuiz from '../AuthorQuiz';
import { shallow, mount } from 'enzyme';

const state = {
  turnData: {
    books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities', 'Hamlet', 'Macbeth', 'Romeo and Juliet'],
    author: {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
  },
  highlight: 'wrong'
}

describe('AuthorQuiz', function () {
  let mountedQuiz;
  beforeEach(() => {
    mountedQuiz = shallow(<AuthorQuiz />);
  })

  it('renders without crashing', () => {
    shallow(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>)
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

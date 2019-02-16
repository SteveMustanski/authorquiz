import React from 'react';
import Turn from './Turn';
import { shallow } from 'enzyme';

describe('Turn', function () {
  let authors = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventrues of Huckleberry Finn']
    }
  ]

  let state = {
    turnData: {
      author: authors[0],
      books: authors[0].books
    }
  }
  let mountedTurn;
  beforeEach(() => {
    mountedTurn = shallow(<Turn  {...state.turnData} />);
  })

  it('renders without crashing', () => {
    shallow(<Turn {...state.turnData} />)
  })

  it('renders at least one book component', () => {
    // let mountedTurn = shallow(<Turn />);
    const book = mountedTurn.find('Book');
    expect(book.length).toBeGreaterThanOrEqual(1);
  })

});
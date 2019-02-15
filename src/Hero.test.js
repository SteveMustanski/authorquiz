import React from 'react';
import Hero from './Hero';
import { shallow } from 'enzyme';

describe('Hero', function () {
  let mountedHero;
  beforeEach(() => {
    mountedHero = shallow(<Hero />);
  })

  it('renders without crashing', () => {
    shallow(<Hero />)
  })

  it('displays the author quiz as the heading', () => {
    const heading = mountedHero.find('h1');
    expect(heading.text()).toEqual('Author Quiz');
  })
});
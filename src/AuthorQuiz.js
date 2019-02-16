import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';

class AuthorQuiz extends Component {
  authors = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
        'The Adventrues of Huckleberry Finn',
        'Life on the Missippi',
        'Roughing it',
        `Hitchhiker's Guide to the Galaxy`
      ]
    }
  ]

  state = {
    turnData: {
      author: this.authors[0],
      books: this.authors[0].books
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...this.state.turnData}/>
        <Continue />
        <Footer />
    Ï</div>
    );
  }
}

export default AuthorQuiz;

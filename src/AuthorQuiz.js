import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';
import {shuffle, sample} from 'underscore';

class AuthorQuiz extends Component {
  authors = [
    {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
        'The Adventrues of Huckleberry Finn',
        'Life on the Missippi',
        'Roughing it'
      ]
    },
    {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
        'The Shining',
        'IT'
      ]
    },
    {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
        'A Christmas Carol',
        'Oliver Twist'
      ]
    },
    {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: [
        'Hamlet',
        'Macbeth'
      ]
    }
  ]
  
  // select 4 random books with at least one belonging to the select author
  getTurnData = (authors) => {
    const allBooks = authors.reduce( (p, c, i) => {
      return p.concat(c.books);
    }, [] );
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
      books: fourRandomBooks,
      author: authors.find((author) =>
      author.books.some((title) =>
        title === answer))
    }

  }

  state = {
    turnData: this.getTurnData(this.authors),
    highlight: 'none'
  }

  // sets the bg color of turn depending on if the answer is correct or not
  onAnswerSelected = (answer) => {
    const isCorrect = this.state.turnData.author.books.some((book) => book === answer);
    let newHighlight = isCorrect ? 'correct' : 'wrong';

    this.setState(prevState => ({
      highlight: newHighlight
    }))
  }

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...this.state.turnData} highlight={this.state.highlight} onAnswerSelected={this.onAnswerSelected}/>
        <Continue />
        <Footer />
    </div>
    )
  }
}

export default AuthorQuiz;

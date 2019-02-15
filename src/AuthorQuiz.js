import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
    Ï</div>
    );
  }
}

export default AuthorQuiz;

import React from 'react';
import './bootstrap.min.css';
import './App.css';

const Book = (props) => {
  return (
    <div className="answer" onClick={() => {props.answerSelected(props.title);}}>
    <h4>{props.title}</h4>
    </div>
  )
}

export default Book;

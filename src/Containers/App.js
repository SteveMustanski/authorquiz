import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthorQuiz from '../Components/AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path='/' component={AuthorQuiz} />
            <Route path='/add' component={AddAuthorForm} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

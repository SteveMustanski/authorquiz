import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthorQuiz from '../Components/AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';


class App extends Component {

  AuthorWrapper = () => {
    return <AddAuthorForm  />
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path='/' component={AuthorQuiz} />
            <Route path='/add' component={this.AuthorWrapper} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

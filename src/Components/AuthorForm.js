import React, { Component } from 'react';


class AuthorForm extends Component {

  state = {
    name: '',
    imageUrl: '',
    books: [],
    tempbook: ''
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleAddBook = (event) => {
    this.setState({
      books: this.state.books.concat([this.state.tempbook]),
      tempbook: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm__input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"
            value={this.state.name}
            onChange={this.handleFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
          <label htmlFor="tempbook">Books</label>
          {this.state.books.map((book) => <p key={book}>{book}</p>)}
          <input type="text" name="tempbook"
            value={this.state.tempbook}
            onChange={this.handleFieldChange} />
          <button onClick={this.handleAddBook} value='AddBook'>Add Book</button>
        </div>
        <button type='submit' value='Add'>Add</button>
      </form>
    )
  }
}

export default AuthorForm;
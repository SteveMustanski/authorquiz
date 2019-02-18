import React, { Component } from 'react';

class AuthorForm extends Component {

  state = {
    name: '',
    imageUrl: ''
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
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
      </form>
    )
  }
}

export default AuthorForm;
import React from 'react';
import './AddAuthor.css';
import AuthorForm from '../Components/AuthorForm';

const AddAuthorForm = (match) => {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm />
    </div>
  );
}
export default AddAuthorForm;
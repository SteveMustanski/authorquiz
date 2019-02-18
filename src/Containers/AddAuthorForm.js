import React from 'react';
import './AddAuthor.css';
import AuthorForm from '../Components/AuthorForm';

const AddAuthorForm = (match, onAddAuthor) => {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm  onAddAuthor={onAddAuthor}/>
    </div>
  );
}
export default AddAuthorForm;
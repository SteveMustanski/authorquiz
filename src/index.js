import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import AddAuthorForm from './Containers/AddAuthorForm';
import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
<BrowserRouter>
<React.Fragment>
  <Route exact path='/' component={App}/>
  <Route path='/add' component={AddAuthorForm} />
</React.Fragment>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

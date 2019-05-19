import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// --> React assumes the file imported in Javascript
// so no need to put the .js extension :)
import * as serviceWorker from './serviceWorker';

// The render method takes two arguments
// 1. What Do I Want To Render
// 2. Where Do I Want To Render It
// --> Everything is inserted in an HTML page

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

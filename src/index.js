import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// The render method takes two arguments
// What Do I Want To Render
// Where Do I Want To Render It
// --> Everything is inserted in an HTML page
ReactDOM.render(
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>, document.getElementById('root')
);

// <ul></ul> is JSX, Javascript rendition of HTML
// we import the React library to enable the use of JSX







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

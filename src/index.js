import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// The render method takes two arguments
// What Do I Want To Render
// Where Do I Want To Render It
// --> Everything is inserted in an HTML page
ReactDOM.render(<App />, document.getElementById('root'));

// <App /> is JSX, Javascript rendition of HTML
// we import the React library to enable the use of JSX

function MyInfo() {
	return (
		<div>
			<h1>Name</h1>
			<p>paragraph to describe a person</p>
			<ul>
				<li>Vacation spot 1</li>
				<li>Vacation spot 2</li>
				<li>Vacation spot 3</li>
			</ul>
		</div>
	);
}

// Observation: if I use render a second time, I don't see <App /> anymore
// --> so I included <App /> in this call for the render!
ReactDOM.render(<div><App /><MyInfo /></div>, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

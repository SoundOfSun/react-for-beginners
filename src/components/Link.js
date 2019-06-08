import React from 'react'

// passing props to our component to access the attributes we've created
// 2 attr = link and text
function Link(props) {
	// console.log(props)
	return (
		<div className="footer-link">
			<a href={props.link}>{props.text}</a>
		</div>
	)
}

export default Link
import React from 'react'

// passing props to our component to access the attributes we've created
// 2 attr = link and text
function Link(props) {
	// console.log(props)

	// mapping components:
	// const nums = [1, 2, 3, 4, 5]

	// const doubled = nums.map(function(num) {
	// 	// whatever maps returns here will be placed in the same index of a brand new array
	// 	return num * 2
	// })
	// console.log(doubled)

	return (
		<div className="footer-link">
			<a href={props.link}>{props.text}</a>
		</div>
	)
}

export default Link
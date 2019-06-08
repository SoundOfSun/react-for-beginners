// we import the React library to enable the use of JSX
import React from 'react'

// Example of inline styles:

function Greeting() {
	// let's use the JS native Date object to create an if/else situation
	const date = new Date()
	const hours = date.getHours()
	let timeOfDay

	// instead of filling style={} inside the return method, we can declare the styles in a variable we pass down there
	// avoiding clutter !
	const styles = {
		// this is JS so the properties are camel case!
		fontSize: 32
	}

	// if/else for the time of day to determine the colour
	if (hours < 12) {
		timeOfDay = 'morning'
		styles.color = '#22b9ca' // blue
	} else if (hours >= 12 && hours < 17) {
		timeOfDay = 'afternoon'
		styles.color = '#ff9776' // orange
	} else {
		timeOfDay = 'night'
		styles.color = '#a773c3' // purple
	}

	return (
		<div>
			<h5 style={styles}>Good {timeOfDay}!</h5>
		</div>
	)
}

export default Greeting
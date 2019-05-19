// we import the React library to enable the use of JSX
import React from 'react'

function Navbar() {
	// The only thing we can add className to is elements, and not components!
	return (
		<nav>
			<h1 className="header-txt">This is my navigation bar...</h1>
		</nav>
	)
}

export default Navbar
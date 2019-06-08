// we import the React library to enable the use of JSX
import React from 'react'
import Link from './Link'
import linkInfo from './linkInfo'

function Footer() {
	// Now let's map the LinkInfo to return our 3 links
	// And now, the data comes from some external source as it would in the reald world
	const linkComponents = linkInfo.map(info => <Link key={info.id} link={info.link} text={info.text} />)

	// Note: when re-using components via mapping them, it is compulsory to give each instance a unique key
	// here, the key is the id taken from our mock JSON file

	return (
		<footer className="footer-stuck">
			<h3>This is my footer...</h3>
			{linkComponents}
		</footer>
	)
}

export default Footer
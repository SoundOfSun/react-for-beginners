// we import the React library to enable the use of JSX
import React from 'react'
import Link from './Link'

function Footer() {
	return (
		<footer className="footer-stuck">
			<h3>This is my footer...</h3>
			<Link link='https://www.google.com'
				  text='Google'
			 />
			<Link link='https://www.colorhunt.co'
				  text='Color Hunt' 
			/>
			<Link link='https://www.dribbble.com/'
				  text='Dribble'
			/>
		</footer>
	)
}

export default Footer
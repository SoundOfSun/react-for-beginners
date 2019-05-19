// we import the React library to enable the use of JSX
import React from 'react'

function MainContent() {
	return (
		<div>
			<h3>To-do App</h3>
			<input type="checkbox" name="task" value="cat" />
			<p className="fake-task">Feed the cat</p><br></br>
			<input type="checkbox" name="task" value="yoga" />
			<p className="fake-task">Practice yoga</p><br></br>
			<input type="checkbox" name="task" value="groceries" />
			<p className="fake-task">Food shopping</p>
		</div>
	)
}

export default MainContent
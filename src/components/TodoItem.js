// we import the React library to enable the use of JSX
import React from 'react'

function TodoItem() {
	return (
		<div>
			<input type="checkbox" name="task" value="cat" />
			<p className="fake-task">Feed the cat</p><br></br>
		</div>
	)
}

export default TodoItem
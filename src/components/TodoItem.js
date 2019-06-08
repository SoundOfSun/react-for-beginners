// we import the React library to enable the use of JSX
import React from 'react'

function TodoItem(props) {
	// console.log(props)

	// For now, we can use the input attr checked for the conditional checked box
	// --> static because we don't have an onchange handler
	// the <p> can get its inner HTML from our mock JSON throught the prop 'task'
	return (
		<div className="task-box">
			<input type="checkbox" checked={props.status} />
			<p className="fake-task">{props.task}</p><br></br>
			<hr/>
		</div>
	)
}

export default TodoItem
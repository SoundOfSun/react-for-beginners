// we import the React library to enable the use of JSX
import React from 'react'
import TodoItem from './TodoItem'

function MainContent() {
	return (
		<div>
			<h3>To-do App</h3>
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</div>
	)
}

export default MainContent